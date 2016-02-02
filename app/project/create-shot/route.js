import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
    this.transitionTo('project', this.paramsFor("project").project_id);
    }, 
    addShot: function(title, description) {
      this.store.findRecord('project',
        this.paramsFor('project').project_id).then(
        (project) => {
          var shot = this.store.createRecord('shot', {
            title: title,
            description: description,
            project: project
          });
          shot.save().then(() => {
            console.log('save successful');
            this.controller.set('title', null);
            this.controller.set('description', null);
            this.transitionTo('project', this.paramsFor("project").project_id);
          }, function() {
            console.log('save failed');
        });
      });
    }
  }
});
