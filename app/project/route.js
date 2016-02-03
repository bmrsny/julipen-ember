import Ember from 'ember';

export default Ember.Route.extend({
   queryParams: {
    shot: {
      refreshModel: true
    },
     project: {
      refreshModel: true
    },
    shots: {
      refreshModel: true
    },
  },
  model(params) {
    return Ember.RSVP.hash({
      project: this.store.findRecord('project', params.project_id, { reload: true }),
      shots: this.store.query('shot', {project: params.project_id}, { reload: true })
    });
  }
});
