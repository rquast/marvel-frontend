import Component from '@ember/component';
import { scheduleOnce }  from '@ember/runloop';


export default Component.extend({
  didInsertElement(){
    scheduleOnce('afterRender', this, () => {
      new Muuri('.muuri-grid');
    });
  },
  actions: {
    viewCharacter(character) {
      this.select(character);
    }
  }
});
