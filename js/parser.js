/**
 * js/parser.js
 * Multi-Format Exam Parser (Excel, CSV, Word .docx)
 * Dependencies: SheetJS (xlsx), PapaParse, Mammoth.js
 */

const ExamParser = {
  /**
   * Helper: Normalize text strings
   */
  cleanText(val) {
    if (val === undefined || val === null) return '';
    return String(val).trim();
  },

  /**
   * Helper: Find object property regardless of case or slight variations
   */
  findProp(obj, candidates) {
    const keys = Object.keys(obj);
    for (const c of candidates) {
      const match = keys.find(k => k.trim().toLowerCase() === c.toLowerCase());
      if (match && obj[match] !== undefined) {
        return this.cleanText(obj[match]);
      }
    }
    return '';
  },

  /**
   * Parse Excel File (.xlsx, .xls) using SheetJS
   * @param {File} file
   * @returns {Promise<{questions: Array, errors: Array}>}
   */
  async parseExcel(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const rawRows = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

          if (!rawRows || rawRows.length === 0) {
            return resolve({
              questions: [],
              errors: ['File Excel kosong atau format tabel tidak terdeteksi.']
            });
          }

          const questions = [];
          const errors = [];

          rawRows.forEach((row, index) => {
            const rowNum = index + 2; // Excel row index
            const qText = this.findProp(row, ['soal', 'pertanyaan', 'question', 'text']);
            const code = this.findProp(row, ['kode', 'code', 'snippet', 'code_snippet', 'koding']);
            const lang = this.findProp(row, ['bahasa', 'lang', 'language']) || (code ? 'javascript' : '');
            
            const optA = this.findProp(row, ['pilihan a', 'opsi a', 'a', 'option a', 'opsi_a']);
            const optB = this.findProp(row, ['pilihan b', 'opsi b', 'b', 'option b', 'opsi_b']);
            const optC = this.findProp(row, ['pilihan c', 'opsi c', 'c', 'option c', 'opsi_c']);
            const optD = this.findProp(row, ['pilihan d', 'opsi d', 'd', 'option d', 'opsi_d']);
            
            let key = this.findProp(row, ['kunci', 'jawaban', 'kunci jawaban', 'key', 'answer', 'kunci_jawaban']).toUpperCase();
            // Extract first letter if key is like "A. Hypertext..."
            if (key.length > 1) {
              const m = key.match(/^[A-D]/i);
              if (m) key = m[0].toUpperCase();
            }

            const explanation = this.findProp(row, ['pembahasan', 'penjelasan', 'explanation', 'discuss']);

            if (!qText && !optA && !optB) {
              return; // Skip empty rows
            }

            questions.push({
              id: 'q_' + Date.now() + '_' + index,
              number: index + 1,
              rowNumber: rowNum,
              question: qText,
              code: code,
              lang: lang.toLowerCase(),
              options: {
                A: optA,
                B: optB,
                C: optC,
                D: optD
              },
              key: key,
              explanation: explanation
            });
          });

          resolve(this.validateQuestionList(questions));
        } catch (err) {
          reject(new Error('Gagal membaca berkas Excel: ' + err.message));
        }
      };
      reader.onerror = () => reject(new Error('Gagal membaca berkas'));
      reader.readAsArrayBuffer(file);
    });
  },

  /**
   * Parse CSV File using PapaParse
   * @param {File} file
   * @returns {Promise<{questions: Array, errors: Array}>}
   */
  async parseCSV(file) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const rawRows = results.data;
            if (!rawRows || rawRows.length === 0) {
              return resolve({
                questions: [],
                errors: ['File CSV kosong atau header kolom tidak ditemukan.']
              });
            }

            const questions = [];
            rawRows.forEach((row, index) => {
              const rowNum = index + 2;
              const qText = this.findProp(row, ['soal', 'pertanyaan', 'question', 'text']);
              const code = this.findProp(row, ['kode', 'code', 'snippet', 'code_snippet', 'koding']);
              const lang = this.findProp(row, ['bahasa', 'lang', 'language']) || (code ? 'javascript' : '');

              const optA = this.findProp(row, ['pilihan a', 'opsi a', 'a', 'option a', 'opsi_a']);
              const optB = this.findProp(row, ['pilihan b', 'opsi b', 'b', 'option b', 'opsi_b']);
              const optC = this.findProp(row, ['pilihan c', 'opsi c', 'c', 'option c', 'opsi_c']);
              const optD = this.findProp(row, ['pilihan d', 'opsi d', 'd', 'option d', 'opsi_d']);

              let key = this.findProp(row, ['kunci', 'jawaban', 'kunci jawaban', 'key', 'answer', 'kunci_jawaban']).toUpperCase();
              if (key.length > 1) {
                const m = key.match(/^[A-D]/i);
                if (m) key = m[0].toUpperCase();
              }

              const explanation = this.findProp(row, ['pembahasan', 'penjelasan', 'explanation', 'discuss']);

              if (!qText && !optA && !optB) return;

              questions.push({
                id: 'q_' + Date.now() + '_' + index,
                number: index + 1,
                rowNumber: rowNum,
                question: qText,
                code: code,
                lang: lang.toLowerCase(),
                options: {
                  A: optA,
                  B: optB,
                  C: optC,
                  D: optD
                },
                key: key,
                explanation: explanation
              });
            });

            resolve(this.validateQuestionList(questions));
          } catch (err) {
            reject(new Error('Gagal mengolah data CSV: ' + err.message));
          }
        },
        error: (err) => reject(new Error('Gagal mengurai file CSV: ' + err.message))
      });
    });
  },

  /**
   * Parse Word File (.docx) using Mammoth.js
   * Supports standard question layout:
   * 1. Pertanyaan...
   * ```python (optional)
   * print("Hello")
   * ```
   * A. Pilihan A
   * B. Pilihan B
   * C. Pilihan C
   * D. Pilihan D
   * Kunci: A
   */
  async parseWord(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target.result;
          const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
          const text = result.value;

          if (!text || text.trim().length === 0) {
            return resolve({
              questions: [],
              errors: ['Dokumen Word tidak berisi teks yang dapat dibaca.']
            });
          }

          const parsed = this.parseDocumentText(text);
          resolve(this.validateQuestionList(parsed));
        } catch (err) {
          reject(new Error('Gagal mengekstrak berkas Word (.docx): ' + err.message));
        }
      };
      reader.onerror = () => reject(new Error('Gagal membaca berkas'));
      reader.readAsArrayBuffer(file);
    });
  },

  /**
   * Intelligent Text Parser for Raw Text / Word contents
   */
  parseDocumentText(rawText) {
    // Normalize newlines
    const lines = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const questions = [];

    let currentQ = null;
    let inCodeBlock = false;
    let codeBuffer = [];
    let codeLang = '';

    const finalizeCurrentQ = () => {
      if (currentQ && (currentQ.question || currentQ.options.A)) {
        if (codeBuffer.length > 0) {
          currentQ.code = codeBuffer.join('\n').trim();
          currentQ.lang = codeLang || 'javascript';
        }
        questions.push(currentQ);
      }
      currentQ = null;
      inCodeBlock = false;
      codeBuffer = [];
      codeLang = '';
    };

    const questionNumberRegex = /^(?:(?:Soal|No\.?)\s*)?(\d+)[\.\)]\s*(.+)?$/i;
    const optionRegex = /^[A-Da-d][\.\)]\s*(.+)$/;
    const keyRegex = /^(?:Kunci(?:\s*Jawaban)?|Jawaban|Answer|Key)\s*[:=\-]\s*([A-Da-d])/i;
    const codeBlockStartRegex = /^```([a-zA-Z0-9_\-\+#]*)/;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Check code block fences ```lang
      const codeMatch = line.match(codeBlockStartRegex);
      if (codeMatch) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLang = codeMatch[1] ? codeMatch[1].toLowerCase() : 'javascript';
        } else {
          inCodeBlock = false;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(lines[i]); // Keep indentation
        continue;
      }

      // Check if line indicates answer key
      const keyMatch = line.match(keyRegex);
      if (keyMatch && currentQ) {
        currentQ.key = keyMatch[1].toUpperCase();
        continue;
      }

      // Check if line is option A, B, C, D
      const optMatch = line.match(optionRegex);
      if (optMatch && currentQ) {
        const letter = line.charAt(0).toUpperCase();
        currentQ.options[letter] = optMatch[1].trim();
        continue;
      }

      // Check if line starts a new question: e.g. "1. Apa kepanjangan HTML?"
      const qMatch = line.match(questionNumberRegex);
      if (qMatch) {
        finalizeCurrentQ();
        currentQ = {
          id: 'q_' + Date.now() + '_' + questions.length,
          number: parseInt(qMatch[1], 10) || (questions.length + 1),
          rowNumber: questions.length + 1,
          question: qMatch[2] ? qMatch[2].trim() : '',
          code: '',
          lang: '',
          options: { A: '', B: '', C: '', D: '' },
          key: '',
          explanation: ''
        };
        continue;
      }

      // If we are already inside a question and it's not an option yet, append to question text
      if (currentQ) {
        if (!currentQ.options.A && !currentQ.options.B) {
          // Still reading question prompt
          currentQ.question += (currentQ.question ? '\n' : '') + line;
        }
      }
    }

    finalizeCurrentQ();
    return questions;
  },

  /**
   * Validate question structure and return clean list + diagnostics
   */
  validateQuestionList(questions) {
    const validQuestions = [];
    const invalidQuestions = [];
    const errors = [];

    questions.forEach((q, idx) => {
      const itemErrors = [];
      const num = q.number || (idx + 1);

      if (!q.question || q.question.trim().length === 0) {
        itemErrors.push(`Teks pertanyaan kosong pada nomor ${num}`);
      }

      const optCount = ['A', 'B', 'C', 'D'].filter(k => q.options[k] && q.options[k].trim().length > 0).length;
      if (optCount < 4) {
        itemErrors.push(`Pilihan jawaban kurang lengkap (hanya ${optCount} opsi dari minimal 4: A, B, C, D) pada nomor ${num}`);
      }

      const validKeys = ['A', 'B', 'C', 'D'];
      if (!q.key || !validKeys.includes(q.key.trim().toUpperCase())) {
        itemErrors.push(`Kunci jawaban "${q.key || '-'}" tidak valid (harus salah satu dari A, B, C, D) pada nomor ${num}`);
      }

      const validatedItem = {
        ...q,
        number: idx + 1,
        isValid: itemErrors.length === 0,
        validationErrors: itemErrors
      };

      if (itemErrors.length === 0) {
        validQuestions.push(validatedItem);
      } else {
        invalidQuestions.push(validatedItem);
        errors.push(...itemErrors);
      }
    });

    return {
      all: [...validQuestions, ...invalidQuestions],
      validQuestions: validQuestions,
      invalidQuestions: invalidQuestions,
      total: questions.length,
      isValidAll: invalidQuestions.length === 0 && validQuestions.length > 0,
      errors: errors
    };
  },

  /**
   * Download CSV Template
   */
  downloadCSVTemplate() {
    const sampleData = [
      {
        "No": 1,
        "Soal": "Berikut ini manakah tag HTML5 yang digunakan untuk menampilkan judul tingkat utama pada sebuah halaman web?",
        "Kode": "",
        "Bahasa": "",
        "Pilihan A": "<h1>",
        "Pilihan B": "<heading>",
        "Pilihan C": "<head>",
        "Pilihan D": "<title>",
        "Kunci": "A",
        "Pembahasan": "Tag <h1> digunakan untuk heading level 1 (judul utama)."
      },
      {
        "No": 2,
        "Soal": "Perhatikan baris kode Python berikut. Apakah output yang dihasilkan saat program dieksekusi?",
        "Kode": "nilai = 85\nif nilai >= 80:\n    print('Lulus Sangat Baik')\nelse:\n    print('Remedial')",
        "Bahasa": "python",
        "Pilihan A": "Lulus Sangat Baik",
        "Pilihan B": "Remedial",
        "Pilihan C": "Error Syntax",
        "Pilihan D": "Tidak menampilkan apa pun",
        "Kunci": "A",
        "Pembahasan": "Karena nilai 85 lebih besar atau sama dengan 80, maka kondisi if terpenuhi."
      },
      {
        "No": 3,
        "Soal": "Dalam logika berpikir komputasional, proses memecah masalah besar dan kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola disebut...",
        "Kode": "",
        "Bahasa": "",
        "Pilihan A": "Dekomposisi (Decomposition)",
        "Pilihan B": "Pengenalan Pola (Pattern Recognition)",
        "Pilihan C": "Abstraksi (Abstraction)",
        "Pilihan D": "Algoritma (Algorithm Design)",
        "Kunci": "A",
        "Pembahasan": "Dekomposisi adalah teknik memecah masalah menjadi sub-bagian kecil."
      }
    ];

    const csv = Papa.unparse(sampleData);
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Template_Bank_Soal_SMP.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  /**
   * Download Excel Template (.xlsx)
   */
  downloadExcelTemplate() {
    if (typeof XLSX === 'undefined') {
      alert('Pustaka SheetJS belum dimuat!');
      return;
    }

    const data = [
      ["No", "Soal", "Kode", "Bahasa", "Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Kunci", "Pembahasan"],
      [
        1,
        "Berikut ini tag HTML manakah yang digunakan untuk membuat tautan hiperteks (hyperlink)?",
        "",
        "",
        "<a>",
        "<link>",
        "<href>",
        "<url>",
        "A",
        "Tag <a> dengan atribut href digunakan untuk membuat hyperlink."
      ],
      [
        2,
        "Perhatikan potongan kode CSS berikut. Kode tersebut bertujuan untuk...",
        ".box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
        "css",
        "Membuat elemen kotak berada persis di tengah secara horizontal dan vertikal",
        "Mengubah warna teks elemen box menjadi biru",
        "Menyembunyikan elemen box dari tampilan",
        "Membuat bingkai garis putus-putus pada box",
        "A",
        "Kombinasi display:flex dengan justify-content:center dan align-items:center menengahkan anak elemen."
      ],
      [
        3,
        "Dalam konsep Kecerdasan Artifisial (AI), teknologi yang memungkinkan komputer mengenali objek dan wajah dari gambar dinamakan...",
        "",
        "",
        "Computer Vision",
        "Natural Language Processing",
        "Speech Synthesis",
        "Cloud Storage",
        "A",
        "Computer Vision adalah bidang AI yang fokus pada analisis visual dan citra."
      ]
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);

    // Set column widths
    ws['!cols'] = [
      { wch: 6 },
      { wch: 45 },
      { wch: 30 },
      { wch: 12 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 8 },
      { wch: 35 }
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bank_Soal");
    XLSX.writeFile(wb, "Template_Bank_Soal_SMP.xlsx");
  },

  /**
   * Download Word Template Guide (.txt or sample format)
   */
  downloadWordGuide() {
    const guideContent = `CONTOH FORMAT PENULISAN SOAL DI MICROSOFT WORD (.DOCX)
========================================================================

PETUNJUK FORMAT:
1. Awali setiap soal dengan nomor dan titik atau kurung, contoh: "1. " atau "1) ".
2. Jika ada kode pemrograman, letakkan di bawah soal dengan tanda \`\`\`bahasa (contoh: \`\`\`python atau \`\`\`html) dan akhiri dengan \`\`\`.
3. Pilihan jawaban ditulis berurutan dengan huruf A., B., C., D. (tiap pilihan di baris baru).
4. Kunci jawaban ditulis di baris terakhir dengan format: "Kunci: A" (atau B, C, D).

------------------------------------------------------------------------
CONTOH SOAL 1:
1. Apa fungsi utama dari tag <title> di dalam berkas HTML?
A. Menentukan judul yang muncul pada tab jendela peramban (browser)
B. Menampilkan tulisan berukuran paling besar di dalam halaman web
C. Menghubungkan berkas JavaScript ke dokumen HTML
D. Mengatur warna latar belakang seluruh halaman web
Kunci: A

CONTOH SOAL 2 (DENGAN KODING PYTHON):
2. Perhatikan kode program Python berikut. Berapakah hasil akhir dari variabel 'total'?
\`\`\`python
total = 0
for i in range(1, 4):
    total = total + i
print(total)
\`\`\`
A. 6
B. 10
C. 3
D. 4
Kunci: A

CONTOH SOAL 3:
3. Cabang ilmu Kecerdasan Artifisial (AI) yang fokus memahami dan mengolah bahasa manusia disebut...
A. Natural Language Processing (NLP)
B. Computer Vision
C. Internet of Things
D. Big Data Management
Kunci: A
`;

    const blob = new Blob([guideContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Panduan_Format_Word_Docx.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

window.ExamParser = ExamParser;
