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
 *
 * PETUNJUK PRATINJAU ARTEFAK:
 * Tambahkan properti `artifactPreview` pada data mata kuliah dengan satu objek:
 * {
 *   title: "Video Praktik Mengajar",
 *   type: "video", // atau "document"
 *   embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
 *   openUrl: "https://youtu.be/VIDEO_ID" // opsional
 * }
 * Untuk Google Docs, gunakan URL `/preview` sebagai `embedUrl`.
 * Isi properti `artifactPreview` di setiap objek mata kuliah di bawah ini.
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

const refleksiPpgData = {
  pdfUrl: "https://drive.google.com/file/d/1JslKGBVnoMePuuR5nfGdwCqZHg0FTGwI/preview",
  downloadUrl: "https://drive.google.com/file/d/1JslKGBVnoMePuuR5nfGdwCqZHg0FTGwI/view?usp=sharing"
};

const identifikasiDiriData = {
  id: "identifikasi-diri",
  title: "Identifikasi Diri & Visi Misi",
  subtitle: "Landasan Filosofis, Komitmen Moral, serta Arah Tujuan Strategis Pendidik Informatika",
  visi: {
    title: "Visi",
    statement: "“Mewujudkan pendidikan yang inklusif, bermakna, dan merata agar setiap peserta didik berkembang sesuai potensinya dan siap menghadapi masa depan.”",
    description: "Visi ini merefleksikan cita-cita luhur untuk menuntun segala kodrat alam dan zaman peserta didik agar mereka tidak hanya cakap mengoperasikan teknologi, melainkan mampu menjadi kreator inovatif, beretika, dan pemecah masalah (problem solver) yang adaptif bagi kemajuan bangsa."
  },
  misi: [
    {
      number: "01",
      title: "Berpihak pada murid",
      description: "mengaitkan Informatika dengan masalah nyata dalam kehidupan sehari-hari.",
      icon: "fa-chalkboard-user",
      color: "from-blue-600 to-indigo-700",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      number: "02",
      title: "Belajar secara bermakna",
      description: "mengaitkan Informatika dengan masalah nyata dalam kehidupan sehari-hari.",
      icon: "fa-microchip",
      color: "from-cyan-600 to-blue-700",
      badgeColor: "bg-cyan-100 text-cyan-800"
    },
    {
      number: "03",
      title: "Menumbuhkan daya pikir",
      description: "mengembangkan kemampuan berpikir logis, kritis, kreatif, dan pemecahan masalah.",
      icon: "fa-heart-circle-check",
      color: "from-pink-600 to-rose-700",
      badgeColor: "bg-pink-100 text-pink-800"
    },
    {
      number: "04",
      title: "Membangun keberanian belajar",
      description: "menciptakan kelas yang aman, menghargai perbedaan, dan memandang kesalahan sebagai proses belajar.",
      icon: "fa-laptop-code",
      color: "from-teal-600 to-emerald-700",
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      number: "05",
      title: "Membekali kecakapan digital",
      description: "membimbing peserta didik memanfaatkan teknologi secara bijak dan bertanggung jawab.",
      icon: "fa-people-roof",
      color: "from-amber-600 to-orange-700",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      number: "06",
      title: "Terus bertumbuh sebagai guru",
      description: "melakukan refleksi, menerima masukan, dan memperbaiki pembelajaran secara berkelanjutan.",
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

const karyaInovasiData = {
  title: "Karya Inovasi",
  subtitle: "KKA Learning Quest: Game edukasi untuk memvisualisasikan konsep berpikir komputasional.",
  sections: [
    {
      indicator: "Identifikasi Kebutuhan dan Tantangan",
      questions: [
        {
          question: "Bagaimana hasil amatan dan identifikasi terkait permasalahan atau kebutuhan atau tantangan yang ada dalam pembelajaran?",
          content: [
            {
              type: "paragraph",
              text: "Berdasarkan hasil amatan dan refleksi pembelajaran materi Berpikir Komputasional pada subbab stack, queue, sorting, dan searching di kelas X, murid mengalami kesulitan memahami dan menggambarkan bagaimana proses sorting dan searching berlangsung di dalam komputer. Penjelasan secara lisan maupun melalui video sudah diberikan, tetapi murid tetap merasa bingung."
            },
            {
              type: "paragraph",
              text: "Pencarian sumber belajar berbasis game yang sesuai dengan materi ini juga belum membuahkan hasil. Dengan demikian, dibutuhkan media yang memungkinkan murid menjalankan sendiri proses tersebut sehingga logika kerja komputer lebih mudah dibayangkan."
            }
          ]
        }
      ]
    },
    {
      indicator: "Perumusan gagasan dan tujuan inovasi",
      questions: [
        {
          question: "Berdasarkan identifikasi di atas, bagaimana gagasan kreatif untuk mengembangkan solusi inovatif?",
          content: [
            {
              type: "paragraph",
              text: "Gagasan yang dikembangkan adalah KKA Learning Quest, yaitu game edukasi sederhana yang mensimulasikan cara kerja komputer pada proses stack, queue, sorting, dan searching. Di dalam game, murid menyusun tumpukan dan antrean serta menggeser elemen untuk mengurutkan data secara visual."
            },
            {
              type: "paragraph",
              text: "Dengan cara ini, konsep yang semula abstrak dapat dialami langsung oleh murid. Gagasan ini kreatif karena murid tidak hanya mendengar dan melihat penjelasan, tetapi merasakan prosesnya secara nyata sehingga lebih mudah memahami cara kerja komputer."
            }
          ]
        },
        {
          question: "Bagaimana rumusan tujuan dari gagasan atau solusi inovasi tersebut?",
          content: [
            {
              type: "ordered",
              items: [
                "Mempermudah murid memahami bagian logika komputer yang rumit sehingga mereka dapat menyerap materi dengan lebih cepat dan mudah.",
                "Menjadikan pembelajaran berpikir komputasional lebih menyenangkan melalui bantuan visualisasi dan permainan."
              ]
            }
          ]
        },
        {
          question: "Bagaimana kebaruan, kreativitas, relevansi, kebermanfaatan, dan keefektifan produk inovasi yang telah dikembangkan?",
          content: [
            {
              type: "highlights",
              items: [
                {
                  label: "Kebaruan",
                  text: "Kebaruan terletak pada game itu sendiri, karena belum ditemukan game terpublikasi yang memvisualisasikan logika ini. Pembelajaran sebelumnya hanya memanfaatkan presentasi PowerPoint atau video."
                },
                {
                  label: "Kreativitas",
                  text: "Murid menyimulasikan sendiri proses stack, queue, sorting, dan searching, bukan sekadar menyimak penjelasan."
                },
                {
                  label: "Relevansi",
                  text: "Game selaras dengan materi yang sedang dipelajari dan sesuai dengan karakteristik murid yang menyukai gaya belajar visual dan kinestetik sehingga tidak mudah bosan."
                },
                {
                  label: "Kebermanfaatan",
                  text: "Bagi murid, game ini memudahkan pemahaman, meningkatkan motivasi, dan memberi pengalaman belajar baru. Bagi guru, tersedia dashboard untuk memantau progres belajar murid secara real-time. Bagi calon guru, karya ini menumbuhkan kreasi tanpa batas demi kemajuan pendidikan Indonesia."
                },
                {
                  label: "Keefektifan",
                  text: "Game dapat diakses dari mana saja. Pada uji coba, angket yang diisi 21 murid menghasilkan skor rata-rata 4,19 dari 5, dengan 79,4% jawaban berada pada kategori setuju atau sangat setuju."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      indicator: "Riset dan pengembangan solusi",
      questions: [
        {
          question: "Bagaimana hasil riset sederhana atau informasi karya-karya inovatif yang sudah ada terkait solusi inovatif?",
          content: [
            {
              type: "paragraph",
              text: "Pada tahap awal, dilakukan pencarian aplikasi visualisasi sejenis Scratch yang berfokus pada searching, sorting, stack, dan queue. Aplikasi yang ditemukan adalah VisuAlgo."
            },
            {
              type: "paragraph",
              text: "Namun, VisuAlgo dinilai belum ramah pengguna dan masih membingungkan dalam pengoperasiannya, serta tidak memiliki integrasi progres belajar murid yang dapat dilihat langsung oleh guru. Kekurangan tersebut melatarbelakangi pembuatan KKA Learning Quest yang lebih mudah digunakan dan dipahami murid SMA, dengan dashboard murid yang terhubung ke dashboard guru."
            }
          ]
        },
        {
          question: "Bagaimana rancangan atau prototipe dari karya inovatif tersebut?",
          content: [
            {
              type: "paragraph",
              text: "Prototipe berupa game pembelajaran yang terdiri atas 4 bab. Fitur utamanya meliputi:"
            },
            {
              type: "ordered",
              items: [
                "XP yang diberikan ketika murid menjawab benar dan dikurangi ketika menjawab salah, disertai sistem level.",
                "Badge yang diperoleh setelah murid menyelesaikan tantangan satu subbab.",
                "Dashboard guru untuk mengakses dan memantau hasil progres belajar murid."
              ]
            }
          ]
        }
      ]
    },
    {
      indicator: "Implementasi dan Penerapan",
      questions: [
        {
          question: "Jika karya inovasi sudah pernah diimplementasikan, bagaimana proses implementasinya?",
          content: [
            {
              type: "paragraph",
              text: "Karya sudah diimplementasikan pada kelas X.2 SMA Negeri 3 Salatiga pada hari Jumat, 16 Oktober 2026. Prosesnya: (1) murid diarahkan mendaftar di aplikasi dengan mengisi nama lengkap, username, dan password; (2) murid mencoba menyelesaikan misi permainan; (3) murid mengisi angket untuk mengukur kegunaan aplikasi."
            },
            {
              type: "paragraph",
              text: "Dashboard guru mencatat 72 akun murid terdaftar, 68 di antaranya telah mulai mengerjakan misi. Penyelesaian 100% tercatat pada Bab 1 oleh 37 murid, Bab 2 oleh 40 murid, Bab 3 oleh 27 murid, dan Bab 4 oleh 5 murid. Rata-rata XP adalah 691,5, rata-rata badge 8,8, dan 30 murid telah mencapai level 5."
            }
          ]
        },
        {
          question: "Jika karya inovasi belum pernah diimplementasikan, bagaimana rancangan proses implementasinya?",
          content: [
            {
              type: "paragraph",
              text: "Tidak berlaku, karena karya inovasi sudah pernah diimplementasikan (lihat jawaban pada baris sebelumnya)."
            }
          ]
        }
      ]
    },
    {
      indicator: "Evaluasi",
      questions: [
        {
          question: "Bagaimana tahapan evaluasi untuk mengukur tingkat keberhasilan inovasi tersebut?",
          content: [
            {
              type: "paragraph",
              text: "Evaluasi dilakukan melalui dua tahap:"
            },
            {
              type: "ordered",
              items: [
                "Angket kuesioner berisi 22 pernyataan berskala 1–5 yang mencakup pemahaman materi (7 butir), kemudahan penggunaan dan tampilan (7 butir), serta motivasi belajar (8 butir), ditambah dua pertanyaan terbuka tentang bagian yang paling disukai dan saran perbaikan.",
                "Pemantauan dashboard guru untuk melihat XP, level, persentase penyelesaian tiap bab, dan badge murid."
              ]
            },
            {
              type: "highlights",
              items: [
                {
                  label: "Hasil angket (21 responden)",
                  text: "Skor rata-rata keseluruhan 4,19 dari 5 (79,4% setuju atau sangat setuju). Rata-rata per aspek: motivasi belajar 4,30, pemahaman materi 4,21, dan kemudahan penggunaan 4,04. Butir tertinggi adalah game membantu memahami materi lebih cepat dan keinginan merekomendasikan game kepada teman (masing-masing 4,43), sedangkan yang terendah adalah kenyamanan efek suara dan musik latar (3,71)."
                },
                {
                  label: "Masukan murid",
                  text: "Petunjuk permainan diperjelas, teks dibuat lebih terbaca terhadap latar, tampilan visual dan elemen game lebih bervariasi, serta tingkat kesulitan ditingkatkan agar lebih menantang. Bab 2 (stack dan queue) dan Bab 3 (mengendalikan robot) paling banyak disebut sebagai bagian favorit."
                }
              ]
            },
            {
              type: "paragraph",
              text: "Hasil angket dan data dashboard digunakan sebagai dasar perbaikan game selanjutnya."
            }
          ]
        }
      ]
    }
  ]
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
      meaningfulExperience: "Materi kuliah tentang Pembelajaran Mendalam dan Asesmen sangat relevan bagi peran calon guru. Melalui pembelajaran ini, mahasiswa tidak hanya memahami teori, tetapi juga praktik merencanakan dan mengelola asesmen. Pentingnya melakukan asesmen awal disoroti untuk mengetahui kesiapan dan kebutuhan siswa, yang membantu dalam menyusun RPP. Penerapan proses ini di kelas memungkinkan siswa terlibat lebih aktif dalam pembelajaran, menjadikan guru sebagai fasilitator yang menyesuaikan metode berdasarkan hasil asesmen. Materi ini meningkatkan kemampuan guru untuk membangun pembelajaran yang terencana dan berpusat pada siswa.",
      challenge: "Salah satu tantangan yang dihadapi adalah perbedaan antara perencanaan pembelajaran dalam perkuliahan dan praktik di kelas. Meskipun telah belajar menyusun RPP secara sistematis, pelaksanaannya seringkali tidak sesuai rencana karena faktor seperti alokasi waktu, respons siswa, dan situasi kelas yang tidak terduga. Sebagai calon guru perlu melakukan penyesuaian, improvisasi, dan perbaikan berdasarkan kondisi aktual agar tujuan pembelajaran tetap tercapai. Pengalaman ini mengajarkan pentingnya fleksibilitas dan kemampuan mengambil keputusan cepat bagi guru dalam menghadapi realitas di lapangan.",
      artifactAnalysis: "Konsep utama yang dipelajari calon guru adalah integrasi pembelajaran mendalam dan asesmen peserta didik berdasarkan prinsip Mindful, Meaningful, dan Joyful. Pembelajaran menggunakan pendekatan alur mundur, di mana asesmen berfungsi tidak hanya sebagai evaluasi akhir, tetapi juga sebagai alat untuk memetakan kebutuhan dan memandu perkembangan belajar. Dengan asesmen autentik dan pendekatan berdiferensiasi, materi pelajaran dihubungkan dengan konteks nyata, memicu berpikir kritis, di lingkungan kelas yang aman dan menyenangkan. Hal ini menggeser peran guru dari penyampai materi menjadi fasilitator yang merancang pengalaman belajar yang adaptif dan memberdayakan potensi peserta didik.",
      futureAction: "Setelah mempelajari materi perkuliahan, saya ingin mengubah cara merancang dan melaksanakan pembelajaran dengan lebih memperhatikan karakteristik, kebutuhan, dan perkembangan peserta didik serta menyesuaikannya dengan perkembangan zaman. Saya ingin menjadi “Guru Gen Z” yang mampu menciptakan pembelajaran yang menyenangkan, relevan, interaktif, dan dekat dengan kehidupan peserta didik melalui pemanfaatan teknologi dan tren yang mereka kenal. Namun, mengikuti perkembangan zaman tetap harus diimbangi dengan menjaga kualitas dan kedalaman ilmu, sehingga materi akademik dapat dikemas secara menarik, sederhana, dan mudah dipahami tanpa menghilangkan tujuan pembelajaran. Dengan demikian, saya berharap dapat menjadi guru yang adaptif dan mampu membuat peserta didik memahami bahwa apa yang dipelajari memiliki kaitan dengan kehidupan mereka."
    },
    
    artifacts: [
      { name: "Modul Ajar Berbasis UbD (Algoritma Pemrograman)", type: "Document", pages: "18 Halaman" },
      { name: "Instrumen Asesmen Diagnostik & Formatif", type: "Rubrik Penilaian", pages: "6 Halaman" },
      { name: "Jurnal Refleksi Diri Siklus Pembelajaran", type: "Laporan Refleksi", pages: "4 Halaman" }
    ],
    
    // Default PDF URL (Sample Google Drive Preview / Sample PDF)
    pdfUrl: "https://drive.google.com/file/d/1S1qgpXjdd5hANtFbYDOUVz8GiuyjUKcH/preview",
    downloadUrl: "https://drive.google.com/file/d/1S1qgpXjdd5hANtFbYDOUVz8GiuyjUKcH/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",

    artifactPreview: {
      title: "RPP",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/18YR3iH-fPQElrn7I1ZKz3ymAQmzys0Np/preview",
      openUrl: "https://docs.google.com/document/d/18YR3iH-fPQElrn7I1ZKz3ymAQmzys0Np/edit"
    },
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
      meaningfulExperience: "Materi perkuliahan Filosofi Pendidikan dan Pendidikan Nilai memiliki keterkaitan erat dengan peran saya sebagai calon guru. Saya memahami bahwa tugas guru tidak hanya menyampaikan pengetahuan, tetapi juga menuntun peserta didik agar berkembang menjadi pribadi yang berkarakter dan berbudi pekerti. Pemikiran Ki Hajar Dewantara tentang pendidikan yang sesuai dengan kodrat alam dan kodrat zaman menyadarkan saya pentingnya memahami perkembangan peserta didik dan zaman tanpa meninggalkan nilai-nilai pendidikan. Oleh karena itu, saya perlu mempersiapkan diri menjadi guru yang tidak hanya mampu mengajar, tetapi juga mendidik, menjadi teladan, dan menuntun peserta didik agar berkembang secara utuh sesuai dengan zamannya.",
      challenge: "Sebelum mempelajari materi ini, saya berpikir bahwa pendidikan lebih berfokus pada penyampaian materi dan pencapaian nilai sesuai standar. Setelah mempelajari pemikiran Ki Hajar Dewantara tentang kodrat alam dan kodrat zaman, Sistem Among, serta Tri Pusat Pendidikan, cara pandang saya berubah. Saya memahami bahwa pendidikan seharusnya menuntun setiap peserta didik sesuai potensi, karakteristik, dan perkembangan zamannya, sehingga guru perlu menyesuaikan pembelajaran dengan kebutuhan dan kondisi nyata peserta didik.",
      artifactAnalysis: "Melalui mata kuliah ini, saya memahami beberapa konsep penting sebagai landasan menjadi guru, yaitu pendidikan yang menuntun peserta didik sesuai kodrat alam dan kodrat zamannya, pembelajaran yang berpihak pada kebutuhan dan karakteristik peserta didik, serta pentingnya refleksi untuk meningkatkan kualitas pembelajaran. Konsep tersebut juga berkaitan dengan mata kuliah lain, seperti Pembelajaran Mendalam dan Asesmen serta Pemahaman Peserta Didik, karena sama-sama menekankan pentingnya memahami kebutuhan peserta didik sebelum menentukan strategi dan asesmen pembelajaran.",
      futureAction: "Setelah mempelajari Filosofi Pendidikan dan Pendidikan Nilai, saya ingin mengubah cara pandang dalam menjalankan peran sebagai guru. Saya tidak ingin melihat peserta didik hanya dari kemampuan akademik, tetapi juga memahami karakter, potensi, latar belakang, dan kebutuhan mereka. Saya ingin menjadi guru yang mampu mengikuti perkembangan zaman dan memanfaatkan teknologi untuk menciptakan pembelajaran yang relevan, namun tetap menanamkan nilai, karakter, dan budi pekerti. Saya juga ingin menerapkan pemikiran Ki Hajar Dewantara bahwa guru adalah penuntun, sehingga tidak hanya menuntut peserta didik mencapai target, tetapi juga memberikan ruang bagi mereka untuk berkembang sesuai potensi dan kebutuhannya."
    },
    
    artifacts: [
      { name: "Esai Refleksi Filosofi Ki Hadjar Dewantara", type: "Makalah Akademik", pages: "8 Halaman" },
      { name: "Peta Konsep Internalisasi Nilai Profil Pelajar Pancasila", type: "Visual Infografis", pages: "2 Halaman" },
      { name: "Dokumentasi Aksi Nyata Pemikiran KHD di Kelas", type: "Portofolio Aksi", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1P14f6KsUNZ5Yk2rFIbcfmOv36jPQ9aOZ/preview",
    downloadUrl: "https://drive.google.com/file/d/1P14f6KsUNZ5Yk2rFIbcfmOv36jPQ9aOZ/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Filosofi Pendidikan",
      type: "document",
      embedUrl: "https://drive.google.com/file/d/1TdGSz6zLAMnMl2GXmIoVftAcyuGwINzR/preview",
      openUrl: "https://drive.google.com/file/d/1TdGSz6zLAMnMl2GXmIoVftAcyuGwINzR/view"
    }
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
      meaningfulExperience: "Computational Thinking (CT) menjadi sarana bagi saya sebagai calon guru untuk menghadapi tantangan nyata di kelas. Fondasi CT membantu menguraikan masalah rumit seperti beragamnya kemampuan siswa dan keterbatasan media menjadi langkah-langkah solutif yang sistematis dan tepat sasaran.",
      challenge: "Mengubah pandangan awal bahwa CT bukan hanya sebatas coding, pemrograman, atau komputer. CT adalah pola pikir pemecahan masalah yang dapat diterapkan secara unplugged (tanpa komputer) dalam kehidupan sehari-hari maupun berbagai mata pelajaran.",
      artifactAnalysis: "Penguasaan 4 fondasi CT (Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma), penerapan CT melalui analisis latihan soal Bebras, serta pemetaan integrasi CT secara eksplisit ke dalam sintaks RPP/Modul Ajar dan LKPD.",
      futureAction: "Komitmen untuk mengintegrasikan fondasi CT secara konsisten dalam RPP/Modul Ajar, menggeser peran mengajar dari sekadar teacher-centered menjadi fasilitator berpikir kritis, serta membiasakan siswa dengan latihan pemecahan masalah berbasis CT."
    },
    
    artifacts: [
      { name: "Modul Integrasi 4 Pilar CT dalam Kurikulum Informatika", type: "Modul Pembelajaran", pages: "15 Halaman" },
      { name: "Kumpulan Soal & Pembahasan Bebras Task Berjenjang", type: "Bank Soal & Rubrik", pages: "10 Halaman" },
      { name: "Laporan Aksi Nyata Diseminasi CT", type: "Laporan Diseminasi", pages: "6 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1sXl68KdRG0kCEvMcEOJDFKi5zAqRrvkx/preview",
    downloadUrl: "https://drive.google.com/file/d/1sXl68KdRG0kCEvMcEOJDFKi5zAqRrvkx/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Computational Thinking",
      type: "document",
      embedUrl: "https://drive.google.com/file/d/133lgiU2YohYFqIT-Tgw7RZtok00of508/preview",
      openUrl: "https://drive.google.com/file/d/133lgiU2YohYFqIT-Tgw7RZtok00of508/view"
    }
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
      challenge: "Tantangan terbesar adalah menjaga konsistensi umpan balik positif ketika peserta didik berulang kali mengalami kegagalan dan kehilangan kepercayaan diri saat melakukan debugging.",
      artifactAnalysis: "Fokus pada komunikasi berorientasi proses (Growth Mindset Voice), penggunaan kata 'Belum' (The Power of 'Yet'), guru sebagai teladan, dan pemberian umpan balik konstruktif.",
      futureAction: "Komitmen untuk mengubah tutur kata mengajar tanpa melabeli, menyikapi kesalahan siswa sebagai momen belajar, serta terus mengevaluasi dan mengembangkan diri."
    },
    
    artifacts: [
      { name: "Jurnal Transformasi Mindset Pendidik", type: "Jurnal Reflektif", pages: "7 Halaman" },
      { name: "Panduan Komunikasi Efektif & Process Praise", type: "Modul Praktis", pages: "5 Halaman" },
      { name: "Lembar Refleksi Diri Peserta Didik 'Belajar dari Bug'", type: "Instrumen Refleksi", pages: "3 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1rVkBotO9Ruj8KL-ZYyPLJleSbyrUmA3x/preview",
    downloadUrl: "https://drive.google.com/file/d/1rVkBotO9Ruj8KL-ZYyPLJleSbyrUmA3x/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Growth Mindset",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1s3f5qpDQR1guRJraf9bLRlTNc9u60qL-/preview",
      openUrl: "https://docs.google.com/document/d/1s3f5qpDQR1guRJraf9bLRlTNc9u60qL-/view"
    }
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
      meaningfulExperience: "Pengalaman PPL Terbimbing menghubungkan teori perkuliahan dengan praktik nyata di lapangan, memperlihatkan bahwa peran guru tidak sebatas menguasai materi tetapi juga mencakup perencanaan, pengolahan waktu, hingga pengelolaan kelas yang kondusif. Praktik ini melatih kepekaan guru untuk mengambil keputusan spontan ketika dinamika kelas tidak berjalan sesuai dengan rencana awal.",
      challenge: "Tantangan terbesar yang dihadapi adalah kenyataan bahwa perencanaan pembelajaran tidak bisa dibuat seragam (one size fits all). Guru dituntut menyusun modul ajar berbasis asesmen diagnostik untuk memetakan kebutuhan awal siswa, menerapkan diferensiasi pada kelas heterogen, serta menyadari bahwa kendala belajar siswa sering kali bersumber dari ketidaktepatan strategi pengajaran yang digunakan guru.",
      artifactAnalysis: "Konsep utama yang dipelajari meliputi studi observasi untuk memahami karakter siswa dan iklim sekolah, asistensi mengajar bersama guru pamong, pelaksanaan praktik mengajar terbimbing berbasis model inovatif seperti PBL/PjBL, serta penerapan siklus refleksi berkelanjutan berdasarkan umpan balik dosen dan guru pamong.",
      futureAction: "Perubahan yang berkomitmen dilakukan adalah menggeser paradigma dari teacher-centered menjadi student-centered, selalu mengawali perancangan modul dengan asesmen diagnostik, menerapkan pembelajaran berdiferensiasi dan socio-emotional learning (SEL), serta rutin menulis jurnal refleksi harian pascamengajar untuk perbaikan kualitas pembelajaran."
    },
    
    artifacts: [
      { name: "Laporan Lengkap Observasi Sekolah Mitra PPLT", type: "Laporan Observasi", pages: "24 Halaman" },
      { name: "Perangkat Pembelajaran Terbimbing Siklus 1 - 3", type: "Perangkat Lengkap", pages: "35 Halaman" },
      { name: "Laporan Evaluasi & Refleksi Dosen Pembimbing & Guru Pamong", type: "Lembar Evaluasi", pages: "8 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/13gslq0lirlvGFn7K9l3Lj-vqq-j3mcqA/preview",
    downloadUrl: "https://drive.google.com/file/d/13gslq0lirlvGFn7K9l3Lj-vqq-j3mcqA/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak PPLT",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1z3taLUXkz2IVIk2vVnDdTe3k0MSdFHRB_srVbpUO-YY/preview",
      openUrl: "https://docs.google.com/document/d/1z3taLUXkz2IVIk2vVnDdTe3k0MSdFHRB_srVbpUO-YY/view"
    }
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
      meaningfulExperience: "Materi perkuliahan ini memiliki keterkaitan yang sangat erat dengan peran sebagai calon guru karena menekankan bahwa perencanaan pembelajaran harus berangkat dari pemahaman terhadap karakteristik, tahapan perkembangan, motivasi, dan kebutuhan unik setiap peserta didik. Pemahaman mendalam ini menjadi fondasi utama bagi guru dalam merancang serta menentukan pendekatan, metode, strategi, hingga asesmen yang paling tepat agar proses pembelajaran dapat berlangsung secara efektif, relevan, dan bermakna bagi seluruh siswa.",
      challenge: "Tantangan terbesar yang dihadapi dalam praktik lapangan adalah keterbatasan waktu untuk menerapkan pembelajaran berdiferensiasi secara optimal, seperti saat membagi perhatian, memberikan pendampingan (scaffolding), atau menyajikan tantangan tambahan. Selain itu, dari sudut pandang peserta didik, perbedaan perlakuan atau tugas sering kali disalahartikan sebagai tindakan membeda-bedakan, sehingga guru dituntut untuk membangun komunikasi yang jelas agar murid memahami bahwa diferensiasi dilakukan murni untuk memenuhi kebutuhan belajar mereka secara adil.",
      artifactAnalysis: "Konsep utama yang dipelajari adalah pentingnya menciptakan pembelajaran yang berpihak pada peserta didik dengan memperlakukan mereka sebagai individu unik yang memiliki potensi dan latar belakang beragam. Pemetaan awal melalui observasi dan asesmen diagnosis menjadi langkah krusial sebelum memilih strategi pembelajaran. Seluruh konsep ini juga terintegrasi dan saling mendukung dengan mata kuliah Filosofi Pendidikan, Pendidikan Nilai, serta Pembelajaran Mendalam dan Asesmen.",
      futureAction: "Perubahan yang akan dilakukan adalah menggeser fokus dalam merancang pembelajaran, dari yang semula berpatokan pada penyampaian materi menjadi pengenalan karakteristik serta kemampuan awal peserta didik terlebih dahulu. Ke depannya, proses mengajar akan dibiasakan dengan menghadirkan variasi aktivitas berbasis diskusi dan pemecahan masalah aktif, yang diimbangi dengan pengamatan berkelanjutan terhadap perkembangan siswa sebagai dasar pengambilan keputusan pedagogis."
    },
    
    artifacts: [
      { name: "Laporan Profiling Karakteristik Peserta Didik", type: "Laporan Analisis Data", pages: "14 Halaman" },
      { name: "Modul Ajar Informatika Berpendekatan CRT", type: "Modul Pembelajaran", pages: "16 Halaman" },
      { name: "Instrumen Angket Minat & Gaya Belajar Digital", type: "Instrumen Asesmen", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1AWAlzBMlNI6bkWOtb6yt1GwUpxEVtIzw/preview",
    downloadUrl: "https://drive.google.com/file/d/1AWAlzBMlNI6bkWOtb6yt1GwUpxEVtIzw/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Pemahaman Peserta Didik",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1UNN-P0edZZW5PAx_AC3O8Ik2L1jpqfkP/preview",
      openUrl: "https://docs.google.com/document/d/1UNN-P0edZZW5PAx_AC3O8Ik2L1jpqfkP/view"
    }
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
      meaningfulExperience: "Materi Pembelajaran Sosial Emosional (PSE) relevan dengan kesiapan saya sebagai calon pendidik karena membekali saya kemampuan mengenali dan mengelola emosi diri maupun peserta didik. Sementara itu, Experiential Learning (EL) memberikan pemahaman bahwa pengalaman langsung dapat menjadikan pembelajaran lebih bermakna dan berkesan.",
      challenge: "Penerapan Experiential Learning (EL) menghadapi kendala berupa keterbatasan waktu untuk menyelesaikan seluruh tahapan siklus serta kesulitan merancang pembelajaran berbasis pengalaman pada materi yang bersifat teoretis dan abstrak.",
      artifactAnalysis: "Konsep kunci yang saya pelajari adalah pendekatan Experiential Learning (EL) menurut David A. Kolb (1984), yaitu pembelajaran melalui transformasi pengalaman. Pendekatan ini terdiri atas empat tahap: pengalaman nyata, observasi reflektif, konseptualisasi abstrak, dan eksperimentasi aktif yang saling berkaitan untuk menciptakan pembelajaran bermakna.",
      futureAction: "Setelah mempelajari mata kuliah ini, saya akan membiasakan check-in emosi sebelum pembelajaran dan mengintegrasikan Experiential Learning secara fleksibel agar pembelajaran lebih kontekstual, bermakna, dan berkesan bagi peserta didik."
    },
    
    artifacts: [
      { name: "Modul Ajar Terintegrasi 5 Kompetensi CASEL", type: "Modul Pembelajaran", pages: "18 Halaman" },
      { name: "Panduan Praktik Mindful Learning & Teknik STOP", type: "Buku Saku Guru", pages: "6 Halaman" },
      { name: "Jurnal Refleksi PSE dalam Pengelolaan Kelas Digital", type: "Laporan Refleksi", pages: "5 Halaman" }
    ],
    
    pdfUrl: "https://docs.google.com/document/d/1zfxEFjfQ6HcOuFpElXS_SSjLpjoxQMw6/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePSE_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Pembelajaran Sosial Emosional",
      type: "video",
      embedUrl: "https://drive.google.com/file/d/1nNuf7XqIcUZkXwyyAYlP_9z3uzCVf3Xi/preview",
      openUrl: "https://drive.google.com/file/d/1nNuf7XqIcUZkXwyyAYlP_9z3uzCVf3Xi/view"
    }
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
      meaningfulExperience: "Mata kuliah ini penting bagi saya sebagai calon guru untuk memahami keberagaman karakteristik dan kebutuhan peserta didik serta merancang pembelajaran berbasis DUP agar semua murid memperoleh kesempatan belajar yang setara dan bermakna.",
      challenge: "Sebelumnya, saya menyamaratakan pembelajaran untuk semua murid. Kini, saya memahami pentingnya asesmen diagnostik untuk mengenali kebutuhan individual serta menerapkan tiga prinsip DUP sejak awal perencanaan agar setiap murid memperoleh kesempatan belajar yang setara. ",
      artifactAnalysis: "Konsep utama yang saya pelajari meliputi analisis karakteristik dan kebutuhan peserta didik, penerapan tiga prinsip DUP (representasi, tindakan dan ekspresi, serta keterlibatan), dan penyusunan asesmen yang adaptif serta inklusif.",
      futureAction: "Saya berkomitmen melakukan pemetaan profil murid secara rutin, merancang modul ajar berbasis DUP yang fleksibel, serta memberikan pilihan bentuk asesmen agar setiap murid dapat menunjukkan pemahamannya sesuai kebutuhan dan potensinya. "
    },
    
    artifacts: [
      { name: "Desain Asesmen Autentik HOTS Bidang Rekayasa Perangkat Lunak", type: "Panduan Asesmen", pages: "20 Halaman" },
      { name: "Analisis Butir Soal Asesmen Standar & Daya Pembeda", type: "Laporan Evaluasi", pages: "8 Halaman" },
      { name: "Portofolio Rubrik Penilaian Proyek Berkelanjutan", type: "Rubrik Analitik", pages: "7 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1K-CMxUz82tHysczxlWeFe33uI433BfwP/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePMALanjut_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Pembelajaran Mendalam dan Asesmen Lanjut",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1DIGtp7YHK_rHz4VEOj9h8Ci2BU30QLDV/preview",
      openUrl: "https://docs.google.com/document/d/1DIGtp7YHK_rHz4VEOj9h8Ci2BU30QLDV/view"
    }
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
      meaningfulExperience: "Mata kuliah ini relevan bagi saya sebagai calon pendidik dan pemimpin di lingkungan sekolah. Saya menyadari bahwa instructional leadership menuntut guru tidak hanya mengajar, tetapi juga menjadi agen perubahan yang mampu merancang solusi nyata untuk meningkatkan kualitas pendidikan.",
      challenge: "Tantangan yang saya hadapi meliputi pemetaan kebutuhan lapangan secara objektif, membangun kerja sama dan komunikasi tim, serta menyesuaikan strategi ketika muncul kendala agar tujuan projek tetap tercapai.",
      artifactAnalysis: "Konsep utama yang saya pelajari meliputi kepemimpinan pembelajaran, perencanaan projek berbasis kebutuhan lapangan, manajemen projek yang adaptif, serta monitoring dan evaluasi untuk memastikan dampak dan keberlanjutan projek.",
      futureAction: "Saya berkomitmen menerapkan kepemimpinan pembelajaran dengan mengidentifikasi kebutuhan sekolah secara objektif, menginisiasi inovasi yang berpihak pada murid, membangun kolaborasi dengan rekan sejawat, serta memastikan setiap program memiliki evaluasi dan keberlanjutan yang jelas."
    },
    
    artifacts: [
      { name: "Proposal Lengkap Program Pengabdian Masyarakat", type: "Proposal Proyek", pages: "22 Halaman" },
      { name: "Laporan Akuntabilitas & Evaluasi Dampak Proyek", type: "Laporan Akhir LPJ", pages: "28 Halaman" },
      { name: "Poster & Media Edukasi Literasi Digital Komunitas", type: "Media Diseminasi", pages: "4 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1smwCpIjvqhJvMif5StpOqAMp1szEkJrt/preview",
    downloadUrl: "https://drive.google.com/file/d/1SampleProjectKepemimpinan_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Project Kepemimpinan",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1rJSz4i2kaTCyk8cL6KquzRx0nNhAmCk6/preview",
      openUrl: "https://docs.google.com/document/d/1rJSz4i2kaTCyk8cL6KquzRx0nNhAmCk6/view"
    }
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
      meaningfulExperience: "Mata kuliah ini relevan bagi saya sebagai calon guru untuk memahami integrasi teknologi dalam pembelajaran, seperti daring, blended learning, dan hybrid learning, agar pembelajaran sesuai dengan perkembangan teknologi dan kebutuhan peserta didik.",
      challenge: "Sebelumnya, saya memandang pembelajaran daring dan bauran sebatas penggunaan media digital. Kini, saya memahami pentingnya mempertimbangkan akses teknologi, kemampuan digital, keterlibatan murid, serta keseimbangan kegiatan daring dan tatap muka agar pembelajaran tetap efektif.",
      artifactAnalysis: "Konsep utama yang saya pelajari meliputi kesenjangan digital, pemanfaatan AI, pembelajaran daring dan blended learning, desain instruksional digital, serta penerapan model PjBL, PBL, dan flipped classroom yang dirancang sesuai tujuan, aktivitas, media, dan asesmen pembelajaran.",
      futureAction: "Ke depannya, saya akan lebih selektif memanfaatkan teknologi sesuai kebutuhan peserta didik, mengembangkan media digital interaktif, memilih model pembelajaran yang tepat, serta mempertimbangkan akses dan kesiapan murid agar pembelajaran lebih bermakna."  
    },
    
    artifacts: [
      { name: "Desain Instruksional Model Flipped Classroom Mata Pelajaran Informatika", type: "Desain Pembelajaran", pages: "16 Halaman" },
      { name: "Blueprint Pengembangan Media Pembelajaran Interaktif LMS", type: "Dokumen Media", pages: "11 Halaman" },
      { name: "Evaluasi Efektivitas Interaksi Sinkron-Asinkron", type: "Laporan Riset Kecil", pages: "6 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1PNSQ8HwVrz4v0AztH5CKLPBn6xHU8wxM/preview",
    downloadUrl: "https://drive.google.com/file/d/1SampleDaringBauran_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak Pembelajaran Daring dan Bauran",
      type: "document",
      embedUrl: "https://docs.google.com/document/d/1fnMbgNaEjXYiNmPQ3WQshALE4adMS5Lg/preview",
      openUrl: "https://docs.google.com/document/d/1fnMbgNaEjXYiNmPQ3WQshALE4adMS5Lg/view"
    }
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
    meaningfulExperience: "Mata kuliah PPL Mandiri relevan bagi saya sebagai calon pendidik karena memberikan pengalaman langsung di sekolah serta membantu saya menghubungkan teori pedagogis dengan kondisi nyata dan dinamika pembelajaran di kelas.",
      challenge: "Tantangan terbesar saya adalah menyesuaikan diri dengan dinamika kelas dan karakter murid yang beragam. Sebagai calon guru pemula, saya masih belajar mengelola kelas, menjaga kedisiplinan, serta menghadapi perbedaan motivasi dan sikap murid selama pembelajaran.",
      artifactAnalysis: "Konsep penting yang saya pelajari meliputi keberagaman karakteristik murid, strategi pengelolaan kelas yang positif, pentingnya membangun hubungan baik dengan murid, serta refleksi diri untuk memperbaiki kualitas pembelajaran secara berkelanjutan.",
      futureAction: "Saya berkomitmen untuk terus belajar memahami kebutuhan murid, menerapkan pengelolaan kelas yang humanis, membangun kesepakatan belajar, serta menggunakan metode interaktif agar tercipta lingkungan belajar yang aman, nyaman, dan bermakna."  
    },
    
    artifacts: [
      { name: "Laporan Komprehensif Praktik Pembelajaran Mandiri PPL II", type: "Laporan Utama", pages: "48 Halaman" },
      { name: "Laporan Penelitian Tindakan Kelas (PTK) Kolaboratif", type: "Laporan Riset", pages: "32 Halaman" },
      { name: "Dokumentasi Praktik Mengajar & Feedback Kepala Sekolah/Guru Pamong", type: "Bukti Kinerja", pages: "15 Halaman" }
    ],
    
    pdfUrl: "https://drive.google.com/file/d/1j_XP_y_83Ot8azszaNVcVuAwGaimPp0R/preview",
    downloadUrl: "https://drive.google.com/file/d/1SamplePPL2_UKSW/view?usp=sharing",
    sampleAlternativeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    artifactPreview: {
      title: "Artefak PPL II",
      type: "video",
      embedUrl: "https://drive.google.com/file/d/1-hQ73RUDA6En65cjRP8tpvlHaTEak4AC/preview",
      openUrl: "https://drive.google.com/file/d/1-hQ73RUDA6En65cjRP8tpvlHaTEak4AC/view"
    }
  }
};

// Adaptasi narasi refleksi ke format 4C yang digunakan oleh app.js.
Object.values(coursesData).forEach((course) => {
  const narrative = course.reflectionNarrative;
  if (!narrative) return;

  course.reflection = {
    connection: narrative.meaningfulExperience,
    challenge: narrative.challenge,
    concept: narrative.artifactAnalysis,
    change: narrative.futureAction
  };
});
