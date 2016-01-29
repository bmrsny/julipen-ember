import DS from 'ember-data';

export default DS.Model.extend({
  source: DS.attr("string"),
  title: DS.attr("string"),
  description: DS.attr("string"),
  isSingle: DS.attr("string", { defaultValue: "false" }),
  project: DS.belongsTo("project"),
  user: DS.belongsTo("user"),
  comments: DS.hasMany("comment")
});
