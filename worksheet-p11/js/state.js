// js/state.js
import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  kategoriAktif: "semua",
  favorit: [],
  daftarProyek: []
};

export function simpan(stateData) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateData.kategoriAktif,
    favorit: stateData.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif || "semua";
  state.favorit = isi.favorit || [];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
  render(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  simpan(state);
  render(state);
}