Template.registerHelper('createExcerpt', function(e, tlength) {
  var str = e;
  var length = tlength;
  if(str.length > length) {
    return str.substr( 0, length ) + "...";
  } else {
    return str;
  }
});

Template.registerHelper('prettyDate', function() {
  return moment(this.date).format("MMMM Do, YYYY");
});

Template.registerHelper('iTunesLink', function() {
  //TODO: don't hard code this link?
  return "https://itunes.apple.com/us/podcast/the-meteor-podcast/id795089333?mt=2"
});
