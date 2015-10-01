import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('posts');
  this.route('contact');
  this.resource('post', function() {
    this.resource('post', {path: 'post/:post_id'});

  });
});

export default Router;
