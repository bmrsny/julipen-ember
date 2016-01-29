import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('shot');
  },

  actions: {
    addSingle: function() {
      var shot = this.store.createRecord('shot', {
        title: this.controller.get('title'),
        description: this.controller.get('description'),
      });
      shot.save().then(() => {
        Ember.Logger.log('save successful');
        this.controller.set('title',null);
        this.controller.set('description',null);
        this.refresh();
      }, function() {
        Ember.Logger.log('save failed');
      });
    }
  }
});
