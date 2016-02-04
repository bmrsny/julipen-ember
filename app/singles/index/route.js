import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      console.log("Model firing");
    return this.store.query('shot', { project: 1 });
  }
});
