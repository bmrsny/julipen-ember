import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('projects', { path: '/projects' }, function() {
    this.route('project', { path: '/:project_id'}, function() {
      this.route('shots', { path: '/shots/:shot_id'}, function() {});
    });
  });
  this.route('singles', { path: '/singles' }, function() {
    this.route('shots', { path: '/:shot_id'}, function() {});
  });
});

export default Router;
