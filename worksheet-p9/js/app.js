// Data menu nasi goreng (modul data untuk dipakai oleh dom.js)
export const profil = {
  nama: "Zuyyina Liwalidain",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

export const daftarNasiGoreng = [
  {
    nama: "Nasi Goreng Sayur",
    bahan: ["Brokoli", "Jagung", "Telur"],
    kesulitan: "Mudah"
  },
  {
    nama: "Nasi Goreng Spesial",
    bahan: ["Sosis", "Telur", "Bakso", "Ati"],
    kesulitan: "Sedang"
  },
  {
    nama: "Nasi Goreng Daging",
    bahan: ["Daging", "Telur"],
    kesulitan: "Sulit"
  }
];

// Contoh pengolahan array seperti latihan pertemuan sebelumnya
export const namaNasiGoreng = daftarNasiGoreng.map((item) => item.nama);
export const nasiGorengMudah = daftarNasiGoreng.filter(
  (item) => item.kesulitan === "Mudah"
);
export const nasiGorengSpesial = daftarNasiGoreng.find(
  (item) => item.nama === "Nasi Goreng Spesial"
);

console.log("JavaScript berhasil terhubung!");
console.log(profil);
console.log("Jumlah menu:", daftarNasiGoreng.length);
console.log("Nama menu:", namaNasiGoreng);
console.log("Menu mudah:", nasiGorengMudah);
console.log("Menu spesial:", nasiGorengSpesial);
