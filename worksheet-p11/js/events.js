import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  // Filter Kategori
  const areaFilter = document.querySelector("#filter-kategori");
  if (areaFilter) {
    areaFilter.addEventListener("click", (e) => {
      const tombol = e.target.closest("[data-kategori]");
      if (tombol) {
        pilihKategori(tombol.dataset.kategori);
      }
    });
  }

  // Delegasi Event Klik Tombol Favorit
  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  // Tombol Atur Ulang
  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}