NewReader.Views.FeedsIndexView = Backbone.View.extend({
  tagName: "ul",
  template: JST['feeds/index'],
  events: {
    "click button" : "renderFavorites"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    var that = this;

    this.collection.each(function (feed) {
      var view = new NewReader.Views.FeedItemView({model: feed});
      //keywords for view: model, collection
      that.$el.append(view.render().$el);
    });

    return this;
  },

  renderFavorites: function () {
    var content = this.template();
    this.$el.html(content);

    var that = this;

    this.collection.where({is_favorite: true}).forEach(function (feed) {
      var view = new NewReader.Views.FeedItemView({model: feed});
      //keywords for view: model, collection
      that.$el.append(view.render().$el);
    });

    return this;
  }

});
