import DS from 'ember-data';

let Comment = DS.Model.extend({
  body: DS.attr("string"),
  user: DS.belongsTo("user"),
  shot: DS.belongsTo("shot")
});

Comment.reopenClass({ 
  FIXTURES: [
    {
      id: 1,
      body: "You're the best!",
      user: 1,
      shot: 1
    }
  ]
});

export default Comment;
