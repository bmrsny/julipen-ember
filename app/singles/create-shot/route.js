import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
      this.transitionTo('singles');
    },
    addShot: function(title, description) {
      var project = this.store.findRecord('project', 1);

      var shot = this.store.createRecord('shot', {
        title: title,
        description: description,
        project: project
      });

      shot.save().then(() => {
        console.log('save successful');
        this.controller.set('title',null);
        this.controller.set('description',null);
        this.transitionTo('singles');
        this.refresh();
      }, function() {
        console.log('save failed');
      });
    }
  }
});
