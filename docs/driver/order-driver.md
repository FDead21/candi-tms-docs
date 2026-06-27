---
sidebar_position: 1
---

# Order Driver

The **Order Driver** module is where you create pickup/delivery orders and assign them to a vehicle and driver. It turns a booking into an actionable dispatch task.

Open it from the sidebar: **Driver ➔ Order Driver**.

![Order Driver List](/img/tms_order_driver_main.png)

---

## 📋 The Order List

The table lists every driver order with the following columns:

| Column | Meaning |
|---|---|
| **ID Order** | Internal order ID. |
| **Pickup Date** | Scheduled pickup date. |
| **ID Booking** | Linked booking reference. |
| **ID Vehicle** / **Vehicle Type** / **Vehicle Usage** | Assigned vehicle details. |
| **ID Driver** / **Driver Name** | Assigned driver. |
| **Action** | Edit, assign, or remove the order. |

---

## ➕ Creating / Assigning a Driver Order

1. Click **Add / New Order** (or the action to assign a driver to a booking).
2. Complete the order form. Key fields include:

   | Field | Description |
   |---|---|
   | **ID Booking** | The booking this order fulfils. |
   | **Tanggal Booking** | Booking date. |
   | **Shipper** / **Shipper Address** | Sender details. |
   | **Consignee** / **Consignee Address** | Recipient details. |
   | **Master AWB** | Master air waybill number. |
   | **Flight** / **Tanggal Flight** | Flight and flight date. |
   | **Origin** / **Destination** | Route. |
   | **Nama Barang** | Goods description. |
   | **Koli** / **Kilo** / **Dimensi** | Pieces, weight, dimensions. |
   | **Alamat Pickup** / **Tujuan Pickup** / **Kota** | Pickup address, destination, city. |
   | **PIC** / **PIC Phone Number** | Contact person at pickup. |
   | **Keterangan** | Notes. |
   | **Status** | Current order status. |
   | **File input** | Supporting document/attachment. |

3. Assign the **vehicle** and **driver**, then **Save**.

Once saved and confirmed (**Booking Confirmed**), the order is ready for the driver to act on.

:::tip
The driver picks up the assignment and updates progress from the field; you monitor those updates under [Update Status](./update-status.md) and [Booking Driver](./booking-driver.md).
:::
