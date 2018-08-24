import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  modified: DS.attr('date'),
  thumbnail: DS.attr('string'),
  resourceURI: DS.attr('string'),
  favourite: DS.attr('boolean')
});
