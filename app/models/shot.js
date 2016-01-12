import DS from 'ember-data';

 let Shot = DS.Model.extend({
  source: DS.attr("string"),
  title: DS.attr("string"),
  description: DS.attr("string"),
  project: DS.belogsTo("project"),
  user: DS.belongsTo("user"),
  comments: DS.hasMany("comment")
});

export default Shot;
