/**
 * APP.JS - Logika Utama E-Portofolio Refleksi Seminar PPG
 * Mahasiswa: Brilian Herda (NIM: 95202530N) - UKSW
 */

// State Aplikasi
let currentView = "dashboard";
let currentCourseId = null;
let currentFilter = "all";

// Inisialisasi Aplikasi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initMobileMenu();
  initHeaderScroll();
  handleRouting();

  // Tangani event navigasi browser (Back/Forward) & Hash change
  window.addEventListener("hashchange", handleRouting);
});

function initHeaderScroll() {
  const updateHeader = () => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const hash = window.location.hash.replace("#", "");
    const isDashboard = !hash || hash === "dashboard" || hash === "beranda";
    header.classList.toggle("is-scrolled", window.scrollY > 24 || !isDashboard);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

/**
 * Inisialisasi Navigasi Desktop & Dropdown
 */
function initNavigation() {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      const isOpen = !menu.classList.contains("hidden");

      // Tutup semua dropdown lain
      closeAllDropdowns();

      if (!isOpen) {
        menu.classList.remove("hidden");
        btn.querySelector(".chevron-icon")?.classList.add("rotate-180");
      }
    });
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener("click", () => {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.add("hidden");
  });
  document.querySelectorAll(".chevron-icon").forEach((chevron) => {
    chevron.classList.remove("rotate-180");
  });
}

/**
 * Inisialisasi Menu Mobile (Hamburger Drawer)
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeMobileMenuBtn = document.getElementById("close-mobile-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.remove("translate-x-full");
      if (drawerOverlay) drawerOverlay.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    });
  }

  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add("translate-x-full");
    if (drawerOverlay) drawerOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
  document.querySelectorAll("#mobile-drawer a.mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Akordeon Mobile
  const accordionHeaders = document.querySelectorAll(".mobile-accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");
      const isHidden = content.classList.contains("hidden");

      if (isHidden) {
        content.classList.remove("hidden");
        if (icon) icon.classList.add("rotate-180");
      } else {
        content.classList.add("hidden");
        if (icon) icon.classList.remove("rotate-180");
      }
    });
  });
}

/**
 * Routing Berdasarkan Hash URL
 */
function handleRouting() {
  closeAllDropdowns();
  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) modalRoot.innerHTML = "";
  const hash = window.location.hash.replace("#", "");

  if (!hash || hash === "dashboard" || hash === "beranda") {
    currentView = "dashboard";
    currentCourseId = null;
    renderDashboard();
    updateActiveNavHighlight(null);
  } else if (hash === "refleksi-ppg") {
    currentView = "refleksi-ppg";
    currentCourseId = null;
    renderRefleksiPpg();
    updateActiveNavHighlight(hash);
  } else if (hash === "identifikasi-diri" || hash === "visi-misi") {
    currentView = "identifikasi-diri";
    currentCourseId = "identifikasi-diri";
    renderIdentifikasiDiri();
    updateActiveNavHighlight("identifikasi-diri");
  } else if (hash === "karya-inovasi") {
    currentView = "karya-inovasi";
    currentCourseId = null;
    renderKaryaInovasi();
    updateActiveNavHighlight("karya-inovasi");
  } else if (hash.startsWith("mk-")) {
    const courseId = hash.replace("mk-", "");
    if (coursesData[courseId]) {
      currentView = "course";
      currentCourseId = courseId;
      renderCourse(courseId);
      updateActiveNavHighlight(courseId);
    } else {
      // Fallback ke dashboard jika ID tidak ditemukan
      window.location.hash = "#dashboard";
    }
  } else {
    window.location.hash = "#dashboard";
  }

  const header = document.getElementById("site-header");
  if (header) {
    const isDashboard = !hash || hash === "dashboard" || hash === "beranda";
    header.classList.toggle("is-scrolled", window.scrollY > 24 || !isDashboard);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Update Indikator Navigasi Aktif
 */
function updateActiveNavHighlight(targetId) {
  // Reset semua link
  document.querySelectorAll(".nav-link, .dropdown-item, .mobile-nav-link").forEach((el) => {
    el.classList.remove("text-yellow-400", "font-bold", "bg-blue-800/60");
  });

  if (!targetId) {
    const dashboardBtns = document.querySelectorAll(".nav-dashboard-btn");
    dashboardBtns.forEach(btn => btn.classList.add("text-yellow-400", "font-bold"));
    return;
  }

  if (targetId === "identifikasi-diri") {
    const identifikasiBtns = document.querySelectorAll(".nav-identifikasi-btn, [data-nav-id='identifikasi-diri']");
    identifikasiBtns.forEach(btn => btn.classList.add("text-yellow-400", "font-bold", "bg-blue-800/60"));
    return;
  }

  if (targetId === "refleksi-ppg") {
    document.querySelectorAll("[data-nav-id='refleksi-ppg']").forEach(btn => btn.classList.add("text-yellow-400", "font-bold", "bg-blue-800/60"));
    return;
  }

  if (targetId === "karya-inovasi") {
    document.querySelectorAll("[data-nav-id='karya-inovasi']").forEach(btn => btn.classList.add("text-yellow-400", "font-bold", "bg-blue-800/60"));
    return;
  }

  // Highlight menu mata kuliah terkait
  const activeLinks = document.querySelectorAll(`[data-course-id="${targetId}"]`);
  activeLinks.forEach(link => {
    link.classList.add("text-yellow-400", "font-bold", "bg-blue-800/60");
  });
}

/**
 * RENDER TAMPILAN DASHBOARD / BERANDA (DEFAULT)
 */
function renderDashboard() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  const sem1Courses = Object.values(coursesData).filter((c) => c.semester === 1);
  const sem2Courses = Object.values(coursesData).filter((c) => c.semester === 2);

  mainContent.innerHTML = `
    <!-- HERO SECTION -->
    <section class="relative left-1/2 -translate-x-1/2 -mt-28 w-screen min-h-[760px] md:min-h-[820px] flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 bg-[#101b35]">
      <picture class="absolute inset-0 h-full w-full">
        <source media="(min-width: 1024px)" srcset="assets/hero.png">
        <img src="assets/@SagetPhoto-528.jpg" alt="Brilian Herda mengenakan toga wisuda" class="h-full w-full object-cover object-[center_22%] md:object-[center_24%]">
      </picture>
      <div class="absolute inset-0 bg-gradient-to-r from-[#0b1730]/95 via-[#102345]/80 to-[#102345]/25"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0b1730]/60 via-transparent to-[#0b1730]/15"></div>

      <div class="relative max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 py-20 md:py-24">
        <!-- Text & Badges -->
        <div class="flex-1 text-center lg:ml-[40%] lg:mr-[5%] lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm animate-pulse">
            <i class="fa-solid fa-graduation-cap text-amber-400"></i>
            <span>E-Portofolio</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            SEMINAR PPG<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400"><br>Inovasi Game Edukasi</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
            Dokumentasi komprehensif perjalanan refleksi transformatif calon guru profesional bidang
            <strong class="text-amber-300 font-semibold">Informatika</strong> di
            <span class="text-white font-medium underline decoration-amber-400/60 decoration-2">Universitas Kristen Satya Wacana (UKSW)</span>.
          </p>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:flex-nowrap lg:justify-start gap-4 lg:gap-2">
            <a href="#identifikasi-diri" class="px-6 lg:px-2 xl:px-3 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 lg:whitespace-nowrap lg:text-xs xl:text-sm">
              <i class="fa-solid fa-id-card-clip"></i>
              <span>Identifikasi Diri (Visi & Misi)</span>
            </a>
            <a href="#mk-pembelajaran-mendalam-asesmen" class="px-6 lg:px-2 xl:px-3 py-3.5 rounded-xl bg-blue-700/80 hover:bg-blue-600 text-white font-semibold border border-blue-500/60 transition-all duration-200 flex items-center gap-2 lg:whitespace-nowrap lg:text-xs xl:text-sm">
              <i class="fa-solid fa-book-open-reader"></i>
              <span>Mulai Telusuri Refleksi</span>
            </a>
            <a href="#grid-matakuliah" class="px-6 lg:px-2 xl:px-3 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold border border-slate-600/60 hover:border-slate-500 transition-all duration-200 flex items-center gap-2 lg:whitespace-nowrap lg:text-xs xl:text-sm backdrop-blur-sm">
              <i class="fa-solid fa-list-check text-amber-400"></i>
              <span>12 Mata Kuliah</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION KARTU IDENTITAS MAHASISWA -->
    <section class="mb-14">
      <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-6 sm:p-8 lg:p-10 transition-all">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <!-- Avatar & Badge -->
          <div class="relative flex-shrink-0">
            <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-[#1e3a8a] to-indigo-600 p-1 shadow-xl">
              <div class="w-full h-full rounded-2xl bg-slate-100 overflow-hidden border-2 border-white flex items-center justify-center">
                <!-- Replace the src with your asset path, e.g. assets/avatar.jpg -->
                <img src="assets/RUMAH-PUTIH-1.JPG" alt="Avatar" class="w-full h-full object-cover" onerror="this.style.display='none'">

              </div>
            </div>

           <div class="absolute -bottom-2 -right-2 bg-amber-400 text-slate-900 p-2 rounded-xl shadow-md border-2 border-white text-xs font-bold flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-green-700"></i>

            </div>
          </div>


          <!-- Detail Identitas -->
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-blue-100 text-[#1e3a8a] text-xs font-bold border border-blue-200">
                Mahasiswa PPG Calon Guru Gelombang 2025/2026
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                Bidang Studi Informatika
              </span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              ${studentProfile.name}
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm text-slate-600 mb-6">
              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-id-card text-blue-600 w-5"></i>
                <span>NIM: <strong class="text-slate-800">${studentProfile.nim}</strong></span>
              </div>
              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-laptop-code text-blue-600 w-5"></i>
                <span>Prodi: <strong class="text-slate-800">Informatika</strong></span>
              </div>
              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-building-columns text-blue-600 w-5"></i>
                <span>LPTK: <strong class="text-slate-800">UKSW Salatiga</strong></span>
              </div>
              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-envelope text-blue-600 w-5"></i>
                <span>Email: <strong class="text-slate-800">${studentProfile.email}</strong></span>
              </div>
              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-calendar-days text-blue-600 w-5"></i>
                <span>Tahun: <strong class="text-slate-800">${studentProfile.academicYear}</strong></span>
              </div>

              <div class="flex items-center justify-center md:justify-start gap-2.5">
                <i class="fa-solid fa-award text-amber-500 w-5"></i>
                <span><strong class="text-emerald-600 font-bold"></strong></span>
              </div>
            </div>


            <!-- Quote Visi Pendidik -->
            <div class="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-2xl italic text-slate-700 text-sm leading-relaxed">
              ${studentProfile.quote}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 PILAR & KERANGKA REFLEKSI PPG -->
    <!--
    <section class="mb-14">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Kerangka & Metodologi Refleksi
        </h2>
        <p class="text-slate-600 text-sm sm:text-base mt-2">
          Penyusunan portofolio ini menerapkan model refleksi kritis berbasis <strong>Siklus Refleksi Gibbs</strong> dan alur <strong>MERDEKA</strong> Belajar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:border-blue-300 transition-all">
          <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-4">
            <i class="fa-solid fa-compass"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">1. Pengalaman Bermakna</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Mengeksplorasi momen penting (*aha-moment*), tantangan instruksional, serta perubahan paradigma selama mengikuti perkuliahan dan praktik mengajar.
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:border-amber-300 transition-all">
          <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-4">
            <i class="fa-solid fa-folder-tree"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">2. Analisis Artefak</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Menelaah bukti fisik hasil belajar (Modul Ajar, Rubrik Asesmen, LKPD, Video Pembelajaran, dan Laporan PTK) yang mengonfirmasi ketercapaian kompetensi.
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:border-emerald-300 transition-all">
          <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl mb-4">
            <i class="fa-solid fa-rocket"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">3. Desain Pembelajaran Baru</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Merumuskan rencana aksi nyata perbaikan berkelanjutan untuk diterapkan pada pembelajaran Informatika di sekolah mitra dan masa depan.
          </p>
        </div>
      </div>
    </section>
    -->

    <!-- SECTION GRID MATA KULIAH LENGKAP -->
    <section id="grid-matakuliah" class="mb-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <i class="fa-solid fa-book"></i>
            <span>Kurikulum PPG Calon Guru</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Eksplorasi Refleksi Mata Kuliah
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Klik kartu mata kuliah di bawah untuk membuka halaman refleksi lengkap beserta <strong>PDF Viewer</strong> dokumen.
          </p>
        </div>

        <!-- Filter Tab Buttons -->
        <div class="inline-flex p-1.5 bg-slate-200/80 rounded-2xl gap-1">
          <button onclick="filterCourses('all')" id="filter-all-btn" class="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${currentFilter === 'all' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-700 hover:text-slate-900'}">
            Semua (12)
          </button>
          <button onclick="filterCourses('sem1')" id="filter-sem1-btn" class="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${currentFilter === 'sem1' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-700 hover:text-slate-900'}">
            Semester 1 (6)
          </button>
          <button onclick="filterCourses('sem2')" id="filter-sem2-btn" class="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${currentFilter === 'sem2' ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-700 hover:text-slate-900'}">
            Semester 2 (6)
          </button>
        </div>
      </div>

      <!-- SEMESTER 1 GRID -->
      <div id="container-sem1" class="${currentFilter === 'sem2' ? 'hidden' : ''} mb-10">
        <div class="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
          <div class="px-3 py-1 bg-[#1e3a8a] text-white text-xs font-bold rounded-lg shadow-sm">SEMESTER 1</div>
          <h3 class="text-xl font-bold text-slate-800">Mata Kuliah Fondasi & Pengalaman Lapangan I</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${sem1Courses.map(c => renderCourseCard(c)).join("")}
        </div>
      </div>

      <!-- SEMESTER 2 GRID -->
      <div id="container-sem2" class="${currentFilter === 'sem1' ? 'hidden' : ''}">
        <div class="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
          <div class="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-lg shadow-sm">SEMESTER 2</div>
          <h3 class="text-xl font-bold text-slate-800">Mata Kuliah Keahlian Lanjut, Kepemimpinan & Seminar</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${sem2Courses.map(c => renderCourseCard(c)).join("")}
        </div>
      </div>
    </section>

    <section class="mb-12">
      <a href="#refleksi-ppg" class="group block rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 shrink-0 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
              <i class="fa-solid fa-lightbulb"></i>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wide text-blue-700">Sintesis Perjalanan</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 group-hover:text-blue-800">Refleksi PPG</h2>
              <p class="text-sm text-slate-600 mt-1">Buka dokumen dan baca refleksi perjalanan sebagai calon guru profesional.</p>
            </div>
          </div>
          <span class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-800 text-white text-sm font-bold group-hover:bg-blue-900 shrink-0">
            <span>Buka Refleksi</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </span>
        </div>
      </a>
    </section>
  `;
}

function renderRefleksiPpg() {
  const reflections = [
    {
      question: "Setelah mengikuti rangkaian refleksi pengalaman belajar, menurut Anda, bagaimana seharusnya pendidikan di Indonesia?",
      answer: "Setelah dua semester PPG, saya memahami bahwa pendidikan harus berpusat pada murid, menghargai keberagaman, dan mengembangkan potensi setiap individu. Pembelajaran perlu dirancang secara mendalam melalui tujuan yang jelas, asesmen autentik, serta pendekatan yang sesuai dengan kebutuhan murid. Selain aspek akademik, guru juga perlu mengembangkan keterampilan sosial emosional dan karakter peserta didik. Pemanfaatan teknologi serta refleksi berkelanjutan menjadi bagian penting untuk mewujudkan pembelajaran yang bermakna dan relevan dengan perkembangan zaman."
    },
    {
      question: "Apa saja yang dapat Anda lakukan untuk menjadi guru profesional?",
      answer: [
        "1. Belajar sepanjang hayat: Memperbarui pengetahuan pedagogik dan Informatika melalui pelatihan, bacaan, dan penelitian.",
        "2. Refleksi diri: Mengevaluasi pembelajaran secara rutin melalui jurnal dan portofolio untuk perbaikan berkelanjutan.",
        "3. Memahami peserta didik: Memetakan kebutuhan, minat, dan karakteristik murid sebagai dasar pembelajaran.",
        "4. Pembelajaran dan asesmen bermutu: Menerapkan UbD, Computational Thinking, asesmen autentik, dan HOTS.",
        "5. Pemanfaatan teknologi: Mengintegrasikan LMS dan flipped classroom sesuai kebutuhan pembelajaran.",
        "6. Kompetensi sosial emosional: Menjadi teladan, membangun empati, dan menciptakan kelas yang aman serta suportif.",
        "7. Kolaborasi dan kontribusi: Aktif dalam komunitas belajar, melakukan PTK, dan berbagi praktik baik."
      ]
    },
    {
      question: "Apa saja tiga hal penting yang akan Anda lakukan ketika memulai karir sebagai guru?",
      answer: [
        "1. Membangun iklim kelas yang aman: Mengenal karakteristik murid, menerapkan PSE dan pendekatan responsif budaya agar setiap murid merasa dihargai dan nyaman belajar.",
        "2. Merancang pembelajaran bermakna: Menerapkan UbD, Computational Thinking, teknologi, serta asesmen autentik dan HOTS agar murid memahami dan mampu menerapkan pengetahuan.",
        "3. Mengembangkan profesionalisme: Melakukan refleksi rutin, menyusun portofolio, melaksanakan PTK, dan berkolaborasi dalam komunitas belajar guru."
      ]
    }
  ];

  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  mainContent.innerHTML = `
    <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
      <a href="#dashboard" class="hover:text-blue-700 flex items-center gap-1.5 font-medium">
        <i class="fa-solid fa-house"></i>
        <span>Dashboard</span>
      </a>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
      <span class="font-bold text-blue-900">Refleksi PPG</span>
    </nav>

    <header class="mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3">
        <i class="fa-solid fa-lightbulb"></i>
        <span>Sintesis Perjalanan</span>
      </div>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Refleksi PPG</h1>
      <p class="text-slate-600 text-sm mt-2">Refleksi Keseluruhan Program PPG Calon Guru.</p>
    </header>

    <section id="refleksi-ppg-pdf-section" class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-10">
      <div class="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-lg"><i class="fa-solid fa-file-pdf"></i></div>
          <div>
            <h2 class="font-bold">Dokumen Inti Refleksi PPG</h2>
            <p class="text-xs text-slate-300">Pilih berkas PDF untuk menampilkannya di viewer.</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a id="refleksi-ppg-pdf-open" class="hidden items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-700 text-white text-sm font-semibold hover:bg-slate-600" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Buka tab</span>
          </a>
        </div>
      </div>
      <div id="refleksi-ppg-pdf-empty" class="min-h-56 flex flex-col items-center justify-center text-center px-6 py-12 bg-slate-50">
        <i class="fa-regular fa-file-pdf text-4xl text-slate-300 mb-3"></i>
        <p class="font-semibold text-slate-700">PDF refleksi belum dihubungkan</p>
        <p class="text-sm text-slate-500 mt-1">Ganti URL dummy di properti pdfUrl pada refleksiPpgData di js/data.js.</p>
      </div>
      <iframe id="refleksi-ppg-pdf-frame" class="hidden w-full h-[620px] lg:h-[780px] border-0 bg-slate-100" title="PDF Viewer Refleksi PPG"></iframe>
    </section>

    <section id="refleksi-ppg-cards" class="mb-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        ${reflections.map((reflection, index) => `
          <article class="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-8 shrink-0 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-extrabold">${index + 1}</span>
              <h3 class="font-bold text-slate-900 leading-snug">${reflection.question}</h3>
            </div>
            ${Array.isArray(reflection.answer)
              ? `<ul class="text-sm text-slate-600 leading-relaxed list-disc pl-5 space-y-2">${reflection.answer.map(point => `<li>${point}</li>`).join("")}</ul>`
              : `<p class="text-sm text-slate-600 leading-relaxed">${reflection.answer}</p>`}
          </article>
        `).join("")}
      </div>
    </section>

    <div class="flex justify-start border-t border-slate-200 pt-6">
      <a href="#dashboard" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold hover:bg-slate-200">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Kembali ke Dashboard</span>
      </a>
    </div>
  `;

  const pdfSection = document.getElementById("refleksi-ppg-pdf-section");
  const reflectionsSection = document.getElementById("refleksi-ppg-cards");
  if (pdfSection && reflectionsSection) pdfSection.before(reflectionsSection);

  const pdfFrame = document.getElementById("refleksi-ppg-pdf-frame");
  const pdfEmptyState = document.getElementById("refleksi-ppg-pdf-empty");
  const pdfOpenLink = document.getElementById("refleksi-ppg-pdf-open");

  if (refleksiPpgData.pdfUrl.trim() && pdfFrame && pdfEmptyState && pdfOpenLink) {
    pdfFrame.src = refleksiPpgData.pdfUrl;
    pdfFrame.classList.remove("hidden");
    pdfEmptyState.classList.add("hidden");
    pdfOpenLink.href = refleksiPpgData.downloadUrl;
    pdfOpenLink.classList.remove("hidden");
    pdfOpenLink.classList.add("inline-flex");
  }
}


/**
 * Template Helper untuk Kartu Mata Kuliah di Dashboard
 */
function renderCourseCard(course) {
  return `
    <div class="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-lg ${course.badgeColor}">
          ${course.sks} SKS
          </span>
          <span class="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            Sem ${course.semester}
          </span>
        </div>

        <div class="flex items-start gap-3.5 mb-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} text-white flex-shrink-0 flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform">
            <i class="fa-solid ${course.icon}"></i>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors">
              ${course.title}
            </h4>
            <div class="text-xs text-slate-500 mt-0.5">${course.category}</div>
          </div>
        </div>

        <p class="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mt-2 mb-4">
          ${course.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
        <span class="text-xs text-emerald-600 font-medium flex items-center gap-1">
          <i class="fa-solid fa-file-pdf"></i> Dokumen PDF Siap
        </span>
        <a href="#mk-${course.id}" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
          <span>Buka Refleksi</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  `;
}

/**
 * Filter Mata Kuliah di Dashboard
 */
function filterCourses(filter) {
  currentFilter = filter;
  const sem1Container = document.getElementById("container-sem1");
  const sem2Container = document.getElementById("container-sem2");

  const allBtn = document.getElementById("filter-all-btn");
  const sem1Btn = document.getElementById("filter-sem1-btn");
  const sem2Btn = document.getElementById("filter-sem2-btn");

  [allBtn, sem1Btn, sem2Btn].forEach(btn => {
    if (btn) {
      btn.className = "px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all text-slate-700 hover:text-slate-900";
    }
  });

  if (filter === "all") {
    if (sem1Container) sem1Container.classList.remove("hidden");
    if (sem2Container) sem2Container.classList.remove("hidden");
    if (allBtn) allBtn.className = "px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all bg-[#1e3a8a] text-white shadow-md";
  } else if (filter === "sem1") {
    if (sem1Container) sem1Container.classList.remove("hidden");
    if (sem2Container) sem2Container.classList.add("hidden");
    if (sem1Btn) sem1Btn.className = "px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all bg-[#1e3a8a] text-white shadow-md";
  } else if (filter === "sem2") {
    if (sem1Container) sem1Container.classList.add("hidden");
    if (sem2Container) sem2Container.classList.remove("hidden");
    if (sem2Btn) sem2Btn.className = "px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all bg-[#1e3a8a] text-white shadow-md";
  }
}

function renderArtifactPreview(artifact) {
  const title = artifact?.title || "Artefak Pembelajaran";
  const hasPreview = artifact?.embedUrl && ["video", "document"].includes(artifact.type);
  const openUrl = artifact?.openUrl || artifact?.embedUrl;
  const isVideo = artifact?.type === "video";

  return `
    <section class="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <div class="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-slate-800">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 shrink-0 rounded-lg ${isVideo ? "bg-violet-600" : "bg-blue-600"} text-white flex items-center justify-center text-base">
            <i class="fa-solid ${isVideo ? "fa-video" : "fa-file-lines"}"></i>
          </div>
          <div class="min-w-0">
            <h3 class="font-bold text-sm sm:text-base leading-tight text-white truncate">${title}</h3>
            <span class="text-xs text-slate-400">Artefak Pembelajaran</span>
          </div>
        </div>
        ${hasPreview && openUrl ? `
          <a href="${openUrl}" target="_blank" rel="noopener noreferrer" class="shrink-0 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Buka</span>
          </a>
        ` : ""}
      </div>
      ${hasPreview ? `
        <div class="relative w-full bg-slate-100 ${isVideo ? "aspect-video" : "h-[560px] sm:h-[650px] xl:h-[780px]"}">
          <iframe
            src="${artifact.embedUrl}"
            class="absolute inset-0 w-full h-full border-0"
            title="Pratinjau artefak - ${title}"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ` : `
        <div class="min-h-[320px] xl:min-h-[780px] flex flex-col items-center justify-center bg-slate-50 px-6 py-10 text-center">
          <div class="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl mb-4">
            <i class="fa-solid fa-photo-film"></i>
          </div>
          <h4 class="font-bold text-slate-800 mb-2">Pratinjau artefak belum tersedia</h4>
          <p class="max-w-sm text-sm text-slate-500 leading-relaxed">Tambahkan jenis artefak (video atau document) dan URL pratinjau pada data mata kuliah untuk menampilkannya di sini.</p>
        </div>
      `}
    </section>
  `;
}

/**
 * RENDER TAMPILAN HALAMAN REFLEKSI MATA KULIAH (DYNAMIC VIEW + PDF VIEWER)
 */
function renderCourse(courseId) {
  const course = coursesData[courseId];
  const mainContent = document.getElementById("main-content");

  if (!course || !mainContent) return;

  // Dapatkan daftar id mata kuliah untuk navigasi prev/next
  const courseKeys = Object.keys(coursesData);
  const currentIndex = courseKeys.indexOf(courseId);
  const prevCourseId = currentIndex > 0 ? courseKeys[currentIndex - 1] : null;
  const nextCourseId = currentIndex < courseKeys.length - 1 ? courseKeys[currentIndex + 1] : null;

  mainContent.innerHTML = `
    <!-- BREADCRUMB NAVIGATION -->
    <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 overflow-x-auto pb-2">
      <a href="#dashboard" class="hover:text-blue-700 flex items-center gap-1.5 flex-shrink-0 font-medium">
        <i class="fa-solid fa-house"></i>
        <span>Beranda</span>
      </a>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
      <span class="flex-shrink-0 font-medium text-slate-600">
        Refleksi Semester ${course.semester}
      </span>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
      <span class="text-blue-900 font-bold truncate">
        ${course.title}
      </span>
    </nav>

    <!-- HEADER MATA KULIAH -->
    <div class="bg-gradient-to-r ${course.color} text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl mb-8 relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 opacity-15 text-9xl">
      </div>

      <div class="relative z-10 max-w-4xl">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            Semester ${course.semester}
          </span>
          <span class="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold uppercase tracking-wider">
          ${course.sks} SKS
          </span>
          <span class="px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-medium">
            ${course.category}
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-white">
          ${course.title}
        </h1>

        <p class="text-sm sm:text-base text-slate-100 leading-relaxed max-w-4xl pr-2.5">
          ${course.summary}
        </p>
      </div>
    </div>

    <!-- KERANGKA REFLEKSI 4C -->
    <section class="mb-8">
      <div class="mb-5">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
          <i class="fa-solid fa-layer-group"></i>
          <span>Kerangka Refleksi 4C</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Lebar Refleksi Pembelajaran
        </h2>
        <p class="text-slate-600 text-sm mt-1">
          Jelajahi refleksi melalui empat perspektif utama: Connection, Challenge, Concept, dan Change.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-2xl border border-blue-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
          <div class="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg mb-4">
            <i class="fa-solid fa-link"></i>
          </div>
          <h3 class="font-extrabold text-slate-900 mb-2">Connection</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${course.reflection?.connection || "Menghubungkan materi perkuliahan dengan pengalaman, pengetahuan, dan praktik pembelajaran sebelumnya."}</p>
        </div>

        <div class="bg-white rounded-2xl border border-amber-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
          <div class="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg mb-4">
            <i class="fa-solid fa-mountain-sun"></i>
          </div>
          <h3 class="font-extrabold text-slate-900 mb-2">Challenge</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${course.reflection?.challenge || "Mengidentifikasi tantangan, kesulitan, serta hambatan yang muncul selama proses belajar dan praktik."}</p>
        </div>

        <div class="bg-white rounded-2xl border border-emerald-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
          <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg mb-4">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <h3 class="font-extrabold text-slate-900 mb-2">Concept</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${course.reflection?.concept || "Merumuskan konsep, teori, dan wawasan baru yang diperoleh untuk memperkuat pemahaman profesional."}</p>
        </div>

        <div class="bg-white rounded-2xl border border-purple-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
          <div class="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg mb-4">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
          <h3 class="font-extrabold text-slate-900 mb-2">Change</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${course.reflection?.change || "Menentukan perubahan, rencana aksi, dan komitmen perbaikan yang akan diterapkan di masa depan."}</p>
        </div>
      </div>
    </section>



    <!-- RESPONSIVE REFLECTION PDF AND ARTIFACT PREVIEWS -->
    <section id="pdf-viewer-section" class="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-6 mb-12 items-start">
      <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
        <div class="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 shrink-0 rounded-lg bg-red-600 text-white flex items-center justify-center text-base">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-sm sm:text-base leading-tight text-white">Dokumen Refleksi</h3>
              <span class="text-xs text-slate-400">${course.title}</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="copyCurrentUrl()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700">
              <i class="fa-solid fa-link"></i>
              <span>Salin Link</span>
            </button>
            <a href="${course.downloadUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span>Buka</span>
            </a>
            <a href="${course.downloadUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all">
              <i class="fa-solid fa-download"></i>
              <span>Unduh</span>
            </a>
          </div>
        </div>
        <div class="relative w-full h-[560px] sm:h-[650px] xl:h-[780px] bg-slate-100">
          <iframe
            id="pdf-frame"
            src="${course.pdfUrl}"
            class="absolute inset-0 w-full h-full border-0"
            title="PDF Refleksi - ${course.title}"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      ${renderArtifactPreview(course.artifactPreview)}
    </section>


    <!-- PREV / NEXT COURSE FOOTER NAVIGATION -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
      ${prevCourseId ? `
        <a href="#mk-${prevCourseId}" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors shadow-sm">
          <i class="fa-solid fa-arrow-left text-blue-700"></i>
          <div class="text-left">
            <div class="text-[10px] text-slate-500 font-normal">Mata Kuliah Sebelumnya</div>
            <div class="truncate max-w-[200px] sm:max-w-xs">${coursesData[prevCourseId].title}</div>
          </div>
        </a>
      ` : `
        <a href="#identifikasi-diri" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors shadow-sm">
          <i class="fa-solid fa-arrow-left text-amber-500"></i>
          <div class="text-left">
            <div class="text-[10px] text-slate-500 font-normal">Menu Sebelumnya</div>
            <div class="truncate max-w-[200px] sm:max-w-xs">Identifikasi Diri (Visi & Misi)</div>
          </div>
        </a>
      `
      }
      <a href="#dashboard" class="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-2 transition-colors">
        <i class="fa-solid fa-house"></i>
        <span>Kembali ke Beranda</span>
      </a>

      ${nextCourseId ? `
        <a href="#mk-${nextCourseId}" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold flex items-center justify-between sm:justify-end gap-3 transition-colors shadow-sm">
          <div class="text-right">
            <div class="text-[10px] text-slate-500 font-normal">Mata Kuliah Selanjutnya</div>
            <div class="truncate max-w-[200px] sm:max-w-xs">${coursesData[nextCourseId].title}</div>
          </div>
          <i class="fa-solid fa-arrow-right text-blue-700"></i>
        </a>
      ` : `<div></div>`}
    </div>
  `;
}

/**
 * RENDER TAMPILAN HALAMAN KARYA INOVASI
 */
function renderKaryaInovasi() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;
  const steps = karyaInovasiData.sections.map((section, index) => ({
    title: section.indicator,
    summary: section.questions[0]?.question || "",
    takeaway: `${section.questions.length} pertanyaan refleksi`,
    icon: ["fa-magnifying-glass", "fa-lightbulb", "fa-flask", "fa-rocket", "fa-chart-line"][index] || "fa-lightbulb",
  }));
  const stepHtml = steps.map((step, stepIndex) => {
    return `
      <article class="innovation-step relative">
        <div class="innovation-chevron">
          <span class="innovation-chevron-icon"><i class="fa-solid ${step.icon}"></i></span>
          <span class="innovation-chevron-copy">
            <span class="innovation-chevron-label">Langkah</span>
            <strong>${step.title}</strong>
          </span>
          <span class="innovation-chevron-number">${String(stepIndex + 1).padStart(2, "0")}</span>
        </div>
        <p class="innovation-step-summary">${step.summary}</p>
        <p class="innovation-takeaway">
          <i class="fa-solid fa-check" aria-hidden="true"></i>
          ${step.takeaway}
        </p>
        <button class="innovation-detail-btn open-modal-btn" data-step-index="${stepIndex}">Lihat detail <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
      </article>
    `;
  }).join("");

  const modalHtml = karyaInovasiData.sections.map((section, stepIndex) => `
    <div class="modal-bg hidden" id="modal-${stepIndex}">
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title-${stepIndex}">
        <button class="modal-close" type="button" aria-label="Tutup">&times;</button>
        <h2 id="modal-title-${stepIndex}" class="text-xl font-bold mb-2">${steps[stepIndex].title}</h2>
        <p class="mb-4">${steps[stepIndex].summary}</p>
        ${section.questions.map((item, questionIndex) => `
          <div class="${questionIndex ? "border-t border-slate-100 pt-4" : ""}">
            <h4 class="text-sm font-bold text-slate-800 mb-2">${item.question}</h4>
            <div class="space-y-3 text-sm text-slate-600 leading-relaxed">
              ${item.content.map((block) => {
                if (block.type === "ordered") {
                  return `<ol class="list-decimal pl-5 space-y-2">${block.items.map(point => `<li>${point}</li>`).join("")}</ol>`;
                }
                if (block.type === "highlights") {
                  return `<div class="space-y-3">${block.items.map(highlight => `<p><strong class="text-slate-800">${highlight.label}:</strong> ${highlight.text}</p>`).join("")}</div>`;
                }
                return `<p>${block.text}</p>`;
              }).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  mainContent.innerHTML = `
    <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 overflow-x-auto pb-2">
      <a href="#dashboard" class="hover:text-blue-700 flex items-center gap-1.5 flex-shrink-0 font-medium"><i class="fa-solid fa-house"></i><span>Beranda</span></a>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
      <span class="text-blue-900 font-bold truncate">Karya Inovasi</span>
    </nav>
    <header class="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl mb-8 relative overflow-hidden">
      <div class="absolute -right-4 -bottom-10 opacity-10 text-8xl sm:text-9xl"><i class="fa-solid fa-lightbulb"></i></div>
      <div class="relative z-10 max-w-4xl">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold tracking-wide mb-4"><i class="fa-solid fa-wand-magic-sparkles"></i> Perjalanan sebuah inovasi</span>
        <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-3">${karyaInovasiData.title}</h1>
        <p class="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl">KKA Learning Quest mengubah konsep berpikir komputasional yang abstrak menjadi pengalaman belajar lewat game. Ikuti alurnya dari masalah di kelas sampai evaluasi.</p>
      </div>
    </header>
    <section aria-labelledby="innovation-journey-title" class="mb-10">
      <div class="flex flex-wrap items-end justify-between gap-3 mb-6">
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 mb-1">Dari ide menjadi aksi</p>
          <h2 id="innovation-journey-title" class="text-2xl sm:text-3xl font-black text-slate-900">Alur pengembangan</h2>
        </div>
        <p class="text-sm text-slate-500">5 langkah • klik tiap langkah untuk membaca detail</p>
      </div>
      <div class="innovation-steps relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        ${stepHtml}
      </div>
    </section>
    <section aria-labelledby="innovation-apps-title" class="mb-10">
      <div class="mb-6">
        <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 mb-1">Coba hasil inovasinya</p>
        <h2 id="innovation-apps-title" class="text-2xl sm:text-3xl font-black text-slate-900">Jelajahi aplikasi</h2>
        <p class="text-sm text-slate-600 mt-2">Buka aplikasi KKA Learning Quest sebagai murid atau lihat pemantauan pembelajaran melalui dashboard guru.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <a href="https://kka-learning-quest.vercel.app/" target="_blank" rel="noopener noreferrer" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
          <img src="assets/KKA-user.png" alt="Ilustrasi aplikasi KKA Learning Quest untuk murid" class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]">
          <div class="p-5">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-extrabold text-slate-900">KKA Learning Quest</h3>
              <i class="fa-solid fa-arrow-up-right-from-square text-blue-700" aria-hidden="true"></i>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Jelajahi game pembelajaran berpikir komputasional untuk murid.</p>
            <span class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Buka aplikasi <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </div>
        </a>
        <a href="https://kka-learning-quest.vercel.app/guru" target="_blank" rel="noopener noreferrer" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
          <img src="assets/KKA-guru.png" alt="Ilustrasi dashboard guru KKA Learning Quest" class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]">
          <div class="p-5">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-extrabold text-slate-900">Dashboard Guru</h3>
              <i class="fa-solid fa-arrow-up-right-from-square text-blue-700" aria-hidden="true"></i>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">Pantau progres belajar, penyelesaian materi, dan aktivitas murid.</p>
            <span class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Buka dashboard <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </div>
        </a>
      </div>
    </section>
    <div class="flex justify-start border-t border-slate-200 pt-6 mt-8">
      <a href="#dashboard" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold hover:bg-slate-200"><i class="fa-solid fa-arrow-left"></i><span>Kembali ke Dashboard</span></a>
    </div>
  `;

  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) modalRoot.innerHTML = modalHtml;

  // Attach modal event listeners
  attachModalHandlers();
}

function attachModalHandlers() {
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.stepIndex;
      const modal = document.getElementById(`modal-${idx}`);
      if (modal) {
        modal.classList.remove('hidden');
        modal.querySelector('.modal-close')?.focus();
      }
    });
  });
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const modal = closeBtn.closest('.modal-bg');
      if (modal) {
        modal.classList.add('hidden');
        document.querySelector(`[data-step-index="${modal.id.replace("modal-", "")}"]`)?.focus();
      }
    });
  });
  // Close when clicking outside modal content
  document.querySelectorAll('.modal-bg').forEach(bg => {
    bg.addEventListener('click', (e) => {
      if (e.target === bg) bg.classList.add('hidden');
    });
  });
}



/**
 * RENDER TAMPILAN HALAMAN IDENTIFIKASI DIRI (VISI & MISI)
 */
function renderIdentifikasiDiri() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;
  const data = identifikasiDiriData;
  const rawMisi = data.misi;
  const misiItems = Array.isArray(rawMisi)
    ? rawMisi
    : (rawMisi?.items || rawMisi?.points || rawMisi?.list || (rawMisi ? [rawMisi] : []));

  mainContent.innerHTML = `
    <!-- BREADCRUMB NAVIGATION -->
    <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 overflow-x-auto pb-2">
      <a href="#dashboard" class="hover:text-blue-700 flex items-center gap-1.5 flex-shrink-0 font-medium">
        <i class="fa-solid fa-house"></i>
        <span>Beranda</span>
      </a>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
      <span class="text-blue-900 font-bold truncate">
        Identifikasi Diri (Visi & Misi)
      </span>
    </nav>

    <!-- HEADER BANNER IDENTIFIKASI DIRI -->
    <div class="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl mb-10 relative overflow-hidden">
      <div class="absolute -right-8 -bottom-8 opacity-15 text-9xl">
        <i class="fa-solid fa-compass"></i>
      </div>

      <div class="relative z-10 max-w-4xl">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold uppercase tracking-wider">
            Pondasi Karakter Pendidik
          </span>
          <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            PPG Calon Guru Informatika • UKSW
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-white">
          ${data.title}
        </h1>

        <p class="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
          ${data.subtitle}
        </p>
      </div>
    </div>

    <!-- SECTION KARTU IDENTITAS MAHASISWA -->
    <div class="bg-white rounded-3xl shadow-lg border border-slate-200/90 p-6 sm:p-8 mb-10">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
        <div class="relative flex-shrink-0">
          <div class="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-[#1e3a8a] to-indigo-600 p-1 shadow-xl">
            <div class="w-full h-full rounded-2xl bg-slate-100 overflow-hidden border-2 border-white flex items-center justify-center">
              <img src="assets/RUMAH-PUTIH-1.JPG" alt="${studentProfile.name}" class="w-full h-full object-cover" onerror="this.style.display='none'">
              <i class="fa-solid fa-user-tie text-5xl text-blue-900/60" style="display:none;" id="fallback-avatar-identifikasi"></i>
            </div>
          </div>
          <div class="absolute -bottom-2 -right-2 bg-amber-400 text-slate-900 p-1.5 px-2.5 rounded-xl shadow-md border-2 border-white text-xs font-bold flex items-center gap-1">
            <i class="fa-solid fa-circle-check text-green-700"></i>
            <span>Pendidik</span>
          </div>
        </div>

        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
            <span class="px-3 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">Mahasiswa PPG Calon Guru</span>
            <span class="px-3 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Informatika</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">${studentProfile.name}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 mb-4">
            <div><i class="fa-solid fa-id-card text-blue-600 w-5"></i> NIM: <strong>${studentProfile.nim}</strong></div>
            <div><i class="fa-solid fa-building-columns text-blue-600 w-5"></i> LPTK: <strong>${studentProfile.institution}</strong></div>
            <div><i class="fa-solid fa-calendar-days text-blue-600 w-5"></i> Tahun: <strong>${studentProfile.academicYear}</strong></div>
            <div><i class="fa-solid fa-envelope text-blue-600 w-5"></i> Email: <strong>${studentProfile.email}</strong></div>
            <div><i class="fa-solid fa-award text-amber-500 w-5"></i> Bidang: <strong>Pendidikan Informatika</strong></div>
            <div><i class="fa-solid fa-circle-check text-emerald-600 w-5"></i> Status: <strong class="text-emerald-600 font-bold">Calon Guru Profesional</strong></div>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 italic bg-slate-50 p-3 rounded-xl border-l-4 border-blue-800">
            ${studentProfile.quote}
          </p>
        </div>
      </div>
    </div>

    <!-- KARTU VISI DAN MISI -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      <article class="bg-gradient-to-br from-blue-950 via-[#1e3a8a] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/80 relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="fa-solid fa-eye text-amber-400"></i>
            <span>${data.visi.title}</span>
          </div>
          <div class="space-y-4">
            <div class="flex gap-3">
              <span class="w-8 h-8 flex-shrink-0 rounded-lg bg-amber-400 text-slate-900 text-xs font-extrabold flex items-center justify-center">01</span>
              <div>
                <h3 class="font-bold text-amber-200 mb-1">Visi Pendidikan Indonesia</h3>
                <p class="text-sm sm:text-base font-semibold leading-relaxed text-amber-100">Terwujudnya pendidikan Indonesia yang bermutu, inklusif, berkarakter, dan adaptif terhadap perkembangan ilmu pengetahuan dan teknologi.</p>
              </div>
            </div>
            <div class="flex gap-3 pt-4 border-t border-blue-800/60">
              <span class="w-8 h-8 flex-shrink-0 rounded-lg bg-amber-400 text-slate-900 text-xs font-extrabold flex items-center justify-center">02</span>
              <div>
                <h3 class="font-bold text-amber-200 mb-1">Visi sebagai Calon Guru</h3>
                <p class="text-sm sm:text-base font-semibold leading-relaxed text-amber-100">Menjadi guru Informatika yang menumbuhkan cara berpikir kritis, kreatif, dan logis dalam lingkungan belajar yang aman, inklusif, dan berpihak pada peserta didik.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <i class="fa-solid fa-bullseye text-lg"></i>
          </div>
          <div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-amber-700">Komitmen Pendidik</p>
            <h2 class="text-xl font-extrabold text-slate-900">${rawMisi?.title || "Misi"}</h2>
          </div>
        </div>
        <div class="space-y-3">
          ${misiItems.map((item, index) => {
            const text = typeof item === "string" ? item : (item.statement || item.description || item.text || item.content || "");
            const title = typeof item === "object" ? item.title : "";
            return `
              <div class="flex gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                <span class="w-7 h-7 flex-shrink-0 rounded-lg bg-blue-900 text-white text-xs font-extrabold flex items-center justify-center">${String(index + 1).padStart(2, "0")}</span>
                <div class="text-sm text-slate-700 leading-relaxed">
                  ${title ? `<h3 class="font-bold text-slate-900 mb-1">${title}</h3>` : ""}
                  <p>${text}</p>
                </div>
              </div>`;
          }).join("") || `<p class="text-sm text-slate-500">Belum ada uraian misi.</p>`}
        </div>
      </article>
    </section>


    <!-- PDF VIEWER SECTION (IDENTIFIKASI DIRI & VISI MISI) -->
    <section id="pdf-viewer-section" class="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-12">
      <!-- ACTION BAR PDF -->
      <div class="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center text-base">
            <i class="fa-solid fa-file-pdf"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base leading-tight text-white flex items-center gap-2">
              <span>Dokumen Identifikasi Diri & Visi Misi</span>
            </h3>
            <span class="text-xs text-slate-400">Pratinjau Dokumen Lembar Komitmen Pendidik PPG UKSW</span>
          </div>
        </div>

        <!-- Action Controls -->
        <div class="flex flex-wrap items-center gap-2">
          <button onclick="copyCurrentUrl()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700">
            <i class="fa-solid fa-link"></i>
            <span>Salin Link</span>
          </button>
          <a href="${data.downloadUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Buka Tab Baru</span>
          </a>
          <a href="${data.downloadUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all">
            <i class="fa-solid fa-download"></i>
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <!-- PDF IFRAME CONTAINER (Responsive 650px - 780px) -->
      <div class="relative w-full bg-slate-100 border-b border-slate-200">
        <iframe
          id="pdf-frame"
          src="${data.pdfUrl}"
          class="w-full h-[650px] lg:h-[780px] border-0"
          title="PDF Viewer - Identifikasi Diri & Visi Misi"
          allow="autoplay"
        ></iframe>
      </div>
    </section>


    <!-- BOTTOM NAVIGATION -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
      <a href="#dashboard" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors shadow-sm">
        <i class="fa-solid fa-house"></i>
        <span>Kembali ke Beranda</span>
      </a>

      <a href="#mk-pembelajaran-mendalam-asesmen" class="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#1e3a8a] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold flex items-center justify-between sm:justify-end gap-3 transition-colors shadow-md">
        <div class="text-right">
          <div class="text-[10px] text-amber-300 font-normal">Mata Kuliah Pertama (Semester 1)</div>
          <div class="truncate max-w-[220px] sm:max-w-xs">Pembelajaran Mendalam & Asesmen</div>
        </div>
        <i class="fa-solid fa-arrow-right text-amber-400"></i>
      </a>
    </div>
  `;
}

/**
 * Utilitas Salin URL Tautan
 */
function copyCurrentUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Tautan halaman refleksi berhasil disalin ke clipboard!");
  }).catch(() => {
    showToast("Gagal menyalin tautan.");
  });
}

/**
 * Toast Notification Sederhana
 */
function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-green-400 text-base"></i> <span>${message}</span>`;
  toast.classList.remove("translate-y-20", "opacity-0");

  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}
