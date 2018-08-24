import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // Note: nasty hack to show favourites by just filtering
    return this.store.findAll('character').then((characters) => {
      return characters.filter((character) => {
        return character.favourite === true;
      });
    });
  },
  actions: {
    select(character) {
      this.transitionTo('characters.view', character);
    },
    addToFavourites(character) {
      character.set('favourite', true);
      character.save();
    },
    removeFromFavourites(character) {
      character.set('favourite', false);
      character.save();
    }
  }
});
