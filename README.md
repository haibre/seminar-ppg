# 🎓 E-Portofolio Refleksi Mata Kuliah Seminar PPG Prajabatan

**Mahasiswa:** Brilian Herda  
**NIM:** 95202530N  
**Program Studi:** Informatika (Pendidikan Profesi Guru)  
**LPTK:** Universitas Kristen Satya Wacana (UKSW)  

---

## 🌟 Fitur Utama Website

1. **Academic Navy UI & Modern Responsive Design**:
   - Skema warna elegan *Academic Navy Blue* (`#1e3a8a`), *Light Gray* (`#f8fafc`), dan *Gold Accent* (`#f59e0b`).
   - Tampilan optimal di perangkat Mobile (HP), Tablet, dan Laptop/Desktop.
2. **Fixed Top Navbar dengan Menu Terstruktur**:
   - Branding Logo UKSW & PPG Prajabatan.
   - Menu **Dashboard / Beranda**.
   - Menu **Identifikasi Diri** (Visi, Misi & Nilai-Nilai Dasar Pendidik).
   - Dropdown **Refleksi Semester 1** (6 Mata Kuliah).
   - Dropdown **Refleksi Semester 2** (6 Mata Kuliah).
   - Drawer Hamburger Menu untuk perangkat seluler.
3. **Dynamic Page View (Single Page Application)**:
   - Perpindahan konten tanpa reload halaman dengan dukungan *URL Hash routing* (`#dashboard`, `#mk-pembelajaran-mendalam-asesmen`, dll.).
   - Tombol browser *Back* & *Forward* tetap berfungsi penuh.
4. **Embedded PDF Document Viewer**:
   - Embed iframe dengan rasio tinggi 650px - 780px yang responsif.
   - Action Bar: Tombol *Download PDF*, *Buka di Tab Baru*, dan *Salin Link*.
   - Rincian artefak pembelajaran dan analisis refleksi kritis alur MERDEKA & Siklus Gibbs.

---

## 📁 Struktur Direktori

```
e-portfolio-ppg/
├── index.html              # Halaman utama aplikasi web
├── js/
│   ├── data.js             # Basis data profil & narasi refleksi 12 mata kuliah + URL PDF
│   └── app.js              # Logika routing dinamis, PDF viewer, navigasi dropdown & mobile
├── assets/                 # (Opsional) Tempat menyimpan file PDF lokal / gambar
│   └── pdf/
└── README.md               # Dokumentasi panduan penggunaan
```

---

## 🚀 Cara Menjalankan Website

1. **Buka Langsung di Browser**:
   - Cukup klik ganda berkas `index.html` atau buka melalui browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. **Menggunakan Live Server (VS Code / Ekstensi)**:
   - Buka folder `e-portfolio-ppg` di VS Code / editor Anda, lalu klik **"Go Live"** pada `index.html`.

---

## 📝 Panduan Mengganti Tautan PDF dengan File Asli Anda

Semua data mata kuliah dan tautan PDF terpusat di dalam berkas **`js/data.js`**.

### Opsi 1: Menggunakan Google Drive (Direkomendasikan)
1. Unggah dokumen PDF Anda ke Google Drive.
2. Klik kanan file PDF -> **Bagikan (Share)** -> Ubah akses umum menjadi **"Siapa saja yang memiliki link" (Anyone with the link can view)**.
3. Salin tautan file (contoh: `https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0/view?usp=sharing`).
4. Ganti bagian akhir tautan `/view?usp=sharing` menjadi `/preview`.
   - Contoh hasil: `https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0/preview`
5. Buka berkas `js/data.js`, cari ID mata kuliah yang sesuai (misal: `"pembelajaran-mendalam-asesmen"`), lalu ubah:
   ```javascript
   pdfUrl: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0/preview",
   downloadUrl: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0/view?usp=sharing",
   ```

### Opsi 2: Menggunakan File PDF Lokal
1. Buat folder `assets/pdf/` di dalam folder proyek ini.
2. Letakkan file PDF Anda di dalamnya (misal: `assets/pdf/refleksi_pma.pdf`).
3. Buka `js/data.js`, lalu atur properti:
   ```javascript
   pdfUrl: "assets/pdf/refleksi_pma.pdf",
   downloadUrl: "assets/pdf/refleksi_pma.pdf",
   ```

---

## 📚 Daftar 12 Mata Kuliah

### Semester 1:
1. `pembelajaran-mendalam-asesmen` - Pembelajaran Mendalam dan Asesmen
2. `filosofi-pendidikan` - Filosofi Pendidikan dan Pendidikan Nilai
3. `computational-thinking` - Computational Thinking
4. `growth-mindset` - Growth Mindset
5. `ppl-1` - PPL I
6. `pemahaman-peserta-didik` - Pemahaman tentang Peserta Didik

### Semester 2:
1. `pembelajaran-sosial-emosional` - Pembelajaran Sosial Emosional
2. `pembelajaran-mendalam-asesmen-lanjut` - Pembelajaran Mendalam dan Asesmen Lanjut
3. `project-kepemimpinan` - Project Kepemimpinan
4. `pembelajaran-daring-bauran` - Pembelajaran Daring & Bauran
5. `seminar-ppg` - Seminar PPG (Kulminasi)
6. `ppl-2` - PPL II
# seminar-ppg
