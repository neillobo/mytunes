// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize : function(data){
    if (data) {
      this.set({
        'title': data.title,
        'url'  : data.url,
        'artist' : data.artist
      });
    }
  },

  enqueue : function(){
    this.trigger('enqueue', this);
  },

  dequeue : function(){
    this.trigger('dequeue', this);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
