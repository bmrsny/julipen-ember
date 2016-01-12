import DS from 'ember-data';

var Shot = DS.Model.extend({
  source: DS.attr("string"),
  title: DS.attr("string"),
  description: DS.attr("string"),
  project: DS.belongsTo("project"),
  user: DS.belongsTo("user"),
  comments: DS.hasMany("comment")
});

Shot.reopenClass({
  FIXTURES: [
    {
      id: 1,
      source: "/images/shot1.jpg",
      title: "Unicorn Dancing",
      description: "This is a picture of a unicorn doing the macarena",
      project: 1,
      user: 1,
      comment: 1
    }
  ]
});

export default Shot;
