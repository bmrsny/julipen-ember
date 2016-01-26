import Ember from 'ember';

export default Ember.Route.extend({
session: Ember.inject.service(),

  model : function (argument) {
    return Ember.Object.create({ identification: '', password: '' });
  }, 

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions : {
    authenticate : function(credentials) {
      this.get('session').authenticate('authenticator:token', credentials).then(() => {
        this.transitionTo("/");
      });
    }
  }
});
