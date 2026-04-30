# Microservices Management System

Sistem manajemen terdistribusi yang terdiri dari API Gateway, Manajemen Pengguna, Pengelolaan Media, dan Pencatatan Kehadiran menggunakan Node.js dan Express.

## Arsitektur Layanan

- API Gateway (Port 3000): Entry point utama dan routing request antar layanan.
- Service User (Port 5000): Manajemen data pengguna, autentikasi, dan refresh token.
- Service Media (Port 8080): Validasi Base64 dan penyimpanan file gambar lokal.
- Service Kehadiran (Port 4000): Manajemen data presensi (CRUD).

## Panduan Instalasi Cepat

Jalankan perintah berikut pada terminal di direktori root untuk menginstal seluruh dependensi dan menjalankan migrasi database dalam satu proses:

```bash
cd service-user && npm install && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && cd ../service-media && npm install && npx sequelize-cli db:migrate && cd ../service-kehadiran && npm install && npx sequelize-cli db:migrate && cd ../api-gateway && npm install && cd ..
```

## Menjalankan Layanan

Gunakan terminal terpisah untuk menjalankan setiap layanan berikut:

# Terminal 1 (User Service)

```bash
cd service-user && npm run dev
```

# Terminal 2 (Media Service)

```bash
cd service-media && npm run dev
```

# Terminal 3 (Kehadiran Service)

```bash
cd service-kehadiran && npm run dev
```

# Terminal 4 (API Gateway)

```bash
cd api-gateway && npm run dev
```

## API Endpoints (Gateway Port 3000)

| Method | Endpoint        | Deskripsi                            |
| :----- | :-------------- | :----------------------------------- |
| POST   | /users/register | Registrasi pengguna baru             |
| POST   | /users/login    | Autentikasi pengguna                 |
| POST   | /users/logout   | Keluar dari sistem                   |
| POST   | /refresh-tokens | Manajemen token sesi                 |
| POST   | /media          | Upload gambar (Base64)               |
| GET    | /media          | List data media                      |
| DELETE | /media/:id      | Hapus media berdasarkan ID           |
| POST   | /kehadiran      | Tambah data kehadiran baru           |
| GET    | /kehadiran      | List semua data kehadiran            |
| PUT    | /kehadiran/:id  | Update data kehadiran berdasarkan ID |
| DELETE | /kehadiran/:id  | Hapus data kehadiran berdasarkan ID  |

## Notes

- Payload JSON dibatasi maksimal 50MB untuk mendukung transfer data Base64.
- Penyimpanan file fisik dilakukan pada direktori service-media/public/images.
- Implementasi manajemen path menggunakan path.join untuk kompatibilitas lintas sistem operasi.
- Pastikan konfigurasi .env pada setiap direktori layanan telah disesuaikan sebelum menjalankan perintah migrasi.

---

Aldo Rifki Firmansyah - Universitas Jember
