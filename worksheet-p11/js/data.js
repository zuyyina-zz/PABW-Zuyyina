export const profil = {
  nama: "Mahasiswa PABW",
  peran: "Pengembang Web Muda",
  keahlian: ["HTML5", "CSS3", "JavaScript ES6+", "Git"]
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, seorang ${peran}. Selamat datang di halaman profil saya!`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!kategori || kategori === 'semua') return daftar;
  return daftar.filter((item) => item.kategori === kategori);
}