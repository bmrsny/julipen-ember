import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr("string"),
  description: DS.attr("string"),
  user: DS.belongsTo("user"),
  shots: DS.hasMany("shot")
});

Project.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Unicorns",
      description: "They fly and stuff",
      user: 1,
      shot: 1
    }
  ]
});

export default Project;
