import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.query('shot', { project: 1 });
  },

  actions: {
    addShot: function(title, description) {
      var project = this.store.peekRecord('project', 1);

      var shot = this.store.createRecord('shot', {
        title: title,
        description: description,
        project: project
      });

      shot.save().then(() => {
        Ember.Logger.log('save successful');
        this.controller.set('title',null);
        this.controller.set('description',null);
        this.transitionTo('/');
        this.refresh();
      }, function() {
        console.Logger.log('save failed');
      });
    }
  }
});
