import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
      this.transitionTo('singles');
    },
    addShot: function(title, description) {
      var project = this.store.findRecord('project', 1).then(project => {
          var shot = this.store.createRecord('shot', {
            title: title,
            description: description,
            project: project
          });

          console.log("about to save shot");
          return shot.save().then(() => {
            console.log('save successful');
            this.controller.set('title',null);
            this.controller.set('description',null);
            this.transitionTo('singles');
          }, function() {
            console.log('save failed');
          });
      });
    }
  }
});
