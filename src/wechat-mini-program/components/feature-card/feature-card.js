// components/feature-card/feature-card.js

Component({
  properties: {
    feature: Object,
  },

  methods: {
    onTap() {
      this.triggerEvent('tap');
    },
  },
});
