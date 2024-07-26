// pages/business/business.js

Page({
  data: {
    categories: [],
    stores: []
  },

  onLoad() {
    this.fetchCategories();
    this.fetchStores();
  },

  fetchCategories() {
    // Simulate fetching category data
    const categories = [
      { id: 1, name: '咖啡馆' },
      { id: 2, name: '餐厅' },
      { id: 3, name: '商店' },
      { id: 4, name: '服务' },
      { id: 5, name: '娱乐' }
      // Add more categories as needed
    ];
    this.setData({ categories });
  },

  fetchStores() {
    // Simulate fetching stores data
    const stores = [
      {
        id: 1,
        storeImage: '/images/examples/store-logo.jpg',
        storeName: '商店 1',
        products: [
          { id: 1, productImage: '/images/examples/product.png', productName: '产品 1' },
          { id: 2, productImage: '/images/examples/product.png', productName: '产品 2' },
          { id: 3, productImage: '/images/examples/product.png', productName: '产品 3' },
          { id: 4, productImage: '/images/examples/product.png', productName: '产品 4' },
          { id: 5, productImage: '/images/examples/product.png', productName: '产品 5' },
          { id: 6, productImage: '/images/examples/product.png', productName: '产品 6' },
          { id: 7, productImage: '/images/examples/product.png', productName: '产品 7' },
          { id: 8, productImage: '/images/examples/product.png', productName: '产品 8' },
          { id: 9, productImage: '/images/examples/product.png', productName: '产品 9' }
        ]
      },
      {
        id: 2,
        storeImage: '/images/examples/store-logo1.jpg',
        storeName: '商店 2',
        products: [
          { id: 1, productImage: '/images/examples/product.png', productName: '产品 1' },
          { id: 2, productImage: '/images/examples/product.png', productName: '产品 2' },
          { id: 3, productImage: '/images/examples/product.png', productName: '产品 3' },
          { id: 4, productImage: '/images/examples/product.png', productName: '产品 4' },
          { id: 5, productImage: '/images/examples/product.png', productName: '产品 5' },
          { id: 6, productImage: '/images/examples/product.png', productName: '产品 6' },
          { id: 7, productImage: '/images/examples/product.png', productName: '产品 7' },
          { id: 8, productImage: '/images/examples/product.png', productName: '产品 8' },
          { id: 9, productImage: '/images/examples/product.png', productName: '产品 9' }
        ]
      }
      // Add more stores as needed
    ];
    this.setData({ stores });
  },

  onCategorySelect(e) {
    const categoryId = e.currentTarget.dataset.id;
    // Filter businesses based on selected category (if desired)
    // You can implement filtering logic here
  },

  onNavChange(e) {
    const { page } = e.detail;
    wx.switchTab({ url: `/${page}/${page}` });
  }
});
