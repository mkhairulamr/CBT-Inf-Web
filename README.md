# 🎓 Sistem Ujian Online SMP & Bank Soal Multi-Format
**Aplikasi Web CBT (Computer-Based Test) 100% Static Web Berbasis HTML5, Bootstrap 5, dan Vanilla JavaScript (ES6+)**

Aplikasi ini dirancang khusus untuk pelaksanaan Penilaian Tengah Semester (PTS/Midterm) dan Penilaian Akhir Semester (PAS/Final Test) tingkat SMP (Kelas 7, 8, dan 9) untuk mata pelajaran bidang teknologi:
1. **Informatika**
2. **Koding & Kecerdasan Artifisial**
3. **Web Programming**

Didesain **MURNI TANPA BACKEND & TANPA DATABASE SERVER (No Node.js runtime required / No MySQL)**. Seluruh data Bank Soal, Sesi Ujian Siswa, Pengaturan Token, dan Rekapitulasi Nilai disimpan secara aman dan persisten pada `localStorage` peramban web (browser). Siap di-deploy langsung ke **Vercel** atau **GitHub Pages**.

---

## 📂 Struktur Repositori & Berkas Proyek

```text
├── index.html        # Portal Masuk Siswa (Pilih Kelas, Mapel, Token default '1899')
├── exam.html         # Engine Ujian, Anti-Kecurangan, Syntax Highlighting Prism.js
├── admin.html        # Dashboard Guru/Admin (PIN 'admin123', Impor Soal, Rekap & Ekspor Nilai)
├── css/
│   └── style.css     # Styling Kustom, Modern, Anti-Seleksi & Cetak Hasil
├── js/
│   ├── app.js        # Engine Inti: LocalStorage, Timer, Audio Synth, & Seed Soal
│   └── parser.js     # Pengurai Multi-Format: Excel (.xlsx), CSV, dan Word (.docx)
└── README.md         # Dokumentasi Lengkap & Panduan Format Template
```

---

## ✨ Fitur-Fitur Unggulan

### 1. Portal Masuk Siswa (`index.html`)
- Formulir pendaftaran sesi ujian: Nama Lengkap Siswa, Kelas (7, 8, 9), Mata Pelajaran, dan Jenis Ujian (Midterm / Final Test).
- **Validasi Token Ujian:** Token default adalah `1899` (dapat diubah kapan saja di Dashboard Admin).
- **Deteksi Ketersediaan Soal Real-Time:** Memberikan indikator instan apakah bank soal untuk kelas dan mapel yang dipilih telah siap diujikan.
- Pintu masuk cepat ke Dashboard Admin via modal PIN rahasia.

### 2. Engine Ujian & Pengawasan Anti-Kecurangan (`exam.html`)
- **Timer Hitung Mundur Interaktif:**
  - Menampilkan durasi sisa waktu pengerjaan (default 60 menit) dan progress bar dinamis.
  - Penanda warna status waktu (Hijau > 15 mnt, Kuning ≤ 15 mnt, Merah Berkedip ≤ 5 mnt disertai peringatan audio Web Audio API).
  - Fitur **Auto-Submit Otomatis** saat waktu habis tanpa menghilangkan jawaban siswa.
- **Dukungan Koding & Syntax Highlighting:**
  - Terintegrasi penuh dengan **Prism.js CDN** mendukung pewarnaan sintaks rapi untuk bahasa **HTML**, **CSS**, **JavaScript**, **Python**, dan **Bash/Terminal**.
  - Badge bahasa pemrograman dan tombol salin kode cepat.
- **Protokol Anti-Kecurangan (Anti-Cheating):**
  - **Deteksi Pindah Tab & Aplikasi:** Menggunakan event `visibilitychange` dan `blur`.
  - **Toleransi 3x Peringatan:** Menampilkan pop-up peringatan interaktif dan animasi getar (shake modal). Pelanggaran ke-4 akan memicu auto-submit paksa lembar ujian.
  - **Proteksi Lembar Soal:** Blokir Klik Kanan (`contextmenu`), blokir seleksi teks (`user-select: none`), serta blokir pintasan keyboard (`Ctrl+C`, `Ctrl+V`, `Ctrl+U`, `Ctrl+P`, `F12`, `Ctrl+Shift+I`).
  - **Watermark Layar:** Memuat Nama Siswa di latar belakang lembar ujian untuk memitigasi pemotretan layar menggunakan ponsel.
- **Navigasi Soal & Matrix Panel:**
  - Panel nomor soal interaktif dengan kode warna (Belum Dijawab, Sudah Dijawab, dan Ragu-Ragu).
  - Pengatur ukuran huruf lembar soal (A- / Normal / A+).
- **Hasil & Evaluasi Nilai:**
  - Perhitungan skor otomatis (0 - 100) dan status kelulusan (KKM 75).
  - Lembar Hasil Ujian Siap Cetak (*Printable Report Card*).

### 3. Dashboard Guru & Multi-Format Importer (`admin.html`)
- Autentikasi pengawas dengan PIN default `admin123`.
- **Pengimpor Soal Multi-Format (Client-Side via CDN):**
  - **SheetJS (`xlsx.full.min.js`)**: Membaca file spreadsheet Excel (.xlsx, .xls).
  - **PapaParse (`papaparse.min.js`)**: Membaca file CSV berformat teks.
  - **Mammoth.js (`mammoth.browser.min.js`)**: Mengekstrak langsung dokumen Microsoft Word (.docx).
- **Tabel Pratinjau Langsung (Live Preview):**
  - Menampilkan hasil penguraian sebelum disimpan ke `localStorage`.
  - Indikator validasi otomatis (memeriksa ketersediaan opsi A-D dan validitas kunci jawaban).
- **Rekapitulasi Nilai Siswa:**
  - Statistik komprehensif: Rata-rata nilai, skor tertinggi/terendah, dan tingkat kelulusan.
  - Fitur **Ekspor Nilai ke Excel (.xlsx)** dan **Ekspor Nilai ke CSV**.
  - Tombol cetak tabel rekapitulasi ujian.

---

## 📝 Spesifikasi Format Template Data

### A. Format File Excel (.xlsx) dan CSV (.csv)
Kolom-kolom tabel yang didukung oleh parser:
| Nama Kolom (Header) | Tipe Data | Wajib? | Keterangan |
| :--- | :--- | :--- | :--- |
| `No` | Angka | Ya | Nomor urut soal |
| `Soal` | Teks | Ya | Teks butir pertanyaan |
| `Kode` | Teks | Opsional | Potongan baris kode (jika ada koding) |
| `Bahasa` | Teks | Opsional | `python`, `javascript`, `html`, `css` |
| `Pilihan A` | Teks | Ya | Isi teks opsi A |
| `Pilihan B` | Teks | Ya | Isi teks opsi B |
| `Pilihan C` | Teks | Ya | Isi teks opsi C |
| `Pilihan D` | Teks | Ya | Isi teks opsi D |
| `Kunci` | Teks (1 huruf) | Ya | Kunci jawaban yang benar: `A`, `B`, `C`, atau `D` |
| `Pembahasan` | Teks | Opsional | Penjelasan atau catatan guru |

#### Contoh Isi Berkas CSV:
```csv
No,Soal,Kode,Bahasa,Pilihan A,Pilihan B,Pilihan C,Pilihan D,Kunci,Pembahasan
1,Berikut ini tag HTML5 yang digunakan untuk judul utama adalah?,,,<h1>,<heading>,<head>,<title>,A,Tag <h1> adalah heading level 1
2,Berapa hasil output kode Python berikut?,x = 10\nprint(x * 2),python,20,10,12,Error,A,10 dikali 2 sama dengan 20
```

---

### B. Format Dokumen Microsoft Word (.docx)
Saat membuat soal di Microsoft Word, susunlah dengan pola penomoran standar sebagai berikut:

```text
1. Berikut ini tag HTML manakah yang digunakan untuk membuat tautan hiperteks (hyperlink)?
A. <a>
B. <link>
C. <href>
D. <url>
Kunci: A

2. Perhatikan potongan kode program Python berikut. Apakah nilai yang dicetak?
```python
total = 5 + 3
print(total)
```
A. 8
B. 53
C. 15
D. Error
Kunci: A
```

---

### C. Format JSON Bank Soal (localStorage)
Data bank soal disimpan dalam format array JSON dengan struktur objek:
```json
[
  {
    "id": "q_inf7_1",
    "grade": "7",
    "subject": "Informatika",
    "examType": "Midterm",
    "question": "Empat pilar utama dalam Berpikir Komputasional adalah...",
    "code": "",
    "lang": "",
    "options": {
      "A": "Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma",
      "B": "Hardware, Software, Brainware, dan Malware",
      "C": "Input, Process, Output, dan Storage",
      "D": "Browsing, Chatting, Gaming, dan Coding"
    },
    "key": "A",
    "explanation": "Pilar computational thinking mencakup Dekomposisi, Pattern, Abstraksi, dan Algoritma."
  }
]
```

---

## 🚀 Panduan Upload ke GitHub & Deploy ke Vercel

Karena aplikasi ini adalah **100% Static Web Application**, aplikasi dapat langsung di-deploy tanpa memerlukan proses build server yang rumit.

### Langkah 1: Push Repositori ke GitHub
Buka terminal pada direktori proyek Anda:
```bash
# Inisialisasi git repository
git init

# Tambahkan seluruh berkas
git add .

# Buat commit perdana
git commit -m "feat: Sistem Ujian Online SMP & Bank Soal Multi-Format siap rilis"

# Buat branch utama
git branch -M main

# Hubungkan ke repository GitHub Anda
git remote add origin https://github.com/USERNAME_ANDA/ujian-online-smp.git

# Unggah kode ke GitHub
git push -u origin main
```

---

### Langkah 2: Deploy ke Vercel (1 Menit Selesai)
1. Buka laman [Vercel](https://vercel.com/) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari dan pilih repository `ujian-online-smp` yang baru saja Anda push.
4. Pada bagian **Build & Development Settings**:
   - Jika mendeteksi Vite: Anda dapat membiarkan pengaturan default (`npm run build` dengan output `dist`), atau pilih preset **Other / Static** dengan root direktori `./`.
5. Klik tombol **"Deploy"**.
6. Dalam hitungan detik, aplikasi web Anda telah aktif secara global dengan URL HTTPS yang aman (misalnya: `https://ujian-online-smp.vercel.app`).

---

## 🔒 Informasi Kredensial & Manajemen Soal

- **Token Masuk Ujian Siswa:** Bersifat rahasia (dikonfigurasi oleh Guru/Pengawas di Dashboard Pengaturan dan dibagikan kepada siswa hanya saat ujian dimulai).
- **Identitas Siswa:** Hanya memerlukan **Nama Lengkap Siswa** (tanpa pengisian NIS/NISN).
- **Kebijakan Hasil Ujian Siswa:** Siswa **tidak dapat melihat hasil/nilai/skor** ujian setelah selesai; sistem hanya menampilkan bukti konfirmasi pengumpulan dan otomatis kembali ke Halaman Utama. Rekapitulasi nilai dan statistik kelulusan tersimpan secara aman di `localStorage` dan hanya dapat diakses oleh Guru/Administrator di Dashboard Admin.
- **Autentikasi Guru / Administrator:** Diamankan dengan kata sandi rahasia (`Mautauaja1899!`) dan terproteksi dari akses visitor umum.
- **Manajemen Soal (CRUD Penuh):** Dilengkapi fitur **Create, Read, Update, Delete**, Matriks Klasifikasi Ketersediaan Soal (per jenjang Kelas 7/8/9, Mata Pelajaran Informatika / Koding & AI / Web Programming, dan Jenis Ujian Midterm / Final), serta fitur Input / Tempel Cepat format teks & JSON.
- **Bank Soal:** Murni bersih tanpa data dummy otomatis. Guru/Pengawas dapat langsung mengunggah berkas soal (.xlsx, .csv, atau .docx) melalui tab **"Impor Multi-Format"**, menempel soal via **"Input / Tempel Cepat"**, atau menambah/mengedit satu per satu via **"Tambah Soal"** & **"Edit Soal"**.
- **Nilai Standar KKM:** `75`
- **Durasi Ujian Bawaan:** `60 Menit`
- **Batas Toleransi Pindah Tab:** `3 Kali`

*(Seluruh konfigurasi waktu, token, KKM, toleransi pelanggaran, dan PIN admin dapat disesuaikan sewaktu-waktu melalui tab **Pengaturan Ujian** di Dashboard Admin).*
