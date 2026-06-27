---
sidebar_position: 3
---

# Contract (Kontrak)

Modul **Contract** mencatat perjanjian layanan yang menjadi dasar penetapan harga. Sebuah kontrak mendefinisikan perjanjian bernama beserta masa berlakunya; entri harga (lihat [Price](./price.md)) kemudian dilampirkan ke kontrak tersebut.

Buka melalui sidebar: **Master Data ➔ Contract Data ➔ Contract**.

![Daftar Contract](/img/tms_contract_main.png)

---

## 📋 Daftar Contract

Tabel menampilkan setiap kontrak beserta masa berlakunya. Gunakan **Search** untuk menemukan kontrak dan tombol **Action** untuk **Edit** atau **Delete**.

---

## ➕ Menambah Contract Baru

1. Klik tombol **Add Contract**.
2. Isi formulir **Add Contract**:

   | Kolom | Keterangan |
   |---|---|
   | **ID** | Identitas unik kontrak (dapat dibuat otomatis). |
   | **Name** | Nama deskriptif kontrak atau perjanjian klien. |
   | **Begin Date** | Tanggal kontrak mulai berlaku. |
   | **End Date** | Tanggal kontrak berakhir. |

3. Klik **Save changes**.

---

## ✏️ Mengubah Contract

1. Klik **Edit** pada baris kontrak.
2. Sesuaikan detail pada formulir **Edit Contract**.
3. Klik **Save changes**.

---

## 🗑️ Menghapus Contract

1. Klik **Delete** pada baris lalu konfirmasikan.

:::caution
Menghapus kontrak akan memengaruhi seluruh entri **Price** yang terkait dengannya. Pastikan tidak ada harga aktif yang bergantung pada kontrak sebelum menghapusnya.
:::

:::tip Langkah Selanjutnya
Setelah membuat kontrak, tentukan tarifnya di [Price](./price.md).
:::
