import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  have: DS.attr(),
  image: DS.attr()
});
