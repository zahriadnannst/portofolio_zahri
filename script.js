/* ============================================================
   ZAHRI ADNAN NASUTION — PORTFOLIO
   script.js — Semua Logika JavaScript (Canvas, Zero-G,
                3D Tilt, Modal, Form, Nav, Observer)
   ============================================================ */

// ============================================================
// DATA — Skills
// ============================================================
const skillsDB = [
  { name: 'SQL & Query Optimization', pct: 92 },
  { name: 'ERD Design', pct: 90 },
  { name: 'Normalisasi BCNF/4NF', pct: 88 },
  { name: 'PostgreSQL / MySQL', pct: 85 },
  { name: 'Data Modeling', pct: 87 },
];
const skillsWeb = [
  { name: 'PHP / Laravel', pct: 85 },
  { name: 'JavaScript', pct: 82 },
  { name: 'Flutter', pct: 78 },
  { name: 'REST API', pct: 88 },
  { name: 'HTML/CSS / Bootstrap', pct: 90 },
];
const skillsSys = [
  { name: 'UML Diagram', pct: 90 },
  { name: 'BPMN', pct: 85 },
  { name: 'Agile / Scrum', pct: 80 },
  { name: 'System Requirements', pct: 88 },
  { name: 'IT Documentation', pct: 92 },
];

// ============================================================
// DATA — Projects (3 Proyek PHP Utama)
// ============================================================
const projects = [
  {
    title: 'sistem-informasi-koperasi',
    tags: ['PHP', 'MySQL', 'MIT License'],
    desc: 'Aplikasi web untuk membantu pengelolaan administrasi dan keuangan koperasi secara digital, mencakup manajemen anggota, transaksi kas, dan pembayaran iuran.',
    color: '#00f5ff',
    icon: 'landmark', // ✅ Ikon baru untuk Koperasi / Keuangan (Gedung/Landmark)
    githubUrl: 'https://github.com/zahriadnannst/sistem-informasi-koperasi',
    detail: {
      arch: 'Sistem informasi berbasis web dengan manajemen multi-peran (Admin & Anggota) untuk mendigitalisasi pencatatan simpanan, pengajuan pembayaran via transfer bank/QRIS, verifikasi admin, hingga laporan keuangan koperasi.',
      erd: 'Struktur direktori modular: <strong>admin/</strong>, <strong>anggota/</strong>, <strong>assets/</strong> (css, js, img), <strong>config/</strong>, <strong>database/</strong>, <strong>docs/</strong>, <strong>includes/</strong>, dan <strong>backups/</strong>.',
      stack: 'PHP Native, MySQL / MariaDB, HTML5, CSS3, JavaScript, XAMPP, Git & GitHub.',
      features: [
        'Dashboard ringkasan informasi & pengelolaan data anggota oleh Admin',
        'Pengelolaan transaksi kas, verifikasi pembayaran, & pengaturan rekening/QRIS',
        'Portal anggota untuk melihat tagihan, sisa kewajiban, & riwayat pembayaran',
        'Fitur pengajuan pembayaran mandiri dengan unggah bukti transfer/QRIS',
        'Keamanan berlapis (Autentikasi, Password Hashing, Prepared Statements, & Proteksi CSRF)',
      ],
    },
  },
  {
    title: 'sistem-peminjaman-uks-pnp',
    tags: ['PHP', 'MySQL', 'MIT License'],
    desc: 'Aplikasi web untuk pengelolaan peminjaman fasilitas dan perlengkapan Unit Kegiatan Seni (UKS) Politeknik Negeri Padang.',
    color: '#a855f7',
    icon: 'palette', // ✅ Ikon baru yang merepresentasikan seni & kreativitas
    githubUrl: 'https://github.com/zahriadnannst/sistem-peminjaman-uks-pnp',
    detail: {
      arch: 'Sistem berbasis web untuk mendigitalisasi proses administrasi peminjaman fasilitas dan perlengkapan seni, mengurangi proses manual, serta memudahkan admin dalam memantau aktivitas.',
      erd: 'Struktur direktori modular: <strong>admin</strong>, <strong>auth</strong>, <strong>config</strong>, <strong>peminjaman</strong>, <strong>user</strong>, dan file database.sql terintegrasi.',
      stack: 'PHP Native, MySQL (PDO), HTML5, CSS3, JavaScript, SweetAlert2, XAMPP.',
      features: [
        'Autentikasi hak akses Admin dan Pengguna',
        'Manajemen data fasilitas & perlengkapan seni',
        'Pengajuan dan verifikasi peminjaman secara digital',
        'Pengelolaan proses pengembalian barang',
        'Dashboard admin untuk pemantauan real-time & notifikasi interaktif',
      ],
    },
  },
  {
    title: 'ppdb-smp',
    tags: ['PHP', 'MySQL', 'MIT License'],
    desc: 'Aplikasi sistem informasi Penerimaan Peserta Didik Baru (PPDB) online tingkat SMP berbasis web yang terstruktur dan terintegrasi.',
    color: '#10b981',
    icon: 'graduation-cap', // ✅ Ikon baru untuk PPDB / Sekolah (Toga/Pendidikan)
    githubUrl: 'https://github.com/zahriadnannst/ppdb-smp',
    detail: {
      arch: 'Sistem informasi berbasis web yang mendukung proses pendaftaran, pengelolaan data, verifikasi berkas, pengaturan kuota dan sekolah, seleksi, hingga pengumuman hasil penerimaan siswa baru dengan manajemen multi-peran (Siswa, Operator Sekolah, Super Admin).',
      erd: 'Struktur direktori modular: <strong>admin/</strong> (backup, kuota, laporan, pendaftaran, sekolah, seleksi, users, verifikasi), <strong>siswa/</strong>, <strong>config/</strong>, <strong>database/</strong> (schema.sql, migrations), <strong>includes/</strong>, dan <strong>uploads/</strong>.',
      stack: 'PHP Native, MySQL/MariaDB, HTML5, CSS3, JavaScript, Bootstrap, Apache Web Server, XAMPP.',
      features: [
        'Pendaftaran online, pengisian biodata, & pemilihan sekolah/jalur oleh siswa',
        'Manajemen data sekolah, kuota, jadwal, & verifikasi berkas oleh operator/admin',
        'Seleksi otomatis berdasarkan jalur (Zonasi, Prestasi, Afirmasi, Mutasi)',
        'Publikasi hasil seleksi, cetak kartu peserta, & surat penerimaan',
        'Export laporan PDF/CSV, backup-restore database, & keamanan berlapis (CSRF, RBAC)',
      ],
    },
  },
];

// ============================================================
// DATA — Certifications (3 Sertifikat Asli)
// ============================================================
const certs = [
  {
    title: 'HCIA-Cloud Service V3.5',
    issuer: 'Huawei ICT Academy',
    icon: 'cloud',
    accentColor: '#00f5ff',
    accentBg: 'rgba(0,245,255,0.1)',
    // 'image' → tampilkan <img> di modal | 'pdf' → tampilkan embed PDF + tombol buka
    credentialType: 'image',
    credentialSrc: 'assets/cert-hcia-cloud-service.jpg',
  },
  {
    title: 'HCIA-Cloud Computing V5.5',
    issuer: 'Huawei ICT Academy',
    icon: 'cloud',
    accentColor: '#a855f7',
    accentBg: 'rgba(168,85,247,0.1)',
    credentialType: 'image',
    credentialSrc: 'assets/cert-hcia-cloud-computing.jpg',
  },
  {
    title: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat Academy',
    icon: 'server',
    accentColor: '#ef4444',
    accentBg: 'rgba(239,68,68,0.1)',
    credentialType: 'pdf',
    credentialSrc: 'assets/cert-redhat.pdf',
  },
];

// ============================================================
// CANVAS PARTICLE SYSTEM — Kosmik Anti-Gravity Interaktif
// ============================================================
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, particles = [];
  const mouse = { x: -9999, y: -9999 };
  let animId = null;
  let lastScrollY = window.scrollY;
  let scrollDelta = 0;

  const syntaxTexts = [
    'SELECT *', 'ERD', 'UML', 'BCNF', '4NF', 'REST API', '0101',
    'JOIN', 'INDEX', 'FOREIGN KEY', 'PRIMARY KEY', 'HTTP 200',
    'SQL', 'BPMN', 'API', 'Git', 'Cloud', 'Docker',
  ];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(true); }

    reset(init) {
      this.type = Math.random() < 0.72 ? 'star' : 'text';
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : (Math.random() < 0.5 ? -20 : H + 20);
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = this.type === 'star' ? Math.random() * 1.6 + 0.45 : 0;
      this.opacity = Math.random() * 0.55 + 0.3;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = Math.random() * 0.03 + 0.015;
      this.depth = Math.random() * 0.8 + 0.2;
      this.color = Math.random() < 0.2 ? '#00f5ff' : (Math.random() < 0.1 ? '#c084fc' : '#ffffff');
      this.text = this.type === 'text'
        ? syntaxTexts[Math.floor(Math.random() * syntaxTexts.length)]
        : '';
      this.size = this.type === 'text' ? Math.random() * 7 + 8 : 0;
    }

    update() {
      // Reaksi kursor / sentuhan mouse
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 120;

      if (dist < repelRadius && dist > 0) {
        const force = (repelRadius - dist) / repelRadius;
        this.x += (dx / dist) * force * 3.5;
        this.y += (dy / dist) * force * 3.5;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Reaksi momentum scrolling halaman
      if (Math.abs(scrollDelta) > 0.01) {
        this.y -= scrollDelta * this.depth;
      }

      // Animasi kedipan lembut
      this.twinklePhase += this.twinkleSpeed;

      // Wrap-around borders agar partikel terus berputar tanpa henti
      if (this.x < -60) this.x = W + 60;
      if (this.x > W + 60) this.x = -60;
      if (this.y < -60) this.y = H + 60;
      if (this.y > H + 60) this.y = -60;
    }

    draw() {
      ctx.save();
      if (this.type === 'star') {
        const curAlpha = Math.min(1, Math.max(0.2, this.opacity + Math.sin(this.twinklePhase) * 0.25));
        ctx.globalAlpha = curAlpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        if (this.radius > 1.2 || this.color === '#00f5ff') {
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#00f5ff';
        }
        ctx.fill();
      } else {
        ctx.globalAlpha = Math.min(0.85, this.opacity + 0.1);
        ctx.font = `bold ${this.size}px 'Courier New', monospace`;
        ctx.fillStyle = 'rgba(0, 245, 255, 0.7)';
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0, 245, 255, 0.4)';
        ctx.fillText(this.text, this.x, this.y);
      }
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    // Hitung jumlah partikel agar padat dan merata di seluruh viewport
    const count = Math.min(Math.max(Math.floor((W * H) / 7500), 85), 180);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConstellationLines() {
    const starParticles = particles.filter(p => p.type === 'star');
    const maxDist = 135;
    for (let i = 0; i < starParticles.length; i++) {
      for (let j = i + 1; j < starParticles.length; j++) {
        const a = starParticles[i];
        const b = starParticles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.36;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = '#00f5ff';
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawConstellationLines();
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    // Redam momentum scroll secara bertahap
    scrollDelta *= 0.88;

    // Loop requestAnimationFrame berjalan terus menerus secara global di seluruh section
    animId = requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    scrollDelta = (currentScrollY - lastScrollY) * 0.15;
    lastScrollY = currentScrollY;
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Pastikan animasi tetap aktif saat tab kembali aktif
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !animId) {
      animate();
    }
  });

  // Inisialisasi awal
  resize();
  initParticles();
  animate();
})();

// ============================================================
// RENDER — Skills (progress bars)
// ============================================================
function renderSkills(containerId, skills, color) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  skills.forEach(s => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="flex justify-between mb-1">
        <span class="text-xs text-slate-300">${s.name}</span>
        <span class="text-xs font-bold" style="color:${color};">${s.pct}%</span>
      </div>
      <div class="h-1.5 rounded-full" style="background:rgba(255,255,255,0.08);">
        <div class="h-full rounded-full progress-bar" data-pct="${s.pct}"
             style="width:0%; background:linear-gradient(90deg,${color},${color}99);"></div>
      </div>`;
    container.appendChild(div);
  });
}
renderSkills('skills-db', skillsDB, '#00f5ff');
renderSkills('skills-web', skillsWeb, '#a855f7');
renderSkills('skills-sys', skillsSys, '#10b981');

// ============================================================
// RENDER — Projects (dengan Floating Anti-Gravity & 3D Tilt)
// ============================================================
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  // Pola variasi animasi mengapung (staggered float)
  const floatConfigs = [
    { floatClass: 'floating-slow', delay: '0s' },
    { floatClass: 'floating-medium', delay: '1.2s' },
    { floatClass: 'floating-fast', delay: '2.4s' }
  ];

  projects.forEach((p, i) => {
    const config = floatConfigs[i % floatConfigs.length];

    const tagsHtml = p.tags.map(t =>
      `<span class="text-xs px-2.5 py-1 rounded-full font-medium" style="background:rgba(255,255,255,0.06);color:${p.color};border:1px solid ${p.color}25;">${t}</span>`
    ).join('');

    // Outer Wrapper untuk efek Anti-Gravity (Zero-G & Staggered Float)
    const wrapper = document.createElement('div');
    wrapper.className = `project-wrapper ${config.floatClass} fade-in-up`;
    wrapper.style.animationDelay = config.delay;
    wrapper.style.transitionDelay = `${i * 0.15}s`;

    // Inner Card untuk 3D Tilt & Glassmorphism
    const card = document.createElement('div');
    card.className = 'project-card glass border border-white/10 rounded-2xl p-6 cursor-pointer h-full flex flex-col justify-between';
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-5">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
               style="background:${p.color}18; border:1px solid ${p.color}30;">
            <i data-lucide="${p.icon}" class="w-6 h-6" style="color:${p.color};"></i>
          </div>
          <div class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-colors"
               style="background:rgba(255,255,255,0.03);">
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </div>
        </div>
        <h3 class="font-bold text-white text-base mb-2.5 leading-snug tracking-wide">${p.title}</h3>
        <p class="text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed">${p.desc}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-2 mb-6">${tagsHtml}</div>
        <div class="pt-4 border-t border-white/5 flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs font-semibold" style="color:${p.color};">
            <span>Lihat Detail</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </div>
          <span class="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style="background:${p.color}15; color:${p.color};">
            Zero-G Active
          </span>
        </div>
      </div>`;

    // Klik → buka modal
    card.addEventListener('click', () => openProjectModal(i));

    // 3D Tilt on mousemove
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(10px)`;
      card.style.boxShadow = `0 20px 40px ${p.color}20, 0 0 25px ${p.color}15`;
      card.style.borderColor = `${p.color}60`;
    });

    // Reset tilt on mouseleave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
      card.style.boxShadow = '';
      card.style.borderColor = '';
    });

    wrapper.appendChild(card);
    grid.appendChild(wrapper);
  });

  lucide.createIcons();
}
renderProjects();

// ============================================================
// RENDER — Certifications (dengan Anti-Gravity Float & Glassmorphism)
// ============================================================
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  // Pola staggered floating untuk sertifikat
  const floatConfigs = [
    { floatClass: 'floating-slow', delay: '0.4s' },
    { floatClass: 'floating-medium', delay: '1.6s' },
    { floatClass: 'floating-fast', delay: '2.8s' }
  ];

  certs.forEach((c, i) => {
    const config = floatConfigs[i % floatConfigs.length];

    // Outer Wrapper untuk Zero-G Float
    const wrapper = document.createElement('div');
    wrapper.className = `cert-wrapper ${config.floatClass} fade-in-up`;
    wrapper.style.animationDelay = config.delay;
    wrapper.style.transitionDelay = `${i * 0.15}s`;

    // Inner Card untuk Glassmorphism & Hover lift
    const card = document.createElement('div');
    card.className = 'cert-card glass border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between';
    card.innerHTML = `
      <div class="mb-5">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
             style="background:${c.accentBg}; border:1px solid ${c.accentColor}30;">
          <i data-lucide="${c.icon}" class="w-7 h-7" style="color:${c.accentColor};"></i>
        </div>
        <h3 class="font-bold text-white text-sm leading-snug mb-1.5">${c.title}</h3>
        <div class="flex items-center gap-1.5">
          <div class="w-1.5 h-1.5 rounded-full" style="background:${c.accentColor};"></div>
          <span class="text-xs font-medium" style="color:${c.accentColor}bb;">${c.issuer}</span>
        </div>
      </div>
      <div class="border-t border-white/5 pt-4 mt-auto flex items-center justify-between">
        <button class="flex items-center gap-2 text-xs font-semibold transition-all duration-300 hover:gap-3 group"
                style="color:${c.accentColor};" onclick="openCertModal(${i})">
          <div class="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300"
               style="background:${c.accentBg};">
            <i data-lucide="external-link" class="w-3.5 h-3.5" style="color:${c.accentColor};"></i>
          </div>
          Lihat Kredensial
        </button>
        <span class="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style="background:${c.accentBg}; color:${c.accentColor};">
          Zero-G
        </span>
      </div>`;

    wrapper.appendChild(card);
    grid.appendChild(wrapper);
  });

  lucide.createIcons();
}
renderCerts();

// ============================================================
// PROJECT MODAL — Buka & Tutup
// ============================================================
function openProjectModal(idx) {
  const p = projects[idx];
  const modal = document.getElementById('projectModal');

  document.getElementById('modalTitle').textContent = p.title;

  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = p.tags.map(t =>
    `<span class="text-xs px-2.5 py-1 rounded-full" style="background:${p.color}18;color:${p.color};">${t}</span>`
  ).join('');

  document.getElementById('modalBody').innerHTML = `
    <div>
      <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
        <i data-lucide="layers" class="w-4 h-4" style="color:${p.color};"></i> Arsitektur Sistem
      </h4>
      <p class="text-slate-400 text-sm">${p.detail.arch}</p>
    </div>
    <div>
      <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
        <i data-lucide="database" class="w-4 h-4" style="color:${p.color};"></i> Database Schema / ERD
      </h4>
      <p class="text-slate-400 text-sm">${p.detail.erd}</p>
    </div>
    <div>
      <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
        <i data-lucide="code" class="w-4 h-4" style="color:${p.color};"></i> Technology Stack
      </h4>
      <p class="text-slate-400 text-sm">${p.detail.stack}</p>
    </div>
    <div>
      <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
        <i data-lucide="check-circle" class="w-4 h-4" style="color:${p.color};"></i> Fitur Utama
      </h4>
      <ul class="space-y-1.5">
        ${p.detail.features.map(f =>
    `<li class="text-slate-400 text-sm flex items-center gap-2"><span style="color:${p.color};">›</span> ${f}</li>`
  ).join('')}
      </ul>
    </div>`;

  // Set tautan dinamis GitHub Repository pada modal
  const githubBtn = document.getElementById('modalGithubBtn');
  if (githubBtn) {
    if (p.githubUrl) {
      githubBtn.href = p.githubUrl;
      githubBtn.setAttribute('href', p.githubUrl);
      githubBtn.setAttribute('target', '_blank');
      githubBtn.setAttribute('rel', 'noopener noreferrer');
      githubBtn.style.display = 'inline-flex';

      // FIX UTAMA: Memaksa tombol langsung membuka link GitHub di tab baru
      githubBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(p.githubUrl, '_blank');
      };
    } else {
      githubBtn.style.display = 'none';
    }
  }

  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.add('active');
    lucide.createIcons();
  });
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(e) {
  const modal = document.getElementById('projectModal');
  if (e && e.target !== modal) return;
  modal.classList.remove('active');
  setTimeout(() => { modal.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
}

document.getElementById('projectModal').addEventListener('click', function (e) {
  if (e.target === this) closeProjectModal(e);
});

// ============================================================
// CERT MODAL — Buka & Tutup
// ============================================================
function openCertModal(idx) {
  const c = certs[idx];
  const modal = document.getElementById('certModal');

  // Header: ikon + judul + lembaga
  const iconEl = document.getElementById('certModalIcon');
  iconEl.style.background = c.accentBg;
  iconEl.innerHTML = `<i data-lucide="${c.icon}" class="w-6 h-6" style="color:${c.accentColor};"></i>`;
  document.getElementById('certModalTitle').textContent = c.title;
  document.getElementById('certModalMeta').textContent = c.issuer;

  // Area pratinjau kredensial
  const previewEl = document.getElementById('certModalPreview');
  previewEl.innerHTML = '';
  previewEl.style.borderColor = c.accentColor + '44';

  if (c.credentialType === 'image') {
    // Tampilkan gambar sertifikat asli
    previewEl.style.padding = '0';
    previewEl.style.border = `2px solid ${c.accentColor}33`;
    previewEl.innerHTML = `
      <img src="${c.credentialSrc}"
           alt="${c.title}"
           class="w-full rounded-xl object-contain"
           style="max-height:70vh; display:block;"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div style="display:none; flex-direction:column; align-items:center; justify-content:center; padding:3rem; gap:0.75rem;">
        <i data-lucide="image-off" class="w-10 h-10" style="color:${c.accentColor}55;"></i>
        <span style="font-size:0.75rem; color:#64748b;">Gambar tidak dapat dimuat</span>
      </div>`;
  } else if (c.credentialType === 'pdf') {
    // PDF: embed viewer + tombol buka di tab baru
    previewEl.style.padding = '0';
    previewEl.style.overflow = 'hidden';
    previewEl.innerHTML = `
      <div style="position:relative;">
        <embed src="${c.credentialSrc}#toolbar=0&navpanes=0&scrollbar=0"
               type="application/pdf"
               class="w-full rounded-xl"
               style="height:65vh; border:none; display:block;"
               onerror="this.style.display='none'; document.getElementById('pdfFallback').style.display='flex';" />
        <div id="pdfFallback"
             style="display:none; flex-direction:column; align-items:center; justify-content:center; height:65vh; gap:1rem; background:rgba(239,68,68,0.04); border-radius:0.75rem;">
          <i data-lucide="file-text" class="w-12 h-12" style="color:#ef444455;"></i>
          <span style="font-size:0.8rem; color:#64748b;">Pratinjau tidak tersedia di browser ini</span>
        </div>
        <a href="${c.credentialSrc}" target="_blank"
           style="position:absolute; top:0.75rem; right:0.75rem;
                  display:inline-flex; align-items:center; gap:0.4rem;
                  padding:0.4rem 0.9rem; border-radius:9999px;
                  background:${c.accentBg}; color:${c.accentColor};
                  font-size:0.7rem; font-weight:600; text-decoration:none;
                  border:1px solid ${c.accentColor}44; backdrop-filter:blur(8px);">
          <i data-lucide="external-link" style="width:12px;height:12px;"></i> Buka PDF
        </a>
      </div>`;
  }

  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.add('active');
    lucide.createIcons();
  });
  document.body.style.overflow = 'hidden';
}

function closeCertModal(e) {
  const modal = document.getElementById('certModal');
  if (e && e.target !== modal) return;
  modal.classList.remove('active');
  setTimeout(() => { modal.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
}

document.getElementById('certModal').addEventListener('click', function (e) {
  if (e.target === this) closeCertModal(e);
});

// ============================================================
// ZERO-G TOGGLE — ⚡ 0.00 G ↔ 🌍 1.00 G
// ============================================================
let zeroGActive = false;

function toggleZeroG() {
  zeroGActive = !zeroGActive;
  const floatingEls = document.querySelectorAll('.floating-slow, .floating-medium, .floating-fast');
  floatingEls.forEach(el => {
    if (zeroGActive) el.classList.add('zero-g-off');
    else el.classList.remove('zero-g-off');
  });
  const label = zeroGActive ? '🌍 1.00 G' : '⚡ 0.00 G';
  const btn1 = document.getElementById('zeroGBtn');
  const btn2 = document.getElementById('zeroGBtnMobile');
  if (btn1) btn1.textContent = label;
  if (btn2) btn2.textContent = label;
}

document.getElementById('zeroGBtn').addEventListener('click', toggleZeroG);
document.getElementById('zeroGBtnMobile').addEventListener('click', toggleZeroG);

// ============================================================
// HAMBURGER MENU (Mobile)
// ============================================================
const hamBtn = document.getElementById('hamBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamBtn.classList.remove('open');
    mobileMenu.classList.add('hidden');
  });
});

// ============================================================
// SMOOTH SCROLL & ACTIVE NAV HIGHLIGHT
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function updateActiveNav() {
  const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
  const scrollY = window.scrollY + 100;
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' + current) link.classList.add('active');
    else link.classList.remove('active');
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
window.addEventListener('scroll', () => {
  const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / docH) * 100;
  document.getElementById('scrollProgress').style.width = scrolled + '%';
}, { passive: true });

// ============================================================
// INTERSECTION OBSERVER — Fade-in-up & Progress Bars
// ============================================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        const pct = bar.getAttribute('data-pct');
        if (pct) bar.style.width = pct + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// Dedicated observer untuk skills section agar progress bar pasti terpicu
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          document.querySelectorAll('.progress-bar').forEach(bar => {
            const pct = bar.getAttribute('data-pct');
            if (pct) bar.style.width = pct + '%';
          });
        }, 200);
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });
  skillObserver.observe(skillsSection);
}

// ============================================================
// CONTACT FORM — Submit ke Formspree via Fetch + Toast
// ============================================================
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = this;
  const submitBtn = form.querySelector('button[type="submit"]');
  const toast = document.getElementById('toast');

  // Indikator loading
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';

  try {
    const response = await fetch(form.action, {
      method: form.method || 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      toast.textContent = '✅ Pesan terkirim! Terima kasih, Zahri Adnan Nasution akan segera menghubungi Anda.';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
      form.reset();
    } else {
      toast.textContent = '❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi via email.';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }
  } catch (err) {
    toast.textContent = '❌ Terjadi kendala koneksi. Silakan coba lagi.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  } finally {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
  }
});

// ============================================================
// INIT LUCIDE ICONS (panggil di akhir setelah semua DOM siap)
// ============================================================
lucide.createIcons();
