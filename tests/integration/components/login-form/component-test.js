import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{login-form}}`);

  assert.equal(this.$('H2').text().trim(), 'Log in');
  assert.equal(this.$('.identification').text().trim(), 'Email');
  assert.equal(this.$('.password').text().trim(), 'Password');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#login-form}}
      template block text
    {{/login-form}}
  `);

  // assert.equal(this.$().text().trim(), 'Log in');
});
