// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!s
  tagName: 'tr',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.text(this.model.attributes.artist + ' ' + this.model.attributes.title);
    return this.$el;
  }

});
