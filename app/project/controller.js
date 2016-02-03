import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['shot','project', 'shots'],
  shot: null,
  shots: null,
  project: null
});
