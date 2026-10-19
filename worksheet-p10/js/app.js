import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat } from "./dom.js";

export const profil = {
  nama: "Zuyyina Liwalidain",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

// Fungsi Perakit Utama (Lembar D.2)
async function muat() {
  aturMemuat(true); // Keadaan 1: Memuat
  try {
    const daftar = await ambilProyek(); // 1. Ambil data via api.js
    pasangFilter(daftar);               // 2. Pasang listener filter
    render(daftar);                     // 3. Keadaan 2: Berhasil (render kartu)
  } catch (galat) {
    // Keadaan 3: Gagal
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error("Detail Galat:", galat.message);
  } finally {
    aturMemuat(false); // Selesai memuat
  }
}

// Jalankan perakit
muat();