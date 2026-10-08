/**
 * js/questions-data.js
 * Master Bank Soal Resmi Kurikulum Informatika SMP (Kelas 7, 8, 9 - Midterm & Final)
 * Berdasarkan Buku Informatika SMP/MTs Kemendikdasmen (Edisi Revisi)
 */

const OFFICIAL_BANK_SOAL = [
  // =========================================================================
  // KELAS 7 - INFORMATIKA - MIDTERM (20 SOAL)
  // =========================================================================
  {
    id: "inf7_mid_1",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Berpikir komputasional digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "menyelesaikan masalah secara sistematis",
      B: "bermain komputer",
      C: "menggambar",
      D: "mencetak dokumen"
    },
    key: "A",
    explanation: "Berpikir komputasional adalah proses pemecahan masalah secara terstruktur dan sistematis."
  },
  {
    id: "inf7_mid_2",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Membagi masalah besar menjadi beberapa masalah kecil disebut ....",
    code: "",
    lang: "",
    options: {
      A: "abstraksi",
      B: "dekomposisi",
      C: "iterasi",
      D: "representasi"
    },
    key: "B",
    explanation: "Dekomposisi adalah teknik memecah masalah besar menjadi bagian yang lebih kecil dan mudah dikelola."
  },
  {
    id: "inf7_mid_3",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Langkah-langkah terstruktur untuk menyelesaikan suatu pekerjaan disebut ....",
    code: "",
    lang: "",
    options: {
      A: "data",
      B: "algoritma",
      C: "informasi",
      D: "jaringan"
    },
    key: "B",
    explanation: "Algoritma merupakan urutan instruksi terstruktur untuk memecahkan suatu masalah."
  },
  {
    id: "inf7_mid_4",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Salah satu contoh algoritma adalah ....",
    code: "",
    lang: "",
    options: {
      A: "langkah memasak mi instan",
      B: "melihat televisi",
      C: "mendengarkan radio",
      D: "bermain sepak bola tanpa aturan"
    },
    key: "A",
    explanation: "Langkah memasak mi instan memiliki tahapan berurutan yang logis dan jelas."
  },
  {
    id: "inf7_mid_5",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Salah satu aplikasi pemrograman visual yang dipelajari adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Scratch",
      B: "Calculator",
      C: "Notepad",
      D: "Camera"
    },
    key: "A",
    explanation: "Scratch adalah platform pemrograman visual berbasis blok grafis."
  },
  {
    id: "inf7_mid_6",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Sprite pada Scratch merupakan ....",
    code: "",
    lang: "",
    options: {
      A: "objek dalam proyek",
      B: "tabel data",
      C: "baris worksheet",
      D: "mesin pencari"
    },
    key: "A",
    explanation: "Sprite adalah karakter atau objek yang dapat diprogram untuk bergerak/berinteraksi di Scratch."
  },
  {
    id: "inf7_mid_7",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Backdrop berfungsi sebagai ....",
    code: "",
    lang: "",
    options: {
      A: "latar gambar proyek",
      B: "pengolah angka",
      C: "penyimpan file",
      D: "pembuat formula"
    },
    key: "A",
    explanation: "Backdrop digunakan sebagai gambar latar panggung (stage) di Scratch."
  },
  {
    id: "inf7_mid_8",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Blok Motion berfungsi untuk mengatur ....",
    code: "",
    lang: "",
    options: {
      A: "pergerakan sprite",
      B: "data siswa",
      C: "ukuran file",
      D: "hasil pencarian internet"
    },
    key: "A",
    explanation: "Kategori blok Motion (Gerak) digunakan untuk mengontrol pergerakan posisi objek/sprite."
  },
  {
    id: "inf7_mid_9",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pengulangan perintah dalam pemrograman disebut ....",
    code: "",
    lang: "",
    options: {
      A: "looping",
      B: "printing",
      C: "scanning",
      D: "browsing"
    },
    key: "A",
    explanation: "Looping adalah konstruksi untuk mengulang baris kode secara berulang kali."
  },
  {
    id: "inf7_mid_10",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Perintah yang dijalankan berdasarkan kondisi tertentu disebut ....",
    code: "",
    lang: "",
    options: {
      A: "kondisional",
      B: "worksheet",
      C: "data",
      D: "list"
    },
    key: "A",
    explanation: "Percabangan/kondisional (if/else) menentukan aksi berdasarkan terpenuhi atau tidaknya kondisi."
  },
  {
    id: "inf7_mid_11",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data merupakan ....",
    code: "",
    lang: "",
    options: {
      A: "fakta atau keterangan yang dapat dikumpulkan",
      B: "program komputer",
      C: "perangkat keras",
      D: "jaringan internet"
    },
    key: "A",
    explanation: "Data adalah kumpulan fakta mentah yang dapat diolah lebih lanjut."
  },
  {
    id: "inf7_mid_12",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data berupa nilai ujian termasuk data ....",
    code: "",
    lang: "",
    options: {
      A: "kualitatif",
      B: "kuantitatif",
      C: "visual",
      D: "suara"
    },
    key: "B",
    explanation: "Data kuantitatif adalah data yang dinyatakan dalam bentuk angka atau nilai ukur."
  },
  {
    id: "inf7_mid_13",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Contoh data kualitatif adalah ....",
    code: "",
    lang: "",
    options: {
      A: "tinggi badan",
      B: "berat badan",
      C: "warna rambut",
      D: "jumlah siswa"
    },
    key: "C",
    explanation: "Warna rambut berupa deskripsi/kategori non-numerik (kualitatif)."
  },
  {
    id: "inf7_mid_14",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data yang sudah diolah dan memiliki makna disebut ....",
    code: "",
    lang: "",
    options: {
      A: "informasi",
      B: "algoritma",
      C: "hardware",
      D: "software"
    },
    key: "A",
    explanation: "Informasi adalah hasil dari pengolahan data yang memiliki arti bagi penerimanya."
  },
  {
    id: "inf7_mid_15",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data dalam komputer dapat disajikan dalam bentuk ....",
    code: "",
    lang: "",
    options: {
      A: "tabel atau grafik",
      B: "kabel",
      C: "keyboard",
      D: "mouse"
    },
    key: "A",
    explanation: "Penyajian data umumnya dilakukan dengan tabel atau visualisasi grafik."
  },
  {
    id: "inf7_mid_16",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Kumpulan cell pada lembar kerja disebut ....",
    code: "",
    lang: "",
    options: {
      A: "range",
      B: "sprite",
      C: "backdrop",
      D: "browser"
    },
    key: "A",
    explanation: "Range merupakan gabungan atau rentang dari dua atau lebih cell dalam spreadsheet."
  },
  {
    id: "inf7_mid_17",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Cell merupakan pertemuan antara ....",
    code: "",
    lang: "",
    options: {
      A: "file dan folder",
      B: "baris dan kolom",
      C: "gambar dan suara",
      D: "worksheet dan workbook"
    },
    key: "B",
    explanation: "Cell adalah perpotongan antara baris (row) dan kolom (column)."
  },
  {
    id: "inf7_mid_18",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada cell B5, huruf B menunjukkan ....",
    code: "",
    lang: "",
    options: {
      A: "baris",
      B: "kolom",
      C: "halaman",
      D: "range"
    },
    key: "B",
    explanation: "Huruf merepresentasikan nama kolom, sedangkan angka merepresentasikan nomor baris."
  },
  {
    id: "inf7_mid_19",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Worksheet terdiri atas ....",
    code: "",
    lang: "",
    options: {
      A: "baris dan kolom",
      B: "sprite dan backdrop",
      C: "gambar dan suara",
      D: "folder dan file"
    },
    key: "A",
    explanation: "Lembar kerja (worksheet) tersusun atas kisi baris dan kolom."
  },
  {
    id: "inf7_mid_20",
    grade: "7",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fitur Freeze Panes digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "menjaga baris atau kolom tertentu tetap terlihat ketika melakukan scroll",
      B: "menghapus semua data",
      C: "membuat grafik",
      D: "mengganti nama file"
    },
    key: "A",
    explanation: "Freeze Panes mengunci header baris/kolom agar tetap tampak saat digulir."
  },

  // =========================================================================
  // KELAS 7 - INFORMATIKA - FINAL TEST (40 SOAL)
  // =========================================================================
  {
    id: "inf7_fin_1",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Berpikir komputasional adalah cara berpikir untuk ....",
    code: "",
    lang: "",
    options: {
      A: "bermain komputer",
      B: "menyelesaikan persoalan yang penyelesaiannya dapat dikembangkan untuk dilakukan komputer",
      C: "memperbaiki komputer",
      D: "membuat komputer menjadi manusia"
    },
    key: "B",
    explanation: "Berpikir komputasional adalah pendekatan pemecahan persoalan yang efisien dan dapat dieksekusi mesin."
  },
  {
    id: "inf7_fin_2",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu fondasi berpikir komputasional adalah ....",
    code: "",
    lang: "",
    options: {
      A: "menggambar",
      B: "mengetik",
      C: "dekomposisi",
      D: "mencetak"
    },
    key: "C",
    explanation: "Empat pilar: Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma."
  },
  {
    id: "inf7_fin_3",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Dekomposisi adalah ....",
    code: "",
    lang: "",
    options: {
      A: "menggabungkan semua masalah menjadi satu",
      B: "membagi masalah kompleks menjadi masalah yang lebih kecil",
      C: "menghapus masalah",
      D: "mengabaikan masalah"
    },
    key: "B",
    explanation: "Dekomposisi memecah masalah besar menjadi sub-masalah sederhana."
  },
  {
    id: "inf7_fin_4",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Menyaring bagian penting dari suatu permasalahan dan mengabaikan bagian yang tidak penting disebut ....",
    code: "",
    lang: "",
    options: {
      A: "abstraksi",
      B: "algoritma",
      C: "iterasi",
      D: "debugging"
    },
    key: "A",
    explanation: "Abstraksi menyaring detail esensial dan mengeliminasi informasi yang tidak relevan."
  },
  {
    id: "inf7_fin_5",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Algoritma merupakan ....",
    code: "",
    lang: "",
    options: {
      A: "kumpulan gambar",
      B: "langkah-langkah terstruktur untuk melakukan suatu pekerjaan",
      C: "perangkat keras komputer",
      D: "jaringan internet"
    },
    key: "B",
    explanation: "Algoritma adalah langkah logis berurutan untuk menyelesaikan tugas."
  },
  {
    id: "inf7_fin_6",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh algoritma dalam kehidupan sehari-hari adalah ....",
    code: "",
    lang: "",
    options: {
      A: "langkah-langkah memasak mi instan",
      B: "menonton televisi",
      C: "mendengarkan musik",
      D: "melihat gambar"
    },
    key: "A",
    explanation: "Instruksi memasak mi memiliki tahapan berurutan yang pasti."
  },
  {
    id: "inf7_fin_7",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Solusi yang baik dalam Informatika pada umumnya diusahakan agar ....",
    code: "",
    lang: "",
    options: {
      A: "rumit dan panjang",
      B: "efisien dan efektif",
      C: "mahal dan sulit",
      D: "lambat tetapi aman"
    },
    key: "B",
    explanation: "Solusi komputasi harus dirancang efisien (waktu/memori) dan efektif (tepat sasaran)."
  },
  {
    id: "inf7_fin_8",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang disusun dalam bentuk daftar dalam Informatika sering disebut ....",
    code: "",
    lang: "",
    options: {
      A: "list",
      B: "sound",
      C: "sprite",
      D: "stage"
    },
    key: "A",
    explanation: "List adalah struktur data bertipe daftar elemen berurutan."
  },
  {
    id: "inf7_fin_9",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pemrograman visual memungkinkan pengguna membuat program dengan cara ....",
    code: "",
    lang: "",
    options: {
      A: "menyusun elemen visual/blok",
      B: "menggambar di kertas",
      C: "mengetik surat",
      D: "mencetak dokumen"
    },
    key: "A",
    explanation: "Visual programming menggunakan drag-and-drop blok kode grafis."
  },
  {
    id: "inf7_fin_10",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Aplikasi pemrograman visual yang dipelajari dalam buku adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Excel",
      B: "Word",
      C: "Scratch",
      D: "Paint"
    },
    key: "C",
    explanation: "Scratch dikembangkan MIT untuk pembelajaran koding visual ramah siswa."
  },
  {
    id: "inf7_fin_11",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Dalam Scratch, objek yang digunakan dalam sebuah proyek disebut ....",
    code: "",
    lang: "",
    options: {
      A: "worksheet",
      B: "sprite",
      C: "cell",
      D: "formula"
    },
    key: "B",
    explanation: "Sprite adalah karakter/objek visual utama di Scratch."
  },
  {
    id: "inf7_fin_12",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Backdrop pada Scratch digunakan sebagai ....",
    code: "",
    lang: "",
    options: {
      A: "latar gambar",
      B: "tempat menyimpan rumus",
      C: "pengolah data",
      D: "alat mencetak"
    },
    key: "A",
    explanation: "Backdrop adalah latar belakang visual panggung proyek."
  },
  {
    id: "inf7_fin_13",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Blok Motion pada Scratch digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "mengolah angka",
      B: "membuat pergerakan sprite",
      C: "membuat tabel",
      D: "mencari informasi"
    },
    key: "B",
    explanation: "Blok Motion menggerakkan sprite (maju, berputar, koordinat X/Y)."
  },
  {
    id: "inf7_fin_14",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Perintah yang digunakan untuk menjalankan suatu perintah secara berulang disebut ....",
    code: "",
    lang: "",
    options: {
      A: "looping/pengulangan",
      B: "printing",
      C: "saving",
      D: "copying"
    },
    key: "A",
    explanation: "Looping mengulang sekumpulan aksi tanpa perlu menulis ulang instruksi."
  },
  {
    id: "inf7_fin_15",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data adalah ....",
    code: "",
    lang: "",
    options: {
      A: "fakta atau keterangan yang dapat dikumpulkan dan dianalisis",
      B: "hanya gambar",
      C: "hanya suara",
      D: "hanya angka"
    },
    key: "A",
    explanation: "Data adalah sekumpulan fakta mentah yang dapat dianalisis."
  },
  {
    id: "inf7_fin_16",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang dinyatakan dalam bentuk angka disebut data ....",
    code: "",
    lang: "",
    options: {
      A: "kualitatif",
      B: "kuantitatif",
      C: "visual",
      D: "digital"
    },
    key: "B",
    explanation: "Kuantitatif berkenaan dengan besaran jumlah/angka."
  },
  {
    id: "inf7_fin_17",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh data kuantitatif adalah ....",
    code: "",
    lang: "",
    options: {
      A: "warna rambut",
      B: "pendapat siswa",
      C: "tinggi badan",
      D: "jenis olahraga favorit"
    },
    key: "C",
    explanation: "Tinggi badan diukur dengan angka pasti (misal 155 cm)."
  },
  {
    id: "inf7_fin_18",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh data kualitatif adalah ....",
    code: "",
    lang: "",
    options: {
      A: "berat badan",
      B: "tinggi badan",
      C: "nilai ujian",
      D: "warna mata"
    },
    key: "D",
    explanation: "Warna mata bersifat deskriptif (misal cokelat, hitam)."
  },
  {
    id: "inf7_fin_19",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang telah diolah sehingga mempunyai makna dapat menjadi ....",
    code: "",
    lang: "",
    options: {
      A: "informasi",
      B: "perangkat keras",
      C: "program",
      D: "jaringan"
    },
    key: "A",
    explanation: "Data yang bermakna setelah diproses menjadi informasi."
  },
  {
    id: "inf7_fin_20",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu perangkat yang dapat digunakan untuk mengumpulkan data foto adalah ....",
    code: "",
    lang: "",
    options: {
      A: "kamera",
      B: "keyboard saja",
      C: "speaker",
      D: "printer"
    },
    key: "A",
    explanation: "Kamera merupakan peranti masukan visual/foto."
  },
  {
    id: "inf7_fin_21",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang disajikan dalam bentuk tabel dapat dibuat menjadi ....",
    code: "",
    lang: "",
    options: {
      A: "grafik",
      B: "kabel",
      C: "keyboard",
      D: "folder"
    },
    key: "A",
    explanation: "Tabel data dapat divisualisasikan menjadi grafik untuk melihat pola/tren."
  },
  {
    id: "inf7_fin_22",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Perangkat pengolah lembar kerja menggunakan kumpulan baris dan kolom yang disebut ....",
    code: "",
    lang: "",
    options: {
      A: "worksheet",
      B: "sprite",
      C: "backdrop",
      D: "browser"
    },
    key: "A",
    explanation: "Worksheet adalah lembar kerja berpetak kisi di spreadsheet."
  },
  {
    id: "inf7_fin_23",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pertemuan antara baris dan kolom pada worksheet disebut ....",
    code: "",
    lang: "",
    options: {
      A: "range",
      B: "cell",
      C: "workbook",
      D: "ribbon"
    },
    key: "B",
    explanation: "Pertemuan satu baris dan satu kolom dinamakan sel (cell)."
  },
  {
    id: "inf7_fin_24",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Kumpulan beberapa cell disebut ....",
    code: "",
    lang: "",
    options: {
      A: "range",
      B: "formula bar",
      C: "workbook",
      D: "menu"
    },
    key: "A",
    explanation: "Range merupakan kumpulan sel terpilih dalam lembar kerja."
  },
  {
    id: "inf7_fin_25",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pada alamat cell D3, huruf D menunjukkan ....",
    code: "",
    lang: "",
    options: {
      A: "baris",
      B: "kolom",
      C: "worksheet",
      D: "halaman"
    },
    key: "B",
    explanation: "Huruf pada alamat sel menandakan nama kolom."
  },
  {
    id: "inf7_fin_26",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pada alamat cell D3, angka 3 menunjukkan ....",
    code: "",
    lang: "",
    options: {
      A: "kolom",
      B: "baris",
      C: "workbook",
      D: "range"
    },
    key: "B",
    explanation: "Angka pada alamat sel menandakan nomor baris."
  },
  {
    id: "inf7_fin_27",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Fungsi Freeze Panes digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "menghapus data",
      B: "membuat baris atau kolom tertentu tetap terlihat saat melakukan scroll",
      C: "mencetak data",
      D: "membuat akun"
    },
    key: "B",
    explanation: "Freeze Panes membekukan baris/kolom agar tidak tersembunyi saat di-scroll."
  },
  {
    id: "inf7_fin_28",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Literasi informasi adalah kemampuan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "mengakses, menilai, mengevaluasi, dan menggunakan informasi secara efektif",
      B: "bermain game sepanjang hari",
      C: "membuat komputer",
      D: "memperbaiki jaringan listrik"
    },
    key: "A",
    explanation: "Literasi informasi melibatkan kemampuan kritis mencari, menilai, dan memakai informasi."
  },
  {
    id: "inf7_fin_29",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang telah diatur atau diolah sehingga memiliki makna disebut ....",
    code: "",
    lang: "",
    options: {
      A: "informasi",
      B: "hardware",
      C: "algoritma",
      D: "aplikasi"
    },
    key: "A",
    explanation: "Informasi adalah data yang telah diorganisasi dan memiliki nilai guna."
  },
  {
    id: "inf7_fin_30",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu tempat untuk memperoleh informasi di internet adalah ....",
    code: "",
    lang: "",
    options: {
      A: "mesin pencari",
      B: "kalkulator",
      C: "printer",
      D: "keyboard"
    },
    key: "A",
    explanation: "Mesin pencari (search engine) menelusuri miliaran konten di web."
  },
  {
    id: "inf7_fin_31",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh mesin pencari adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Google",
      B: "Excel",
      C: "Scratch",
      D: "PowerPoint"
    },
    key: "A",
    explanation: "Google Search adalah mesin pencari populer di internet."
  },
  {
    id: "inf7_fin_32",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Agar hasil pencarian lebih sesuai dengan kebutuhan, kita perlu menggunakan ....",
    code: "",
    lang: "",
    options: {
      A: "kata kunci yang relevan",
      B: "kata secara acak",
      C: "angka sebanyak-banyaknya",
      D: "gambar tanpa keterangan"
    },
    key: "A",
    explanation: "Kata kunci (keyword) yang spesifik mempersempit dan memfilter hasil pencarian."
  },
  {
    id: "inf7_fin_33",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Mesin pencari bekerja melalui beberapa proses, yaitu ....",
    code: "",
    lang: "",
    options: {
      A: "crawling, indexing, dan ranking",
      B: "typing, printing, dan scanning",
      C: "copying, pasting, dan deleting",
      D: "drawing, coloring, dan saving"
    },
    key: "A",
    explanation: "Tahapan kerja mesin pencari: Crawling (menjelajah), Indexing (mengindeks), dan Ranking (memeringkat)."
  },
  {
    id: "inf7_fin_34",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Proses mesin pencari menjelajahi halaman web disebut ....",
    code: "",
    lang: "",
    options: {
      A: "ranking",
      B: "indexing",
      C: "crawling",
      D: "printing"
    },
    key: "C",
    explanation: "Crawling adalah aktivitas penelusuran tautan web oleh bot mesin pencari."
  },
  {
    id: "inf7_fin_35",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Proses menyimpan informasi hasil crawling ke dalam database disebut ....",
    code: "",
    lang: "",
    options: {
      A: "indexing",
      B: "browsing",
      C: "chatting",
      D: "downloading"
    },
    key: "A",
    explanation: "Indexing menyusun dan menyimpan kata/konten halaman web ke basis data pencarian."
  },
  {
    id: "inf7_fin_36",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Proses menentukan peringkat halaman web berdasarkan berbagai faktor disebut ....",
    code: "",
    lang: "",
    options: {
      A: "crawling",
      B: "ranking",
      C: "editing",
      D: "uploading"
    },
    key: "B",
    explanation: "Ranking mengurutkan hasil pencarian dari yang paling relevan."
  },
  {
    id: "inf7_fin_37",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Informasi yang dapat dipercaya sebaiknya berasal dari sumber yang ....",
    code: "",
    lang: "",
    options: {
      A: "kredibel",
      B: "tidak dikenal",
      C: "tidak jelas",
      D: "tidak memiliki sumber"
    },
    key: "A",
    explanation: "Sumber kredibel memiliki reputasi valid dan dapat dipertanggungjawabkan."
  },
  {
    id: "inf7_fin_38",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pernyataan yang dapat dibuktikan kebenarannya disebut ....",
    code: "",
    lang: "",
    options: {
      A: "opini",
      B: "fakta",
      C: "hoaks",
      D: "komentar"
    },
    key: "B",
    explanation: "Fakta didasarkan pada data obyektif yang teruji kebenarannya."
  },
  {
    id: "inf7_fin_39",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Pernyataan yang berisi pendapat atau pandangan seseorang disebut ....",
    code: "",
    lang: "",
    options: {
      A: "fakta",
      B: "opini",
      C: "data mentah",
      D: "indeks"
    },
    key: "B",
    explanation: "Opini mencerminkan gagasan subjektif seseorang."
  },
  {
    id: "inf7_fin_40",
    grade: "7",
    subject: "Informatika",
    examType: "Final",
    question: "Informasi palsu atau berita bohong disebut ....",
    code: "",
    lang: "",
    options: {
      A: "fakta",
      B: "opini",
      C: "hoaks",
      D: "data"
    },
    key: "C",
    explanation: "Hoaks adalah informasi palsu yang disamarkan seolah-olah benar."
  },

  // =========================================================================
  // KELAS 8 - INFORMATIKA - MIDTERM (20 SOAL)
  // =========================================================================
  {
    id: "inf8_mid_1",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data yang belum diurutkan dan masih sesuai dengan keadaan sebenarnya disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Data grafik",
      B: "Data mentah",
      C: "Data visual",
      D: "Data ringkasan"
    },
    key: "B",
    explanation: "Data mentah (raw data) adalah data orisinal yang belum diolah atau disaring."
  },
  {
    id: "inf8_mid_2",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fitur yang dapat digunakan untuk menyaring data tertentu adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Filter",
      B: "Chart",
      C: "Print",
      D: "Save"
    },
    key: "A",
    explanation: "Filter spreadsheet menyaring baris berdasarkan kriteria yang diinginkan."
  },
  {
    id: "inf8_mid_3",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi VLOOKUP digunakan jika data disusun secara ....",
    code: "",
    lang: "",
    options: {
      A: "Miring",
      B: "Horizontal",
      C: "Vertikal",
      D: "Acak"
    },
    key: "C",
    explanation: "VLOOKUP (Vertical Lookup) mencari nilai pada kolom vertikal paling kiri tabel rujukan."
  },
  {
    id: "inf8_mid_4",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi HLOOKUP digunakan jika data disusun secara ....",
    code: "",
    lang: "",
    options: {
      A: "Vertikal",
      B: "Horizontal",
      C: "Acak",
      D: "Melengkung"
    },
    key: "B",
    explanation: "HLOOKUP (Horizontal Lookup) mencari nilai pada baris horizontal tabel rujukan."
  },
  {
    id: "inf8_mid_5",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi MATCH digunakan untuk mencari ....",
    code: "",
    lang: "",
    options: {
      A: "Jumlah data",
      B: "Posisi suatu nilai",
      C: "Warna tabel",
      D: "Bentuk grafik"
    },
    key: "B",
    explanation: "MATCH mengembalikan nomor indeks posisi relatif suatu nilai dalam rentang sel."
  },
  {
    id: "inf8_mid_6",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi INDEX digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Mengembalikan nilai berdasarkan posisi baris dan kolom",
      B: "Membuat animasi",
      C: "Menghapus tabel",
      D: "Mengurutkan nama file"
    },
    key: "A",
    explanation: "INDEX mengambil nilai sel pada koordinat baris dan kolom tertentu."
  },
  {
    id: "inf8_mid_7",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Chart yang cocok untuk menampilkan tren dari waktu ke waktu adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Pie Chart",
      B: "Line Chart",
      C: "Bar Chart",
      D: "Area kosong"
    },
    key: "B",
    explanation: "Line Chart (diagram garis) ideal menampilkan tren perubahan data temporal."
  },
  {
    id: "inf8_mid_8",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pie Chart digunakan untuk menunjukkan ....",
    code: "",
    lang: "",
    options: {
      A: "Kontribusi bagian terhadap keseluruhan",
      B: "Posisi sebuah sel",
      C: "Rumus matematika",
      D: "Nama file"
    },
    key: "A",
    explanation: "Pie chart menggambarkan proporsi persentase setiap kategori terhadap total 100%."
  },
  {
    id: "inf8_mid_9",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi SUMIFS digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Menghitung jumlah data berdasarkan beberapa kondisi",
      B: "Mencari posisi data",
      C: "Membuat grafik",
      D: "Menghapus data"
    },
    key: "A",
    explanation: "SUMIFS menjumlahkan angka yang memenuhi beberapa kriteria/kondisi sekaligus."
  },
  {
    id: "inf8_mid_10",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi COUNTIFS digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Menghitung banyak data yang memenuhi beberapa kondisi",
      B: "Mengubah warna tabel",
      C: "Membuat gambar",
      D: "Mengurutkan data secara otomatis"
    },
    key: "A",
    explanation: "COUNTIFS mencacah frekuensi baris data yang memenuhi kriteria majemuk."
  },
  {
    id: "inf8_mid_11",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Berpikir komputasional digunakan untuk membantu ....",
    code: "",
    lang: "",
    options: {
      A: "Menyelesaikan masalah",
      B: "Menggambar saja",
      C: "Bermain musik saja",
      D: "Menonton video"
    },
    key: "A",
    explanation: "Berpikir komputasional adalah landasan penyelesaian masalah terstruktur."
  },
  {
    id: "inf8_mid_12",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Dalam konsep fungsi, data yang dimasukkan disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Output",
      B: "Input",
      C: "Proses",
      D: "Hasil akhir"
    },
    key: "B",
    explanation: "Input merupakan masukan nilai parameter ke dalam fungsi."
  },
  {
    id: "inf8_mid_13",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Hasil yang diperoleh setelah proses dilakukan disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Input",
      B: "Data mentah",
      C: "Output",
      D: "Variabel"
    },
    key: "C",
    explanation: "Output adalah keluaran hasil pemrosesan masukan."
  },
  {
    id: "inf8_mid_14",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Bilangan desimal menggunakan basis ....",
    code: "",
    lang: "",
    options: {
      A: "2",
      B: "5",
      C: "8",
      D: "10"
    },
    key: "D",
    explanation: "Sistem desimal berbasis 10 (angka 0 sampai 9)."
  },
  {
    id: "inf8_mid_15",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Bilangan biner menggunakan basis ....",
    code: "",
    lang: "",
    options: {
      A: "2",
      B: "4",
      C: "8",
      D: "10"
    },
    key: "A",
    explanation: "Sistem biner berbasis 2 (hanya terdiri dari digit 0 dan 1)."
  },
  {
    id: "inf8_mid_16",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Digit yang digunakan dalam bilangan biner adalah ....",
    code: "",
    lang: "",
    options: {
      A: "0 dan 1",
      B: "1 dan 2",
      C: "0 sampai 7",
      D: "0 sampai 9"
    },
    key: "A",
    explanation: "Biner hanya mengenal dua simbol: 0 dan 1."
  },
  {
    id: "inf8_mid_17",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Bilangan oktal menggunakan basis ....",
    code: "",
    lang: "",
    options: {
      A: "2",
      B: "8",
      C: "10",
      D: "16"
    },
    key: "B",
    explanation: "Sistem oktal berbasis 8 (digit 0 sampai 7)."
  },
  {
    id: "inf8_mid_18",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Himpunan adalah kumpulan ....",
    code: "",
    lang: "",
    options: {
      A: "Data atau objek yang memiliki sifat tertentu",
      B: "Angka acak saja",
      C: "Program komputer",
      D: "File gambar"
    },
    key: "A",
    explanation: "Himpunan menghimpun objek/elemen yang terdefinisi dengan jelas."
  },
  {
    id: "inf8_mid_19",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Jika himpunan A = {apel, mangga} dan B = {mangga, jeruk}, maka irisan A dan B adalah ....",
    code: "",
    lang: "",
    options: {
      A: "{apel}",
      B: "{jeruk}",
      C: "{mangga}",
      D: "{apel, jeruk}"
    },
    key: "C",
    explanation: "Irisan (intersection) memuat anggota yang berada di kedua himpunan, yaitu {mangga}."
  },
  {
    id: "inf8_mid_20",
    grade: "8",
    subject: "Informatika",
    examType: "Midterm",
    question: "Struktur data yang bekerja dengan prinsip data yang terakhir masuk akan menjadi yang pertama keluar disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Queue",
      B: "Stack",
      C: "Chart",
      D: "Table"
    },
    key: "B",
    explanation: "Stack menggunakan prinsip LIFO (Last In First Out)."
  },

  // =========================================================================
  // KELAS 8 - INFORMATIKA - FINAL TEST (40 SOAL)
  // =========================================================================
  {
    id: "inf8_fin_1",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Tujuan visualisasi data adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Membuat data lebih sulit dibaca",
      B: "Memudahkan memahami data",
      C: "Menghapus data",
      D: "Mengubah komputer"
    },
    key: "B",
    explanation: "Visualisasi mengubah angka menjadi grafik visual agar mudah dicerna."
  },
  {
    id: "inf8_fin_2",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Chart yang menggunakan batang vertikal disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Column Chart",
      B: "Pie Chart",
      C: "Line Chart",
      D: "Area Chart"
    },
    key: "A",
    explanation: "Column chart menyajikan kategori dalam batang vertikal tegak."
  },
  {
    id: "inf8_fin_3",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bar Chart merupakan versi .... dari Column Chart.",
    code: "",
    lang: "",
    options: {
      A: "Miring",
      B: "Horizontal",
      C: "Berputar",
      D: "Transparan"
    },
    key: "B",
    explanation: "Bar chart menggunakan batang mendatar (horizontal)."
  },
  {
    id: "inf8_fin_4",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu fungsi reference adalah ....",
    code: "",
    lang: "",
    options: {
      A: "MATCH",
      B: "SUM",
      C: "COUNT",
      D: "AVERAGE"
    },
    key: "A",
    explanation: "MATCH adalah fungsi pencarian rujukan lokasi data."
  },
  {
    id: "inf8_fin_5",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Pada MATCH, posisi data dimulai dari angka ....",
    code: "",
    lang: "",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "10"
    },
    key: "B",
    explanation: "Urutan indeks pencarian MATCH di spreadsheet dimulai dari posisi 1."
  },
  {
    id: "inf8_fin_6",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Fungsi CHOOSE digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Memilih nilai berdasarkan nomor posisi",
      B: "Menghitung rata-rata",
      C: "Membuat grafik",
      D: "Menghapus data"
    },
    key: "A",
    explanation: "CHOOSE mengembalikan nilai dari daftar pilihan berdasarkan indeks nomor posisi."
  },
  {
    id: "inf8_fin_7",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Peringkasan data bertujuan agar ....",
    code: "",
    lang: "",
    options: {
      A: "Data lebih sulit dianalisis",
      B: "Data menjadi lebih ringkas dan mudah dianalisis",
      C: "Semua data dihapus",
      D: "Data menjadi acak"
    },
    key: "B",
    explanation: "Peringkasan mengonsolidasi ribuan baris menjadi ringkasan informatif."
  },
  {
    id: "inf8_fin_8",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu cara meringkas data adalah menggunakan ....",
    code: "",
    lang: "",
    options: {
      A: "Pivot Table",
      B: "Paint",
      C: "Kamera",
      D: "Speaker"
    },
    key: "A",
    explanation: "Pivot Table adalah fitur handal spreadsheet untuk agregasi data dinamis."
  },
  {
    id: "inf8_fin_9",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "SUMIFS dapat menggunakan ....",
    code: "",
    lang: "",
    options: {
      A: "Satu kondisi saja",
      B: "Lebih dari satu kondisi",
      C: "Tidak menggunakan kondisi",
      D: "Hanya gambar"
    },
    key: "B",
    explanation: "SUMIFS mendukung penjumlah berdasar banyak rentang kriteria."
  },
  {
    id: "inf8_fin_10",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Jika terdapat beberapa kelompok data pada chart, biasanya perlu diberikan ....",
    code: "",
    lang: "",
    options: {
      A: "Legend",
      B: "Keyboard",
      C: "Folder",
      D: "Password"
    },
    key: "A",
    explanation: "Legend (legenda/keterangan) membedakan seri data dengan warna/simbol."
  },
  {
    id: "inf8_fin_11",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Judul pada chart disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Title",
      B: "Cell",
      C: "Range",
      D: "Filter"
    },
    key: "A",
    explanation: "Chart Title berfungsi memberikan judul konteks diagram."
  },
  {
    id: "inf8_fin_12",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Pada Line Chart, sumbu horizontal dapat berisi ....",
    code: "",
    lang: "",
    options: {
      A: "Waktu",
      B: "Password",
      C: "Nama komputer saja",
      D: "Rumus saja"
    },
    key: "A",
    explanation: "Sumbu X horizontal umumnya merepresentasikan garis waktu (hari, bulan, tahun)."
  },
  {
    id: "inf8_fin_13",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Pie Chart digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Menampilkan kontribusi bagian terhadap keseluruhan",
      B: "Mencari posisi data",
      C: "Mengurutkan data",
      D: "Membuat formula"
    },
    key: "A",
    explanation: "Pie Chart menunjukkan pembagian proporsi data utuh."
  },
  {
    id: "inf8_fin_14",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh fungsi matematika yang terdapat dalam materi adalah ....",
    code: "",
    lang: "",
    options: {
      A: "f(x) = 2x + 3",
      B: "f(x) = x - x",
      C: "f(x) = 10x0",
      D: "f(x) = x/0"
    },
    key: "A",
    explanation: "f(x) = 2x + 3 adalah contoh relasi fungsi linear."
  },
  {
    id: "inf8_fin_15",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Jika f(x) = 2x + 3 dan x = 3, hasilnya adalah ....",
    code: "",
    lang: "",
    options: {
      A: "5",
      B: "6",
      C: "9",
      D: "12"
    },
    key: "C",
    explanation: "f(3) = 2(3) + 3 = 6 + 3 = 9."
  },
  {
    id: "inf8_fin_16",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Urutan sederhana dalam konsep fungsi adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Output → input → proses",
      B: "Input → proses → output",
      C: "Proses → output → input",
      D: "Input → output → proses"
    },
    key: "B",
    explanation: "Alur standar komputasi: Masukan (Input) → Pemrosesan (Proses) → Hasil (Output)."
  },
  {
    id: "inf8_fin_17",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bilangan dengan basis 2 disebut bilangan ....",
    code: "",
    lang: "",
    options: {
      A: "Desimal",
      B: "Oktal",
      C: "Biner",
      D: "Heksadesimal"
    },
    key: "C",
    explanation: "Bilangan basis dua dinamakan sistem biner."
  },
  {
    id: "inf8_fin_18",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bilangan dengan basis 8 disebut bilangan ....",
    code: "",
    lang: "",
    options: {
      A: "Biner",
      B: "Oktal",
      C: "Desimal",
      D: "Romawi"
    },
    key: "B",
    explanation: "Bilangan basis delapan disebut oktal."
  },
  {
    id: "inf8_fin_19",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bilangan desimal 2 jika ditulis dalam biner adalah ....",
    code: "",
    lang: "",
    options: {
      A: "01",
      B: "10",
      C: "11",
      D: "20"
    },
    key: "B",
    explanation: "2 (desimal) = 1x2^1 + 0x2^0 = 10 (biner)."
  },
  {
    id: "inf8_fin_20",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bilangan biner 10₂ sama dengan bilangan desimal ....",
    code: "",
    lang: "",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    key: "B",
    explanation: "10₂ = (1*2) + (0*1) = 2."
  },
  {
    id: "inf8_fin_21",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Bilangan desimal 8 jika ditulis dalam bilangan oktal adalah ....",
    code: "",
    lang: "",
    options: {
      A: "8",
      B: "10",
      C: "11",
      D: "16"
    },
    key: "B",
    explanation: "8 dibagi 8 = 1 sisa 0, ditulis 10 dalam basis oktal."
  },
  {
    id: "inf8_fin_22",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Gabungan dua himpunan disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Irisan",
      B: "Union/gabungan",
      C: "Input",
      D: "Output"
    },
    key: "B",
    explanation: "Union menyatukan seluruh elemen dari kedua himpunan."
  },
  {
    id: "inf8_fin_23",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Hasil irisan adalah anggota yang ....",
    code: "",
    lang: "",
    options: {
      A: "Hanya terdapat pada himpunan pertama",
      B: "Hanya terdapat pada himpunan kedua",
      C: "Terdapat pada kedua himpunan",
      D: "Tidak terdapat pada kedua himpunan"
    },
    key: "C",
    explanation: "Irisan merupakan irisan himpunan (elemen persekutuan bersama)."
  },
  {
    id: "inf8_fin_24",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Pada bilangan desimal, posisi digit paling kanan dimulai dari posisi ....",
    code: "",
    lang: "",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "10"
    },
    key: "A",
    explanation: "Bobot pangkat tempat bilangan dimulai dari pangkat 0 (paling kanan)."
  },
  {
    id: "inf8_fin_25",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Dalam sistem bilangan biner, digit yang diperbolehkan adalah ....",
    code: "",
    lang: "",
    options: {
      A: "0 dan 1",
      B: "0 sampai 7",
      C: "0 sampai 9",
      D: "1 sampai 10"
    },
    key: "A",
    explanation: "Hanya digit 0 dan 1 yang sah dalam sistem biner."
  },
  {
    id: "inf8_fin_26",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Algoritma adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Kumpulan langkah untuk menyelesaikan masalah",
      B: "Kumpulan gambar",
      C: "Jenis komputer",
      D: "Nama aplikasi"
    },
    key: "A",
    explanation: "Algoritma adalah urutan instruksi penyelesaian masalah secara terencana."
  },
  {
    id: "inf8_fin_27",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Sekumpulan instruksi digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Menyelesaikan suatu masalah",
      B: "Menghapus komputer",
      C: "Mengganti monitor",
      D: "Membuat keyboard"
    },
    key: "A",
    explanation: "Instruksi program dirancang menyelesaikan komputasi tertentu."
  },
  {
    id: "inf8_fin_28",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu cara menuliskan algoritma adalah menggunakan ....",
    code: "",
    lang: "",
    options: {
      A: "Pseudocode",
      B: "Wallpaper",
      C: "Foto",
      D: "Musik"
    },
    key: "A",
    explanation: "Pseudocode menyerupai kode bahasa pemrograman dalam bahasa manusia sederhana."
  },
  {
    id: "inf8_fin_29",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Blockly merupakan lingkungan pemrograman yang menggunakan ....",
    code: "",
    lang: "",
    options: {
      A: "Blok-blok perintah",
      B: "Gambar foto",
      C: "File video",
      D: "Tabel nilai"
    },
    key: "A",
    explanation: "Blockly adalah pustaka visual berbasis blok penyusun puzzle kode."
  },
  {
    id: "inf8_fin_30",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Scratch dapat digunakan untuk membuat ....",
    code: "",
    lang: "",
    options: {
      A: "Program",
      B: "Buku cetak",
      C: "Meja",
      D: "Kabel jaringan"
    },
    key: "A",
    explanation: "Scratch dipakai membuat program game, animasi, dan cerita interaktif."
  },
  {
    id: "inf8_fin_31",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Kode Control pada Scratch dapat digunakan untuk mengatur ....",
    code: "",
    lang: "",
    options: {
      A: "Pengulangan dan kondisi",
      B: "Warna monitor saja",
      C: "Ukuran keyboard",
      D: "Nama komputer"
    },
    key: "A",
    explanation: "Kategori Control memuat blok repeat, forever, dan if-then."
  },
  {
    id: "inf8_fin_32",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Input adalah proses untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Meminta masukan dari pengguna",
      B: "Menghapus program",
      C: "Menggambar grafik",
      D: "Mematikan komputer"
    },
    key: "A",
    explanation: "Input menerima nilai yang diinputkan pengguna ke sistem."
  },
  {
    id: "inf8_fin_33",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Pada Scratch, blok ask and wait digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Meminta input pengguna",
      B: "Menghapus variabel",
      C: "Mengubah backdrop",
      D: "Menghentikan komputer"
    },
    key: "A",
    explanation: "Blok ask [question] and wait meminta masukan ketikan pengguna."
  },
  {
    id: "inf8_fin_34",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Variable digunakan untuk ....",
    code: "",
    lang: "",
    options: {
      A: "Menyimpan suatu nilai",
      B: "Menggambar sprite",
      C: "Mengubah ukuran monitor",
      D: "Membuat kabel"
    },
    key: "A",
    explanation: "Variabel berfungsi sebagai wadah memori untuk menyimpan nilai yang dapat berubah."
  },
  {
    id: "inf8_fin_35",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Contoh nama variabel yang baik untuk menyimpan panjang adalah ....",
    code: "",
    lang: "",
    options: {
      A: "panjang",
      B: "qwerty",
      C: "abcxyz123456789",
      D: "sembarang"
    },
    key: "A",
    explanation: "Nama variabel harus deskriptif dan mencerminkan data yang disimpannya."
  },
  {
    id: "inf8_fin_36",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Tipe data yang dapat bernilai true atau false disebut ....",
    code: "",
    lang: "",
    options: {
      A: "String",
      B: "Bilangan",
      C: "Boolean",
      D: "Teks"
    },
    key: "C",
    explanation: "Tipe data Boolean hanya memiliki dua kemungkinan nilai: benar (true) atau salah (false)."
  },
  {
    id: "inf8_fin_37",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Tipe data yang berisi teks sering disebut ....",
    code: "",
    lang: "",
    options: {
      A: "String",
      B: "Boolean",
      C: "Integer saja",
      D: "Grafik"
    },
    key: "A",
    explanation: "String adalah rangkaian karakter teks."
  },
  {
    id: "inf8_fin_38",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Program sederhana yang sering digunakan untuk mengenalkan lingkungan pemrograman disebut ....",
    code: "",
    lang: "",
    options: {
      A: "Hello World",
      B: "Hello Excel",
      C: "Start Game",
      D: "New File"
    },
    key: "A",
    explanation: "'Hello World' merupakan tradisi program permulaan universal."
  },
  {
    id: "inf8_fin_39",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Jika harga barang Rp1.000 dan jumlah pembayaran Rp1.500, maka kembalian adalah ....",
    code: "",
    lang: "",
    options: {
      A: "Rp250",
      B: "Rp400",
      C: "Rp500",
      D: "Rp600"
    },
    key: "C",
    explanation: "Kembalian = Pembayaran (1.500) - Harga (1.000) = Rp500."
  },
  {
    id: "inf8_fin_40",
    grade: "8",
    subject: "Informatika",
    examType: "Final",
    question: "Jika nilai ujian tengah 70 dan nilai ujian akhir 80, nilai akhirnya adalah ....",
    code: "",
    lang: "",
    options: {
      A: "70",
      B: "75",
      C: "80",
      D: "85"
    },
    key: "B",
    explanation: "Rata-rata = (70 + 80) / 2 = 150 / 2 = 75."
  },

  // =========================================================================
  // KELAS 9 - INFORMATIKA - MIDTERM (20 SOAL)
  // Berdasarkan Dokumen PDF Kemendikdasmen 2025
  // =========================================================================
  {
    id: "inf9_mid_1",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Empat kunci (cornerstone) dalam berpikir komputasional adalah ...",
    code: "",
    lang: "",
    options: {
      A: "abstraksi, dekomposisi, debugging, dan algoritma",
      B: "abstraksi, dekomposisi, pengenalan pola, dan penyusunan algoritma",
      C: "dekomposisi, simulasi, pengenalan pola, dan evaluasi",
      D: "abstraksi, generalisasi, pengujian, dan algoritma"
    },
    key: "B",
    explanation: "Empat pilar berpikir komputasional: abstraksi, dekomposisi, pengenalan pola, dan penyusunan algoritma."
  },
  {
    id: "inf9_mid_2",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Mencari kesamaan pola dalam berbagai permasalahan untuk menemukan solusi disebut ...",
    code: "",
    lang: "",
    options: {
      A: "abstraksi",
      B: "dekomposisi",
      C: "penyusunan algoritma",
      D: "pengenalan pola"
    },
    key: "D",
    explanation: "Pengenalan pola (pattern recognition) adalah mengenali kesamaan di antara permasalahan yang dihadapi."
  },
  {
    id: "inf9_mid_3",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Berikut yang merupakan contoh dekomposisi adalah ...",
    code: "",
    lang: "",
    options: {
      A: "memecah analisis data menjadi mengumpulkan data, membersihkan data, membuat grafik, dan menarik kesimpulan",
      B: "mengabaikan warna cat kelas saat menganalisis listrik",
      C: "melihat bahwa jumlah siswa dan listrik sama-sama naik",
      D: "menyalin data dari internet"
    },
    key: "A",
    explanation: "Dekomposisi memecah keseluruhan proses analisis data menjadi sub-tahapan yang terstruktur."
  },
  {
    id: "inf9_mid_4",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Struktur data adalah ...",
    code: "",
    lang: "",
    options: {
      A: "mesin hitung",
      B: "gambar digital",
      C: "cara mengatur dan menyimpan data agar mudah digunakan",
      D: "bahasa pemrograman"
    },
    key: "C",
    explanation: "Struktur data adalah format pengorganisasian, pengelolaan, dan penyimpanan data untuk efisiensi akses."
  },
  {
    id: "inf9_mid_5",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Struktur data yang sudah dipelajari di kelas VIII, yaitu tumpukan, disebut ...",
    code: "",
    lang: "",
    options: {
      A: "tree",
      B: "stack",
      C: "graph",
      D: "tabel"
    },
    key: "B",
    explanation: "Tumpukan dalam istilah komputasi disebut Stack."
  },
  {
    id: "inf9_mid_6",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Struktur data tree sering disebut juga struktur data ...",
    code: "",
    lang: "",
    options: {
      A: "pohon",
      B: "tumpukan",
      C: "graf",
      D: "antrian"
    },
    key: "A",
    explanation: "Tree adalah struktur data hierarkis berbentuk pohon."
  },
  {
    id: "inf9_mid_7",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada sebuah tree, P adalah akar dengan anak Q dan R. Simpul Q memiliki anak S. Simpul yang menjadi parent dari S adalah ...",
    code: "",
    lang: "",
    options: {
      A: "P",
      B: "R",
      C: "S",
      D: "Q"
    },
    key: "D",
    explanation: "Karena S adalah anak dari simpul Q, maka parent dari S adalah Q."
  },
  {
    id: "inf9_mid_8",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada tree soal nomor 7, simpul yang merupakan leaf adalah ...",
    code: "",
    lang: "",
    options: {
      A: "P dan Q",
      B: "Q saja",
      C: "R dan S",
      D: "P saja"
    },
    key: "C",
    explanation: "Leaf (daun) adalah simpul ujung yang tidak memiliki anak, yaitu R dan S."
  },
  {
    id: "inf9_mid_9",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Struktur organisasi OSIS di sekolah paling tepat disimpan dalam struktur data ...",
    code: "",
    lang: "",
    options: {
      A: "graph",
      B: "tree",
      C: "stack",
      D: "diagram pencar"
    },
    key: "B",
    explanation: "Struktur kepengurusan organisasi memiliki hierarki berjenjang (Ketua, Wakil, Seksi) sehingga cocok menggunakan Tree."
  },
  {
    id: "inf9_mid_10",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Berikut yang merupakan contoh data berhierarki adalah ...",
    code: "",
    lang: "",
    options: {
      A: "silsilah keluarga",
      B: "jalur kereta api",
      C: "jaringan pertemanan",
      D: "peta jalan"
    },
    key: "A",
    explanation: "Silsilah keluarga memiliki tingkatan kakek, orang tua, dan anak yang berhierarki."
  },
  {
    id: "inf9_mid_11",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Jaringan pertemanan di media sosial paling tepat disimpan dalam struktur data ...",
    code: "",
    lang: "",
    options: {
      A: "tree",
      B: "stack",
      C: "tabel",
      D: "graph"
    },
    key: "D",
    explanation: "Relasi antarpengguna di media sosial dapat saling terhubung tanpa aturan hierarki ketat, membentuk Graph."
  },
  {
    id: "inf9_mid_12",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada struktur data graph, penghubung antarsimpul disebut ...",
    code: "",
    lang: "",
    options: {
      A: "akar",
      B: "daun",
      C: "ruas",
      D: "anak"
    },
    key: "C",
    explanation: "Penghubung antarsimpul pada graph dinamakan ruas (edge)."
  },
  {
    id: "inf9_mid_13",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada graph jaringan pertemanan, nama-nama orang berperan sebagai ...",
    code: "",
    lang: "",
    options: {
      A: "ruas",
      B: "simpul",
      C: "akar",
      D: "leaf"
    },
    key: "B",
    explanation: "Entitas orang bertindak sebagai simpul (node/vertex), sedangkan relasi pertemanannya adalah ruas."
  },
  {
    id: "inf9_mid_14",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data terstruktur adalah data yang disusun rapi dalam bentuk ...",
    code: "",
    lang: "",
    options: {
      A: "baris dan kolom",
      B: "gambar",
      C: "suara",
      D: "video"
    },
    key: "A",
    explanation: "Data terstruktur memiliki skema baku yang terpetakan rapi dalam baris dan kolom tabel."
  },
  {
    id: "inf9_mid_15",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Manfaat visualisasi data adalah ...",
    code: "",
    lang: "",
    options: {
      A: "menghapus data",
      B: "memperbanyak data",
      C: "membuat data sulit dibaca",
      D: "membantu memahami isi data dan menemukan pola dengan lebih mudah"
    },
    key: "D",
    explanation: "Visualisasi menyederhanakan data yang padat sehingga pola dan informasi inti cepat dipahami."
  },
  {
    id: "inf9_mid_16",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Data jumlah penduduk yang diambil dari website BPS termasuk data ...",
    code: "",
    lang: "",
    options: {
      A: "primer",
      B: "kuesioner",
      C: "sekunder",
      D: "observasi"
    },
    key: "C",
    explanation: "Data yang diperoleh dari pihak kedua/lembaga publik seperti BPS diklasifikasikan sebagai data sekunder."
  },
  {
    id: "inf9_mid_17",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi MAX pada aplikasi pengolah angka digunakan untuk mencari ...",
    code: "",
    lang: "",
    options: {
      A: "nilai terbesar",
      B: "nilai terkecil",
      C: "rata-rata",
      D: "banyaknya data"
    },
    key: "A",
    explanation: "Fungsi =MAX() mengembalikan nilai tertinggi dari suatu himpunan angka."
  },
  {
    id: "inf9_mid_18",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Fungsi AVERAGE pada aplikasi pengolah angka digunakan untuk menghitung ...",
    code: "",
    lang: "",
    options: {
      A: "nilai terbesar",
      B: "rata-rata",
      C: "banyaknya data",
      D: "nilai terkecil"
    },
    key: "B",
    explanation: "Fungsi =AVERAGE() menghitung nilai rata-rata (mean)."
  },
  {
    id: "inf9_mid_19",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Nilai tiga siswa adalah 10, 20, dan 30. Rata-rata nilai tersebut adalah ...",
    code: "",
    lang: "",
    options: {
      A: "10",
      B: "15",
      C: "25",
      D: "20"
    },
    key: "D",
    explanation: "Perhitungan: (10 + 20 + 30) / 3 = 60 / 3 = 20."
  },
  {
    id: "inf9_mid_20",
    grade: "9",
    subject: "Informatika",
    examType: "Midterm",
    question: "Pada diagram pencar, jika berat badan semakin besar maka tinggi badan juga semakin besar, hubungan ini disebut ...",
    code: "",
    lang: "",
    options: {
      A: "korelasi negatif",
      B: "tidak berhubungan",
      C: "korelasi positif",
      D: "diagram garis"
    },
    key: "C",
    explanation: "Kedua variabel searah (sama-sama membesar) mencerminkan korelasi positif."
  },

  // =========================================================================
  // KELAS 9 - INFORMATIKA - FINAL TEST (40 SOAL)
  // Berdasarkan Dokumen PDF Kemendikdasmen 2025
  // =========================================================================
  {
    id: "inf9_fin_1",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Proses menyaring detail yang tidak penting dan fokus pada informasi yang penting disebut ...",
    code: "",
    lang: "",
    options: {
      A: "abstraksi",
      B: "dekomposisi",
      C: "pengenalan pola",
      D: "penyusunan algoritma"
    },
    key: "A",
    explanation: "Abstraksi mengeliminasi rincian teknis yang tidak esensial."
  },
  {
    id: "inf9_fin_2",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Proses menyusun langkah-langkah yang logis dan terstruktur untuk menyelesaikan masalah disebut ...",
    code: "",
    lang: "",
    options: {
      A: "abstraksi",
      B: "dekomposisi",
      C: "pengenalan pola",
      D: "penyusunan algoritma"
    },
    key: "D",
    explanation: "Penyusunan algoritma adalah merangkai urutan langkah penyelesaian."
  },
  {
    id: "inf9_fin_3",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Struktur data yang bentuknya seperti pohon terbalik dan memiliki akar disebut ...",
    code: "",
    lang: "",
    options: {
      A: "stack",
      B: "graph",
      C: "tree",
      D: "tabel"
    },
    key: "C",
    explanation: "Tree memiliki satu simpul akar (root) di bagian paling atas dengan cabang ke bawah."
  },
  {
    id: "inf9_fin_4",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Simpul yang paling atas pada struktur data tree disebut ...",
    code: "",
    lang: "",
    options: {
      A: "leaf",
      B: "root",
      C: "child",
      D: "ruas"
    },
    key: "B",
    explanation: "Simpul puncak pohon dinamakan Root (akar)."
  },
  {
    id: "inf9_fin_5",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Simpul pada tree yang tidak memiliki anak (child) disebut ...",
    code: "",
    lang: "",
    options: {
      A: "root",
      B: "parent",
      C: "leaf",
      D: "ruas"
    },
    key: "C",
    explanation: "Leaf adalah simpul terminal yang tidak memiliki anak."
  },
  {
    id: "inf9_fin_6",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Data berikut yang cocok disimpan dalam struktur data tree adalah ...",
    code: "",
    lang: "",
    options: {
      A: "jaringan pertemanan di media sosial",
      B: "struktur folder di komputer",
      C: "rute jalan antarkota",
      D: "jalur penerbangan"
    },
    key: "B",
    explanation: "Hierarki direktori folder (folder utama, subfolder, file) merefleksikan struktur Tree."
  },
  {
    id: "inf9_fin_7",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Pada struktur data graph, sesuatu yang dihubungkan (misalnya nama orang atau kota) disebut ...",
    code: "",
    lang: "",
    options: {
      A: "ruas",
      B: "simpul",
      C: "akar",
      D: "daun"
    },
    key: "B",
    explanation: "Objek pada graph disebut simpul (vertex/node)."
  },
  {
    id: "inf9_fin_8",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Pada struktur data graph, penghubung antarsimpul disebut ...",
    code: "",
    lang: "",
    options: {
      A: "akar",
      B: "simpul",
      C: "ruas",
      D: "leaf"
    },
    key: "C",
    explanation: "Garis relasi antarsimpul dinamakan ruas (edge)."
  },
  {
    id: "inf9_fin_9",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Data jalur transportasi antarkota paling tepat disimpan dalam struktur data ...",
    code: "",
    lang: "",
    options: {
      A: "stack",
      B: "folder",
      C: "tabel",
      D: "graph"
    },
    key: "D",
    explanation: "Jaringan kota dan jalan merupakan implementasi klasik Graph terhubung."
  },
  {
    id: "inf9_fin_10",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Langkah pertama dalam analisis data adalah ...",
    code: "",
    lang: "",
    options: {
      A: "membuat diagram",
      B: "menentukan tujuan analisis data",
      C: "membersihkan data",
      D: "mempublikasikan hasil"
    },
    key: "B",
    explanation: "Menetapkan tujuan analisis menjadi dasar penentuan metodologi dan kebutuhan data."
  },
  {
    id: "inf9_fin_11",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Data yang dikumpulkan sendiri, misalnya melalui wawancara atau kuesioner, disebut data ...",
    code: "",
    lang: "",
    options: {
      A: "primer",
      B: "sekunder",
      C: "acak",
      D: "tunggal"
    },
    key: "A",
    explanation: "Data primer dihimpun langsung dari sumber pertama oleh peneliti."
  },
  {
    id: "inf9_fin_12",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Memeriksa data agar lengkap, tidak ada kesalahan, dan tidak ganda disebut ...",
    code: "",
    lang: "",
    options: {
      A: "mengeksplorasi data",
      B: "mengumpulkan data",
      C: "menyiapkan dan membersihkan data",
      D: "memvisualisasikan data"
    },
    key: "C",
    explanation: "Data cleaning (membersihkan data) mengeliminasi kekeliruan dan duplikasi."
  },
  {
    id: "inf9_fin_13",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Diagram yang paling tepat untuk menunjukkan perubahan data dari waktu ke waktu (tren) adalah ...",
    code: "",
    lang: "",
    options: {
      A: "diagram batang",
      B: "diagram lingkaran",
      C: "diagram pencar",
      D: "diagram garis"
    },
    key: "D",
    explanation: "Diagram garis (line chart) efektif menunjukkan tren fluktuasi waktu."
  },
  {
    id: "inf9_fin_14",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Diagram yang paling tepat untuk menunjukkan proporsi atau komposisi data adalah ...",
    code: "",
    lang: "",
    options: {
      A: "diagram lingkaran",
      B: "diagram garis",
      C: "diagram batang",
      D: "diagram pencar"
    },
    key: "A",
    explanation: "Diagram lingkaran (pie chart) menampilkan persentase porsi terhadap keutuhan data."
  },
  {
    id: "inf9_fin_15",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Diagram pencar digunakan untuk menunjukkan ...",
    code: "",
    lang: "",
    options: {
      A: "perbandingan satu data saja",
      B: "hubungan antara dua variabel",
      C: "perubahan data setiap tahun",
      D: "komposisi data"
    },
    key: "B",
    explanation: "Diagram pencar (scatter plot) menganalisis korelasi antara dua variabel kuantitatif."
  },
  {
    id: "inf9_fin_16",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Kode program yang ditulis satu kali lalu dapat dipakai berulang kali disebut ...",
    code: "",
    lang: "",
    options: {
      A: "syntax",
      B: "bug",
      C: "reusable code",
      D: "flowchart"
    },
    key: "C",
    explanation: "Reusable code (kode dapat digunakan kembali) meningkatkan modularitas program."
  },
  {
    id: "inf9_fin_17",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Komponen program yang dapat digunakan kembali lebih dari satu kali disebut ...",
    code: "",
    lang: "",
    options: {
      A: "modul",
      B: "variabel",
      C: "konstanta",
      D: "keluaran"
    },
    key: "A",
    explanation: "Modul program (fungsi/prosedur) mengemas logika untuk dipanggil berulang kali."
  },
  {
    id: "inf9_fin_18",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Pada Scratch, modul dibuat melalui menu ...",
    code: "",
    lang: "",
    options: {
      A: "Looks",
      B: "Sound",
      C: "Events",
      D: "My Blocks"
    },
    key: "D",
    explanation: "Menu 'My Blocks' di Scratch dipakai membuat blok kustom buatan sendiri."
  },
  {
    id: "inf9_fin_19",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Masukan yang diterima oleh sebuah modul disebut ...",
    code: "",
    lang: "",
    options: {
      A: "return",
      B: "parameter",
      C: "terminator",
      D: "simpul"
    },
    key: "B",
    explanation: "Parameter merupakan argumen input yang dilewatkan ke dalam modul."
  },
  {
    id: "inf9_fin_20",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Modul yang menjadi titik awal jalannya program disebut modul ...",
    code: "",
    lang: "",
    options: {
      A: "tampil",
      B: "luas",
      C: "utama",
      D: "linear"
    },
    key: "C",
    explanation: "Modul utama (main module) adalah titik entri eksekusi awal."
  },
  {
    id: "inf9_fin_21",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Modul yang mengembalikan nilai (memiliki return statement) disebut ...",
    code: "",
    lang: "",
    options: {
      A: "function",
      B: "procedure",
      C: "library",
      D: "pseudocode"
    },
    key: "A",
    explanation: "Function (fungsi) mengembalikan nilai kembali ke pemanggilnya."
  },
  {
    id: "inf9_fin_22",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Modul yang tidak mengembalikan nilai apa pun disebut ...",
    code: "",
    lang: "",
    options: {
      A: "function",
      B: "parameter",
      C: "library",
      D: "procedure"
    },
    key: "D",
    explanation: "Procedure (prosedur) menjalankan aksi tanpa mengembalikan nilai balik."
  },
  {
    id: "inf9_fin_23",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Library dalam bahasa Indonesia berarti ...",
    code: "",
    lang: "",
    options: {
      A: "perulangan",
      B: "pustaka",
      C: "percabangan",
      D: "variabel"
    },
    key: "B",
    explanation: "Library diterjemahkan sebagai pustaka fungsi/kode."
  },
  {
    id: "inf9_fin_24",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Salah satu manfaat library adalah ...",
    code: "",
    lang: "",
    options: {
      A: "membuat komputer menjadi lebih berat",
      B: "menghapus kode program",
      C: "kode dapat digunakan kembali tanpa ditulis ulang",
      D: "menambah kesalahan program"
    },
    key: "C",
    explanation: "Library mempercepat pengembangan perangkat lunak dengan menyajikan modul siap pakai."
  },
  {
    id: "inf9_fin_25",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Blok move 10 steps pada Scratch termasuk library ...",
    code: "",
    lang: "",
    options: {
      A: "gerakan",
      B: "suara",
      C: "kontrol",
      D: "tampilan"
    },
    key: "A",
    explanation: "Perintah perpindahan langkah terdapat pada kategori Gerakan (Motion)."
  },
  {
    id: "inf9_fin_26",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Pemrograman yang menyusun program dengan cara menyeret dan menghubungkan blok disebut pemrograman ...",
    code: "",
    lang: "",
    options: {
      A: "tekstual",
      B: "bahasa C",
      C: "Python",
      D: "visual blok"
    },
    key: "D",
    explanation: "Pemrograman visual blok menggunakan susunan balok grafis warna-warni."
  },
  {
    id: "inf9_fin_27",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Berikut yang termasuk bahasa pemrograman visual blok adalah ...",
    code: "",
    lang: "",
    options: {
      A: "Python",
      B: "Scratch",
      C: "C",
      D: "Excel"
    },
    key: "B",
    explanation: "Scratch adalah aplikasi visual berbasis blok."
  },
  {
    id: "inf9_fin_28",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Berikut yang termasuk bahasa pemrograman tekstual adalah ...",
    code: "",
    lang: "",
    options: {
      A: "Scratch",
      B: "Blockly",
      C: "Python",
      D: "flowchart"
    },
    key: "C",
    explanation: "Python merupakan bahasa pemrograman berorientasi teks baris."
  },
  {
    id: "inf9_fin_29",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perintah untuk menampilkan teks pada bahasa Python adalah ...",
    code: "",
    lang: "",
    options: {
      A: "print()",
      B: "repeat",
      C: "blockly",
      D: "return"
    },
    key: "A",
    explanation: "Fungsi bawaan print() menampilkan teks ke layar terminal di Python."
  },
  {
    id: "inf9_fin_30",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perintah untuk menampilkan teks pada bahasa C adalah ...",
    code: "",
    lang: "",
    options: {
      A: "input()",
      B: "print()",
      C: "range()",
      D: "printf()"
    },
    key: "D",
    explanation: "Fungsi printf() berasal dari stdio.h di bahasa C."
  },
  {
    id: "inf9_fin_31",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perhatikan kode Python berikut. Keluaran kode tersebut adalah ...",
    code: "x = 5\ny = 3\nprint(x + y)",
    lang: "python",
    options: {
      A: "2",
      B: "8",
      C: "15",
      D: "53"
    },
    key: "B",
    explanation: "Nilai 5 + 3 menghasilkan 8."
  },
  {
    id: "inf9_fin_32",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perhatikan kode Python berikut. Tulisan \"Halo\" akan ditampilkan sebanyak ...",
    code: "for i in range(3):\n    print(\"Halo\")",
    lang: "python",
    options: {
      A: "1 kali",
      B: "2 kali",
      C: "3 kali",
      D: "4 kali"
    },
    key: "C",
    explanation: "range(3) melakukan perulangan indeks 0, 1, 2 (sebanyak 3 kali)."
  },
  {
    id: "inf9_fin_33",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Diagram yang menggambarkan urutan langkah atau alur proses dengan simbol-simbol disebut ...",
    code: "",
    lang: "",
    options: {
      A: "flowchart",
      B: "pseudocode",
      C: "library",
      D: "parameter"
    },
    key: "A",
    explanation: "Diagram alir proses dengan simbol baku geometris disebut Flowchart."
  },
  {
    id: "inf9_fin_34",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Simbol terminator pada flowchart digunakan untuk menunjukkan ...",
    code: "",
    lang: "",
    options: {
      A: "keputusan",
      B: "proses",
      C: "masukan",
      D: "titik awal dan titik akhir"
    },
    key: "D",
    explanation: "Terminator (oval lonjong) menandakan START (awal) dan STOP (akhir)."
  },
  {
    id: "inf9_fin_35",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Simbol keputusan pada flowchart digunakan untuk ...",
    code: "",
    lang: "",
    options: {
      A: "memulai program",
      B: "percabangan dengan kondisi tertentu",
      C: "mengakhiri program",
      D: "menghubungkan halaman"
    },
    key: "B",
    explanation: "Simbol belah ketupat (decision) mengevaluasi kondisi percabangan."
  },
  {
    id: "inf9_fin_36",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Sebuah flowchart menghitung luas persegi dengan rumus luas = sisi × sisi. Jika sisi = 4, hasil yang dicetak adalah ...",
    code: "",
    lang: "",
    options: {
      A: "8",
      B: "12",
      C: "16",
      D: "20"
    },
    key: "C",
    explanation: "Luas = 4 × 4 = 16."
  },
  {
    id: "inf9_fin_37",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Pseudocode adalah ...",
    code: "",
    lang: "",
    options: {
      A: "versi sederhana dari algoritma yang mudah dibaca manusia",
      B: "program yang langsung dapat dijalankan komputer",
      C: "gambar yang menggunakan simbol-simbol",
      D: "kumpulan blok pada Scratch"
    },
    key: "A",
    explanation: "Pseudocode adalah deskripsi informal langkah algoritma dengan notasi teks deskriptif."
  },
  {
    id: "inf9_fin_38",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Kata CETAK pada pseudocode berfungsi untuk ...",
    code: "",
    lang: "",
    options: {
      A: "membaca masukan",
      B: "menghapus data",
      C: "mengulang perintah",
      D: "menampilkan keluaran"
    },
    key: "D",
    explanation: "CETAK / OUTPUT / PRINT menginstruksikan penyajian hasil ke layar."
  },
  {
    id: "inf9_fin_39",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perhatikan pseudocode berikut. Jika sisi = 5, luas yang dicetak adalah ...",
    code: "BACA sisi\nluas ← sisi * sisi\nCETAK luas",
    lang: "bash",
    options: {
      A: "10",
      B: "25",
      C: "20",
      D: "55"
    },
    key: "B",
    explanation: "Perhitungan luas: 5 × 5 = 25."
  },
  {
    id: "inf9_fin_40",
    grade: "9",
    subject: "Informatika",
    examType: "Final",
    question: "Perhatikan pseudocode berikut. Jika r = 2, luas yang dicetak adalah ...",
    code: "BACA r\nluas ← 3,14 * r * r\nCETAK luas",
    lang: "bash",
    options: {
      A: "6,28",
      B: "25,12",
      C: "12,56",
      D: "3,14"
    },
    key: "C",
    explanation: "Perhitungan luas lingkaran: 3,14 × 2 × 2 = 12,56."
  }
];

// =========================================================================
// DATA SOAL WEB PROGRAMMING (CSS & HTML)
// UTS (Pertemuan 1-4) - 20 Soal & Final (Pertemuan 1-8) - 40 Soal
// =========================================================================
const RAW_WEB_MIDTERM = [
  {
    "num": 1,
    "question": "Jaringan yang menghubungkan jutaan komputer di seluruh dunia disebut ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Internet",
      "B": "Web",
      "C": "Browser",
      "D": "Domain"
    },
    "key": "A",
    "explanation": "Internet adalah jaringan komputer global yang menghubungkan miliaran perangkat komputer di seluruh dunia."
  },
  {
    "num": 2,
    "question": "Aplikasi yang digunakan untuk membuka dan menampilkan halaman website disebut ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Web Server",
      "B": "Code Editor",
      "C": "Domain",
      "D": "Web Browser"
    },
    "key": "D",
    "explanation": "Web Browser (seperti Chrome, Firefox) digunakan untuk membuka dan menampilkan halaman website."
  },
  {
    "num": 3,
    "question": "HTML adalah singkatan dari ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "HighText Machine Language",
      "B": "HyperTool Making Language",
      "C": "HyperText Markup Language",
      "D": "HomeText Markup Logic"
    },
    "key": "C",
    "explanation": "HTML merupakan singkatan dari HyperText Markup Language."
  },
  {
    "num": 4,
    "question": "Berikut ini yang merupakan contoh code editor adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Google Chrome",
      "B": "Visual Studio Code",
      "C": "Mozilla Firefox",
      "D": "Microsoft Edge"
    },
    "key": "B",
    "explanation": "Visual Studio Code adalah aplikasi editor teks kode (code editor) yang sangat populer."
  },
  {
    "num": 5,
    "question": "Ekstensi file yang benar untuk menyimpan file HTML adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": ".txt",
      "B": ".html",
      "C": ".doc",
      "D": ".png"
    },
    "key": "B",
    "explanation": "Berkas halaman website HTML disimpan dengan format ekstensi .html."
  },
  {
    "num": 6,
    "question": "Tag HTML yang digunakan untuk membuat paragraf adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<p>",
      "B": "<h1>",
      "C": "<br>",
      "D": "<hr>"
    },
    "key": "A",
    "explanation": "Tag <p> digunakan untuk membuat paragraf tulisan."
  },
  {
    "num": 7,
    "question": "Tag heading yang menghasilkan judul paling besar adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<h6>",
      "B": "<h3>",
      "C": "<head>",
      "D": "<h1>"
    },
    "key": "D",
    "explanation": "Tag <h1> menghasilkan ukuran heading atau judul terbesar."
  },
  {
    "num": 8,
    "question": "Tag yang digunakan untuk pindah baris dan tidak memerlukan tag penutup adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<p>",
      "B": "<title>",
      "C": "<br>",
      "D": "<body>"
    },
    "key": "C",
    "explanation": "Tag <br> (break) digunakan untuk berpindah ke baris baru tanpa perlu tag penutup."
  },
  {
    "num": 9,
    "question": "Bagian HTML yang isinya ditampilkan di browser adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<head>",
      "B": "<title>",
      "C": "<body>",
      "D": "<!DOCTYPE html>"
    },
    "key": "C",
    "explanation": "Semua elemen yang tampil pada jendela utama browser berada di dalam tag <body>."
  },
  {
    "num": 10,
    "question": "Penulisan komentar yang benar di HTML adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "// komentar",
      "B": "<!-- komentar -->",
      "C": "/* komentar */",
      "D": "# komentar"
    },
    "key": "B",
    "explanation": "Komentar dalam HTML dituliskan di antara tanda <!-- dan -->."
  },
  {
    "num": 11,
    "question": "Tag yang digunakan untuk membuat teks menjadi tebal adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<b>",
      "B": "<i>",
      "C": "<u>",
      "D": "<small>"
    },
    "key": "A",
    "explanation": "Tag <b> (bold) digunakan untuk menebalkan teks."
  },
  {
    "num": 12,
    "question": "Tag yang digunakan untuk membuat teks menjadi miring adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<b>",
      "B": "<u>",
      "C": "<del>",
      "D": "<i>"
    },
    "key": "D",
    "explanation": "Tag <i> (italic) digunakan untuk memiringkan teks."
  },
  {
    "num": 13,
    "question": "Atribut yang digunakan untuk mengubah warna dan tampilan teks adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "href",
      "B": "src",
      "C": "title",
      "D": "style"
    },
    "key": "D",
    "explanation": "Atribut style digunakan untuk memberikan styling CSS langsung pada elemen HTML."
  },
  {
    "num": 14,
    "question": "Kode warna Hex selalu diawali dengan tanda ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "@",
      "B": "$",
      "C": "#",
      "D": "&"
    },
    "key": "C",
    "explanation": "Kode warna heksadesimal selalu diawali dengan simbol pagar (#)."
  },
  {
    "num": 15,
    "question": "Properti style yang digunakan untuk mengubah warna latar belakang adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "color",
      "B": "background-color",
      "C": "font-size",
      "D": "text-align"
    },
    "key": "B",
    "explanation": "Properti background-color digunakan untuk mengubah warna latar belakang elemen."
  },
  {
    "num": 16,
    "question": "Tag yang digunakan untuk membuat daftar tidak berurut (berbulatan) adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<ul>",
      "B": "<ol>",
      "C": "<li>",
      "D": "<a>"
    },
    "key": "A",
    "explanation": "Tag <ul> (unordered list) digunakan untuk membuat daftar poin berbulat tanpa urutan angka."
  },
  {
    "num": 17,
    "question": "Setiap item di dalam daftar dibungkus dengan tag ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<li>",
      "B": "<ul>",
      "C": "<ol>",
      "D": "<a>"
    },
    "key": "A",
    "explanation": "Tag <li> (list item) membungkus setiap butir item dalam daftar."
  },
  {
    "num": 18,
    "question": "Tag yang digunakan untuk membuat link atau tautan adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<link>",
      "B": "<url>",
      "C": "<href>",
      "D": "<a>"
    },
    "key": "D",
    "explanation": "Tag <a> (anchor) digunakan untuk menyisipkan link atau hyperlink."
  },
  {
    "num": 19,
    "question": "Atribut yang digunakan untuk menuliskan alamat tujuan sebuah link adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "src",
      "B": "alt",
      "C": "href",
      "D": "style"
    },
    "key": "C",
    "explanation": "Atribut href (hypertext reference) diisi alamat URL tujuan tautan."
  },
  {
    "num": 20,
    "question": "Atribut target=\"_blank\" pada sebuah link berfungsi untuk ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "membuka link di tab yang sama",
      "B": "membuka link di tab baru",
      "C": "menutup halaman",
      "D": "mengunduh file"
    },
    "key": "B",
    "explanation": "target=\"_blank\" membuat browser membuka halaman link tersebut di tab/jendela baru."
  }
];

const RAW_WEB_FINAL = [
  {
    "num": 1,
    "question": "Berikut ini yang merupakan contoh web browser adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Google Chrome",
      "B": "Visual Studio Code",
      "C": "Notepad",
      "D": "Microsoft Word"
    },
    "key": "A",
    "explanation": "Google Chrome adalah peramban web (browser) untuk mengakses website."
  },
  {
    "num": 2,
    "question": "Komputer khusus yang menyimpan file-file website disebut ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Web Browser",
      "B": "Code Editor",
      "C": "Domain",
      "D": "Web Server"
    },
    "key": "D",
    "explanation": "Web Server adalah komputer server yang menyimpan berkas website dan melayani permintaan peramban."
  },
  {
    "num": 3,
    "question": "Berikut ini yang merupakan contoh domain adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Chrome",
      "B": "Windows Explorer",
      "C": "google.com",
      "D": "Hello World"
    },
    "key": "C",
    "explanation": "google.com adalah contoh nama domain alamat web."
  },
  {
    "num": 4,
    "question": "Internet diibaratkan seperti ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "buku pelajaran yang tebal",
      "B": "jalan raya yang menghubungkan rumah-rumah di seluruh dunia",
      "C": "televisi di ruang tamu",
      "D": "kamera untuk memotret"
    },
    "key": "B",
    "explanation": "Internet diibaratkan seperti jalan raya informasi yang menghubungkan rumah-rumah (komputer) di seluruh dunia."
  },
  {
    "num": 5,
    "question": "Tag HTML ditulis di dalam tanda ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "( dan )",
      "B": "< dan >",
      "C": "{ dan }",
      "D": "[ dan ]"
    },
    "key": "B",
    "explanation": "Tag HTML ditulis diapit tanda kurung sudut < dan >."
  },
  {
    "num": 6,
    "question": "Judul halaman yang muncul di tab browser ditulis dengan tag ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<title>",
      "B": "<h1>",
      "C": "<head>",
      "D": "<body>"
    },
    "key": "A",
    "explanation": "Tag <title> menentukan teks judul yang muncul pada tab peramban."
  },
  {
    "num": 7,
    "question": "Penulisan tag penutup paragraf yang benar adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<p/>",
      "B": "<\\p>",
      "C": "<end p>",
      "D": "</p>"
    },
    "key": "D",
    "explanation": "Tag penutup selalu diawali tanda garis miring depan, yaitu </p>."
  },
  {
    "num": 8,
    "question": "Berikut ini yang termasuk void element (tidak memerlukan tag penutup) adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<p>",
      "B": "<h1>",
      "C": "<hr>",
      "D": "<title>"
    },
    "key": "C",
    "explanation": "Tag <hr> (horizontal rule) merupakan void element yang berdiri sendiri tanpa tag penutup."
  },
  {
    "num": 9,
    "question": "Fungsi <!DOCTYPE html> pada awal file adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "membuat judul halaman",
      "B": "membuat paragraf",
      "C": "memberi tahu browser bahwa ini file HTML5",
      "D": "menampilkan gambar"
    },
    "key": "C",
    "explanation": "<!DOCTYPE html> memberi tahu peramban bahwa dokumen ini disusun menggunakan standar HTML5."
  },
  {
    "num": 10,
    "question": "Tag heading yang menghasilkan judul paling kecil adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<h1>",
      "B": "<h6>",
      "C": "<h3>",
      "D": "<head>"
    },
    "key": "B",
    "explanation": "Tag <h6> menghasilkan teks heading terkecil di antara h1-h6."
  },
  {
    "num": 11,
    "question": "Tag yang digunakan untuk membuat teks dicoret adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<del>",
      "B": "<ins>",
      "C": "<u>",
      "D": "<sub>"
    },
    "key": "A",
    "explanation": "Tag <del> digunakan untuk memberi coretan garis di tengah teks."
  },
  {
    "num": 12,
    "question": "Untuk menulis rumus air H2O, angka 2 ditulis dengan tag ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<sup>",
      "B": "<small>",
      "C": "<del>",
      "D": "<sub>"
    },
    "key": "D",
    "explanation": "Tag <sub> (subscript) mencetak teks/angka lebih rendah dari garis dasar (misal: H₂O)."
  },
  {
    "num": 13,
    "question": "Kode style yang benar untuk mengubah ukuran teks menjadi 20 pixel adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "color: 20px;",
      "B": "text-align: 20px;",
      "C": "font-family: 20px;",
      "D": "font-size: 20px;"
    },
    "key": "D",
    "explanation": "Properti font-size digunakan untuk mengatur ukuran huruf."
  },
  {
    "num": 14,
    "question": "Kode style yang benar untuk membuat teks rata tengah adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "font-size: center;",
      "B": "color: center;",
      "C": "text-align: center;",
      "D": "background-color: center;"
    },
    "key": "C",
    "explanation": "text-align: center; digunakan untuk membuat teks rata tengah."
  },
  {
    "num": 15,
    "question": "Kode Hex untuk warna merah adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "#00FF00",
      "B": "#FF0000",
      "C": "#0000FF",
      "D": "#FFFFFF"
    },
    "key": "B",
    "explanation": "#FF0000 adalah kode heksadesimal untuk warna merah."
  },
  {
    "num": 16,
    "question": "Kode yang benar untuk membuat daftar berurut dengan huruf kapital (A, B, C) adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<ol type=\"A\">",
      "B": "<ol type=\"1\">",
      "C": "<ul type=\"A\">",
      "D": "<ol type=\"i\">"
    },
    "key": "A",
    "explanation": "Atribut type=\"A\" pada <ol> menghasilkan penomoran huruf kapital A, B, C."
  },
  {
    "num": 17,
    "question": "Atribut yang digunakan agar link terbuka di tab baru adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "target=\"_blank\"",
      "B": "target=\"_self\"",
      "C": "href=\"_blank\"",
      "D": "title=\"_blank\""
    },
    "key": "A",
    "explanation": "target=\"_blank\" memerintahkan peramban membuka tautan pada tab baru."
  },
  {
    "num": 18,
    "question": "Berikut ini yang merupakan contoh Absolute URL adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "biodata.html",
      "B": "hobi-saya.html",
      "C": "foto.jpg",
      "D": "https://www.google.com"
    },
    "key": "D",
    "explanation": "Absolute URL memuat alamat web lengkap beserta protokol dan domainnya (https://www.google.com)."
  },
  {
    "num": 19,
    "question": "Kode yang benar untuk membuat link ke file biodata.html di folder yang sama adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<a src=\"biodata.html\">Biodata</a>",
      "B": "<link href=\"biodata.html\">Biodata</link>",
      "C": "<a href=\"biodata.html\">Biodata</a>",
      "D": "<a target=\"biodata.html\">Biodata</a>"
    },
    "key": "C",
    "explanation": "Tag link menggunakan atribut href: <a href=\"biodata.html\">Biodata</a>."
  },
  {
    "num": 20,
    "question": "Atribut title pada tag <a> berfungsi untuk ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "mengubah warna link",
      "B": "menampilkan teks saat kursor berada di atas link",
      "C": "membuka link di tab baru",
      "D": "menuliskan alamat tujuan link"
    },
    "key": "B",
    "explanation": "Atribut title memunculkan teks petunjuk (tooltip) saat kursor mouse melayang di atas link."
  },
  {
    "num": 21,
    "question": "Tag yang digunakan untuk menampilkan gambar adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<pic>",
      "B": "<img>",
      "C": "<photo>",
      "D": "<gambar>"
    },
    "key": "B",
    "explanation": "Tag <img> digunakan untuk menampilkan gambar pada halaman web."
  },
  {
    "num": 22,
    "question": "Atribut yang digunakan untuk menuliskan lokasi file gambar adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "src",
      "B": "alt",
      "C": "href",
      "D": "width"
    },
    "key": "A",
    "explanation": "Atribut src (source) berisi alamat berkas gambar yang akan dimuat."
  },
  {
    "num": 23,
    "question": "Atribut alt pada tag <img> berfungsi sebagai ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "pengatur lebar gambar",
      "B": "penentu lokasi file gambar",
      "C": "pemberi warna pada gambar",
      "D": "teks pengganti jika gambar gagal dimuat"
    },
    "key": "D",
    "explanation": "Atribut alt (alternative text) menampilkan teks pengganti jika berkas gambar gagal dimuat."
  },
  {
    "num": 24,
    "question": "Atribut yang digunakan agar audio atau video menampilkan tombol play, pause, dan volume adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "loop",
      "B": "muted",
      "C": "controls",
      "D": "poster"
    },
    "key": "C",
    "explanation": "Atribut controls memunculkan antarmuka kendali pemutar multimedia (play, pause, volume)."
  },
  {
    "num": 25,
    "question": "Berikut ini yang termasuk format gambar adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "MP3",
      "B": "MP4",
      "C": "JPG",
      "D": "HTML"
    },
    "key": "C",
    "explanation": "JPG adalah format berkas gambar digital."
  },
  {
    "num": 26,
    "question": "Tag yang digunakan untuk membungkus seluruh tabel adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<tr>",
      "B": "<table>",
      "C": "<td>",
      "D": "<th>"
    },
    "key": "B",
    "explanation": "Tag <table> mendefinisikan wadah keseluruhan struktur tabel."
  },
  {
    "num": 27,
    "question": "Tag yang digunakan untuk membuat satu baris pada tabel adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<tr>",
      "B": "<td>",
      "C": "<th>",
      "D": "<caption>"
    },
    "key": "A",
    "explanation": "Tag <tr> (table row) digunakan untuk membuat satu baris dalam tabel."
  },
  {
    "num": 28,
    "question": "Tag yang digunakan untuk membuat judul tabel adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<title>",
      "B": "<th>",
      "C": "<head>",
      "D": "<caption>"
    },
    "key": "D",
    "explanation": "Tag <caption> digunakan untuk menambahkan judul/keterangan pada tabel."
  },
  {
    "num": 29,
    "question": "Atribut border=\"1\" pada tag <table> berfungsi untuk ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "menggabungkan dua kolom",
      "B": "mengubah warna tabel",
      "C": "menambah jumlah baris",
      "D": "menampilkan garis tepi tabel"
    },
    "key": "D",
    "explanation": "border=\"1\" memunculkan garis tepi bingkai tabel selebar 1 piksel."
  },
  {
    "num": 30,
    "question": "Atribut yang digunakan untuk menggabungkan beberapa kolom adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "rowspan",
      "B": "border",
      "C": "colspan",
      "D": "width"
    },
    "key": "C",
    "explanation": "colspan (column span) digunakan untuk menggabungkan dua atau lebih kolom horizontal."
  },
  {
    "num": 31,
    "question": "Tag yang berfungsi sebagai wadah (container) untuk mengelompokkan elemen HTML adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<img>",
      "B": "<div>",
      "C": "<br>",
      "D": "<title>"
    },
    "key": "B",
    "explanation": "Tag <div> (division) adalah elemen block container untuk mengelompokkan elemen HTML."
  },
  {
    "num": 32,
    "question": "Tag yang digunakan untuk memformat sebagian kecil teks di dalam paragraf tanpa pindah baris adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<span>",
      "B": "<div>",
      "C": "<section>",
      "D": "<header>"
    },
    "key": "A",
    "explanation": "Tag <span> adalah elemen inline container untuk menata sebagian kecil teks dalam baris yang sama."
  },
  {
    "num": 33,
    "question": "Tag semantic yang digunakan untuk bagian menu navigasi adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<nav>",
      "B": "<header>",
      "C": "<footer>",
      "D": "<main>"
    },
    "key": "A",
    "explanation": "Tag semantic <nav> digunakan secara khusus untuk memuat tautan menu navigasi situs."
  },
  {
    "num": 34,
    "question": "Tag semantic yang digunakan untuk bagian bawah halaman (copyright dan kontak) adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<header>",
      "B": "<nav>",
      "C": "<aside>",
      "D": "<footer>"
    },
    "key": "D",
    "explanation": "Tag semantic <footer> mendefinisikan bagian kaki dokumen yang memuat hak cipta dan kontak."
  },
  {
    "num": 35,
    "question": "Atribut id berfungsi untuk ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "mengubah warna teks",
      "B": "menampilkan gambar",
      "C": "memberi nama unik pada sebuah elemen",
      "D": "membuat link"
    },
    "key": "C",
    "explanation": "Atribut id memberikan pengenal unik tersendiri bagi sebuah elemen dalam satu halaman."
  },
  {
    "num": 36,
    "question": "Halaman beranda pada proyek website pribadi diberi nama file ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "profil.html",
      "B": "index.html",
      "C": "galeri.html",
      "D": "hobi.html"
    },
    "key": "B",
    "explanation": "index.html adalah nama berkas standar baku untuk halaman beranda utama (homepage)."
  },
  {
    "num": 37,
    "question": "Tag yang digunakan untuk membungkus gambar beserta keterangannya di halaman galeri adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<table>",
      "B": "<figure>",
      "C": "<span>",
      "D": "<audio>"
    },
    "key": "B",
    "explanation": "Tag <figure> membungkus konten visual seperti gambar beserta takarir keterangannya."
  },
  {
    "num": 38,
    "question": "Pada struktur folder proyek, file-file gambar disimpan di sub-folder bernama ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "images",
      "B": "index",
      "C": "hobi",
      "D": "nav"
    },
    "key": "A",
    "explanation": "Subfolder images (atau img) dipakai untuk menampung seluruh aset berkas gambar."
  },
  {
    "num": 39,
    "question": "Jumlah halaman minimal pada proyek website pribadi adalah ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "1 halaman",
      "B": "2 halaman",
      "C": "3 halaman",
      "D": "4 halaman"
    },
    "key": "D",
    "explanation": "Ketentuan proyek website pribadi pada modul ini mensyaratkan minimal 4 halaman."
  },
  {
    "num": 40,
    "question": "Setelah proyek selesai, folder website-pribadi dikompres menjadi file berformat ...",
    "code": "",
    "lang": "",
    "options": {
      "A": "mp3",
      "B": "jpg",
      "C": "zip",
      "D": "exe"
    },
    "key": "C",
    "explanation": "Folder proyek website dikompresi ke dalam arsip berformat .zip saat diserahkan/diunggah."
  }
];

// Masukkan soal Web Programming untuk Kelas 7 dan Kelas 8 (Midterm 20 soal, Final 40 soal)
['7', '8'].forEach(grade => {
  RAW_WEB_MIDTERM.forEach(q => {
    OFFICIAL_BANK_SOAL.push({
      id: `web${grade}_mid_${q.num}`,
      grade: grade,
      subject: "Web Programming",
      examType: "Midterm",
      question: q.question,
      code: q.code || "",
      lang: q.lang || "",
      options: q.options,
      key: q.key,
      explanation: q.explanation
    });
  });

  RAW_WEB_FINAL.forEach(q => {
    OFFICIAL_BANK_SOAL.push({
      id: `web${grade}_fin_${q.num}`,
      grade: grade,
      subject: "Web Programming",
      examType: "Final",
      question: q.question,
      code: q.code || "",
      lang: q.lang || "",
      options: q.options,
      key: q.key,
      explanation: q.explanation
    });
  });
});
// =========================================================================
// KELAS 9 - WEB PROGRAMMING - PHP DASAR (MIDTERM 20 & FINAL 40)
// =========================================================================
const RAW_PHP_MIDTERM = [
  {
    "num": 1,
    "question": "PHP adalah singkatan dari...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Hypertext Preprocessor",
      "B": "High Text Program",
      "C": "Home Page Printer",
      "D": "Hyper Personal Page"
    },
    "key": "A",
    "explanation": "PHP merupakan singkatan rekursif dari Hypertext Preprocessor."
  },
  {
    "num": 2,
    "question": "Dibandingkan HTML yang statis, PHP membuat halaman web menjadi...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Statis",
      "B": "Dinamis",
      "C": "Rusak",
      "D": "Gelap"
    },
    "key": "B",
    "explanation": "PHP membuat halaman web menjadi dinamis dan interaktif."
  },
  {
    "num": 3,
    "question": "PHP dikerjakan di sisi...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Client",
      "B": "Server",
      "C": "Kertas",
      "D": "Printer"
    },
    "key": "B",
    "explanation": "PHP adalah server-side scripting language yang dieksekusi di web server."
  },
  {
    "num": 4,
    "question": "Aplikasi gratis yang sudah berisi Apache dan PHP sekaligus adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "XAMPP",
      "B": "Paint",
      "C": "Microsoft Word",
      "D": "Chrome"
    },
    "key": "A",
    "explanation": "XAMPP adalah paket software server lokal yang berisi Apache, MySQL, dan PHP."
  },
  {
    "num": 5,
    "question": "File PHP harus disimpan di dalam folder...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Documents",
      "B": "Downloads",
      "C": "htdocs",
      "D": "Desktop"
    },
    "key": "C",
    "explanation": "Berkas PHP pada XAMPP wajib disimpan di direktori htdocs."
  },
  {
    "num": 6,
    "question": "Ekstensi file PHP adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": ".html",
      "B": ".php",
      "C": ".txt",
      "D": ".exe"
    },
    "key": "B",
    "explanation": "File skrip PHP disimpan dengan ekstensi .php."
  },
  {
    "num": 7,
    "question": "Cara yang benar untuk membuka file hello.php adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Klik dua kali file tersebut",
      "B": "Mengirimnya lewat email",
      "C": "Mengetik http://localhost/belajar-php/hello.php di browser",
      "D": "Mencetaknya"
    },
    "key": "C",
    "explanation": "File PHP harus diakses melalui server lokal via URL http://localhost/..."
  },
  {
    "num": 8,
    "question": "Kode PHP diawali dengan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<?php",
      "B": "<html>",
      "C": "<script>",
      "D": "<php>"
    },
    "key": "A",
    "explanation": "Skrip PHP selalu diawali dengan tag pembuka <?php."
  },
  {
    "num": 9,
    "question": "Perintah PHP untuk menampilkan tulisan adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "show",
      "B": "write",
      "C": "display",
      "D": "echo"
    },
    "key": "D",
    "explanation": "Perintah echo digunakan untuk mencetak teks atau keluaran ke halaman web."
  },
  {
    "num": 10,
    "question": "Setiap perintah PHP diakhiri dengan tanda...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Titik (.)",
      "B": "Titik koma (;)",
      "C": "Koma (,)",
      "D": "Tanda tanya (?)"
    },
    "key": "B",
    "explanation": "Setiap pernyataan baris kode PHP wajib diakhiri tanda titik koma (;)."
  },
  {
    "num": 11,
    "question": "Komentar satu baris di PHP ditulis dengan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "##",
      "B": "??",
      "C": "//",
      "D": "!!"
    },
    "key": "C",
    "explanation": "Tanda // digunakan untuk membuat komentar satu baris di PHP."
  },
  {
    "num": 12,
    "question": "Nama variabel di PHP selalu diawali dengan tanda...",
    "code": "",
    "lang": "",
    "options": {
      "A": "$",
      "B": "#",
      "C": "@",
      "D": "%"
    },
    "key": "A",
    "explanation": "Variabel pada PHP selalu diawali dengan simbol tanda dolar ($)."
  },
  {
    "num": 13,
    "question": "Nama variabel yang penulisannya benar adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "$nama lengkap",
      "B": "nama",
      "C": "1nama",
      "D": "$namaLengkap"
    },
    "key": "D",
    "explanation": "Variabel tidak boleh menggunakan spasi atau diawali angka; $namaLengkap adalah penulisan yang benar."
  },
  {
    "num": 14,
    "question": "$kelas = 8; Variabel $kelas bertipe data...",
    "code": "",
    "lang": "",
    "options": {
      "A": "String",
      "B": "Integer",
      "C": "Boolean",
      "D": "Float"
    },
    "key": "B",
    "explanation": "Angka bulat tanpa koma bertipe data Integer."
  },
  {
    "num": 15,
    "question": "Operator titik (.) pada PHP berfungsi untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Mengalikan angka",
      "B": "Membagi angka",
      "C": "Menggabungkan teks",
      "D": "Mengurangi angka"
    },
    "key": "C",
    "explanation": "Operator titik (.) merupakan operator penggabung teks (string concatenation)."
  },
  {
    "num": 16,
    "question": "Hasil dari 10 % 3 adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "0",
      "B": "1",
      "C": "3",
      "D": "30"
    },
    "key": "B",
    "explanation": "10 modulus 3 menghasilkan 1 karena 10 dibagi 3 adalah 3 bersisa 1."
  },
  {
    "num": 17,
    "question": "$a = 5; $a += 3; Maka nilai $a sekarang adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "3",
      "B": "5",
      "C": "15",
      "D": "8"
    },
    "key": "D",
    "explanation": "Operasi $a += 3 menambahkan nilai 3 ke variabel $a (5 + 3 = 8)."
  },
  {
    "num": 18,
    "question": "Operator untuk membandingkan apakah dua nilai sama adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "==",
      "B": "=",
      "C": "+=",
      "D": "!="
    },
    "key": "A",
    "explanation": "Operator == digunakan untuk menguji kesamaan dua nilai."
  },
  {
    "num": 19,
    "question": "Perhatikan kode berikut:\nTulisan yang muncul adalah...",
    "code": "$nilai = 60;\nif ($nilai >= 75) {\n  echo \"Lulus\";\n} else {\n  echo \"Belum lulus\";\n}",
    "lang": "php",
    "options": {
      "A": "Lulus",
      "B": "Tidak ada tulisan",
      "C": "Belum lulus",
      "D": "Error"
    },
    "key": "C",
    "explanation": "Karena 60 < 75, kondisi bernilai false sehingga blok else dijalankan (Belum lulus)."
  },
  {
    "num": 20,
    "question": "Fungsi break pada switch adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Mengulang pilihan dari awal",
      "B": "Menghentikan switch setelah pilihan yang cocok selesai dijalankan",
      "C": "Menghapus variabel",
      "D": "Membuka file baru"
    },
    "key": "B",
    "explanation": "Perintah break berfungsi menghentikan eksekusi switch agar tidak lanjut ke case berikutnya."
  }
];

const RAW_PHP_FINAL = [
  {
    "num": 1,
    "question": "Dalam analogi restoran, \"dapur\" melambangkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Client",
      "B": "Server",
      "C": "Browser",
      "D": "Pengunjung"
    },
    "key": "B",
    "explanation": "Dapur melambangkan server tempat data dan logika program diproses."
  },
  {
    "num": 2,
    "question": "Tombol di XAMPP Control Panel untuk menjalankan Apache adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Start",
      "B": "Stop",
      "C": "Exit",
      "D": "Config"
    },
    "key": "A",
    "explanation": "Tombol Start mengaktifkan modul web server Apache."
  },
  {
    "num": 3,
    "question": "Fungsi <br> di dalam echo adalah untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menebalkan tulisan",
      "B": "Menghapus tulisan",
      "C": "Pindah baris",
      "D": "Mengganti warna"
    },
    "key": "C",
    "explanation": "Tag <br> digunakan untuk memindahkan teks ke baris baru."
  },
  {
    "num": 4,
    "question": "Komentar beberapa baris di PHP ditulis dengan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "//",
      "B": "#",
      "C": "<!-- -->",
      "D": "/* */"
    },
    "key": "D",
    "explanation": "Komentar multi-baris diapit oleh tanda /* dan */."
  },
  {
    "num": 5,
    "question": "$nama dan $Nama di PHP dianggap...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Sama",
      "B": "Dua variabel yang berbeda",
      "C": "Error",
      "D": "Tidak boleh dipakai"
    },
    "key": "B",
    "explanation": "Variabel PHP bersifat case-sensitive sehingga huruf kapital dan kecil dianggap berbeda."
  },
  {
    "num": 6,
    "question": "$tinggi = 158.5; Variabel $tinggi bertipe...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Integer",
      "B": "String",
      "C": "Float",
      "D": "Boolean"
    },
    "key": "C",
    "explanation": "Angka dengan koma/desimal bertipe data Float."
  },
  {
    "num": 7,
    "question": "Tipe data boolean hanya memiliki dua nilai, yaitu...",
    "code": "",
    "lang": "",
    "options": {
      "A": "true dan false",
      "B": "0 dan 1",
      "C": "ya dan tidak",
      "D": "benar saja"
    },
    "key": "A",
    "explanation": "Tipe boolean hanya bernilai true (benar) atau false (salah)."
  },
  {
    "num": 8,
    "question": "Jika $nama = \"Andi\"; maka echo \"Nama saya $nama\"; menampilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Nama saya $nama",
      "B": "Nama saya nama",
      "C": "Andi",
      "D": "Nama saya Andi"
    },
    "key": "D",
    "explanation": "Petik ganda (\"...\") otomatis mengevaluasi variabel di dalamnya."
  },
  {
    "num": 9,
    "question": "Hasil dari 2 ** 3 adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "5",
      "B": "6",
      "C": "8",
      "D": "9"
    },
    "key": "C",
    "explanation": "Operator ** adalah perpangkatan (2 pangkat 3 = 8)."
  },
  {
    "num": 10,
    "question": "$skor = 100; $skor += 50; Nilai $skor sekarang adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "50",
      "B": "150",
      "C": "100",
      "D": "5000"
    },
    "key": "B",
    "explanation": "Operasi penambahan $skor = 100 + 50 menghasilkan 150."
  },
  {
    "num": 11,
    "question": "Operator != artinya...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Tidak sama dengan",
      "B": "Sama dengan",
      "C": "Lebih dari",
      "D": "Kurang dari"
    },
    "key": "A",
    "explanation": "Operator != berarti tidak sama dengan."
  },
  {
    "num": 12,
    "question": "Operator && bernilai benar jika...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Salah satu syarat benar",
      "B": "Selalu salah",
      "C": "Membalik nilai",
      "D": "Kedua syarat benar"
    },
    "key": "D",
    "explanation": "Operator logika AND (&&) bernilai benar jika kedua syarat bernilai benar."
  },
  {
    "num": 13,
    "question": "Perhatikan kode berikut:\nTulisan yang muncul adalah...",
    "code": "$nilai = 82;\nif ($nilai >= 90) {\n  echo \"Nilai A\";\n} else if ($nilai >= 80) {\n  echo \"Nilai B\";\n} else if ($nilai >= 70) {\n  echo \"Nilai C\";\n} else {\n  echo \"Nilai D\";\n}",
    "lang": "php",
    "options": {
      "A": "Nilai A",
      "B": "Nilai B",
      "C": "Nilai C",
      "D": "Nilai D"
    },
    "key": "B",
    "explanation": "Nilai 82 memenuhi kondisi kedua ($nilai >= 80), mencetak \"Nilai B\"."
  },
  {
    "num": 14,
    "question": "Bagian default pada switch dijalankan jika...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Dijalankan paling pertama",
      "B": "Selalu dijalankan",
      "C": "Tidak ada case yang cocok",
      "D": "Program dihentikan"
    },
    "key": "C",
    "explanation": "Klausul default dieksekusi jika tidak ada satupun case yang cocok."
  },
  {
    "num": 15,
    "question": "Kegunaan perulangan adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menjalankan kode yang sama berkali-kali tanpa menulisnya berulang",
      "B": "Menyimpan data",
      "C": "Mengambil keputusan",
      "D": "Membuat form"
    },
    "key": "A",
    "explanation": "Perulangan (looping) mengeksekusi blok kode berulang kali secara efisien."
  },
  {
    "num": 16,
    "question": "Kode for ($i = 1; $i <= 3; $i++) { echo $i; } menampilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "3",
      "B": "1",
      "C": "12",
      "D": "123"
    },
    "key": "D",
    "explanation": "Iterasi berjalan untuk nilai $i = 1, 2, 3, menghasilkan keluaran 123."
  },
  {
    "num": 17,
    "question": "Perulangan yang cocok dipakai ketika kita tahu berapa kali pengulangan dilakukan adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "while",
      "B": "for",
      "C": "if",
      "D": "switch"
    },
    "key": "B",
    "explanation": "Perulangan for paling cocok saat jumlah iterasi sudah diketahui pasti."
  },
  {
    "num": 18,
    "question": "$i++ berarti...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Mengurangi $i satu angka",
      "B": "Mengalikan $i",
      "C": "Menaikkan $i satu angka",
      "D": "Menghapus $i"
    },
    "key": "C",
    "explanation": "Operator increment ++ menambahkan nilai variabel sebanyak 1."
  },
  {
    "num": 19,
    "question": "Fungsi break di dalam perulangan adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menghentikan seluruh perulangan",
      "B": "Melewati satu putaran saja",
      "C": "Mengulang dari awal",
      "D": "Menghapus array"
    },
    "key": "A",
    "explanation": "Perintah break menghentikan dan keluar dari perulangan seketika."
  },
  {
    "num": 20,
    "question": "Perulangan yang tidak pernah berhenti disebut...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Loop manis",
      "B": "Infinite loop",
      "C": "Array",
      "D": "Function"
    },
    "key": "B",
    "explanation": "Infinite loop adalah kondisi perulangan tanpa henti karena kondisi selalu true."
  },
  {
    "num": 21,
    "question": "Array adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Variabel yang hanya menyimpan satu angka",
      "B": "Variabel yang hanya menyimpan satu huruf",
      "C": "Sebuah tombol",
      "D": "Variabel yang bisa menyimpan banyak data sekaligus"
    },
    "key": "D",
    "explanation": "Array adalah variabel khusus yang mampu menyimpan banyak nilai sekaligus."
  },
  {
    "num": 22,
    "question": "Indeks pertama pada array adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "-1"
    },
    "key": "A",
    "explanation": "Indeks pertama pada array berbasis angka (indexed array) selalu dimulai dari 0."
  },
  {
    "num": 23,
    "question": "$buah = [\"Apel\", \"Jeruk\", \"Mangga\"]; echo $buah[2]; menampilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Apel",
      "B": "Jeruk",
      "C": "Mangga",
      "D": "Error"
    },
    "key": "C",
    "explanation": "Indeks 0 = Apel, 1 = Jeruk, 2 = Mangga. Maka $buah[2] mencetak Mangga."
  },
  {
    "num": 24,
    "question": "Fungsi count($buah) digunakan untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menghapus data",
      "B": "Menghitung jumlah data array",
      "C": "Mengurutkan data",
      "D": "Menambah data"
    },
    "key": "B",
    "explanation": "Fungsi count() menghitung total elemen dalam sebuah array."
  },
  {
    "num": 25,
    "question": "$buah[] = \"Melon\"; berfungsi untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Mengubah data pertama",
      "B": "Menghapus Melon",
      "C": "Mengurutkan array",
      "D": "Menambah data di posisi paling belakang"
    },
    "key": "D",
    "explanation": "Sintaks [] menambahkan elemen baru ke posisi paling akhir array."
  },
  {
    "num": 26,
    "question": "Tanda => dipakai pada...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Array asosiatif (pasangan key dan value)",
      "B": "Perbandingan angka",
      "C": "Pengurangan",
      "D": "Komentar"
    },
    "key": "A",
    "explanation": "Tanda panah => menghubungkan key dan value pada array asosiatif."
  },
  {
    "num": 27,
    "question": "foreach digunakan untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menghitung angka",
      "B": "Membuat fungsi",
      "C": "Membaca seluruh isi array",
      "D": "Membuka file"
    },
    "key": "C",
    "explanation": "Perulangan foreach dirancang untuk membaca setiap elemen array secara berurutan."
  },
  {
    "num": 28,
    "question": "Function adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Satu buah angka",
      "B": "Blok kode yang diberi nama dan bisa dipanggil kapan saja",
      "C": "Jenis variabel",
      "D": "Jenis komentar"
    },
    "key": "B",
    "explanation": "Function adalah kumpulan kode yang dapat digunakan berulang kali dengan memanggil namanya."
  },
  {
    "num": 29,
    "question": "Kata kunci untuk membuat fungsi di PHP adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "make",
      "B": "new",
      "C": "create",
      "D": "function"
    },
    "key": "D",
    "explanation": "Fungsi di PHP didefinisikan menggunakan kata kunci function."
  },
  {
    "num": 30,
    "question": "Parameter pada function adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Data yang dikirim ke dalam function",
      "B": "Hasil akhir function",
      "C": "Komentar",
      "D": "Nama file"
    },
    "key": "A",
    "explanation": "Parameter adalah nilai/variabel yang diterima fungsi sebagai input pemrosesan."
  },
  {
    "num": 31,
    "question": "Perhatikan kode berikut:\nHasil yang ditampilkan adalah...",
    "code": "function tambah($a, $b) {\n  return $a + $b;\n}\necho tambah(4, 6);",
    "lang": "php",
    "options": {
      "A": "46",
      "B": "4",
      "C": "10",
      "D": "24"
    },
    "key": "C",
    "explanation": "Fungsi tambah(4, 6) mengembalikan 4 + 6 = 10, yang kemudian dicetak echo."
  },
  {
    "num": 32,
    "question": "strtoupper(\"halo\") menghasilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "halo",
      "B": "HALO",
      "C": "Halo",
      "D": "hALO"
    },
    "key": "B",
    "explanation": "strtoupper() mengubah seluruh karakter string menjadi huruf kapital."
  },
  {
    "num": 33,
    "question": "strlen(\"Halo\") menghasilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "4",
      "B": "3",
      "C": "5",
      "D": "2"
    },
    "key": "A",
    "explanation": "strlen() menghitung panjang string. Kata \"Halo\" memiliki 4 karakter."
  },
  {
    "num": 34,
    "question": "rand(1, 6) menghasilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Selalu 1",
      "B": "Selalu 6",
      "C": "Jumlah dari 1 dan 6",
      "D": "Angka acak dari 1 sampai 6"
    },
    "key": "D",
    "explanation": "rand(min, max) menghasilkan bilangan bulat acak di antara rentang yang ditentukan."
  },
  {
    "num": 35,
    "question": "Kode PHP yang disisipkan di dalam HTML dibungkus dengan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "<script> ... </script>",
      "B": "<php> ... </php>",
      "C": "<?php ... ?>",
      "D": "<html> ... </html>"
    },
    "key": "C",
    "explanation": "Tag pembuka <?php dan penutup ?> menandai blok kode PHP di dalam HTML."
  },
  {
    "num": 36,
    "question": "date(\"d-m-Y\") digunakan untuk menampilkan...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Nama pengguna",
      "B": "Tanggal hari ini",
      "C": "Hasil perhitungan",
      "D": "Jumlah data array"
    },
    "key": "B",
    "explanation": "Fungsi date(\"d-m-Y\") memformat dan menampilkan tanggal sistem saat ini."
  },
  {
    "num": 37,
    "question": "Atribut name pada <input> berfungsi sebagai...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Warna kotak isian",
      "B": "Ukuran kotak isian",
      "C": "Jenis huruf",
      "D": "Label data agar bisa diambil oleh PHP"
    },
    "key": "D",
    "explanation": "Atribut name mendefinisikan kunci data saat form dikirim ke server."
  },
  {
    "num": 38,
    "question": "$_POST digunakan untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Menerima data yang dikirim dari form",
      "B": "Membuat perulangan",
      "C": "Menulis komentar",
      "D": "Menggabungkan teks"
    },
    "key": "A",
    "explanation": "$_POST adalah variabel superglobal PHP untuk menangkap data form metode POST."
  },
  {
    "num": 39,
    "question": "Fungsi isset() digunakan untuk...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Membulatkan angka",
      "B": "Mengubah huruf menjadi besar",
      "C": "Mengecek apakah data sudah ada/dikirim",
      "D": "Menghitung jumlah karakter"
    },
    "key": "C",
    "explanation": "isset() memeriksa apakah variabel sudah terdefinisi dan tidak bernilai NULL."
  },
  {
    "num": 40,
    "question": "<form method=\"post\"> berarti data form...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Ditampilkan di alamat (URL)",
      "B": "Dikirim secara tersembunyi ke server",
      "C": "Dihapus",
      "D": "Disimpan di kertas"
    },
    "key": "B",
    "explanation": "Metode POST mengirimkan nilai form dalam request body tanpa terlihat pada URL."
  }
];

// Masukkan soal Web Programming KHUSUS Kelas 9 (PHP Dasar: Midterm 20 soal, Final 40 soal)
RAW_PHP_MIDTERM.forEach(q => {
  OFFICIAL_BANK_SOAL.push({
    id: `web9_mid_${q.num}`,
    grade: "9",
    subject: "Web Programming",
    examType: "Midterm",
    question: q.question,
    code: q.code || "",
    lang: q.lang || "php",
    options: q.options,
    key: q.key,
    explanation: q.explanation
  });
});

RAW_PHP_FINAL.forEach(q => {
  OFFICIAL_BANK_SOAL.push({
    id: `web9_fin_${q.num}`,
    grade: "9",
    subject: "Web Programming",
    examType: "Final",
    question: q.question,
    code: q.code || "",
    lang: q.lang || "php",
    options: q.options,
    key: q.key,
    explanation: q.explanation
  });
});

if (typeof window !== "undefined") {
  window.OFFICIAL_BANK_SOAL = OFFICIAL_BANK_SOAL;
}
