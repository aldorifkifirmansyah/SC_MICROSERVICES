# Microservices Management System

Sistem manajemen terdistribusi berbasis microservices yang terdiri dari API Gateway, Service User, Service Media, Service Kehadiran, dan Service Mentor menggunakan Node.js, Express, dan Laravel.

---

# Arsitektur Layanan

| Service | Port | Deskripsi |
| :--- | :--- | :--- |
| API Gateway | 3000 | Entry point utama dan routing request antar layanan |
| Service User | 5000 | Manajemen pengguna, autentikasi, dan refresh token |
| Service Media | 8080 | Validasi Base64 dan penyimpanan file gambar |
| Service Kehadiran | 4000 | Manajemen data presensi (CRUD) |
| Service Mentor (Laravel) | 8000 | Manajemen data mentor berbasis Laravel |

---

# Prasyarat

Sebelum menjalankan proyek, pastikan:

- MySQL telah berjalan pada perangkat lokal.
- Membuat 4 database lokal untuk masing-masing layanan:
  - `service_user`
  - `service_media`
  - `service_kehadiran`
  - `service_mentor`
- Seluruh file `.env` pada setiap service telah dikonfigurasi dengan benar.

---

# Panduan Instalasi

## Install Dependency Node.js Services

Jalankan perintah berikut dari direktori root project:

```bash
npm install --prefix service-user
npm install --prefix service-media
npm install --prefix service-kehadiran
npm install --prefix api-gateway
```

## Install Dependency Laravel Service Mentor

```bash
cd service-mentor
composer install
```

## Menjalankan Migrasi Database

### Service User

```bash
cd service-user
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Service Media

```bash
cd service-media
npx sequelize-cli db:migrate
```

### Service Kehadiran

```bash
cd service-kehadiran
npx sequelize-cli db:migrate
```

### Service Mentor (Laravel)

```bash
cd service-mentor
php artisan migrate
```

---

# Menjalankan Layanan

Gunakan terminal terpisah untuk setiap layanan berikut:

## Terminal 1: Service User

```bash
cd service-user
npm run dev
```

## Terminal 2: Service Media

```bash
cd service-media
npm run dev
```

## Terminal 3: Service Kehadiran

```bash
cd service-kehadiran
npm run dev
```

## Terminal 4: API Gateway

```bash
cd api-gateway
npm run dev
```

## Terminal 5: Service Mentor (Laravel)

```bash
cd service-mentor
php artisan serve --port=8000
```

---

# API Endpoints

| Method | Endpoint | Deskripsi | Service Asal |
| :--- | :--- | :--- | :--- |
| POST | `/users/register` | Registrasi pengguna baru | Service User |
| POST | `/users/login` | Autentikasi pengguna | Service User |
| POST | `/users/logout` | Keluar dari sistem | Service User |
| POST | `/refresh-tokens` | Manajemen refresh token | Service User |
| POST | `/media` | Upload gambar Base64 | Service Media |
| GET | `/media` | List seluruh media | Service Media |
| DELETE | `/media/:id` | Hapus media berdasarkan ID | Service Media |
| POST | `/kehadiran` | Tambah data kehadiran | Service Kehadiran |
| GET | `/kehadiran` | List seluruh data kehadiran | Service Kehadiran |
| PUT | `/kehadiran/:id` | Update data kehadiran | Service Kehadiran |
| DELETE | `/kehadiran/:id` | Hapus data kehadiran | Service Kehadiran |
| GET | `/mentors` | List seluruh mentor | Service Mentor |
| GET | `/mentors/:id` | Detail mentor berdasarkan ID | Service Mentor |
| POST | `/mentors` | Tambah data mentor baru | Service Mentor |
| PUT | `/mentors/:id` | Update data mentor | Service Mentor |
| DELETE | `/mentors/:id` | Hapus data mentor | Service Mentor |

---

# Catatan Penting

- Payload JSON dibatasi maksimal **50MB** untuk mendukung transfer data gambar dalam format Base64.
- Penyimpanan file media dilakukan secara lokal pada direktori:

```bash
service-media/public/images
```

- Implementasi path menggunakan `path.join()` untuk memastikan kompatibilitas lintas sistem operasi.
- Pastikan seluruh service berjalan sebelum mengakses API Gateway.

---

Aldo Rifki Firmansyah - Universitas Jember