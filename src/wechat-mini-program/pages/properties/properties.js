// pages/properties/properties.js

Page({
  data: {
    properties: [
      {
        id: 1,
        title: "Luxury Apartment",
        description: "3 bed, 2 bath in downtown.",
        image: "/images/properties/apartment.jpg"
      },
      {
        id: 2,
        title: "Cozy Cottage",
        description: "2 bed, 1 bath in the countryside.",
        image: "/images/properties/cottage.jpg"
      },
      // Add more properties as needed
    ]
  },

  onNavChange(e) {
    const { page } = e.detail;
    wx.switchTab({ url: `/${page}/${page}` });
  }
});
