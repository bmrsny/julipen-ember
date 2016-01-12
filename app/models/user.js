import DS from 'ember-data';

 let User = DS.Model.extend({
  name: DS.attr("string"),
  email_address: DS.attr("string"),
  comments: DS.hasMany("comment"),
  shots: DS.hasMany("shot"),
  projects: DS.hasMany("project")
});

export default User;
