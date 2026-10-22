export async function fetchProyek() {
  try {
    const response = await fetch('./data/proyek.json');
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}