import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
    this.transitionTo('singles');
    }
  }
});
