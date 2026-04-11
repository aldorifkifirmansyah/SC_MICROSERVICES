# Microservices Image Management

Proyek arsitektur microservices menggunakan Node.js dan Express untuk pengelolaan media.

## Struktur
1. API Gateway (Port 3000): Entry point utama dan routing request ke service terkait.
2. Service Media (Port 8080): Validasi Base64, manajemen file lokal, dan database metadata.

## Instalasi

### 1. Persiapan Awal
- Clone repositori ini.
- Pastikan MySQL sudah terinstal dan berjalan.

### 2. Service Media
1. Masuk ke direktori `service-media`.
2. Jalankan `npm install`.
3. Buat file `.env` berdasarkan `.env.example`.
4. Jalankan migrasi database: `npx sequelize-cli db:migrate`.
5. Jalankan aplikasi: `npm run dev`.

### 3. API Gateway
1. Masuk ke direktori `api-gateway`.
2. Jalankan `npm install`.
3. Buat file `.env` berdasarkan `.env.example`.
4. Pastikan variabel `URL_SERVICE_MEDIA` mengarah ke `http://localhost:8080`.
5. Jalankan aplikasi: `npm run dev`.

## API Endpoints (Gateway)
| Method | Endpoint | Deskripsi | Payload (JSON) |
| :--- | :--- | :--- | :--- |
| POST | /media | Upload gambar | {"image": "data:image/png;base64,..."} |
| GET | /media | List semua gambar | - |
| DELETE | /media/:id | Hapus gambar by ID | - |

## Tech Stack
- Runtime: Node.js
- Framework: Express.js
- ORM: Sequelize
- Database: MySQL
- HTTP Client: Axios
- Validation: is-base64

## Catatan
- Gunakan `path.join` untuk kompatibilitas path di lintas sistem operasi (Windows/Linux).
- Pastikan direktori `service-media/public/images` tersedia untuk penyimpanan file.
- Kapasitas payload JSON diset maksimal 50MB untuk mendukung ukuran string Base64 yang besar.

---
Aldo Rifki Firmansyah - Universitas Jember