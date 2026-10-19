// Gantilah ALAMAT ke tautan raw GitHub Anda di Lembar D.5 jika sudah dipush
// Contoh: 'https://raw.githubusercontent.com/username/repo/main/worksheet-p10/data/proyek.json'
const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    
    // Memeriksa status balasan HTTP (Lembar A)
    if (!respons.ok) {
      throw new Error(`Gagal mengambil data (Status: ${respons.status})`);
    }

    // Membaca balasan sebagai JSON (Lembar C)
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('Terjadi kesalahan pada api.js:', galat.message);
    throw galat; // Lempar galat ke pemanggil (app.js)
  }
}