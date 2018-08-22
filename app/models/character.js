import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr()
  /*
  modified: DS.attr('date'),
  thumbnail: DS.attr('string'),
  resourceURI: DS.attr('string')

  comics: DS.attr('array'),
  series: DS.attr('array'),
  stories: DS.attr('array'),
  events: DS.attr('array'),
  urls: DS.attr('array')
  */
});
