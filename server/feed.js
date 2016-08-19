const feed = Feeds.findOne();

WebApp.connectHandlers.use('/feed', function (req, res, next) {
  if (feed) {
    res.end(feed.content);
  } else {
    res.end('No feed found');
  }
});
