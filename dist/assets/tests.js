define('julipen/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});
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
define('julipen/tests/login/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - login');
  QUnit.test('login/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'login/route.js should pass jshint.\nlogin/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nlogin/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});
define('julipen/tests/models/comment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/comment.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/comment.js should pass jshint.\nmodels/comment.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/comment.js: line 3, col 1, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodels/comment.js: line 20, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors');
  });
});
define('julipen/tests/models/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/project.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/project.js should pass jshint.\nmodels/project.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/project.js: line 3, col 1, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodels/project.js: line 22, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors');
  });
});
define('julipen/tests/models/shot.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/shot.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/shot.js should pass jshint.\nmodels/shot.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/shot.js: line 26, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});
define('julipen/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass jshint.\nmodels/user.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/user.js: line 3, col 1, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nmodels/user.js: line 24, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors');
  });
});
define('julipen/tests/project/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - project');
  QUnit.test('project/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'project/route.js should pass jshint.\nproject/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nproject/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});
define('julipen/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nrouter.js: line 14, col 1, \'export\' is only available in ES6 (use esnext option).\n\n4 errors');
  });
});
define('julipen/tests/shot/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - shot');
  QUnit.test('shot/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shot/route.js should pass jshint.\nshot/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nshot/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
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
define('julipen/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('julipen/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('julipen/tests/unit/login/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/login');
  QUnit.test('unit/login/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/login/route-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/models/comment-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('comment', 'Unit | Model | comment', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('julipen/tests/unit/models/comment-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/comment-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/comment-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/models/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Model | project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('julipen/tests/unit/models/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/project-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/models/shot-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('shot', 'Unit | Model | shot', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('julipen/tests/unit/models/shot-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/shot-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/shot-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('julipen/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/user-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/project/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('julipen/tests/unit/project/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/project');
  QUnit.test('unit/project/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/project/route-test.js should pass jshint.');
  });
});
define('julipen/tests/unit/shot/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:shot', 'Unit | Route | shot', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('julipen/tests/unit/shot/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/shot');
  QUnit.test('unit/shot/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/shot/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('julipen/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map