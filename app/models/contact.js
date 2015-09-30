import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.belongsTo('email'),
  title: DS.attr('string')
});
