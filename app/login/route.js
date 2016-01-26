import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
session: Ember.inject.service(),

  model : function (argument) {
    return Ember.Object.create({ identification: '', password: '' });
  }, 

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions : {
    authenticate : function(credentials) {
      this.get('session').authenticate('authenticator:jwt', credentials).then(() => {
        this.transitionTo("/");
      });
    }
  }
});
