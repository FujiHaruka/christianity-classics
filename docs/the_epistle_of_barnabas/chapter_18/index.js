/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var entry_1 = __webpack_require__(7);
	var header_1 = __webpack_require__(6);
	var content_1 = __webpack_require__(4);
	var dual_sentence_1 = __webpack_require__(5);
	var util_1 = __webpack_require__(8);
	var Top = (function (_super) {
	    __extends(Top, _super);
	    function Top() {
	        _super.apply(this, arguments);
	    }
	    Top.prototype.render = function () {
	        var book = util_1.getBook(Src);
	        if (!book) {
	            return React.createElement("div", null, "Not found the article.");
	        }
	        var chapterTitle = util_1.getChapterTitle(Src);
	        return (React.createElement("div", null, 
	            React.createElement(header_1.default, null), 
	            React.createElement(content_1.default, null, 
	                React.createElement("div", {className: 'breadcrumb'}, 
	                    React.createElement("a", {href: '/'}, "TOP"), 
	                    " > ", 
	                    React.createElement("a", {href: '..'}, book.title.ja), 
	                    " > ", 
	                    chapterTitle.ja), 
	                React.createElement("h2", {className: 'chapter-title'}, chapterTitle.ja), 
	                Src.article.map(function (paragraph) {
	                    var sentences = paragraph.sentences;
	                    return (React.createElement("div", {className: 'paragraph'}, sentences.map(function (sentence) { return React.createElement(dual_sentence_1.default, {sentence: sentence}); })));
	                }))));
	    };
	    return Top;
	}(React.Component));
	entry_1.default(Top);
	/* global Src */


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"SITE_NAME": "キリスト教古典（機械翻訳）"
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	;
	/**
	 * Main content wrapper
	 */
	var Content = function (props) {
	    return (React.createElement("div", {className: 'main-content-wrap'}, 
	        React.createElement("div", {className: 'main-content'}, props.children)
	    ));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Content;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var c = __webpack_require__(2);
	var DualSentence = (function (_super) {
	    __extends(DualSentence, _super);
	    function DualSentence(arg) {
	        _super.call(this, arg);
	        this.state = {
	            show: false,
	            fixed: false,
	            originalStyle: {
	                bottom: ''
	            }
	        };
	    }
	    DualSentence.prototype.render = function () {
	        var s = this;
	        var _a = s.props.sentence, id = _a.id, en = _a.en, ja = _a.ja;
	        var _b = s.state, show = _b.show, originalStyle = _b.originalStyle;
	        return (React.createElement("div", {className: 'dual-sentence'}, 
	            React.createElement("div", {className: c('original', show ? 'visible' : 'hidden'), id: "original-sentence-" + id, style: originalStyle}, en), 
	            React.createElement("div", {className: c('japanese', this.state.fixed ? 'fixed' : ''), id: "japanese-sentence-" + id, onMouseEnter: s.showOriginal.bind(s), onMouseOut: s.hideOriginal.bind(s), onClick: s.toggleFixed.bind(s)}, ja)));
	    };
	    DualSentence.prototype.componentDidMount = function () {
	        var id = this.props.sentence.id;
	        var original = document.getElementById("japanese-sentence-" + id);
	        if (original === null) {
	            return;
	        }
	        this.setState({
	            originalStyle: {
	                bottom: original.clientHeight + "px"
	            }
	        });
	    };
	    DualSentence.prototype.toggleFixed = function () {
	        console.log('to');
	        this.setState({
	            fixed: !this.state.fixed
	        });
	    };
	    DualSentence.prototype.showOriginal = function () {
	        this.setState({
	            show: true
	        });
	    };
	    DualSentence.prototype.hideOriginal = function () {
	        if (this.state.fixed) {
	            return;
	        }
	        else {
	            this.setState({
	                show: false
	            });
	        }
	    };
	    return DualSentence;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DualSentence;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var loc = __webpack_require__(3);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        _super.apply(this, arguments);
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("div", {className: 'header'}, 
	            React.createElement("h1", {className: 'title'}, 
	                React.createElement("a", {href: '/'}, loc.SITE_NAME)
	            )
	        ));
	    };
	    return Header;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Header;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(9);
	function entry(App) {
	    var rootElement = document.getElementById('site');
	    document.addEventListener('DOMContentLoaded', function () {
	        ReactDOM.render(React.createElement(App, null), rootElement);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = entry;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	// root がサブディレクトリになるなら変更しなくてはならない
	function getBook(src) {
	    var books = src.books;
	    var paths = window.location.pathname.split('/').filter(function (path) { return path.length > 0; });
	    var bookDir = paths[0];
	    var book = books.find(function (b) { return b.directory === bookDir; });
	    return book;
	}
	exports.getBook = getBook;
	function getChapterTitle(src) {
	    var chapters = src.chapters;
	    var paths = window.location.pathname.split('/').filter(function (path) { return path.length > 0; });
	    var chapterDir = paths[1];
	    var chapter = chapters.find(function (c) { return c.directory === chapterDir; });
	    return chapter ? chapter.title : { en: '', ja: '' };
	}
	exports.getChapterTitle = getChapterTitle;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);