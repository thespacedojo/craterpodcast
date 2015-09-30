Meteor.publish('episodes', function() {
  return Episodes.find({}, {sort: {date: -1}});
});

Meteor.publish('episode', function(slug) {
  return Episodes.find({slug: slug});
});
