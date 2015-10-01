var episodesLoaded = 5;

Template.home.onCreated( function () {
  var self = this;
  self.limit = new ReactiveVar(episodesLoaded);
  self.autorun(function () {
    var limit = self.limit.get();
    self.subscribe('episodes', limit);
  });
});

Template.home.helpers({
  featured: function () {
    return Episodes.findOne(Session.get('spotlightID'));
  },
  episodes: function () {
    return Episodes.find();
  },
  
});

Template.home.onRendered(function() {
  Tracker.autorun(function() {
    episode = Episodes.findOne({}, {sort: {date: -1}})
    if (episode)
      Session.set("spotlightID", episode._id);
  });
  Session.set("dragging", false);
  $(".podcast-play").affix({
    offset: {
      top: function() {
        return $('.holder').offset().top;
      }
    }
  });
  return Tracker.autorun(function() {
    Session.get('spotlightID');
    return Tracker.afterFlush(function() {
      var audio, currentSpeedIdx, speed, speeds;
      speeds = [1, 1.5, 2, 2.5, 3];
      speed = $('.pcast-speed')[0];
      currentSpeedIdx = 0;
      audio = $('#audio-player')[0];
      return speed.addEventListener('click', (function() {
        currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0;
        audio.playbackRate = speeds[currentSpeedIdx];
        this.textContent = speeds[currentSpeedIdx] + 'x';
        return true;
      }), false);
    });
  });
});

Template.home.events({
  "touchmove body": function(e) {
    return Session.set("dragging", true);
  },
  "touchstart body": function(e) {
    return Session.set("dragging", false);
  },
  "click [data-action=load-more]": function(e, t) {
    e.preventDefault();
    var limit = t.limit.get();
    limit += episodesLoaded;
    t.limit.set(limit);
  }
});
