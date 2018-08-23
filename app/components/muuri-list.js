import Component from '@ember/component';

export default Component.extend({
  didInsertElement(){
    var muuri = new Muuri('.muuri-grid');
  }
});
