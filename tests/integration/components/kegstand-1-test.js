import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kegstand-1', 'Integration | Component | kegstand 1', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kegstand-1}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kegstand-1}}
      template block text
    {{/kegstand-1}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
