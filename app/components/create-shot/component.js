import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function() {
      this.sendAction("closeModal");
    },
    addShot: function() {
      this.sendAction("addShot");
    }
  }
});
