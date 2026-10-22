export const state = {
  proyekList: [],
  filteredProyek: [],
  kategoriAktif: 'semua'
};

export function setProyekList(data) {
  state.proyekList = data;
  state.filteredProyek = data;
}

export function setKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
  if (kategori === 'semua') {
    state.filteredProyek = state.proyekList;
  } else {
    state.filteredProyek = state.proyekList.filter(
      (item) => item.kategori.toLowerCase() === kategori.toLowerCase()
    );
  }
}