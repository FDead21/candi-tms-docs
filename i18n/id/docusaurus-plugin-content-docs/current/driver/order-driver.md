---
sidebar_position: 1
---

# Order Driver

Modul **Order Driver** adalah tempat Anda membuat order pickup/pengiriman dan menugaskannya ke kendaraan serta driver. Modul ini mengubah booking menjadi tugas pengiriman yang dapat dilaksanakan.

Buka melalui sidebar: **Driver ➔ Order Driver**.

![Daftar Order Driver](/img/tms_order_driver_main.png)

---

## 📋 Daftar Order

Tabel menampilkan setiap order driver dengan kolom berikut:

| Kolom | Arti |
|---|---|
| **ID Order** | ID order internal. |
| **Pickup Date** | Tanggal pickup terjadwal. |
| **ID Booking** | Referensi booking terkait. |
| **ID Vehicle** / **Vehicle Type** / **Vehicle Usage** | Detail kendaraan yang ditugaskan. |
| **ID Driver** / **Driver Name** | Driver yang ditugaskan. |
| **Action** | Mengubah, menugaskan, atau menghapus order. |

---

## ➕ Membuat / Menugaskan Order Driver

1. Klik **Add / New Order** (atau aksi untuk menugaskan driver ke booking).
2. Lengkapi formulir order. Kolom utama meliputi:

   | Kolom | Keterangan |
   |---|---|
   | **ID Booking** | Booking yang dipenuhi order ini. |
   | **Tanggal Booking** | Tanggal booking. |
   | **Shipper** / **Shipper Address** | Detail pengirim. |
   | **Consignee** / **Consignee Address** | Detail penerima. |
   | **Master AWB** | Nomor master air waybill. |
   | **Flight** / **Tanggal Flight** | Penerbangan dan tanggalnya. |
   | **Origin** / **Destination** | Rute. |
   | **Nama Barang** | Deskripsi barang. |
   | **Koli** / **Kilo** / **Dimensi** | Jumlah koli, berat, dimensi. |
   | **Alamat Pickup** / **Tujuan Pickup** / **Kota** | Alamat pickup, tujuan, kota. |
   | **PIC** / **PIC Phone Number** | Narahubung di lokasi pickup. |
   | **Keterangan** | Catatan. |
   | **Status** | Status order saat ini. |
   | **File input** | Dokumen/lampiran pendukung. |

3. Tugaskan **kendaraan** dan **driver**, lalu **Simpan**.

Setelah disimpan dan dikonfirmasi (**Booking Confirmed**), order siap dikerjakan driver.

:::tip
Driver mengambil tugas dan memperbarui progres dari lapangan; Anda memantau pembaruan tersebut di [Update Status](./update-status.md) dan [Booking Driver](./booking-driver.md).
:::
