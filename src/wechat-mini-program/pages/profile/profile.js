// pages/profile/profile.js

Page({
  data: {
    user: {
      avatarUrl: "/images/profile/avatar.jpg", // Default avatar
      username: "John Doe",
      email: "john.doe@example.com"
    },
    followers: 0,
    fans: 0,
    favorites: 0
  },

  onLoad() {
    // Simulate fetching data from a server
    const userStats = this.fetchUserStats();
    this.setData({
      followers: userStats.followers,
      fans: userStats.fans,
      favorites: userStats.favorites
    });
  },

  fetchUserStats() {
    // Replace this with actual data fetching logic
    return {
      followers: 120,
      fans: 80,
      favorites: 45
    };
  },
  
  onEditProfile() {
    wx.navigateTo({
      url: '/pages/edit-profile/edit-profile' // Navigate to edit profile page
    });
  },

  onLogout() {
    // Logic to handle logout (e.g., clear session, redirect)
    wx.showToast({
      title: 'Logged out successfully',
      icon: 'success'
    });
  },

  onNavChange(e) {
    const { page } = e.detail;
    wx.switchTab({ url: `/${page}/${page}` });
  }
});
