---
sidebar_position: 3
---

# Contract

The **Contract** module records the service agreements that govern your pricing. A contract defines a named agreement with a validity period; pricing entries (see [Price](./price.md)) are then attached to it.

Open it from the sidebar: **Master Data ➔ Contract Data ➔ Contract**.

![Contract List](/img/tms_contract_main.png)

---

## 📋 The Contract List

The table lists every contract with its validity window. Use **Search** to find a contract and the **Action** buttons to **Edit** or **Delete**.

---

## ➕ Adding a New Contract

1. Click the **Add Contract** button.
2. Fill in the **Add Contract** form:

   | Field | Description |
   |---|---|
   | **ID** | Unique contract identifier (may be auto-generated). |
   | **Name** | Descriptive name of the contract or client agreement. |
   | **Begin Date** | The date the contract becomes effective. |
   | **End Date** | The date the contract expires. |

3. Click **Save changes**.

---

## ✏️ Editing a Contract

1. Click **Edit** on the contract's row.
2. Adjust the details in the **Edit Contract** form.
3. Click **Save changes**.

---

## 🗑️ Deleting a Contract

1. Click **Delete** on the row and confirm.

:::caution
Deleting a contract will affect all **Price** entries linked to it. Make sure no active pricing depends on the contract before removing it.
:::

:::tip Next Step
After creating a contract, define its rates under [Price](./price.md).
:::
