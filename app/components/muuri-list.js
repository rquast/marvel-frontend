import Component from '@ember/component';
import { scheduleOnce }  from '@ember/runloop';


export default Component.extend({
  didInsertElement(){
    scheduleOnce('afterRender', this, () => {
      // note: foundation is probably not resizing the page until after after render
      setTimeout(() => {
        let grid = new Muuri('.muuri-grid', {
          layoutOnResize: 200,
          layoutOnInit: true
        });
        grid.layout(() => {
          window.Foundation.reInit('equalizer');
        })
      }, 200);
    });
  },
  actions: {
    viewCharacter(character) {
      this.select(character);
    }
  }
});
