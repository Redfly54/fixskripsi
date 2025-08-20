# Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor Menggunakan Data Geospasial Citra Satelit Tahun 2023 Studi Kasus Kabupaten Bogor

Dokumentasi ini berisi informasi mengenai proyek skripsi, termasuk deskripsi singkat, struktur folder, dan penjelasan dari setiap bagiannya.

---

## Informasi Proyek

- **Judul Skripsi**: Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor Menggunakan Data Geospasial Citra Satelit Tahun 2023 Studi Kasus Kabupaten Bogor
- **NIM**: 222112423
- **Nama**: [Nama Lengkap Mahasiswa]
- **Dosen Pembimbing**: [Nama Lengkap Dosen Pembimbing]

---

## Deskripsi Singkat

Website ini merupakan visualisasi dari hasil penelitian skripsi yang menyajikan **analisis spasial dan pemetaan mengenai tingkat kerawanan fisik alami tanah longsor** di Kabupaten Bogor. Website ini menampilkan serangkaian peta interaktif yang memvisualisasikan data-data geospasial terkait faktor-faktor penyebab longsor serta peta hasil akhir tingkat kerawanan.

Tujuan utama dari proyek ini adalah untuk menyediakan alat bantu visual yang informatif bagi pemerintah daerah dan pihak terkait. Diharapkan hasil pemetaan ini dapat menjadi dasar untuk **rekomendasi kebijakan, upaya mitigasi atau evaluasi bencana, serta perencanaan tata ruang** yang lebih baik di masa depan.

---

## Struktur Folder Proyek

Berikut adalah struktur folder utama dari proyek ini beserta penjelasannya untuk memudahkan navigasi dan pemahaman.

FIXARTEFAK/
├── .vscode/ # Pengaturan spesifik untuk editor Visual Studio Code
├── assets/ # Berisi aset pendukung proyek (gambar mentah, proposal, dll)
├── DASHBOARD/ # Berisi file-file data mentah Geospasial (QGIS, GeoPackage)
│
├── dashboard-dampak-kesehatan/ # Folder output peta web dampak terhadap fasilitas kesehatan
├── dashboard-dampak-pendidikan/ # Folder output peta web dampak terhadap fasilitas pendidikan
├── dashboard-dampak-perumahan-1000/ # Peta web dampak terhadap perumahan (buffer 1000m)
├── dashboard-dampak-perumahan-1500/ # Peta web dampak terhadap perumahan (buffer 1500m)
├── dashboard-dampak-perumahan-2000/ # Peta web dampak terhadap perumahan (buffer 2000m)
├── dashboard-hasil-1/ # Folder output peta web untuk hasil analisis pertama
└── dashboard-hasil-2/ # Folder output peta web untuk hasil analisis kedua
│
├── dist/ # Folder distribusi untuk halaman web utama
│ ├── css/ # File CSS yang telah diproses/diminifikasi
│ └── js/ # File JavaScript yang telah diproses/diminifikasi
│
├── .gitattributes # File konfigurasi Git
├── index.html # Halaman utama (landing page) dari website
├── script.js # File JavaScript utama untuk fungsionalitas index.html
├── style.css # File CSS utama untuk styling index.html
└── README.md # File ini

### Penjelasan Struktur

- **Folder `dashboard-*`**: Setiap folder dengan awalan `dashboard-` berisi satu set lengkap file untuk menampilkan peta web interaktif. Folder-folder ini kemungkinan besar merupakan hasil ekspor dari perangkat lunak GIS seperti QGIS (menggunakan plugin `qgis2web`). Masing-masing folder bersifat mandiri (_self-contained_) dan memiliki file `index.html`-nya sendiri yang dapat dibuka langsung di browser.
- **Folder `DASHBOARD` (kapital)**: Folder ini berfungsi sebagai tempat penyimpanan data mentah geospasial (`.gpkg`, `.qgz`) yang menjadi dasar dari semua analisis dan pemetaan yang dilakukan.
- **Folder `assets`**: Berisi file-file pendukung non-kode yang digunakan selama pengembangan proyek, seperti gambar-gambar peta untuk laporan, dokumen proposal, dan aset visual lainnya.
- **Folder `dist`**: Merupakan folder "distribusi" yang berisi versi final dari aset (CSS, JS) untuk halaman web utama. Praktik umum adalah menempatkan file yang sudah dioptimalkan di sini.
- **File di root (`index.html`, `script.js`, `style.css`)**: Ini adalah file inti yang membangun halaman utama atau _landing page_ dari keseluruhan proyek. Halaman ini kemungkinan besar berfungsi sebagai portal untuk mengakses berbagai peta yang ada di dalam folder `dashboard-*`.
