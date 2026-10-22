import { fetchProyek } from './api.js';
import { state, setProyekList } from './state.js';
import { renderProyekCards } from './dom.js';
import { setupEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('proyek-container');

  if (container) {
    const data = await fetchProyek();
    setProyekList(data);
    renderProyekCards(state.filteredProyek, container);
    setupEventListeners(container);
  }
});