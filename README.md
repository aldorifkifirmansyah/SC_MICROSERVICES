# Microservices Image & User Management

Sistem manajemen media dan pengguna menggunakan arsitektur microservices dengan Node.js dan Express.

## Struktur Layanan
- API Gateway (Port 3000): Entry point utama dan routing request.
- Service User (Port 5000): Manajemen data pengguna dan autentikasi.
- Service Media (Port 8080): Validasi Base64 dan pengelolaan file gambar lokal.

## Panduan Instalasi

### 1. Database
- Gunakan MySQL.
- Buat database terpisah untuk service-user dan service-media.
- Konfigurasi kredensial pada file .env di masing-masing direktori service.

### 2. Service User (Port 5000)
cd service-user<br />
npm install<br />
npx sequelize-cli db:migrate<br />
npx sequelize-cli db:seed:all<br />
npm run dev

### 3. Service Media (Port 8080)
cd service-media<br />
npm install<br />
npx sequelize-cli db:migrate<br />
npm run dev

### 4. API Gateway (Port 3000)
cd api-gateway<br />
npm install<br />
npm run dev<br />

## API Endpoints (Gateway)

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| POST | /users/register | Registrasi pengguna baru |
| POST | /users/login | Autentikasi pengguna |
| POST | /users/logout | Keluar dari sistem |
| POST | /refresh-tokens | Manajemen token sesi |
| POST | /media | Upload gambar (Base64) |
| GET | /media | List data media |
| DELETE | /media/:id | Hapus media berdasarkan ID |

## Note
- Batas maksimal payload JSON adalah 50MB untuk mendukung transfer data Base64.
- Penyimpanan file fisik berada pada direktori service-media/public/images.
- Implementasi path menggunakan path.join untuk menjamin kompatibilitas lintas sistem operasi.

---
Aldo Rifki Firmansyah - Universitas Jember
