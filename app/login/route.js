import Ember from 'ember';

export default Ember.Route.extend({
  model : function (argument) {
    return Ember.Object.create({ email: '', password: '' });
  }, 
  
  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions : {
    authenticate : function(credentials) {
      console.log(credentials);
    }
  }
});
