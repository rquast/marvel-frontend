import Component from '@ember/component';
import { scheduleOnce }  from '@ember/runloop';


export default Component.extend({
  didInsertElement(){
    scheduleOnce('afterRender', this, () => {
      // note: foundation is probably not resizing the page until after after render
      setTimeout(() => {
        new Muuri('.muuri-grid', {
          layoutOnResize: 200,
          layoutOnInit: true
        });
      }, 200);
    });
  },
  actions: {
    viewCharacter(character) {
      this.select(character);
    }
  }
});
