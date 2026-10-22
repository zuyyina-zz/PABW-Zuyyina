import { saring, profil, buatPerkenalan, formatKeahlian } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");

export function tampilkanProfil() {
  const namaEl = document.querySelector("#nama-profil");
  const peranEl = document.querySelector("#peran-profil");
  const keahlianEl = document.querySelector("#keahlian-profil");

  if (namaEl) namaEl.textContent = profil.nama;
  if (peranEl) peranEl.textContent = buatPerkenalan(profil);
  if (keahlianEl) keahlianEl.textContent = formatKeahlian(profil.keahlian);
}

export function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const info = document.createElement("div");
  info.className = "info-kartu";

  const judul = document.createElement("strong");
  judul.textContent = proyek.judul;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi || "";

  info.append(judul, deskripsi);

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";

  li.append(info, tombol);
  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  const tombolList = document.querySelectorAll("[data-kategori]");
  tombolList.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (kosong) {
    kosong.hidden = tampil.length !== 0;
  }

  if (tampil.length === 0) return;

  tampil.forEach((item) => {
    wadah.append(buatKartu(item, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}

export function aturMemuat(sedangMemuat) {
  const pemuat = document.querySelector("#memuat");
  if (pemuat) pemuat.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  const galat = document.querySelector("#pesan-galat");
  if (galat) {
    galat.textContent = pesan;
    galat.hidden = false;
  }
}