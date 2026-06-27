---
sidebar_position: 3
---

# Delivery Order (Manifest)

The **Delivery Order** screen manages the manifest-level records used to generate delivery documents. It builds on the booking data and adds the customs/notification details (CN, Pemberitahu) needed to dispatch and document a shipment.

Open it from the sidebar: **AWB Data ➔ Booking Order ➔ Delivery Order**.

![Delivery Order List](/img/tms_delivery_order_main.png)

---

## 📋 The Delivery Order List

The table lists each manifest/delivery order. Use **Search** to find a record and the **Action** buttons to view, edit, print, or delete it.

---

## 📝 Delivery Order Fields

When you open or create a delivery order, the form draws together the booking and dispatch details:

### Order & Document
- **Nomor JO** — the source job order number.
- **ID Booking** / **ID Order** — linked booking references.
- **CN** — consignment note reference.
- **IDPemberitahu** / **JNS IDPemberitahu** — notifying party ID and its type (customs declarant info).

### Parties & Route
- **Shipper** & **Master AWB** — sender and master air waybill.
- **Consignee** & **Consignee Address** — recipient and address.
- **Origin** / **Destination**, **Airline** / **Flight** / **Airwaybill**, **Departure Date**.

### Cargo
- **Nama Barang (Commodity)**, **Koli (Pieces)**, **Kilo / Gross Weight / Chargeable Weight**, **Volume**, **Dimensi (Dimensions)**.

### Pricing
- **Cost**, **Harga Publish (Published Price)**, **Harga Jual (Selling Price)**.

### Pickup & Driver
- **Alamat Pickup (Pickup Address)**, **Kota (City)**, **PIC** / **PIC Phone Number**.
- **Kendaraan (Vehicle)** & **Driver** assignment.
- **Keterangan / Note** and supporting **File input**.

---

## 🖨️ Printing the Delivery Order

After completing the record, use the print/action button to generate the printable delivery document.

:::tip
Complete the [Entry Data](./entry-data.md) booking first — the Delivery Order pulls its core details from the job order.
:::
