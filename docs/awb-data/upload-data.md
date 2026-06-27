---
sidebar_position: 1
---

# Upload Data

The **Upload Data** module lets you bulk-import shipment/manifest files by dragging and dropping them into the system. Files are organized by **manifest category** so the system knows how to process each upload.

Open it from the sidebar: **AWB Data ➔ Upload Data**.

![Upload Data Drop Zone](/img/tms_upload_data.png)

---

## 🗂️ Choosing a Manifest Category

Before uploading, select the category that matches your document. The available categories are:

| Group | Categories |
|---|---|
| **Import** | Import (1.6), Import (2.0), Import (2.3), Import (CNPIBK), Import (Transhipment) |
| **Export** | Export (3.0), Export (Courier), Export (Transhipment) |
| **Domestic** | Domestic (Incoming), Domestic (Outgoing) |

Pick the tab/category that corresponds to the shipment flow you are processing.

---

## 📤 Uploading a File

1. Select the correct **manifest category** for your file.
2. Drag your file onto the dashed **drop zone**, or click inside the zone to browse and select a file from your computer.
3. The file appears in the upload list with its progress.
4. Wait for the upload to finish and the success confirmation to appear.

:::tip
Make sure the file you upload matches the selected category. Uploading an Import file under an Export category can cause processing errors.
:::

:::caution
Files with the wrong format or missing required columns may be rejected during processing. If an upload fails, verify the file structure and try again.
:::
