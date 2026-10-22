// js/data.js

export const profil = {
  nama: "John Doe",
  peran: "Pengembang Web",
  keahlian: ["HTML", "CSS", "JavaScript", "Vue.js"]
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, seorang ${peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!kategori || kategori === "semua") {
    return daftar;
  }
  return daftar.filter((item) => item.kategori === kategori);
}