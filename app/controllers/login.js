import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),
  actions: {
    authenticate: function() {
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:jwt';
      this.set('isLoginIn', true);
      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.transitionToRoute('characters');
      }).catch((err) => {
        this.set('fieldErrors', err);
        this.set('isLoginIn', false);
      });
    }
  }
});
