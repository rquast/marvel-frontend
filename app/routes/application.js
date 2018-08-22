import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      menuItems: [
        {
          route: 'characters',
          icon: 'smile-o',
          name: 'Characters'
        },
        {
          route: 'favourites',
          icon: 'heart',
          name: 'Favourites'
        }
      ]
    };
  }
});
