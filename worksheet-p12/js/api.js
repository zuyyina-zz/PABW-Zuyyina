// js/api.js

export async function ambilProyek() {
  const respon = await fetch('./data/proyek.json');
  
  if (!respon.ok) {
    throw new Error(`Gagal mengambil data: ${respon.statusText}`);
  }
  
  const data = await respon.json();
  return data;
}