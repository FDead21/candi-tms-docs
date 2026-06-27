---
sidebar_position: 4
---

# Update Status

Layar **Update Status** memungkinkan setiap peran operasional memajukan status pengiriman seiring pergerakannya melalui alur. Tersedia layar khusus per peran agar tanggung jawab tetap jelas, ditambah tampilan **All** untuk supervisor.

Buka melalui sidebar: **Driver ➔ Update Status**.

![Update Status](/img/tms_update_status.png)

---

## 🔀 Lima Layar Status

| Layar | Digunakan oleh | Tujuan |
|---|---|---|
| **Update Status Admin** | Admin | Memajukan booking melalui pemeriksaan administratif. |
| **Update Status Handling** | Tim handling | Mencatat progres penanganan kargo. |
| **Update Status Warehouse** | Gudang | Mencatat pergerakan masuk/keluar gudang. |
| **Update Status Driver** | Meja driver | Mencatat progres pickup/pengiriman dan bukti. |
| **Update Status All** | Supervisor | Tampilan gabungan untuk memperbarui/memantau status mana pun. |

---

## 📝 Memperbarui Status (Admin / Handling / Warehouse / All)

1. Buka layar sesuai peran Anda.
2. Temukan pengiriman berdasarkan **ID Booking**-nya.
3. Tetapkan **Status** baru dari dropdown.
4. Tambahkan **Keterangan** (catatan) dan unggah **Image** bila bukti diperlukan.
5. **Simpan** pembaruan.

## 🚚 Update Status Driver (kolom tambahan)

Layar status driver menangkap bukti pengiriman secara lebih detail:

| Kolom | Keterangan |
|---|---|
| **JO Number** | Job order yang sedang dikirim. |
| **Status** | Status driver (sudah pickup, dalam perjalanan, terkirim, dll.). |
| **Penerima** | Nama orang yang menerima barang. |
| **Signature** | Tangkapan tanda tangan penerima. |
| **Image** | Bukti foto pengiriman. |
| **Keterangan** | Catatan/keterangan. |

Setelah disimpan, status baru mengalir ke penghitung status di dasbor.

:::tip
Setiap peran sebaiknya hanya menggunakan layarnya sendiri — ini menjaga akurasi jejak audit. Supervisor dapat menggunakan **Update Status All** untuk mengoreksi atau memantau catatan mana pun.
:::
