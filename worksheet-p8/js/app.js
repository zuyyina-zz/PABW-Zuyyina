console.log("JavaScript berhasil terhubung!");

const profil = {
    nama: "Zuyyina Liwalidain",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahProyek = 3;

console.log(profil);
console.log(jumlahProyek);

const daftarNasiGoreng = [
    {
        nama: "Nasi Goreng Sayur",
        bahan: ["Brokoli", "Jagung", "Telur"],
        kesulitan: "Mudah"
    },
    {
        nama: "Nasi Goreng Spesial",
        bahan: ["Sosis", "Telur", "Bakso", "Ati"],
        kesulitan: "Sedang"
    },
    {
        nama: "Nasi Goreng Daging",
        bahan: ["Daging", "Telur"],
        kesulitan: "Sulit"
    }
];

console.log(daftarNasiGoreng);

const namaNasiGoreng = daftarNasiGoreng.map(item => item.nama);

console.log(namaNasiGoreng);

const nasiGorengMudah = daftarNasiGoreng.filter(
    item => item.kesulitan === "Mudah"
);

console.log(nasiGorengMudah);

const nasiGorengSpesial = daftarNasiGoreng.find(
    item => item.nama === "Nasi Goreng Spesial"
);

console.log(nasiGorengSpesial);