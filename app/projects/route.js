import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   return this.store.findAll('project');
 },
 actions: {
   addProject: function() {
     var project = this.store.createRecord('project', {
       title: this.controller.get('title'),
       description: this.controller.get('description')
     });
     project.save().then(() => {
       Ember.Logger.log('save successful');
       this.controller.set('title',null);
       this.controller.set('description',null);
       this.refresh();
     }, function() {
       Ember.Logger.log('save failed');
     });
   }
 }
});
