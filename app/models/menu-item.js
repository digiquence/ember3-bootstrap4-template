import DS from 'ember-data';

export default DS.Model.extend({
  route: DS.attr('string'),
  icon: DS.attr('string'),
  label: DS.attr('string')
});
