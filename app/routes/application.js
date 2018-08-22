import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      menuItems: [
        {
          route: 'series',
          icon: 'film',
          name: 'Series'
        },
        {
          route: 'characters',
          icon: 'smile-o',
          name: 'Characters'
        }
      ]
    };
  }
});
