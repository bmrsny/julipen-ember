import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('wildcard', { path: '/*wildcard' });

  this.route('projects', { path: '/projects' }, function() {
    this.route('create_project');
  });
  this.route('project', {path: '/projects/:project_id' });
  this.route('singles', { path: '/' }, function() {});
  this.route('shots', { path: 'shots/:shot_id' });
});

export default Router;
