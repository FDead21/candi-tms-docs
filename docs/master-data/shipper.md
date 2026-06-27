---
sidebar_position: 1
---

# Shipper

The **Shipper** module stores the master records of every sender (consignor) you work with. Once a shipper is saved here, you can quickly select it whenever you create a booking or shipping instruction instead of re-typing the details each time.

Open it from the sidebar: **Master Data ➔ Shipper**.

![Shipper List](/img/tms_shipper_main.png)

---

## 📋 The Shipper List

The main screen shows a searchable, paginated table of all saved shippers. Use the **Search** box to filter by name or any column, and click a column header to sort. Each row includes **Action** buttons to **Edit** or **Delete** that shipper.

---

## ➕ Adding a New Shipper

1. Click the **Add Shipper** button above the table.
2. The **Add Shipper** form opens. Fill in the fields:

   | Field | Description |
   |---|---|
   | **ID** | Unique shipper identifier (may be auto-generated). |
   | **Name** | Company or person name of the sender. |
   | **NPWP** | Tax identification number (*Nomor Pokok Wajib Pajak*). |
   | **Phone** | Main contact phone number. |
   | **Email** | Contact email address. |
   | **Address** | Full street address. |
   | **City** | City. |
   | **Postal Code** | ZIP / postal code. |
   | **Country** | Country. |
   | **PIC** | Person in charge (contact person). |
   | **PIC Phone** | Direct phone number of the PIC. |

3. Click **Save changes** to store the record. Use **Reset** to clear the form or **Cancel** to close without saving.

---

## ✏️ Editing a Shipper

1. Find the shipper in the list (use **Search** if needed).
2. Click the **Edit** button on that row.
3. The **Edit Shipper** form opens pre-filled with the existing data.
4. Update the fields and click **Save changes**.

---

## 🗑️ Deleting a Shipper

1. Click the **Delete** button on the shipper's row.
2. Confirm the action when prompted.

:::caution
Deleting a shipper that is already linked to existing bookings may affect those records. Verify the shipper is no longer in use before deleting.
:::
