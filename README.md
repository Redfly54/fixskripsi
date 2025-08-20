# Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor Menggunakan Data Geospasial Citra Satelit Tahun 2023 Studi Kasus Kabupaten Bogor

## Informasi Mahasiswa

- _NIM_: 222112423
- _Nama_: [Nama Lengkap Mahasiswa]
- _Judul Skripsi_: Analisis Spasial dan Pemetaan Tingkat Kerawanan Fisik Alami Tanah Longsor Menggunakan Data Geospasial Citra Satelit Tahun 2023 Studi Kasus Kabupaten Bogor
- _Dosen Pembimbing_: [Nama Lengkap Dosen Pembimbing]

## Deskripsi Singkat Skripsi

Website ini merupakan visualisasi dari hasil penelitian skripsi yang menyajikan _analisis spasial dan pemetaan mengenai tingkat kerawanan fisik alami tanah longsor_ di Kabupaten Bogor. Website ini menampilkan serangkaian peta interaktif yang memvisualisasikan data-data geospasial terkait faktor-faktor penyebab longsor serta peta hasil akhir tingkat kerawanan.

Tujuan utama dari proyek ini adalah untuk menyediakan alat bantu visual yang informatif bagi pemerintah daerah dan pihak terkait. Diharapkan hasil pemetaan ini dapat menjadi dasar untuk _rekomendasi kebijakan, upaya mitigasi atau evaluasi bencana, serta perencanaan tata ruang_ yang lebih baik di masa depan.

## Struktur Folder Project

Project ini terdiri dari beberapa bagian utama untuk visualisasi peta interaktif dan analisis geospasial:

### 1. Data dan Konfigurasi

_Folder konfigurasi dan pengaturan project:_

FIXARTEFAK/
├── .vscode/ # Pengaturan editor Visual Studio Code
├── .gitattributes # Konfigurasi Git untuk file handling
└── README.md # Dokumentasi project ini

### 2. Assets dan Data Mentah

_Folder penyimpanan data geospasial dan aset pendukung:_

assets/ # Aset pendukung project
├── images/ # Gambar dan ilustrasi untuk laporan
├── documents/ # Dokumen proposal dan referensi
├── maps/ # Peta statis untuk dokumentasi
└── presentation/ # File presentasi dan slide

DASHBOARD/ # Data mentah geospasial (QGIS workspace)
├── data/ # File data geospasial
│ ├── raster/ # Data citra satelit dan DEM
│ ├── vector/ # Data shapefile dan vector
│ └── processed/ # Data yang telah diproses
├── projects/ # File project QGIS (.qgz)
├── geopackage/ # Database GeoPackage (.gpkg)
└── styles/ # Style file untuk simbologi peta

_Penjelasan folder data:_

- _assets/_: Berisi semua file pendukung non-geospasial seperti gambar untuk laporan, dokumen proposal, dan materi presentasi
- _DASHBOARD/_: Workspace utama untuk data geospasial mentah, project QGIS, dan database GeoPackage yang menjadi basis semua analisis

### 3. Dashboard Peta Interaktif

_Folder output untuk setiap analisis pemetaan:_

#### A. Dashboard Analisis Kerawanan

dashboard-hasil-1/ # Peta web hasil analisis kerawanan (metode 1)
├── css/ # Stylesheet untuk peta interaktif
├── js/ # JavaScript untuk interaktivitas peta
├── data/ # Data GeoJSON untuk layer peta
├── images/ # Icons dan gambar pendukung
├── index.html # Halaman utama peta interaktif
└── legend/ # File legenda dan simbologi

dashboard-hasil-2/ # Peta web hasil analisis kerawanan (metode 2)
├── css/ # Stylesheet untuk peta interaktif
├── js/ # JavaScript untuk interaktivitas peta
├── data/ # Data GeoJSON untuk layer peta
├── images/ # Icons dan gambar pendukung
├── index.html # Halaman utama peta interaktif
└── legend/ # File legenda dan simbologi

#### B. Dashboard Analisis Dampak

dashboard-dampak-kesehatan/ # Analisis dampak terhadap fasilitas kesehatan
├── css/ # Stylesheet khusus untuk analisis kesehatan
├── js/ # JavaScript untuk layer kesehatan
├── data/ # Data fasilitas kesehatan (GeoJSON)
│ ├── hospitals.geojson # Data rumah sakit
│ ├── clinics.geojson # Data puskesmas/klinik
│ └── health_risk.geojson # Data zona risiko kesehatan
├── images/ # Icon fasilitas kesehatan
├── index.html # Peta interaktif dampak kesehatan
└── reports/ # Laporan analisis dampak

dashboard-dampak-pendidikan/ # Analisis dampak terhadap fasilitas pendidikan
├── css/ # Stylesheet khusus untuk analisis pendidikan
├── js/ # JavaScript untuk layer pendidikan
├── data/ # Data fasilitas pendidikan (GeoJSON)
│ ├── schools.geojson # Data sekolah
│ ├── universities.geojson # Data perguruan tinggi
│ └── education_risk.geojson # Data zona risiko pendidikan
├── images/ # Icon fasilitas pendidikan
├── index.html # Peta interaktif dampak pendidikan
└── reports/ # Laporan analisis dampak

#### C. Dashboard Analisis Perumahan (Multi-Buffer)

dashboard-dampak-perumahan-1000/ # Analisis dampak perumahan (buffer 1000m)
├── css/ # Stylesheet untuk analisis perumahan
├── js/ # JavaScript untuk buffer analysis
├── data/ # Data perumahan dan buffer
│ ├── residential.geojson # Data area perumahan
│ ├── buffer_1000m.geojson # Buffer zone 1000 meter
│ └── risk_assessment.geojson # Penilaian risiko per zona
├── images/ # Icon dan simbol perumahan
├── index.html # Peta interaktif buffer 1000m
└── analysis/ # File analisis statistik

dashboard-dampak-perumahan-1500/ # Analisis dampak perumahan (buffer 1500m)
├── css/ # Stylesheet untuk analisis perumahan
├── js/ # JavaScript untuk buffer analysis
├── data/ # Data perumahan dan buffer
│ ├── residential.geojson # Data area perumahan
│ ├── buffer_1500m.geojson # Buffer zone 1500 meter
│ └── risk_assessment.geojson # Penilaian risiko per zona
├── images/ # Icon dan simbol perumahan
├── index.html # Peta interaktif buffer 1500m
└── analysis/ # File analisis statistik

dashboard-dampak-perumahan-2000/ # Analisis dampak perumahan (buffer 2000m)
├── css/ # Stylesheet untuk analisis perumahan
├── js/ # JavaScript untuk buffer analysis
├── data/ # Data perumahan dan buffer
│ ├── residential.geojson # Data area perumahan
│ ├── buffer_2000m.geojson # Buffer zone 2000 meter
│ └── risk_assessment.geojson # Penilaian risiko per zona
├── images/ # Icon dan simbol perumahan
├── index.html # Peta interaktif buffer 2000m
└── analysis/ # File analisis statistik

_Penjelasan dashboard interaktif:_

- \*dashboard-hasil-/\*\*: Berisi peta web hasil akhir analisis kerawanan dengan metode yang berbeda
- \*dashboard-dampak-/\*\*: Analisis dampak kerawanan terhadap infrastruktur vital (kesehatan, pendidikan, perumahan)
- _Multiple buffer analysis_: Variasi jarak buffer (1000m, 1500m, 2000m) untuk analisis dampak yang komprehensif

### 4. Website Utama dan Distribusi

_Folder untuk halaman web utama dan file produksi:_

dist/ # Folder distribusi untuk deployment
├── css/ # CSS yang telah diminifikasi dan dioptimasi
│ ├── main.min.css # Stylesheet utama
│ ├── map.min.css # Stylesheet khusus peta
│ └── responsive.min.css # CSS responsive design
├── js/ # JavaScript yang telah diminifikasi
│ ├── main.min.js # Script utama
│ ├── maps.min.js # Script untuk interaksi peta
│ └── analytics.min.js # Script untuk analytics
└── images/ # Gambar yang telah dioptimasi

# File utama website

index.html # Landing page utama project
script.js # JavaScript utama untuk navigasi
style.css # CSS utama untuk styling landing page

_Penjelasan website utama:_

- _File root_: Halaman utama yang berfungsi sebagai portal navigasi ke semua dashboard peta
- _dist/_: Versi produksi yang telah dioptimasi untuk performa web
- _Landing page_: Interface utama untuk mengakses berbagai analisis dan visualisasi

## Teknologi yang Digunakan

### GIS dan Analisis Spasial

- _GIS Software_: QGIS 3.x dengan plugin qgis2web
- _Data Format_: GeoPackage (.gpkg), Shapefile (.shp), GeoTIFF (.tif)
- _Coordinate System_: UTM Zone 48S / WGS84
- _Analysis Tools_: GDAL/OGR, GRASS GIS integration

### Web Mapping dan Visualisasi

- _Web Mapping_: Leaflet.js untuk peta interaktif
- _Data Format_: GeoJSON untuk web delivery
- _Styling_: CSS3 dengan responsive design
- _Interactivity_: JavaScript ES6+ untuk user interaction

### Data Sources

- _Satellite Imagery_: Citra satelit resolusi tinggi tahun 2023
- _Topographic Data_: Digital Elevation Model (DEM)
- _Administrative Data_: Batas administrasi Kabupaten Bogor
- _Infrastructure Data_: Data fasilitas kesehatan, pendidikan, dan perumahan

## Instalasi dan Setup

### Prerequisites

- QGIS 3.x dengan plugin qgis2web
- Web browser modern (Chrome, Firefox, Safari)
- Web server lokal (Apache/Nginx) untuk development
- Python 3.x (untuk script processing tambahan)

### Setup Project

bash

# Clone atau download project

git clone [repository-url]

# Untuk development lokal

cd FIXARTEFAK

# Buka dengan web server lokal

python -m http.server 8000

# atau

php -S localhost:8000

# Akses di browser

http://localhost:8000

### Akses Dashboard Individual

Setiap dashboard dapat diakses secara langsung:

http://localhost:8000/dashboard-hasil-1/
http://localhost:8000/dashboard-dampak-kesehatan/
http://localhost:8000/dashboard-dampak-perumahan-1000/

## Fitur Utama

- 🗺️ _Peta Interaktif_: Visualisasi kerawanan tanah longsor dengan multiple layers
- 📊 _Analisis Spasial_: Pemetaan tingkat kerawanan berbasis data geospasial
- 🏥 _Analisis Dampak_: Penilaian risiko terhadap fasilitas vital
- 🏠 _Multi-Buffer Analysis_: Analisis dampak dengan variasi jarak buffer
- 📱 _Responsive Design_: Akses optimal di desktop dan mobile
- 🎯 _Navigation Portal_: Landing page untuk akses mudah ke semua analisis
- 📈 _Data Visualization_: Legenda interaktif dan popup informasi
- 🔍 _Search & Filter_: Pencarian lokasi dan filtering data

## Data Processing Workflow

1. _Data Acquisition_: Pengumpulan citra satelit dan data pendukung
2. _Preprocessing_: Koreksi radiometrik dan geometric citra
3. _Feature Extraction_: Ekstraksi parameter kerawanan (slope, curah hujan, geologi)
4. _Spatial Analysis_: Analisis overlay dan pembobotan faktor
5. _Risk Assessment_: Penilaian tingkat kerawanan dan klasifikasi
6. _Impact Analysis_: Analisis dampak terhadap infrastruktur
7. _Web Visualization_: Export ke format web menggunakan qgis2web

## API Documentation

Project ini menggunakan format data GeoJSON standar untuk pertukaran data geospasial. Struktur data dapat dilihat di folder data/ pada setiap dashboard.

## Contributing

Untuk kontribusi pada project ini:

1. Fork repository
2. Buat branch feature (git checkout -b feature/NewAnalysis)
3. Commit changes (git commit -m 'Add new spatial analysis')
4. Push ke branch (git push origin feature/NewAnalysis)
5. Buat Pull Request

## License

Project ini dikembangkan untuk kepentingan akademik dan penelitian. Penggunaan data mengikuti ketentuan yang berlaku.

## Contact

- _Developer_: [Nama Lengkap Mahasiswa]
- _NIM_: 222112423
- _Email_: [email@stis.ac.id]
- _Institution_: STIS (Sekolah Tinggi Ilmu Statistik)
- _Research Focus_: Spatial Analysis, Landslide Risk Assessment, GIS Application

## Acknowledgments

- Badan Pusat Statistik (BPS) untuk dukungan data
- Dosen pembimbing untuk guidance penelitian
- QGIS Community untuk tools open source
- Leaflet.js untuk web mapping framework
