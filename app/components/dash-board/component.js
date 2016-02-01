import Ember from 'ember';

export default Ember.Component.extend({
  isProject: function() {
    return this.get('title') == "project";
  }.property('title')
});
