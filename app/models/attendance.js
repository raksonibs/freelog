import DS from 'ember-data';

export default DS.Model.extend({
  project: DS.belongsTo('project'),
  hourRate: DS.attr('number'),
  notes: DS.attr('string')
});
