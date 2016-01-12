import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  email_address: DS.attr("string"),
  comments: DS.hasMany("comment"),
  shots: DS.hasMany("shot"),
  projects: DS.hasMany("project")
});
