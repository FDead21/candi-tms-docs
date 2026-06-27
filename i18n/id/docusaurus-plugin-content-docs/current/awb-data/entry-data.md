---
sidebar_position: 2
---

# Entry Data (Booking Order)

Layar **Entry Data** adalah tempat Anda membuat dan mengelola **Shipping Instruction / Job Order (JO)** untuk booking domestik. Ini adalah catatan operasional inti yang menyatukan shipper, consignee, rute, detail kargo, dan harga.

Buka melalui sidebar: **AWB Data ➔ Booking Order ➔ Entry Data**.

![Daftar Entry Data](/img/tms_entry_data_main.png)

---

## 📋 Daftar Booking

Tabel utama menampilkan setiap booking/job order dengan kolom berikut:

| Kolom | Arti |
|---|---|
| **ID** | ID catatan internal. |
| **Nomor JO** | Nomor Job Order. |
| **Contract** | Kontrak terkait. |
| **Shipment Type** | Jenis pengiriman. |
| **Master BL/AWB Number** | Nomor Master Bill of Lading / Air Waybill. |
| **Shipper** | Pengirim. |
| **Consignee** / **Consignee Address** | Penerima dan alamat pengiriman. |
| **Origin** / **Destination** | Rute. |
| **Departure Date** | Jadwal keberangkatan. |
| **Commodity** | Deskripsi barang. |
| **Collie** | Jumlah koli/kemasan. |
| **Chargeable Weight** / **Gross Weight** / **Volume** | Metrik kargo. |

Gunakan **Search** untuk memfilter, dan tombol **Action** untuk melihat, mengubah, atau menghapus booking.

---

## ➕ Membuat Booking Baru

Klik **Add / New** untuk membuka formulir entri. Formulir tersusun dalam beberapa bagian logis — isi secara berurutan:

### 1. Order & Kontrak
- **JO / Nomor JO** — nomor job order.
- **Date** — tanggal booking.
- **Contract**, **Shipment Type**, **Product / Product Detail** — pilih perjanjian dan layanan.

### 2. Pihak Terkait
- **Shipper** & **Shipper Address** — pilih pengirim (dari [Shipper](../master-data/shipper.md)).
- **Consignee** & **Consignee Address** — pilih penerima (dari [Consignee](../master-data/consignee.md)).

### 3. Rute & Penerbangan
- **Origin** / **Destination** — rute.
- **Airline** / **Flight** / **Airwaybill** — detail transportasi.
- **Departure Date** — jadwal keberangkatan.

### 4. Detail Kargo
- **Commodity** — deskripsi barang.
- **Collie / Koli** — jumlah koli.
- **Gross Weight**, **Chargeable Weight**, **Volume**, **Dimensi**.

### 5. Harga
- **Contract Price**, **Cost**, **Sell Price**, **Total Price** — terisi dari tarif kontrak (lihat [Price](../master-data/price.md)).

### 6. Pickup & Catatan
- **Pickup / Pickup Address**, **City**, **PIC**, **PIC Phone Number**, **Tanggal Pickup**.
- **Note / Keterangan** dan berkas pendukung **File input** (mis. **Bukti Pembayaran**).

Setelah semua kolom wajib terisi, **Simpan** booking. Job order baru akan muncul di daftar dan tersedia untuk penugasan driver serta pembuatan delivery order.

:::tip
Memilih **Contract** dan rute yang benar akan mengisi otomatis kolom biaya dan harga, sehingga mengurangi kesalahan input manual.
:::
