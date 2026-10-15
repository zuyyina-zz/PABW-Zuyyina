import { daftarNasiGoreng } from "./app.js";

// LEMBAR A: pilih elemen yang akan diisi atau didengarkan.
const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("#form-menu");
const inputNama = document.querySelector("#nama");
const inputBahan = document.querySelector("#bahan");
const inputTingkat = document.querySelector("#tingkat");
const tombolSimpan = document.querySelector("#tombol-simpan");
const pesanSukses = document.querySelector("#pesan-sukses");

if (!wadah || !barisFilter || !pesanKosong || !form) {
  throw new Error("Elemen halaman tidak ditemukan. Periksa id di profil.html.");
}

let menu = [...daftarNasiGoreng];
let kategoriAktif = "semua";

function buatKartu(item) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = item.nama;

  const bahan = document.createElement("p");
  const labelBahan = document.createElement("strong");
  labelBahan.textContent = "Bahan: ";
  bahan.append(labelBahan, document.createTextNode(item.bahan.join(", ")));

  const kesulitan = document.createElement("p");
  const labelKesulitan = document.createElement("strong");
  labelKesulitan.textContent = "Kesulitan: ";
  kesulitan.append(labelKesulitan, document.createTextNode(item.kesulitan));

  kartu.append(judul, bahan, kesulitan);
  return kartu;
}

// LEMBAR B + D: kosongkan wadah, tangani kondisi kosong, lalu gambar ulang.
function render(daftar) {
  wadah.replaceChildren();

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  const fragmen = document.createDocumentFragment();
  daftar.forEach((item) => fragmen.append(buatKartu(item)));
  wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// LEMBAR C: satu pendengar pada induk (event delegation).
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol || !barisFilter.contains(tombol)) return;

  kategoriAktif = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);
  const hasil = menu.filter(
    (item) => kategoriAktif === "semua" || item.kesulitan === kategoriAktif
  );
  render(hasil);
});

// LEMBAR D: validasi per kolom.
const pasanganKolom = [
  { input: inputNama, pesan: document.querySelector("#galat-nama"), label: "Nama menu" },
  { input: inputBahan, pesan: document.querySelector("#galat-bahan"), label: "Bahan" },
  { input: inputTingkat, pesan: document.querySelector("#galat-tingkat"), label: "Tingkat kesulitan" }
];

function validasiKolom(kolom) {
  const kosong = kolom.input.value.trim() === "";
  kolom.input.setAttribute("aria-invalid", String(kosong));
  kolom.pesan.textContent = kosong ? `${kolom.label} wajib diisi.` : "";
  return !kosong;
}

function validasiForm() {
  const hasil = pasanganKolom.map(validasiKolom);
  const sah = hasil.every(Boolean);
  tombolSimpan.disabled = !sah;
  return sah;
}

pasanganKolom.forEach(({ input }) => {
  input.addEventListener("input", () => {
    validasiForm();
    pesanSukses.textContent = "";
  });
  input.addEventListener("change", validasiForm);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validasiForm()) {
    pasanganKolom.find(({ input }) => input.value.trim() === "")?.input.focus();
    return;
  }

  menu = [...menu, {
    nama: inputNama.value.trim(),
    bahan: inputBahan.value.split(",").map((bahan) => bahan.trim()).filter(Boolean),
    kesulitan: inputTingkat.value
  }];

  kategoriAktif = "semua";
  const tombolSemua = barisFilter.querySelector('[data-kategori="semua"]');
  tandaiTombolAktif(tombolSemua);
  render(menu);
  form.reset();
  pasanganKolom.forEach(({ input, pesan }) => {
    input.setAttribute("aria-invalid", "false");
    pesan.textContent = "";
  });
  tombolSimpan.disabled = true;
  pesanSukses.textContent = "Menu berhasil ditambahkan.";
});

// Tombol tema sederhana.
document.querySelector("#tema-toggle").addEventListener("click", () => {
  document.body.classList.toggle("tema-gelap");
});

// Render awal.
render(menu);
validasiForm();
