"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('julipen/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].FixtureAdapter.extend({});
});
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
define('julipen/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("julipen/login/template", ["exports"], function (exports) {
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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "julipen/login/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("julipen/models/comment", ["exports", "ember-data"], function (exports, _emberData) {

  var Comment = _emberData["default"].Model.extend({
    body: _emberData["default"].attr("string"),
    user: _emberData["default"].belongsTo("user"),
    shot: _emberData["default"].belongsTo("shot")
  });

  Comment.reopenClass({
    FIXTURES: [{
      id: 1,
      body: "You're the best!",
      user: 1,
      shot: 1
    }]
  });

  exports["default"] = Comment;
});
define("julipen/models/project", ["exports", "ember-data"], function (exports, _emberData) {

  var Project = _emberData["default"].Model.extend({
    title: _emberData["default"].attr("string"),
    description: _emberData["default"].attr("string"),
    user: _emberData["default"].belongsTo("user"),
    shots: _emberData["default"].hasMany("shot")
  });

  Comment.reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Unicorns",
      description: "They fly and stuff",
      user: 1,
      shot: 1
    }]
  });

  exports["default"] = Project;
});
define("julipen/models/shot", ["exports", "ember-data"], function (exports, _emberData) {

  var Shot = _emberData["default"].Model.extend({
    source: _emberData["default"].attr("string"),
    title: _emberData["default"].attr("string"),
    description: _emberData["default"].attr("string"),
    project: _emberData["default"].belongsTo("project"),
    user: _emberData["default"].belongsTo("user"),
    comments: _emberData["default"].hasMany("comment")
  });

  Comment.reopenClass({
    FIXTURES: [{
      id: 1,
      source: "/images/shot1.jpg",
      title: "Unicorn Dancing",
      description: "This is a picture of a unicorn doing the macarena",
      project: 1,
      user: 1,
      comment: 1
    }]
  });

  exports["default"] = Shot;
});
define("julipen/models/user", ["exports", "ember-data"], function (exports, _emberData) {

  var User = _emberData["default"].Model.extend({
    name: _emberData["default"].attr("string"),
    email_address: _emberData["default"].attr("string"),
    comments: _emberData["default"].hasMany("comment"),
    shots: _emberData["default"].hasMany("shot"),
    projects: _emberData["default"].hasMany("project")
  });

  Comment.reopenClass({
    FIXTURES: [{
      id: 1,
      name: "Ulysses",
      email_address: "ulysses@example.com",
      comment: 1,
      shot: 1,
      project: 1
    }]
  });

  exports["default"] = User;
});
define('julipen/project/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("julipen/project/template", ["exports"], function (exports) {
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
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "julipen/project/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('julipen/router', ['exports', 'ember', 'julipen/config/environment'], function (exports, _ember, _julipenConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _julipenConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('project');
    this.route('shot');
  });

  exports['default'] = Router;
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
  require("julipen/app")["default"].create({"name":"julipen","version":"0.0.0+25ff99f9"});
}

/* jshint ignore:end */
//# sourceMappingURL=julipen.map