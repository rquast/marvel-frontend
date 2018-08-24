import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('character');
  },
  actions: {
    select(character) {
      this.transitionTo('characters.view', character);
    },
    addToFavourites(character) {
      // TODO: use services for this business logic.
      alert(character);
    }
  }
});
