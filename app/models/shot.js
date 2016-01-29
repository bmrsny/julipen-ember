import DS from 'ember-data';

export default DS.Model.extend({
  source: DS.attr("string"),
  title: DS.attr("string"),
  description: DS.attr("string"),
  project: DS.belongsTo("project"),
  user: DS.belongsTo("user"),
  comments: DS.hasMany("comment")
});
