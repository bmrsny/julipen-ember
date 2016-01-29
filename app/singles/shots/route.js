import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('shot', { shot: params.shot_id });
  },
});
