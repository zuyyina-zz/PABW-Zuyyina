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