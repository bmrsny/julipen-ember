import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function() {
      this.sendAction("closeModal");
    },
    addShot: function() {
      let title = this.get('title');
      let description = this.get('description');
      this.sendAction("addShot", title, description);
    }
  }
});
