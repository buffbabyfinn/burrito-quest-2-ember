import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('talk-to-steve', 'Integration | Component | talk to steve', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{talk-to-steve}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#talk-to-steve}}
      template block text
    {{/talk-to-steve}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
