import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat } from "./dom.js";

export const profil = {
  nama: "Zuyyina Liwalidain",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

async function muat() {
  aturMemuat(true);
  try {
    const daftar = await ambilProyek();
    pasangFilter(daftar);
    render(daftar);
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error("Detail Galat:", galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();