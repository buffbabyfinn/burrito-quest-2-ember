import Model from 'ember-data/model';

export default Model.extend({
  startScreen: DS.attr(),
  talkToSteve: DS.attr(),
  doKegstand: DS.attr(),
  askForDrugs: DS.attr(),
});
