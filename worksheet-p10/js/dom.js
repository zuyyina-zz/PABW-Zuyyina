const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");
const form = document.querySelector("#form-menu");
const inputNama = document.querySelector("#nama");
const inputBahan = document.querySelector("#bahan");
const inputTingkat = document.querySelector("#tingkat");
const tombolSimpan = document.querySelector("#tombol-simpan");
const pesanSukses = document.querySelector("#pesan-sukses");

if (!wadah || !barisFilter || !pesanKosong || !form || !tombolSimpan || !muatEl) {
  throw new Error("Elemen halaman tidak ditemukan. Periksa id di profil.html.");
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

function buatKartu(item) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  if (item.gambar) {
    const img = document.createElement("img");
    img.src = item.gambar;
    img.alt = item.nama;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "var(--radius-md)";
    img.style.marginBottom = "var(--space-2)";
    kartu.append(img);
  }

  const judul = document.createElement("h3");
  judul.textContent = item.nama;

  const bahan = document.createElement("p");
  const labelBahan = document.createElement("strong");
  labelBahan.textContent = "Bahan: ";
  bahan.append(labelBahan, document.createTextNode(Array.isArray(item.bahan) ? item.bahan.join(", ") : item.bahan));

  const kesulitan = document.createElement("p");
  const labelKesulitan = document.createElement("strong");
  labelKesulitan.textContent = "Kesulitan: ";
  kesulitan.append(labelKesulitan, document.createTextNode(item.kesulitan));

  kartu.append(judul, bahan, kesulitan);
  return kartu;
}

export function render(daftar) {
  wadah.textContent = "";

  if (!daftar || daftar.length === 0) {
    pesanKosong.textContent = "Tidak ada menu yang sesuai dengan filter.";
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

export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol || !barisFilter.contains(tombol)) return;

    const menuPilihan = tombol.dataset.menu;
    tandaiTombolAktif(tombol);

    const hasil = daftar.filter(
      (item) => menuPilihan === "semua" || item.nama === menuPilihan
    );
    render(hasil);
  });
}

const pasanganKolom = [
  { input: inputNama, pesan: document.querySelector("#galat-nama"), label: "Nama menu" },
  { input: inputBahan, pesan: document.querySelector("#galat-bahan"), label: "Bahan" },
  { input: inputTingkat, pesan: document.querySelector("#galat-tingkat"), label: "Tingkat kesulitan" }
];

function validasiKolom(kolom) {
  const kosong = kolom.input.value.trim() === "";
  kolom.input.setAttribute("aria-invalid", String(kosong));
  if (kolom.pesan) {
    kolom.pesan.textContent = kosong ? `${kolom.label} wajib diisi.` : "";
  }
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
    if (pesanSukses) pesanSukses.textContent = "";
  });
  input.addEventListener("change", validasiForm);
});

const tombolTema = document.querySelector("#tema-toggle");
if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-gelap");
  });
}

validasiForm();