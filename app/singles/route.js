import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.query('shot', { project: 1 });
  },

  actions: {
    addSingle: function() {
      var shot = this.store.createRecord('shot', {
        title: this.controller.get('title'),
        description: this.controller.get('description'),
        isSingle: "true"
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
