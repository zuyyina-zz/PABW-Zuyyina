import { state, setKategoriAktif } from './state.js';
import { renderProyekCards } from './dom.js';

export function setupEventListeners(containerElement) {
  const filterButtons = document.querySelectorAll('.btn-filter');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');

      const kategori = e.target.getAttribute('data-kategori');
      setKategoriAktif(kategori);
      renderProyekCards(state.filteredProyek, containerElement);
    });
  });
}