const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    
    if (!respons.ok) {
      throw new Error(`Gagal mengambil data (Status: ${respons.status})`);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('Terjadi kesalahan pada api.js:', galat.message);
    throw galat;
  }
}