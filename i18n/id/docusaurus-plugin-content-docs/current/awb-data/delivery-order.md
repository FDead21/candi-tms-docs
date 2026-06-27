---
sidebar_position: 3
---

# Delivery Order (Manifest)

Layar **Delivery Order** mengelola catatan tingkat manifest yang digunakan untuk menghasilkan dokumen pengiriman. Layar ini membangun dari data booking dan menambahkan detail kepabeanan/pemberitahuan (CN, Pemberitahu) yang diperlukan untuk mengirim dan mendokumentasikan pengiriman.

Buka melalui sidebar: **AWB Data ➔ Booking Order ➔ Delivery Order**.

![Daftar Delivery Order](/img/tms_delivery_order_main.png)

---

## 📋 Daftar Delivery Order

Tabel menampilkan setiap manifest/delivery order. Gunakan **Search** untuk menemukan catatan dan tombol **Action** untuk melihat, mengubah, mencetak, atau menghapusnya.

---

## 📝 Kolom Delivery Order

Saat Anda membuka atau membuat delivery order, formulir menyatukan detail booking dan pengiriman:

### Order & Dokumen
- **Nomor JO** — nomor job order sumber.
- **ID Booking** / **ID Order** — referensi booking terkait.
- **CN** — referensi consignment note.
- **IDPemberitahu** / **JNS IDPemberitahu** — ID pihak pemberitahu dan jenisnya (informasi pemberitahu pabean).

### Pihak & Rute
- **Shipper** & **Master AWB** — pengirim dan master air waybill.
- **Consignee** & **Consignee Address** — penerima dan alamat.
- **Origin** / **Destination**, **Airline** / **Flight** / **Airwaybill**, **Departure Date**.

### Kargo
- **Nama Barang (Commodity)**, **Koli**, **Kilo / Gross Weight / Chargeable Weight**, **Volume**, **Dimensi**.

### Harga
- **Cost**, **Harga Publish**, **Harga Jual**.

### Pickup & Driver
- **Alamat Pickup**, **Kota**, **PIC** / **PIC Phone Number**.
- Penugasan **Kendaraan** & **Driver**.
- **Keterangan / Note** dan **File input** pendukung.

---

## 🖨️ Mencetak Delivery Order

Setelah catatan lengkap, gunakan tombol cetak/aksi untuk menghasilkan dokumen pengiriman yang dapat dicetak.

:::tip
Selesaikan booking [Entry Data](./entry-data.md) terlebih dahulu — Delivery Order menarik detail intinya dari job order.
:::
