---
sidebar_position: 2
---

# Entry Data (Booking Order)

The **Entry Data** screen is where you create and manage **Shipping Instructions / Job Orders (JO)** for domestic bookings. This is the core operational record that ties together the shipper, consignee, route, cargo details, and pricing.

Open it from the sidebar: **AWB Data ➔ Booking Order ➔ Entry Data**.

![Entry Data List](/img/tms_entry_data_main.png)

---

## 📋 The Booking List

The main table lists every booking/job order with the following columns:

| Column | Meaning |
|---|---|
| **ID** | Internal record ID. |
| **Nomor JO** | Job Order number. |
| **Contract** | Linked contract. |
| **Shipment Type** | Type of shipment. |
| **Master BL/AWB Number** | Master Bill of Lading / Air Waybill number. |
| **Shipper** | Sender. |
| **Consignee** / **Consignee Address** | Recipient and delivery address. |
| **Origin** / **Destination** | Route. |
| **Departure Date** | Scheduled departure. |
| **Commodity** | Goods description. |
| **Collie** | Number of packages/pieces. |
| **Chargeable Weight** / **Gross Weight** / **Volume** | Cargo metrics. |

Use **Search** to filter, and the **Action** buttons to view, edit, or delete a booking.

---

## ➕ Creating a New Booking

Click **Add / New** to open the entry form. The form is organized into logical sections — fill them in order:

### 1. Order & Contract
- **JO / Nomor JO** — job order number.
- **Date** — booking date.
- **Contract**, **Shipment Type**, **Product / Product Detail** — select the agreement and service.

### 2. Parties
- **Shipper** & **Shipper Address** — select the sender (from [Shipper](../master-data/shipper.md)).
- **Consignee** & **Consignee Address** — select the recipient (from [Consignee](../master-data/consignee.md)).

### 3. Routing & Flight
- **Origin** / **Destination** — the route.
- **Airline** / **Flight** / **Airwaybill** — transport details.
- **Departure Date** — scheduled departure.

### 4. Cargo Details
- **Commodity** — goods description.
- **Collie / Koli** — number of pieces.
- **Gross Weight**, **Chargeable Weight**, **Volume**, **Dimensi (Dimensions)**.

### 5. Pricing
- **Contract Price**, **Cost**, **Sell Price**, **Total Price** — populated from the contract rates (see [Price](../master-data/price.md)).

### 6. Pickup & Notes
- **Pickup / Pickup Address**, **City**, **PIC**, **PIC Phone Number**, **Tanggal Pickup (Pickup Date)**.
- **Note / Keterangan** and any supporting **File input** (e.g. **Bukti Pembayaran** / payment proof).

Once all required fields are complete, **Save** the booking. The new job order then appears in the list and becomes available for driver assignment and delivery order creation.

:::tip
Selecting the correct **Contract** and route auto-fills the cost and price fields, reducing manual entry errors.
:::
