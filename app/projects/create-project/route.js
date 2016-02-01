import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
      this.transitionTo('projects');
    },
    addProject: function() {
      var project = this.store.createRecord('project', {
        title: this.controller.get('title'),
        description: this.controller.get('description')
      });
      project.save().then(() => {
        console.log('save successful');
        this.controller.set('title',null);
        this.controller.set('description',null);
        this.transitionTo("projects");
      }, function() {
        console.log('save failed');
      });
    }
  }
});
