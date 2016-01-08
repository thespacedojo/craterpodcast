Template.registerHelper('createExcerpt', function(e, tlength) {
  var str = e;
  var length = tlength;
  s = new Showdown.converter
  return Spacebars.safestring(s.makeHtml(str));
});

Template.registerHelper('prettyDate', function() {
  return moment(this.date).format("MMMM Do, YYYY");
});

Template.registerHelper('iTunesLink', function() {
  //TODO: don't hard code this link?
  return "https://itunes.apple.com/us/podcast/the-meteor-podcast/id795089333?mt=2"
});
