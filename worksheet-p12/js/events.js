// js/events.js
import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  const filterWadah = document.querySelector("#filter-kategori");
  if (filterWadah) {
    filterWadah.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  const daftarWadah = document.querySelector("#daftar-proyek");
  if (daftarWadah) {
    daftarWadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}

// Fitur bintang favorit pada tiga gambar nasi goreng
document.addEventListener("DOMContentLoaded", () => {
  const tombolBintang = document.querySelectorAll(".bintang-gambar");

  tombolBintang.forEach((tombol) => {
    const idFavorit = `favorit-${tombol.dataset.favorit}`;

    // Pulihkan status favorit yang tersimpan
    const tersimpan = localStorage.getItem(idFavorit) === "true";
    tombol.classList.toggle("is-favorit", tersimpan);
    tombol.textContent = tersimpan ? "★" : "☆";
    tombol.setAttribute("aria-pressed", String(tersimpan));

    tombol.addEventListener("click", () => {
      const aktif = tombol.getAttribute("aria-pressed") !== "true";
      tombol.textContent = aktif ? "★" : "☆";
      tombol.classList.toggle("is-favorit", aktif);
      tombol.setAttribute("aria-pressed", String(aktif));
      tombol.setAttribute(
        "aria-label",
        `${aktif ? "Hapus" : "Tambahkan"} ${tombol.dataset.favorit} dari favorit`
      );
      localStorage.setItem(idFavorit, String(aktif));
    });
  });
});
