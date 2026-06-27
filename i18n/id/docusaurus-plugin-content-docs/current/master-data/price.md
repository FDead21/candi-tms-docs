---
sidebar_position: 4
---

# Price (Harga)

Modul **Price** menentukan tarif untuk setiap kontrak berdasarkan rute (asal → tujuan), produk, dan jenis kontrak. Tarif ini digunakan secara otomatis saat menghitung biaya dan harga jual pengiriman pada saat booking.

Buka melalui sidebar: **Master Data ➔ Contract Data ➔ Price**.

![Daftar Price](/img/tms_price_main.png)

---

## 📋 Daftar Price

Tabel menampilkan setiap entri harga beserta kontrak, jenis, produk, rute, biaya, dan harga jualnya. Gunakan **Search** untuk memfilter dan tombol **Action** untuk **Edit** atau **Delete** entri.

---

## ➕ Menambah Price Baru

1. Klik tombol **Add Price**.
2. Isi formulir **Add Price**:

   | Kolom | Keterangan |
   |---|---|
   | **Contract** | Pilih kontrak induk tempat tarif ini berlaku. |
   | **Contract Type** | Kategori/jenis kontrak. |
   | **Contract Product** | Produk atau layanan spesifik yang dicakup tarif. |
   | **Origin** | Lokasi asal rute. |
   | **Destination** | Lokasi tujuan rute. |
   | **Cost** | Biaya internal/dasar Anda untuk rute tersebut. |
   | **Price** | Harga jual yang dikenakan ke pelanggan. |

3. Klik **Save changes**.

---

## ✏️ Mengubah & 🗑️ Menghapus

- Klik **Edit** pada baris untuk menyesuaikan tarif, lalu **Save changes**.
- Klik **Delete** untuk menghapus tarif; konfirmasikan saat diminta.

:::tip
Untuk mencari tarif yang berlaku dengan cepat tanpa menelusuri seluruh daftar, gunakan alat [Price Check](./price-check.md).
:::
