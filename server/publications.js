Meteor.publish('episodes', function(limit) {
  check(limit, Match.Integer);
  return Episodes.find({}, {sort: {date: -1}, limit: limit});
});

Meteor.publish('episode', function(slug) {
  return Episodes.find({slug: slug});
});
