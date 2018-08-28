import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';


export default Component.extend({
  session: inject('session'),
  sessionData: computed('session.session.content.authenticated', function() {
    return this.get('session.session.content.authenticated');
  }),
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
