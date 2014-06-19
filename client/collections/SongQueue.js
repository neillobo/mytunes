// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('dequeue', function (song) {
      this.remove(song);
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
  this.models[0].play();
};


