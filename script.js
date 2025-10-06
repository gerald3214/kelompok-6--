// Fungsi untuk menampilkan section berdasarkan menu
function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
    
    // Trigger animasi ulang untuk stats di beranda (jika diperlukan)
    if (sectionId === 'beranda') {
        const stats = document.querySelectorAll('.stat-box');
        stats.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.animation = 'none';
                stat.offsetHeight; // Trigger reflow
                stat.style.animation = 'slideDown 1s ease-out';
            }, index * 200);
        });
    }
}

// Fungsi login (dummy)
function login() {
    const nomor = document.getElementById('nomor-anggota').value;
    const password = document.getElementById('password').value;
    if (nomor && password) {
        alert('Login berhasil! Selamat datang di perpustakaan digital.');
    } else {
        alert('Mohon isi nomor anggota dan password.');
    }
}

// Fungsi generate NIK (dummy, generate random 16 digit)
function generateNIK() {
    let nik = '';
    for (let i = 0; i < 16; i++) {
        nik += Math.floor(Math.random() * 10);
    }
    document.getElementById('no-identitas').value = nik;
}

// Fungsi daftar (dummy)
function daftar() {
    const nik = document.getElementById('no-identitas').value;
    const password = document.getElementById('daftar-password').value;
    const ttl = document.getElementById('tempat-lahir').value;
    if (nik && password && ttl) {
        alert('Pendaftaran berhasil! Nomor anggota Anda: ' + nik);
        showSection('keanggotaan'); // Kembali ke keanggotaan
    } else {
        alert('Mohon isi semua field.');
    }
}

// Inisialisasi: Tampilkan beranda secara default
document.addEventListener('DOMContentLoaded', function() {
    showSection('beranda');
});