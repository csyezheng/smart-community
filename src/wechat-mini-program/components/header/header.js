// components/header/header.js

Component({
  properties: {
    title: {
      type: String,
      value: 'Default Title'
    },
    showBack: {
      type: Boolean,
      value: false // Default is to hide back button
    }
  },
  methods: {
    onBack() {
      if (this.data.showBack) {
        wx.navigateBack(); // Navigate back to the previous page
      }
    }
  }
});
