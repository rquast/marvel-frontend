import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return {
      menuItems: {
        '/login': {
          menu: false,
          route: 'login',
          icon: 'lock',
          name: 'Login'
        },
        '/characters': {
          menu: true,
          route: 'characters',
          icon: 'smile-o',
          name: 'Characters'
        },
        '/favourites': {
          menu: true,
          route: 'favourites',
          icon: 'heart',
          name: 'Favourites'
        }
      }
    };
  },
  actions: {
    error(error, transition) {
      if (error.errors.length > 0) {
        if (error.errors[0].status === '401') {
          transition.abort();
          this.transitionTo('login');
        }
      }
    }
  }
});
