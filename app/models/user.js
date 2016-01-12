import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr("string"),
  email_address: DS.attr("string"),
  comments: DS.hasMany("comment"),
  shots: DS.hasMany("shot"),
  projects: DS.hasMany("project")
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Ulysses",
      email_address: "ulysses@example.com",
      comment: 1,
      shot: 1,
      project: 1
    }
  ]
});

export default User;
