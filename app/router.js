import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { scheduleOnce }  from '@ember/runloop';
import $ from 'jquery';
import { inject } from '@ember/service';

const Router = EmberRouter.extend({
  session: inject('session'),
  location: config.locationType,
  rootURL: config.rootURL,
  foundationLoaded: false,
  willTransition: function() {
    if (this.get('session') && this.get('session').isAuthenticated) {
      return true;
    } else {
      this.transitionTo('login');
    }
  },
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
  this.route('login');
  this.route('characters', function() {
    this.route('view', { path: '/view/:characters_id' });
  });
  this.route('favourites');
});

export default Router;
