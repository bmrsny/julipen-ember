import Ember from 'ember';

export default Ember.Route.extend({
  model : function (argument) {
    return Ember.Object.create({ identification: '', password: '' });
  }, 

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions : {
    authenticate : function(credentials) {
      this.get('session').authenticate('simple-auth-authenticator:jwt', credentials).then(() => {
        this.transitionTo("/");
      });
    }
  }
});
