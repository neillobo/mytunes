// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('dequeue', function (song) {
      if (this.models[0] === song) {
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }
    }, this);

    this.on('ended', function () {
      this.remove(this.models[0]);
      this.playFirst();
    }, this);

    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },
});

SongQueue.prototype.playFirst = function () {
  if (this.length) {
    this.models[0].play();
  } else {
    this.trigger('stop');
  }
};


