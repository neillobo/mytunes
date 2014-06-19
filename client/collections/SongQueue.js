// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('dequeue', function (song) {
      var playNext = false;
      if (this.models[0] === song) {
        playNext = true;
      }

      this.remove(song);
      if (playNext) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function () {
      this.remove(this.models[0]);
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },
});

SongQueue.prototype.playFirst = function () {
  if (this.length > 0) {
    this.models[0].play();
  }
};


