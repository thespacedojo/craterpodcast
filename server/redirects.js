// Redirect old MeteorPodcast urls
_.each(Episodes.find().fetch(), function (episode) {
  var slug = "/e/" + _.last(_.compact(episode.guid.split("/"))) 
  WebApp.connectHandlers.use(slug, function (req, res, next) {
    res.writeHead(301, {'Location': process.env.ROOT_URL + "/" + episode.slug});
    res.end();
  });
});
