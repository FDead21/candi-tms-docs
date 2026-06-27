// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adminSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'getting-started/dashboard',
      ],
    },
    {
      type: 'category',
      label: '🗂️ Master Data',
      items: [
        'master-data/shipper',
        'master-data/consignee',
        'master-data/contract',
        'master-data/price',
        'master-data/price-check',
      ],
    },
    {
      type: 'category',
      label: '📦 AWB Data',
      items: [
        'awb-data/upload-data',
        'awb-data/entry-data',
        'awb-data/delivery-order',
      ],
    },
    {
      type: 'category',
      label: '🚚 Driver',
      items: [
        'driver/order-driver',
        'driver/booking-driver',
        'driver/update-status',
      ],
    },
  ],
};

module.exports = sidebars;
