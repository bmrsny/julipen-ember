"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('julipen/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'julipen/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _julipenConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _julipenConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _julipenConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _julipenConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('julipen/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'julipen/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _julipenConfigEnvironment) {

  var name = _julipenConfigEnvironment['default'].APP.name;
  var version = _julipenConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('julipen/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('julipen/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('julipen/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'julipen/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _julipenConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_julipenConfigEnvironment['default'].APP.name, _julipenConfigEnvironment['default'].APP.version)
  };
});
define('julipen/initializers/export-application-global', ['exports', 'ember', 'julipen/config/environment'], function (exports, _ember, _julipenConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_julipenConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _julipenConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_julipenConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('julipen/router', ['exports', 'ember', 'julipen/config/environment'], function (exports, _ember, _julipenConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _julipenConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("julipen/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "julipen/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('julipen/config/environment', ['ember'], function(Ember) {
  var prefix = 'julipen';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("julipen/app")["default"].create({"name":"julipen","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=julipen.map