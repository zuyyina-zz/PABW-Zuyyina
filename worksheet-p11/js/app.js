// js/app.js
import { profil, buatPerkenalan, formatKeahlian } from './data.js';
import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat, tampilkanProfil } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  tampilkanProfil(profil, buatPerkenalan, formatKeahlian);
  
  pulihkan(muat());
  pasangPendengar();
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    isiProyek(data);
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
  } finally {
    aturMemuat(false);
  }
}

mulai();