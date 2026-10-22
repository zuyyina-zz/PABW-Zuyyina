// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar-proyek");
const kosong = document.querySelector("#pesan-kosong");
const statusMemuat = document.querySelector("#status-memuat");
const pesanGalat = document.querySelector("#pesan-galat");

export function aturMemuat(isLoading) {
  if (statusMemuat) statusMemuat.hidden = !isLoading;
}

export function tampilkanGalat(pesan) {
  if (pesanGalat) {
    pesanGalat.textContent = pesan;
    pesanGalat.hidden = false;
  }
}

export function tandaiTombolAktif(kategoriAktif) {
  const tombols = document.querySelectorAll("#filter-kategori button");
  tombols.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}

export function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const judul = document.createElement("span");
  judul.textContent = proyek.judul;
  li.append(judul);

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  li.append(tombol);

  return li;
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = "";

  tandaiTombolAktif(state.kategoriAktif);

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }

  if (kosong) kosong.hidden = true;
  tampil.forEach((item) => {
    wadah.append(buatKartu(item, state.favorit));
  });
}

export function tampilkanProfil(profil, buatPerkenalan, formatKeahlian) {
  const namaEl = document.querySelector("#nama-profil");
  const peranEl = document.querySelector("#peran-profil");
  const keahlianEl = document.querySelector("#keahlian-profil");

  if (namaEl) namaEl.textContent = profil.nama;
  if (peranEl) peranEl.textContent = buatPerkenalan(profil);
  if (keahlianEl) keahlianEl.textContent = formatKeahlian(profil.keahlian);
}