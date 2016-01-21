"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('julipen/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    namespace: 'api'
  });
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
define('julipen/components/login-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      submit: function submit() {
        this.sendAction('action', this.get('credentials'));
      }
    }
  });
});
define("julipen/components/login-form/template", ["exports"], function (exports) {
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
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "julipen/components/login-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Log in");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "");
        var el4 = dom.createTextNode("Email");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "");
        var el4 = dom.createTextNode("Password");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn");
        dom.setAttribute(el2, "type", "submit");
        var el3 = dom.createTextNode("Login");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["submit"], ["on", "submit"], ["loc", [null, [3, 6], [3, 37]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "credentials.identification", ["loc", [null, [6, 18], [6, 44]]]]], [], []], "class", "form-control"], ["loc", [null, [6, 4], [6, 67]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "credentials.password", ["loc", [null, [11, 18], [11, 38]]]]], [], []], "type", "password", "class", "form-control"], ["loc", [null, [11, 4], [11, 77]]]], ["content", "yield", ["loc", [null, [16, 0], [16, 9]]]]],
      locals: [],
      templates: []
    };
  })());
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
define('julipen/initializers/simple-auth-token', ['exports', 'simple-auth-token/authenticators/token', 'simple-auth-token/authenticators/jwt', 'simple-auth-token/authorizers/token', 'simple-auth-token/configuration', 'julipen/config/environment'], function (exports, _simpleAuthTokenAuthenticatorsToken, _simpleAuthTokenAuthenticatorsJwt, _simpleAuthTokenAuthorizersToken, _simpleAuthTokenConfiguration, _julipenConfigEnvironment) {

  /**
    Ember Simple Auth Token's Initializer.
    By default load both the Token and JWT (with refresh) Authenticators.
  */
  exports['default'] = {
    name: 'simple-auth-token',
    before: 'simple-auth',
    initialize: function initialize(container) {
      _simpleAuthTokenConfiguration['default'].load(container, _julipenConfigEnvironment['default']['simple-auth-token'] || {});
      container.register('simple-auth-authorizer:token', _simpleAuthTokenAuthorizersToken['default']);
      container.register('simple-auth-authenticator:token', _simpleAuthTokenAuthenticatorsToken['default']);
      container.register('simple-auth-authenticator:jwt', _simpleAuthTokenAuthenticatorsJwt['default']);
    }
  };
});
define('julipen/initializers/simple-auth', ['exports', 'simple-auth/configuration', 'simple-auth/setup', 'julipen/config/environment'], function (exports, _simpleAuthConfiguration, _simpleAuthSetup, _julipenConfigEnvironment) {
  exports['default'] = {
    name: 'simple-auth',
    initialize: function initialize(container, application) {
      _simpleAuthConfiguration['default'].load(container, _julipenConfigEnvironment['default']['simple-auth'] || {});
      (0, _simpleAuthSetup['default'])(container, application);
    }
  };
});
define('julipen/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(argument) {
      return _ember['default'].Object.create({ identification: '', password: '' });
    },

    setupController: function setupController(controller, model) {
      controller.set('credentials', model);
    },

    actions: {
      authenticate: function authenticate(credentials) {
        var _this = this;

        this.get('session').authenticate('simple-auth-authenticator:jwt', credentials).then(function () {
          _this.transitionTo("/");
        });
      }
    }
  });
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
            "line": 3,
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "login-form", [], ["credentials", ["subexpr", "@mut", [["get", "credentials", ["loc", [null, [1, 25], [1, 36]]]]], [], []], "action", "authenticate"], ["loc", [null, [1, 0], [1, 60]]]], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
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

  Project.reopenClass({
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
  exports["default"] = _emberData["default"].Model.extend({
    source: _emberData["default"].attr("string"),
    title: _emberData["default"].attr("string"),
    description: _emberData["default"].attr("string"),
    project: _emberData["default"].belongsTo("project"),
    user: _emberData["default"].belongsTo("user"),
    comments: _emberData["default"].hasMany("comment")
  });
});
define("julipen/models/user", ["exports", "ember-data"], function (exports, _emberData) {

  var User = _emberData["default"].Model.extend({
    name: _emberData["default"].attr("string"),
    email_address: _emberData["default"].attr("string"),
    comments: _emberData["default"].hasMany("comment"),
    shots: _emberData["default"].hasMany("shot"),
    projects: _emberData["default"].hasMany("project")
  });

  User.reopenClass({
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
define("julipen/shot/route", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return this.store.find("shot");
    }
  });
});
define("julipen/shot/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "julipen/shot/template.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["content", "shot.title", ["loc", [null, [3, 4], [3, 18]]]], ["content", "shot.description", ["loc", [null, [4, 4], [4, 24]]]]],
        locals: ["shot"],
        templates: []
      };
    })();
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
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "julipen/shot/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "shots");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 10], [2, 15]]]]], [], 0, null, ["loc", [null, [2, 2], [5, 11]]]], ["content", "outlet", ["loc", [null, [8, 0], [8, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("julipen/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 6
            },
            "end": {
              "line": 6,
              "column": 6
            }
          },
          "moduleName": "julipen/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Logout");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["logout"], [], ["loc", [null, [5, 15], [5, 34]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 8
              },
              "end": {
                "line": 7,
                "column": 62
              }
            },
            "moduleName": "julipen/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "href", "");
            var el2 = dom.createTextNode("Log in");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 6
            }
          },
          "moduleName": "julipen/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], ["tagname", "li"], 0, null, ["loc", [null, [7, 8], [7, 74]]]]],
        locals: [],
        templates: [child0]
      };
    })();
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
            "line": 20,
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
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "j-header");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "http://placehold.it/40x40");
        dom.setAttribute(el2, "class", "logo");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Julipen");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "page-wrap");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "j-footer");
        var el2 = dom.createTextNode("\n	© 2016 All Rights Reserved. A project by the Threatsim devs, in honor of Julian. Kinda.\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 5, 5);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [4, 12], [4, 35]]]]], [], 0, 1, ["loc", [null, [4, 6], [8, 13]]]], ["content", "outlet", ["loc", [null, [13, 2], [13, 12]]]]],
      locals: [],
      templates: [child0, child1]
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
  require("julipen/app")["default"].create({"name":"julipen","version":"0.0.0+c6e30219"});
}

/* jshint ignore:end */
//# sourceMappingURL=julipen.map