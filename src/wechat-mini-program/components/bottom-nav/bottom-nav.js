// components/bottom-nav/bottom-nav.js

Component({
  properties: {
    current: {
      type: String,
      value: 'home'
    }
  },

  methods: {
    onTabChange(e) {
      // Get the page from data attribute
      const page = e.currentTarget.dataset.page;
      // Emit the tab change event to the parent
      this.triggerEvent('change', { page });
    }
  }
});
