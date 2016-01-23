import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('projects', { path: '/projects' }, function() {
    this.route('project', { path: '/project/:project_id'}, function() {
      this.route('shot', { path: 'shot/:shot_id'}, function() {} );
    });
  });
  this.route('dashboard', { path: '/'});
  this.route('singles');
});

export default Router;
