/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/ec2-user/environment/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-sample.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-sample.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n    background-color: white;\n}\n\nh1,h2 {\n    color: black;\n    text-align: center;\n    font-family: helvetica;\n    text-shadow: black;\n    padding: 15px;\n    border-bottom: 1px solid red;\n}\n\nh1{\n    font-size: 45px;\n    text-shadow: 2px 2px #FF0000;\n}\n\nh3{\n    color: black;\n    font-size: 16px;\n    padding: 5px;\n    margin-left: 15px;\n    font-family: helvetica;\n    padding-bottom: 10px;\n    text-align: center;\n}\n\n.container {\n  display: flex;\n  padding-top: 30px;\n}\n\n.container > div {\n  flex: 1; /*grow*/\n}\n\n.card{ \n  width: 550px;\n  padding: 20px;\n  margin: 45px auto 25px auto;\n}\n\n\n.teams{\n    border: 1px solid black;\n    background-color: lightgrey;\n    padding: 20px;\n    margin-left: 15px;\n    height:600px; \n    width:18%;\n    overflow:hidden; \n    overflow-y:scroll;\n}\n\n.teamButton {\n\tbackground:linear-gradient(to bottom, #FFA07A 5%, #F08080 100%);\n\tbackground-color:#FFA07A;\n\tborder-radius:8px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:13px;\n\tfont-weight:bold;\n\tpadding:10px 26px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #3d768a;\n}\n\n.teamButton:hover {\n\tbackground:linear-gradient(to bottom, #B22222 5%, #800000 100%);\n\tbackground-color:#B22222;\n}\n\n.teamButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n\nul, li{\n    color: black;\n    list-style: none;\n    font-family: monospace;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\nli:hover{\n    font-size: 16px;\n    color: red;\n}\n\nbody {\n    margin: 35px;\n}\n\n.searchBox{\n  width: 490px;\n  padding: 15px;\n}\n\n.comments{\n    float: right;\n    line-height: 30px;\n    font-family: helvetica;\n}\n\n.searchBar{\n  margin: 0 auto;\n  width: 60%;\n  height: 45px;\n  padding: 0 20px;\n  font-size: 1rem;\n  border: 1px solid #D0CFCE;\n  outline: none;\n }\n\n.button {\n  -webkit-transition-duration: 0.4s; \n  transition-duration: 0.4s;\n  padding: 5px;\n}\n\n.button:hover {\n  background-color: #4CAF50; \n  color: white;\n}\n\n\np{\n    color: black;\n    font-family: helvetica;\n    line-height: 20px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/ec2-user/environment/node_modules/css-loader/dist/runtime/api.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/ec2-user/environment/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/ec2-user/environment/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ec2-user/environment/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Teams_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Teams.js */ "./src/Teams.js");
/* harmony import */ var _Players_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Players.js */ "./src/Players.js");
/* harmony import */ var _Headshot_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Headshot.js */ "./src/Headshot.js");
/* harmony import */ var _rendering_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendering.js */ "./src/rendering.js");
/* harmony import */ var _Comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Comments.js */ "./src/Comments.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      teams: [],
      players: [],
      currentPlayers: [],
      current: undefined,
      comments: []
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handlePhoto = _this.handlePhoto.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/teams').then(function (results) {
        var teams = results.data;
        console.log(teams);

        _this2.setState({
          teams: teams
        });
      });
      Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (x) {
        return "https://www.balldontlie.io/api/v1/players?page=".concat(x);
      }).map(function (url) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
      })).then(function (results) {
        var players = results[(1, 2, 3, 4, 5, 6, 7, 8, 9)].data.data;
        console.log(players);

        _this2.setState({
          players: players
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.props.current != undefined) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/comments/".concat(this.props.current)).then(function (response) {
          var comments = response.data.map(function (object) {
            return object.text;
          });

          _this3.setState({
            comments: comments
          });
        });
      }
    }
  }, {
    key: "currentTeam",
    value: function currentTeam() {
      this.state.players.forEach(function (player) {
        if (player.team.id == teamId) {
          currentPlayers.push(player);
        }
      });
      this.setState({
        currentPlayers: currentPlayers
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(teamId) {
      var currentPlayers = [];
      this.state.players.forEach(function (player) {
        if (player.team.id == teamId) {
          currentPlayers.push(player);
          var currentTeam = player.team;
        }
      });
      this.setState({
        currentPlayers: currentPlayers
      });
      this.setState({
        current: current
      });
    }
  }, {
    key: "handlePhoto",
    value: function handlePhoto(first, last) {
      if (last.value.length == 0 || first.value.length == 0) {
        res.status(404).send("Oops! Something went wrong.");
      } else {
        window.open("https://nba-players.herokuapp.com/players/".concat(last.value, "/").concat(first.value));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NBA CENTRAL: 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Welcome to NBA Central, home of all things NBA and here to let you know who is on the court for this next season. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Rate the teams, comment on players, connect with fans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Teams_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        teams: this.state.teams,
        handleClick: this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Players_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        players: this.state.players,
        current: this.state.current,
        currentPlayers: this.state.currentPlayers
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Headshot_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handlePhoto: this.handlePhoto
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textDecoration: "bold"
        }
      }, "Who do YOU think will win the NBA Playoffs? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comments_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        current: this.state.current
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Comments.js":
/*!*************************!*\
  !*** ./src/Comments.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Comments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, _getPrototypeOf(Comments).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "/api/ratings",
        method: "POST",
        id: "rateSubmit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "rate",
        className: "searchBar",
        id: "rateNumber"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        id: "submit",
        className: "searchBar",
        value: "Enter guess..."
      })));
    }
  }]);

  return Comments;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./src/Headshot.js":
/*!*************************!*\
  !*** ./src/Headshot.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments.js */ "./src/Comments.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Headshot =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Headshot, _React$Component);

  function Headshot() {
    _classCallCheck(this, Headshot);

    return _possibleConstructorReturn(this, _getPrototypeOf(Headshot).apply(this, arguments));
  }

  _createClass(Headshot, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "searchBox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textDecoration: "bold"
        }
      }, " Search for your favorite player's headshot! "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "searchBar",
        id: "first",
        placeholder: "Player first name..."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "searchBar",
        id: "last",
        placeholder: "Player last name..."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "button",
        onClick: function onClick() {
          return _this.props.handlePhoto(first, last);
        },
        type: "submit",
        value: " PLAYER SEARCH "
      }))));
    }
  }]);

  return Headshot;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Headshot);

/***/ }),

/***/ "./src/Players.js":
/*!************************!*\
  !*** ./src/Players.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Players =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Players, _React$Component);

  function Players() {
    _classCallCheck(this, Players);

    return _possibleConstructorReturn(this, _getPrototypeOf(Players).apply(this, arguments));
  }

  _createClass(Players, [{
    key: "render",
    value: function render() {
      var playerStyle = {
        width: "200px",
        height: "100px",
        fontFamily: "helvetica",
        lineHeight: "20px",
        fontSize: "17px",
        fontStyle: "bold",
        padding: "18px"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: playerStyle
      }, this.props.currentPlayers.map(function (players) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: players.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, players.position, " ", players.first_name, ", ", players.last_name));
      })));
    }
  }]);

  return Players;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Players);

/***/ }),

/***/ "./src/Teams.js":
/*!**********************!*\
  !*** ./src/Teams.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Teams =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Teams, _React$Component);

  function Teams() {
    _classCallCheck(this, Teams);

    return _possibleConstructorReturn(this, _getPrototypeOf(Teams).apply(this, arguments));
  }

  _createClass(Teams, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " TEAM MVPS: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "teams"
      }, this.props.teams.map(function (teams) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: teams.id
        }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "teamButton",
          onClick: function onClick() {
            return _this.props.handleClick(teams.id);
          }
        }, " ", teams.full_name, " "), " ");
      })));
    }
  }]);

  return Teams;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Teams);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./src/App.js");
/* harmony import */ var _style_sample_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-sample.css */ "./src/style-sample.css");
/* harmony import */ var _style_sample_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_sample_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rendering_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendering.js */ "./src/rendering.js");






Object(_rendering_js__WEBPACK_IMPORTED_MODULE_5__["updateRatings"])();
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('react-container'));

var rateSubmit = function rateSubmit(event) {
  event.preventDefault();
  var newRating = {
    rate: document.getElementById('rateNumber').value
  };
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/ratings', newRating).then(function (result) {
    Object(_rendering_js__WEBPACK_IMPORTED_MODULE_5__["updateRatings"])();
  })["catch"](function (error) {
    console.log(error);
    res.status(404).send('../public/404.html');
  });
};

var rate = document.getElementById('rate');
rate.addEventListener('submit', rateSubmit);

/***/ }),

/***/ "./src/rendering.js":
/*!**************************!*\
  !*** ./src/rendering.js ***!
  \**************************/
/*! exports provided: updateRatings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRatings", function() { return updateRatings; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;



var updateRatings = function updateRatings() {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/ratings').then(function (results) {
    var rateContainer = document.getElementById('rateContainer');
    rateContainer.innerHTML = '';
    results.data.forEach(function (rate) {
      var number = document.createElement('h3');
      number.innerHTML = "".concat(_this.props.current, " <br> ").concat(rate.number);
    });
  })["catch"](function (error) {
    return console.log(error);
  });
};



/***/ }),

/***/ "./src/style-sample.css":
/*!******************************!*\
  !*** ./src/style-sample.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style-sample.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-sample.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map