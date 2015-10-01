// Redirect old MeteorPodcast urls
_.each(Episodes.find().fetch(), function (episode) {
  var slug = "/e/" + episode.slug;
  WebApp.connectHandlers.use(slug, function (req, res, next) {
    res.writeHead(301, {'Location': "https://crater.io/podcast/" + episode.slug});
    res.end();
  });
});