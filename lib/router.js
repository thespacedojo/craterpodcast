FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("layout", {main: "home"});
  }
});

FlowRouter.route('/:slug', {
  action: function(params) {
    BlazeLayout.render("layout", {main: "single"});
  }
});

// Router.route('/feed', function () {
//   var response = this.response;
//
//   feed = Feeds.findOne();
//
//   this.response.statusCode = 200;
//   this.response.end(feed.content);
// }, {where: 'server'});
