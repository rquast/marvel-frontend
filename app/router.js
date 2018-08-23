import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { scheduleOnce }  from '@ember/runloop';
import $ from 'jquery';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  foundationLoaded: false,
  didTransition: function() {
    scheduleOnce('afterRender', this, () => {
      //Enable Foundation
      if (!this.foundationLoaded) {
        $(".app-container").foundation();
        this.foundationLoaded = true;
      } else {
        // since foundation 6
        window.Foundation.reInit('equalizer');
      }
      //Scroll to top
      window.scrollTo(0, 0);
    });
  }
});

Router.map(function() {
  this.route('characters', function() {
    this.route('view');
  });
  this.route('favourites');
});

export default Router;
