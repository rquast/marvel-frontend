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
      character.set('favourite', true);
      character.save().then(() => {
        this.transitionTo('favourites');
      });
    },
    removeFromFavourites(character) {
      character.set('favourite', false);
      character.save().then(() => {
        this.transitionTo('characters');
      });
    }
  }
});
