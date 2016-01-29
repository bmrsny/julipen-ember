import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findAll('shot', { project: params.project_id });
  },

  actions: {
    addShot: function() {
      this.store.findRecord('project',
        this.paramsFor('projects.project').project_id).then(
          (project) => {
            console.log(project);
            var shot = this.store.createRecord('shot', {
              title: this.controller.get('title'),
              description: this.controller.get('description'),
              project: project
            });
            console.log(shot);
            shot.save().then(() => {
              console.log('save successful');
              this.controller.set('title',null);
              this.controller.set('description',null);
            }, function() {
              console.log('save failed');
            });
          });
    }
  }
});
