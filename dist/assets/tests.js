define('julipen/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 6, col 1, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n7 errors');
  });
});
define('julipen/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('julipen/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('julipen/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'julipen/tests/helpers/start-app', 'julipen/tests/helpers/destroy-app'], function (exports, _qunit, _julipenTestsHelpersStartApp, _julipenTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _julipenTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _julipenTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('julipen/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('julipen/tests/helpers/resolver', ['exports', 'ember/resolver', 'julipen/config/environment'], function (exports, _emberResolver, _julipenConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _julipenConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _julipenConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('julipen/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('julipen/tests/helpers/start-app', ['exports', 'ember', 'julipen/app', 'julipen/config/environment'], function (exports, _ember, _julipenApp, _julipenConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _julipenConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _julipenApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('julipen/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('julipen/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nrouter.js: line 11, col 1, \'export\' is only available in ES6 (use esnext option).\n\n4 errors');
  });
});
define('julipen/tests/test-helper', ['exports', 'julipen/tests/helpers/resolver', 'ember-qunit'], function (exports, _julipenTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_julipenTestsHelpersResolver['default']);
});
define('julipen/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('julipen/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map