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
	var chapter_list_1 = __webpack_require__(3);
	var util_1 = __webpack_require__(7);
	var BookPage = (function (_super) {
	    __extends(BookPage, _super);
	    function BookPage() {
	        _super.apply(this, arguments);
	    }
	    BookPage.prototype.render = function () {
	        var book = util_1.getBook(Src);
	        if (!book) {
	            return React.createElement("div", null, " Book not found. ");
	        }
	        var title = book.title;
	        return (React.createElement("div", null, 
	            React.createElement(header_1.default, null), 
	            React.createElement(content_1.default, null, 
	                React.createElement("div", {className: 'breadcrumb'}, 
	                    React.createElement("a", {href: '/'}, "TOP"), 
	                    " > ", 
	                    title.ja), 
	                React.createElement("h2", {className: 'book-title'}, title.ja), 
	                book.originalUrl ? React.createElement("h4", null, 
	                    "原文:  ", 
	                    React.createElement("a", {href: book.originalUrl}, book.originalUrl)) : null, 
	                React.createElement(chapter_list_1.default, null))));
	    };
	    return BookPage;
	}(React.Component));
	entry_1.default(BookPage);


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
	 * Should be in the book page
	 */
	var ChapterList = (function (_super) {
	    __extends(ChapterList, _super);
	    function ChapterList() {
	        _super.apply(this, arguments);
	    }
	    ChapterList.prototype.render = function () {
	        var s = this;
	        console.log(Src);
	        return (React.createElement("div", {className: 'chapter-list'}, Src.chapters.map(function (chapter) { return (React.createElement("div", {className: 'list-item', key: chapter.id}, 
	            React.createElement("a", {href: "./" + chapter.directory}, chapter.title.ja)
	        )); })));
	    };
	    return ChapterList;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChapterList;


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
	var ReactDOM = __webpack_require__(8);
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
/* 8 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);