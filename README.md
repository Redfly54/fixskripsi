# Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor

## Informasi Proyek

_Judul Skripsi:_ Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor Menggunakan Data Geospasial Citra Satelit Tahun 2023 Studi Kasus Kabupaten Bogor

_NIM:_ 222112423  
_Nama:_ [Nama Lengkap Mahasiswa]  
_Dosen Pembimbing:_ [Nama Lengkap Dosen Pembimbing]

## Deskripsi Proyek

Website ini merupakan visualisasi dari hasil penelitian skripsi yang menyajikan _analisis spasial dan pemetaan mengenai tingkat kerawanan fisik alami tanah longsor_ di Kabupaten Bogor. Website ini menampilkan serangkaian peta interaktif yang memvisualisasikan data-data geospasial terkait faktor-faktor penyebab longsor serta peta hasil akhir tingkat kerawanan.

### Tujuan

Tujuan utama dari proyek ini adalah untuk menyediakan alat bantu visual yang informatif bagi pemerintah daerah dan pihak terkait. Diharapkan hasil pemetaan ini dapat menjadi dasar untuk:

- _Rekomendasi kebijakan_
- _Upaya mitigasi atau evaluasi bencana_
- _Perencanaan tata ruang_ yang lebih baik di masa depan

## Struktur Proyek

FIXARTEFAK/
├── .vscode/ # Pengaturan editor Visual Studio Code
├── assets/ # Aset pendukung (gambar, proposal, dll)
├── DASHBOARD/ # Data mentah Geospasial (QGIS, GeoPackage)
├── dashboard-dampak-kesehatan/ # Peta web dampak terhadap fasilitas kesehatan
├── dashboard-dampak-pendidikan/ # Peta web dampak terhadap fasilitas pendidikan
├── dashboard-dampak-perumahan-1000/ # Peta web dampak perumahan (buffer 1000m)
├── dashboard-dampak-perumahan-1500/ # Peta web dampak perumahan (buffer 1500m)
├── dashboard-dampak-perumahan-2000/ # Peta web dampak perumahan (buffer 2000m)
├── dashboard-hasil-1/ # Peta web hasil analisis pertama
├── dashboard-hasil-2/ # Peta web hasil analisis kedua
├── dist/ # Folder distribusi halaman web utama
│ ├── css/ # File CSS yang telah diproses
│ └── js/ # File JavaScript yang telah diproses
├── .gitattributes # Konfigurasi Git
├── index.html # Halaman utama website
├── script.js # JavaScript utama
├── style.css # CSS utama
└── README.md # Dokumentasi proyek

## Penjelasan Folder

### Dashboard Folder

**Folder dashboard-\*:** Setiap folder dengan awalan dashboard- berisi satu set lengkap file untuk menampilkan peta web interaktif. Folder-folder ini merupakan hasil ekspor dari perangkat lunak GIS seperti QGIS (menggunakan plugin qgis2web). Masing-masing folder bersifat mandiri (self-contained) dan memiliki file index.html sendiri.

_Folder DASHBOARD (kapital):_ Berfungsi sebagai tempat penyimpanan data mentah geospasial (.gpkg, .qgz) yang menjadi dasar dari semua analisis dan pemetaan.

### Folder Pendukung

_assets/:_ Berisi file-file pendukung non-kode seperti gambar peta untuk laporan, dokumen proposal, dan aset visual lainnya.

_dist/:_ Folder distribusi yang berisi versi final dari aset (CSS, JS) untuk halaman web utama yang sudah dioptimalkan.

### File Utama

_File di root (index.html, script.js, style.css):_ File inti yang membangun halaman utama atau landing page dari keseluruhan proyek. Halaman ini berfungsi sebagai portal untuk mengakses berbagai peta yang ada di dalam folder dashboard-\*.

## Cara Menggunakan

1. _Halaman Utama:_ Buka file index.html di browser untuk mengakses landing page proyek
2. _Peta Interaktif:_ Navigasi ke folder dashboard-\* yang diinginkan dan buka file index.html di dalamnya
3. _Data Mentah:_ Akses folder DASHBOARD untuk file data geospasial asli

## Teknologi yang Digunakan

- _GIS Software:_ QGIS dengan plugin qgis2web
- _Data Format:_ GeoPackage (.gpkg), QGIS Project (.qgz)
- _Web Technologies:_ HTML, CSS, JavaScript
- _Data Source:_ Citra Satelit 2023

## Kontribusi

Proyek ini merupakan bagian dari penelitian skripsi dan dikembangkan untuk kepentingan akademik serta aplikasi praktis dalam mitigasi bencana tanah longsor di Kabupaten Bogor.

---

Dokumentasi ini dibuat untuk memudahkan navigasi dan pemahaman struktur proyek penelitian.
