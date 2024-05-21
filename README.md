## SHARING VISION TEST

Langkah pertama untuk menjalankan project, clone project dari github. Terdapat dua folder backend dan frontend. Ikuti konfigurasi berikut:

### Backend

Buka terminal dan masuk ke folder _backend_ dengan mengetikan _cd backend_ kemudian ketikan `npm install` pada terminal, tunggu proses instalasi depedency selesai.
Kemudian lakukan konfigurasi database pada folder _config/config.json_

```
  "development": {
          "username": "root", //sesuaikan dengan konfigurasi lokal anda
          "password": "root",//sesuaikan dengan konfigurasi lokal anda
          "database": "articles",//sesuaikan dengan konfigurasi lokal anda
          "host": "127.0.0.1",
          "port": "3307",//sesuaikan dengan konfigurasi lokal anda
          "dialect": "mysql" //sesuaikan dengan konfigurasi lokal anda
    },
```

Lalu buat database dengan nama sesuai konfigurasi anda.
Lakukan migrasi untuk membuat tabel pada database dengan cara ketikan pada terminal `npx sequelize-cli db:migrate`. Jika migrasi berhasil maka tabel baru telah dibuat.
Setelah semua proses di atas berhasil maka jalankan server ketikan pada terminal `npm start`, jika tulisan SERVER OK pada console maka server berhasil dijalankan.

## Frontend

Setelah server berhasil dijalankan, pindah ke folder frontend dengan mengetikan `cd frontend` pada terminal. Ketikan `npm install` untuk menginstall semua depedency, setelah depedency berhasil di install jalankan server frontend dengan mengetikan `npm start`, setelah server dijalankan buka pada browser http://localhost:3000

## API Doc

`https://red-zodiac-910660.postman.co/workspace/Team-Workspace~c3abb927-2ccb-4292-853a-d4f7ffa4ebb1/collection/10536620-92035cda-4b5d-4826-945e-57aa232ccf6d?action=share&creator=10536620`
