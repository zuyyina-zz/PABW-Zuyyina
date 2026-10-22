export function renderProyekCards(proyekArray, containerElement) {
  containerElement.innerHTML = '';

  if (proyekArray.length === 0) {
    containerElement.innerHTML = '<p>Tidak ada data proyek yang ditampilkan.</p>';
    return;
  }

  proyekArray.forEach((proyek) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${proyek.gambar}" alt="${proyek.nama}" class="card-img">
      <div class="card-body">
        <span class="badge">${proyek.kategori}</span>
        <h3>${proyek.nama}</h3>
        <p>${proyek.deskripsi}</p>
      </div>
    `;

    containerElement.appendChild(card);
  });
}