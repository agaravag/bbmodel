//harry potter model
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var Harrypotter = Backbone.Model.extend({
  url: '/api/v_0_0_1/harrypotter',
  idAttribute: '_id',
  defaults: {
    weight: '',
    height: ''
  }
});

module.exports = Harrypotter;
