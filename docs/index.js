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
	var entry_1 = __webpack_require__(6);
	var header_1 = __webpack_require__(5);
	var content_1 = __webpack_require__(4);
	var book_list_1 = __webpack_require__(3);
	var Top = (function (_super) {
	    __extends(Top, _super);
	    function Top() {
	        _super.apply(this, arguments);
	    }
	    Top.prototype.render = function () {
	        console.log(Src);
	        return (React.createElement("div", null, 
	            React.createElement(header_1.default, null), 
	            React.createElement(content_1.default, null, 
	                React.createElement("h2", null, "本の一覧"), 
	                React.createElement(book_list_1.default, null))));
	    };
	    return Top;
	}(React.Component));
	entry_1.default(Top);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"SITE_NAME": "キリスト教古典（機械翻訳）"
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	/**
	 * Should be in the top page
	 */
	var BookList = (function (_super) {
	    __extends(BookList, _super);
	    function BookList() {
	        _super.apply(this, arguments);
	    }
	    BookList.prototype.render = function () {
	        var s = this;
	        return (React.createElement("div", {className: 'book-list'}, Src.map(function (book) { return (React.createElement("div", {className: 'list-item', key: book.id}, 
	            React.createElement("a", {href: "./" + book.directory}, book.title.ja), 
	            " (", 
	            book.author.ja, 
	            " ", 
	            book.writtenYear || '', 
	            " ", 
	            book.description || '', 
	            ")")); })));
	    };
	    return BookList;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BookList;


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
	var loc = __webpack_require__(2);
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(7);
	function entry(App) {
	    var rootElement = document.getElementById('site');
	    document.addEventListener('DOMContentLoaded', function () {
	        ReactDOM.render(React.createElement(App, null), rootElement);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = entry;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);