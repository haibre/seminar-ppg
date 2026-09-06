/**
 * DATA E-PORTOFOLIO REFLEKSI MATA KULIAH SEMINAR PPG
 * Mahasiswa: Brilian Herda (NIM: 95202530N)
 * Program Studi: Informatika - UKSW
 * 
 * PETUNJUK PENGGANTIAN URL PDF:
 * 1. Jika menggunakan Google Drive:
 *    - Buka file PDF di Google Drive -> Bagikan (Share) -> Ubah akses menjadi "Siapa saja yang memiliki link" (Anyone with the link can view).
 *    - Salin link (misal: https://drive.google.com/file/d/1A2B3C4D5E6F.../view?usp=sharing)
 *    - Ubah bagian ujung '/view...' menjadi '/preview' (misal: https://drive.google.com/file/d/1A2B3C4D5E6F.../preview)
 *    - Masukkan ke properti `pdfUrl` di bawah ini.
 * 2. Jika menggunakan file lokal:
 *    - Simpan file PDF di folder 'assets/pdf/nama_file.pdf'
 *    - Isi properti `pdfUrl: 'assets/pdf/nama_file.pdf'`
 */

const studentProfile = {
  name: "Brilian Herda",
  nim: "95202530N",
  studyProgram: "Pendidikan Profesi Guru (PPG) - Bidang Studi Informatika",
  institution: "Universitas Kristen Satya Wacana (UKSW)",
  email: "95202530n@student.uksw.edu",
  academicYear: "2026",
  title: "Calon Guru Profesional Bidang Informatika",
  quote: "“Mendidik dengan hati, menginspirasi melalui teknologi. Berkomitmen mewujudkan pembelajaran Informatika yang bermakna, berpusat pada peserta didik, serta menumbuhkan nalar kritis dan komputasional.”",
  socials: {
    linkedin: "https://linkedin.com/n/brilian-herda",
    github: "https://github.com/haibre",
    email: "mailto:95202530n@student.uksw.edu"
  }
};

const identifikasiDiriData = {
  id: "identifikasi-diri",
  title: "Identifikasi Diri & Visi Misi",
  subtitle: "Landasan Filosofis, Komitmen Moral, serta Arah Tujuan Strategis Pendidik Informatika",
  visi: {
    title: "Visi Guru Profesional",
    statement: "“Menjadi pendidik profesional yang berintegritas, transformatif, dan berjiwa pembelajar sepanjang hayat dalam mewujudkan pembelajaran Informatika yang memerdekakan, berpusat pada peserta didik, menumbuhkan nalar komputasional, serta berkarakter Profil Pelajar Pancasila di era digital.”",
    description: "Visi ini merefleksikan cita-cita luhur untuk menuntun segala kodrat alam dan zaman peserta didik agar mereka tidak hanya cakap mengoperasikan teknologi, melainkan mampu menjadi kreator inovatif, beretika, dan pemecah masalah (problem solver) yang adaptif bagi kemajuan bangsa."
  },
  misi: [
    {
      number: "01",
      title: "Menyelenggarakan Pembelajaran Berpusat pada Peserta Didik",
      description: "Merancang dan melaksanakan pembelajaran Informatika yang berdiferensiasi (TaRL & UbD) serta kontekstual, guna memenuhi kebutuhan belajar dan potensi unik setiap peserta didik.",
      icon: "fa-chalkboard-user",
      color: "from-blue-600 to-indigo-700",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      number: "02",
      title: "Membudayakan Berpikir Komputasional (Computational Thinking)",
      description: "Mengintegrasikan 4 pilar Computational Thinking (Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma) sebagai fondasi bernalar logis, kritis, dan sistematis.",
      icon: "fa-microchip",
      color: "from-cyan-600 to-blue-700",
      badgeColor: "bg-cyan-100 text-cyan-800"
    },
    {
      number: "03",
      title: "Menumbuhkan Lingkungan Belajar Inklusif & Sosial Emosional",
      description: "Membangun iklim kelas yang aman, nyaman, dan berkesadaran penuh (mindfulness) melalui penerapan 5 kompetensi sosial-emosional (CASEL) dan etika digital (digital citizenship).",
      icon: "fa-heart-circle-check",
      color: "from-pink-600 to-rose-700",
      badgeColor: "bg-pink-100 text-pink-800"
    },
    {
      number: "04",
      title: "Pemanfaatan Teknologi Inovatif & Pembelajaran Bauran",
      description: "Mengoptimalkan media ajar interaktif, platform pembelajaran digital (LMS), dan model flipped classroom untuk mendorong kemandirian belajar (self-regulated learning).",
      icon: "fa-laptop-code",
      color: "from-teal-600 to-emerald-700",
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      number: "05",
      title: "Mengembangkan Kepemimpinan Pembelajaran & Budaya Kolaboratif",
      description: "Berperan aktif sebagai guru penggerak/pemimpin pembelajaran yang gemar berbagi praktik baik (best practice) serta berkontribusi nyata bagi komunitas pendidikan.",
      icon: "fa-people-roof",
      color: "from-amber-600 to-orange-700",
      badgeColor: "bg-amber-100 text-amber-800"
    }
  ],
  coreValues: [
    {
      title: "Integritas & Keteladanan",
      slogan: "Ing Ngarso Sung Tulodo",
      description: "Menjadi panutan moral, etika akademik, dan kedisiplinan bagi peserta didik di dalam maupun di luar kelas.",
      icon: "fa-shield-halved"
    },
    {
      title: "Semangat Inovasi",
      slogan: "Ing Madyo Mangun Karso",
      description: "Membangkitkan daya kreasi dan motivasi belajar siswa melalui pendekatan instruksional yang segar dan menarik.",
      icon: "fa-wand-magic-sparkles"
    },
    {
      title: "Pemberdayaan Mandiri",
      slogan: "Tut Wuri Handayani",
      description: "Memberikan kepercayaan dan dorongan penuh kepada peserta didik untuk bertumbuh sesuai potensinya.",
      icon: "fa-seedling"
    },
    {
      title: "Pola Pikir Bertumbuh",
      slogan: "Growth Mindset",
      description: "Memandang tantangan, kegagalan sintaksis/logika, dan umpan balik sebagai sarana belajar esensial.",
      icon: "fa-arrow-trend-up"
    }
  ],
  artifacts: [
    { name: "Dokumen Visi & Misi Guru Profesional Informatika", type: "Dokumen Filosofis", pages: "6 Halaman" },
    { name: "Matriks Rencana Pengembangan Diri & Karir", type: "Rencana Aksi", pages: "4 Halaman" },
    { name: "Pakta Integritas & Kode Etik Pendidik", type: "Surat Komitmen", pages: "2 Halaman" }
  ],
  pdfUrl: "https://drive.google.com/file/d/1adPmJ_cPgLCzAxPVf3KJB1emdjpI1uqU/preview",
  downloadUrl: "https://drive.google.com/file/d/1adPmJ_cPgLCzAxPVf3KJB1emdjpI1uqU/view?usp=sharing"
};

const coursesData = {
  // ================= SEMESTER 1 =================
  "pembelajaran-mendalam-asesmen": {
    id: "pembelajaran-mendalam-asesmen",
    semester: 1,
    title: "Pembelajaran Mendalam dan Asesmen",
    code: "PPG-101",
    sks: 3,
    category: "Mata Kuliah Inti",
    icon: "fa-brain",
    color: "from-blue-600 to-indigo-700",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    summary : "Mata kuliah Pembelajaran Mendalam dan Asesmen dalam PPG membekali guru untuk merancang pembelajaran yang berpusat pada siswa melalui pendekatan Deep Learning dan penguatan fungsi asesmen." ,   

    // Uraian Refleksi PPG (Alur Refleksi Kritis)
    reflectionNarrative: {
      meaningfulExperience: "Melalui mata kuliah ini, saya memahami bahwa pembelajaran yang bermakna dimulai dari merumuskan tujuan akhir pembelajaran (backward design) sebelum menentukan instrumen penilaian dan aktivitas kelas. Pada materi Informatika, seperti materi Algoritma dan Pemrograman, asesmen formatif berkelanjutan menjadi kunci untuk mengidentifikasi miskonsepsi logika peserta didik secara dini.",
      artifactAnalysis: "Artefak pembelajaran yang saya hasilkan mencakup Modul Ajar Informatika Berdiferensiasi (Fase E - Berpikir Komputasional & Algoritma), Rubrik Asesmen Kinerja Proyek Pemrograman Python, serta Lembar Kerja Peserta Didik (LKPD) berbasis studi kasus kontekstual.",
      futureAction: "Dalam praktik mengajar di masa depan, saya akan konsisten menerapkan prinsip Teaching at the Right Level (TaRL) dan memastikan setiap instrumen asesmen tidak sekadar menguji hafalan sintaksis, melainkan mengukur kemampuan pemecahan masalah (problem-solving) dan penalaran komputasional peserta didik."
    },
    
    artifacts: [
      { name: "Modul Ajar Berbasis UbD (Algoritma Pemrograman)", type: "PDF Document", pages: "18 Halaman" },
      { name: "Instrumen Asesmen Diagnostik & Formatif", type: "Rubrik Penilaian", pages: "6 Halaman" },
      { name: "Jurnal Refleksi Diri Siklus Pembelajaran", type: "Laporan Refleksi", pages: "4 Halaman" }
    ],
    
    // Default PDF URL (Sample Google Drive Preview / Sample PDF)
    pdfUrl: "https://drive.google.com/file/d/1S1qgpXjdd5hANtFbYDOUVz8GiuyjUKcH/preview",
    downloadUrl: "https://drive.google.com/file/d/1S1qgpXjdd5hANtFbYDOUVz8GiuyjUKcH/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "filosofi-pendidikan": {
    id: "filosofi-pendidikan",
    semester: 1,
    title: "Filosofi Pendidikan dan Pendidikan Nilai",
    code: "PPG-102",
    sks: 3,
    category: "Mata Kuliah Dasar Kependidikan",
    icon: "fa-monument",
    color: "from-amber-600 to-yellow-700",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    summary: "Telaah kritis terhadap pemikiran Ki Hadjar Dewantara mengenai pendidikan yang memerdekakan, kodrat alam & kodrat zaman, serta internalisasi nilai-nilai luhur Pancasila dalam era transformasi digital.",
    
    reflectionNarrative: {
      meaningfulExperience: "Mata kuliah ini merevolusi paradigma saya mengenai peran guru. Pendidik bukanlah figur yang menuntut atau mengisi botol kosong (tabula rasa), melainkan 'menuntun' segala kodrat yang ada pada anak (Sistem Among: Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani). Dalam konteks Informatika, mengintegrasikan kodrat zaman berarti membimbing peserta didik menjadi kreator teknologi yang beretika, bukan sekadar konsumen pasif.",
      artifactAnalysis: "Artefak utama adalah infografis esai kritis 'Relevansi Filosofi Ki Hadjar Dewantara dalam Pembelajaran Informatika Abad ke-21' dan Rencana Aksi Nyata Penanaman Profil Pelajar Pancasila (terutama dimensi Bernalar Kritis & Kreatif) dalam proyek komputasi.",
      futureAction: "Saya berkomitmen menciptakan iklim belajar yang aman, nyaman, inklusif, dan menghargai keunikan potensi setiap peserta didik tanpa membeda-bedakan latar belakang maupun kecepatan belajarnya."
    },
    
    artifacts: [
      { name: "Esai Refleksi Filosofi Ki Hadjar Dewantara", type: "Makalah Akademik", pages: "8 Halaman" },
      { name: "Peta Konsep Internalisasi Nilai Profil Pelajar Pancasila", type: "Visual Infografis", pages: "2 Halaman" },
      { name: "Dokumentasi Aksi Nyata Pemikiran KHD di Kelas", type: "Portofolio Aksi", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1P14f6KsUNZ5Yk2rFIbcfmOv36jPQ9aOZ/preview",
    downloadUrl: "https://drive.google.com/file/d/1P14f6KsUNZ5Yk2rFIbcfmOv36jPQ9aOZ/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "computational-thinking": {
    id: "computational-thinking",
    semester: 1,
    title: "Computational Thinking",
    code: "PPG-103",
    sks: 3,
    category: "Mata Kuliah Bidang Studi",
    icon: "fa-microchip",
    color: "from-cyan-600 to-blue-700",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    summary: "Penerapan empat pilar Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma) dalam penyelesaian masalah nyata lintas disiplin ilmu dan pembelajaran Informatika.",
    
    reflectionNarrative: {
      meaningfulExperience: "Pembelajaran Computational Thinking (CT) membekali saya metode sistematis untuk membedah problem kompleks menjadi bagian-bagian yang dapat dikelola. Pengalaman paling berkesan adalah merancang aktivitas 'Unplugged CT' di mana peserta didik dapat memahami konsep algoritma pengurutan (sorting) dan pencarian (searching) melalui permainan interaktif tanpa perangkat komputer.",
      artifactAnalysis: "Artefak yang disusun meliputi Lembar Kerja CT berbasis Soal Bebras/Tantangan Kontekstual, Modul Integrasi CT dalam Mata Pelajaran STEM, serta Panduan Pembelajaran Unplugged Coding untuk Sekolah Menengah.",
      futureAction: "Saya akan membudayakan CT sebagai cara berpikir (mindset) fundamental bagi peserta didik, sehingga mereka terbiasa merumuskan solusi terstruktur menghadapi tantangan era kecerdasan buatan (AI)."
    },
    
    artifacts: [
      { name: "Modul Integrasi 4 Pilar CT dalam Kurikulum Informatika", type: "Modul Pembelajaran", pages: "15 Halaman" },
      { name: "Kumpulan Soal & Pembahasan Bebras Task Berjenjang", type: "Bank Soal & Rubrik", pages: "10 Halaman" },
      { name: "Laporan Aksi Nyata Diseminasi CT", type: "Laporan Diseminasi", pages: "6 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1sXl68KdRG0kCEvMcEOJDFKi5zAqRrvkx/preview",
    downloadUrl: "https://drive.google.com/file/d/1sXl68KdRG0kCEvMcEOJDFKi5zAqRrvkx/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "growth-mindset": {
    id: "growth-mindset",
    semester: 1,
    title: "Growth Mindset",
    code: "PPG-104",
    sks: 2,
    category: "Mata Kuliah Pengembangan Diri",
    icon: "fa-seedling",
    color: "from-emerald-600 to-teal-700",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    summary: "Pengembangan pola pikir bertumbuh (Growth Mindset) untuk memandang tantangan, kesalahan sintaksis/logika, dan umpan balik sebagai sarana belajar esensial dalam pendidikan guru dan peserta didik.",
    
    reflectionNarrative: {
      meaningfulExperience: "Dalam belajar pemrograman, sering kali peserta didik mengalami frustrasi ketika menemui error/bug. Mata kuliah Growth Mindset mengajarkan saya pentingnya 'The Power of Yet' (Saya belum bisa, tapi saya akan bisa). Membangun budaya kelas di mana kesalahan dianggap sebagai data penting untuk belajar adalah transformasi terbesar dalam pendekatan pedagogi saya.",
      artifactAnalysis: "Artefak berupa Jurnal Refleksi Pribadi Pengelolaan 'Fixed Mindset Triggers', Panduan Umpan Balik Positif & Konstruktif (Praise the Process, not the Intelligence), serta Desain Aktivitas Reflektif Siswa pasca-debugging kode.",
      futureAction: "Saya akan selalu memberikan apresiasi terhadap proses perjuangan, ketekunan, dan strategi belajar peserta didik, bukan hanya skor akhir atau produk instan."
    },
    
    artifacts: [
      { name: "Jurnal Transformasi Mindset Pendidik", type: "Jurnal Reflektif", pages: "7 Halaman" },
      { name: "Panduan Komunikasi Efektif & Process Praise", type: "Modul Praktis", pages: "5 Halaman" },
      { name: "Lembar Refleksi Diri Peserta Didik 'Belajar dari Bug'", type: "Instrumen Refleksi", pages: "3 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1rVkBotO9Ruj8KL-ZYyPLJleSbyrUmA3x/preview",
    downloadUrl: "https://drive.google.com/file/d/1rVkBotO9Ruj8KL-ZYyPLJleSbyrUmA3x/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "ppl-1": {
    id: "ppl-1",
    semester: 1,
    title: "PPLT (Praktik Pengalaman Lapangan Terbimbing)",
    code: "PPG-105",
    sks: 6,
    category: "Praktik Lapangan",
    icon: "fa-chalkboard-user",
    color: "from-indigo-600 to-purple-700",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    summary: "Orientasi lingkungan sekolah mitra, observasi karakteristik peserta didik, asistensi mengajar, serta pelaksanaan siklus pembelajaran terbimbing pada mata pelajaran Informatika di sekolah.",
    
    reflectionNarrative: {
      meaningfulExperience: "PPLT memberikan laboratorium nyata untuk menguji teori pedagogi yang dipelajari di kampus. Dari observasi langsung di lab komputer sekolah mitra, saya menemukan keberagaman kemampuan teknis peserta didik yang sangat tinggi, yang menuntut penerapan strategi scaffolding yang adaptif dan pendampingan sebaya (peer tutoring).",
      artifactAnalysis: "Artefak mencakup Laporan Observasi Lingkungan Belajar Sekolah Mitra, Perangkat Pembelajaran Siklus Terbimbing 1, 2, dan 3 (Modul Ajar, Media Pembelajaran Interaktif, Lembar Observasi), serta Video Rekaman Praktik Pembelajaran Terbimbing.",
      futureAction: "Memanfaatkan wawasan dari PPLT untuk lebih matang dalam manajemen waktu di laboratorium komputer, antisipasi kendala teknis jaringan, dan pemanfaatan media ajar berbasis web yang interaktif."
    },
    
    artifacts: [
      { name: "Laporan Lengkap Observasi Sekolah Mitra PPLT", type: "Laporan Observasi", pages: "24 Halaman" },
      { name: "Perangkat Pembelajaran Terbimbing Siklus 1 - 3", type: "Perangkat Lengkap", pages: "35 Halaman" },
      { name: "Laporan Evaluasi & Refleksi Dosen Pembimbing & Guru Pamong", type: "Lembar Evaluasi", pages: "8 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/13gslq0lirlvGFn7K9l3Lj-vqq-j3mcqA/preview",
    downloadUrl: "https://drive.google.com/file/d/13gslq0lirlvGFn7K9l3Lj-vqq-j3mcqA/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "pemahaman-peserta-didik": {
    id: "pemahaman-peserta-didik",
    semester: 1,
    title: "Pemahaman tentang Peserta Didik",
    code: "PPG-106",
    sks: 3,
    category: "Mata Kuliah Pedagogik",
    icon: "fa-users-viewfinder",
    color: "from-rose-600 to-pink-700",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    summary: "Kajian mendalam tentang teori perkembangan peserta didik (kognitif, sosio-emosional, moral), profiling gaya belajar, serta perancangan lingkungan belajar yang berpusat pada peserta didik (Culturally Responsive Teaching).",
    
    reflectionNarrative: {
      meaningfulExperience: "Saya menyadari bahwa tidak ada satu metode mengajar yang cocok untuk semua anak (one-size-fits-all). Melalui profiling peserta didik, saya memetakan minat, latar belakang sosial budaya, dan kesiapan belajar (readiness) sebelum merancang proyek Informatika, sehingga materi web design dapat dikaitkan dengan kearifan lokal daerah setempat.",
      artifactAnalysis: "Artefak meliputi Profiling Karakteristik Peserta Didik 1 Rombel, Modul Ajar Berbasis Culturally Responsive Teaching (CRT), dan Panduan Asesmen Non-Kognitif Awal Pembelajaran.",
      futureAction: "Secara rutin melakukan asesmen diagnostik non-kognitif di awal semester untuk memahami kondisi psikososial siswa dan terus membangun relasi positif dengan peserta didik."
    },
    
    artifacts: [
      { name: "Laporan Profiling Karakteristik Peserta Didik", type: "Laporan Analisis Data", pages: "14 Halaman" },
      { name: "Modul Ajar Informatika Berpendekatan CRT", type: "Modul Pembelajaran", pages: "16 Halaman" },
      { name: "Instrumen Angket Minat & Gaya Belajar Digital", type: "Instrumen Asesmen", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1AWAlzBMlNI6bkWOtb6yt1GwUpxEVtIzw/preview",
    downloadUrl: "https://drive.google.com/file/d/1AWAlzBMlNI6bkWOtb6yt1GwUpxEVtIzw/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  // ================= SEMESTER 2 =================
  "pembelajaran-sosial-emosional": {
    id: "pembelajaran-sosial-emosional",
    semester: 2,
    title: "Pembelajaran Sosial Emosional",
    code: "PPG-201",
    sks: 3,
    category: "Mata Kuliah Inti",
    icon: "fa-heart-circle-check",
    color: "from-pink-600 to-rose-700",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    summary: "Integrasi 5 Kompetensi Sosial Emosional (CASEL): Kesadaran Diri, Manajemen Diri, Kesadaran Sosial, Keterampilan Berelasi, dan Pengambilan Keputusan yang Bertanggung Jawab dalam pembelajaran.",
    
    reflectionNarrative: {
      meaningfulExperience: "Pembelajaran PSE membuktikan bahwa keberhasilan akademik dan keterampilan teknis komputasi tidak dapat dipisahkan dari kematangan emosi siswa. Teknik STOP (Stop, Take a breath, Observe, Proceed) dan mindfulness terbukti efektif meredakan kecemasan siswa saat mengerjakan ujian coding atau proyek kolaboratif.",
      artifactAnalysis: "Artefak terdiri dari Rencana Pembelajaran Terintegrasi PSE (Informatika), Panduan Penerapan Teknik Relaksasi & Refleksi Emosi di Kelas Komputer, serta Lembar Observasi Interaksi Sosial Peserta Didik.",
      futureAction: "Membiasakan 'check-in' emosi di 5 menit awal pembelajaran Informatika dan menumbuhkan etika kerja sama tim serta saling menghargai pendapat saat code-review kelompok."
    },
    
    artifacts: [
      { name: "Modul Ajar Terintegrasi 5 Kompetensi CASEL", type: "Modul Pembelajaran", pages: "18 Halaman" },
      { name: "Panduan Praktik Mindful Learning & Teknik STOP", type: "Buku Saku Guru", pages: "6 Halaman" },
      { name: "Jurnal Refleksi PSE dalam Pengelolaan Kelas Digital", type: "Laporan Refleksi", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SamplePSE_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePSE_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "pembelajaran-mendalam-asesmen-lanjut": {
    id: "pembelajaran-mendalam-asesmen-lanjut",
    semester: 2,
    title: "Pembelajan Mendalam dan Asesmen Lanjut",
    code: "PPG-202",
    sks: 3,
    category: "Mata Kuliah Keahlian",
    icon: "fa-cubes-stacked",
    color: "from-blue-700 to-indigo-900",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    summary: "Pengembangan strategi pembelajaran tingkat tinggi (HOTS), evaluasi kurikulum mendalam, asesmen portofolio digital terstandar, dan pemanfaatan data asesmen untuk perbaikan kurikuler berkelanjutan.",
    
    reflectionNarrative: {
      meaningfulExperience: "Mata kuliah lanjutan ini memperluas kapasitas saya dalam merancang tugas unjuk kerja komprehensif. Menilai keterampilan abad ke-21 (kreativitas, kolaborasi, komunikasi, dan komputasi) menuntut rubrik analitik bertingkat dengan deskriptor yang jelas dan terukur.",
      artifactAnalysis: "Artefak berupa Perangkat Evaluasi Portofolio Pemrograman Siswa, Analisis Butir Soal Berbasis Item Response Theory sederhana, dan Desain Penilaian Siklus Proyek Rekayasa Perangkat Lunak Sederhana.",
      futureAction: "Menggunakan analytics data hasil belajar siswa untuk memberikan feedback presisi dan merancang remedial/pengayaan yang relevan secara personal."
    },
    
    artifacts: [
      { name: "Desain Asesmen Autentik HOTS Bidang Rekayasa Perangkat Lunak", type: "Panduan Asesmen", pages: "20 Halaman" },
      { name: "Analisis Butir Soal Asesmen Standar & Daya Pembeda", type: "Laporan Evaluasi", pages: "8 Halaman" },
      { name: "Portofolio Rubrik Penilaian Proyek Berkelanjutan", type: "Rubrik Analitik", pages: "7 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SamplePMALanjut_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePMALanjut_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "project-kepemimpinan": {
    id: "project-kepemimpinan",
    semester: 2,
    title: "Project Kepemimpinan",
    code: "PPG-203",
    sks: 3,
    category: "Mata Kuliah Praktik Kepemimpinan",
    icon: "fa-people-roof",
    color: "from-amber-600 to-orange-700",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    summary: "Perancangan, pelaksanaan, dan evaluasi program pelayanan masyarakat berbasis sekolah/komunitas (Service Learning) dengan prinsip Servant Leadership dan manajemen proyek terstruktur.",
    
    reflectionNarrative: {
      meaningfulExperience: "Pengalaman paling berdampak adalah memimpin inisiatif pemberdayaan 'Workshop Literasi Keamanan Digital & Pemanfaatan AI Positif' bagi remaja dan komunitas sekolah. Saya belajar bagaimana mengelola pemangku kepentingan (stakeholder), menyusun anggaran, memimpin tim, serta mengukur dampak sosial dari program.",
      artifactAnalysis: "Artefak meliputi Proposal Proyek Kepemimpinan, Logbook Monitoring Pelaksanaan Kegiatan, Laporan Pertanggungjawaban (LPJ), Video Dokumenter Proyek, dan Hasil Evaluasi Kepuasan Mitra Komunitas.",
      futureAction: "Menjadi guru pemimpin (teacher leader) yang tidak hanya aktif di ruang kelas, tetapi juga aktif menginisiasi inovasi dan komunitas belajar praktisi di sekolah maupun MGMP."
    },
    
    artifacts: [
      { name: "Proposal Lengkap Program Pengabdian Masyarakat", type: "Proposal Proyek", pages: "22 Halaman" },
      { name: "Laporan Akuntabilitas & Evaluasi Dampak Proyek", type: "Laporan Akhir LPJ", pages: "28 Halaman" },
      { name: "Poster & Media Edukasi Literasi Digital Komunitas", type: "Media Diseminasi", pages: "4 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SampleProjectKepemimpinan_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SampleProjectKepemimpinan_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "pembelajaran-daring-bauran": {
    id: "pembelajaran-daring-bauran",
    semester: 2,
    title: "Pembelajaran Daring & Bauran",
    code: "PPG-204",
    sks: 2,
    category: "Mata Kuliah Teknologi Pendidikan",
    icon: "fa-laptop-code",
    color: "from-teal-600 to-emerald-800",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    summary: "Pemanfaatan Learning Management System (LMS), model Flipped Classroom, synchronous & asynchronous learning strategies, serta perancangan konten multimedia interaktif.",
    
    reflectionNarrative: {
      meaningfulExperience: "Saya mendalami perancangan alur belajar bauran (blended learning) yang efektif, di mana sesi daring asinkron digunakan untuk eksplorasi konsep mandiri (video interaktif / kuis singkat) dan sesi luring tatap muka difokuskan untuk diskusi mendalam, kolaborasi proyek, dan pemecahan masalah.",
      artifactAnalysis: "Artefak mencakup Arsitektur Kelas LMS (Google Classroom / Moodle), Video Pembelajaran Informatika Animatif, Kuis Gamifikasi Pembelajaran, dan Panduan Belajar Mandiri Siswa.",
      futureAction: "Memaksimalkan fleksibilitas pembelajaran bauran untuk mendukung kemandirian belajar siswa (self-regulated learning) tanpa mengurangi kedalaman interaksi humanis guru-siswa."
    },
    
    artifacts: [
      { name: "Desain Instruksional Model Flipped Classroom Mata Pelajaran Informatika", type: "Desain Pembelajaran", pages: "16 Halaman" },
      { name: "Blueprint Pengembangan Media Pembelajaran Interaktif LMS", type: "Dokumen Media", pages: "11 Halaman" },
      { name: "Evaluasi Efektivitas Interaksi Sinkron-Asinkron", type: "Laporan Riset Kecil", pages: "6 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SampleDaringBauran_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SampleDaringBauran_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "seminar-ppg": {
    id: "seminar-ppg",
    semester: 2,
    title: "Seminar PPG",
    code: "PPG-205",
    sks: 2,
    category: "Mata Kuliah Kulminasi & Diseminasi",
    icon: "fa-graduation-cap",
    color: "from-blue-800 to-slate-900",
    badgeColor: "bg-blue-200 text-blue-900 border-blue-300 font-bold",
    summary: "Kulminasi portofolio refleksi seluruh perjalanan akademik PPG, penyusunan artikel ilmiah/best practice, diseminasi karya inovatif, dan perumusan paradigma guru profesional berkelanjutan.",
    
    reflectionNarrative: {
      meaningfulExperience: "Seminar PPG menjadi ruang sintesis untuk melihat kembali transformasi utuh diri saya: dari seorang pembelajar menjadi pendidik profesional yang reflektif. Mampu mempresentasikan best practice inovasi pembelajaran Informatika di hadapan dosen penguji dan rekan sejawat mengukuhkan kesiapan saya mengabdi di dunia pendidikan nasional.",
      artifactAnalysis: "Artefak utama adalah E-Portofolio Web ini, Naskah Best Practice Pembelajaran Inovatif berbasis Computational Thinking & Project-Based Learning, serta Rekaman Presentasi Uji Kompetensi Mahasiswa PPG.",
      futureAction: "Menjadikan refleksi kritis sebagai kebiasaan sehari-hari (habit of mind) sepanjang karier keguruan, terus melakukan Penelitian Tindakan Kelas (PTK), dan menulis publikasi ilmiah pendidikan."
    },
    
    artifacts: [
      { name: "Naskah Best Practice Pembelajaran Informatika Berdiferensiasi", type: "Artikel Ilmiah", pages: "25 Halaman" },
      { name: "Dokumen Kompilasi Portofolio Refleksi Kritis Lengkap", type: "Dokumen Induk", pages: "45 Halaman" },
      { name: "Slide Presentasi Sidang Kulminasi Portofolio PPG", type: "Paparan Uji", pages: "18 Slide" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SampleSeminarPPG_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SampleSeminarPPG_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },

  "ppl-2": {
    id: "ppl-2",
    semester: 2,
    title: "PPL II (Praktik Pengalaman Lapangan II)",
    code: "PPG-206",
    sks: 10,
    category: "Praktik Lapangan Mandiri",
    icon: "fa-award",
    color: "from-violet-700 to-purple-950",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    summary: "Praktik mengajar mandiri secara utuh di sekolah mitra, pelaksanaan Penelitian Tindakan Kelas (PTK) kolaboratif, keterlibatan aktif dalam manajemen sekolah, ekstrakurikuler, dan kegiatan kemasyarakatan sekolah.",
    
    reflectionNarrative: {
      meaningfulExperience: "Pada PPL II, saya memegang tanggung jawab penuh dalam mengelola kelas secara mandiri selama satu semester. Pengalaman mengintegrasikan pembelajaran berdiferensiasi dengan pendekatan STEAM dan membimbing siswa dalam proyek coding aplikasi tepat guna memberikan rasa kepuasan profesional yang luar biasa.",
      artifactAnalysis: "Artefak meliputi Laporan Lengkap PPL II Mandiri, Perangkat Pembelajaran Siklus Mandiri 1-4, Laporan Penelitian Tindakan Kelas (PTK Kolaboratif), serta Portofolio Ekstrakurikuler Robotika/Coding Club.",
      futureAction: "Mengaplikasikan seluruh standar kompetensi guru (Pedagogik, Kepribadian, Sosial, dan Profesional) secara paripurna di satuan pendidikan tempat saya bertugas kelak."
    },
    
    artifacts: [
      { name: "Laporan Komprehensif Praktik Pembelajaran Mandiri PPL II", type: "Laporan Utama", pages: "48 Halaman" },
      { name: "Laporan Penelitian Tindakan Kelas (PTK) Kolaboratif", type: "Laporan Riset", pages: "32 Halaman" },
      { name: "Dokumentasi Praktik Mengajar & Feedback Kepala Sekolah/Guru Pamong", type: "Bukti Kinerja", pages: "15 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1SamplePPL2_UKSW/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePPL2_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
};
