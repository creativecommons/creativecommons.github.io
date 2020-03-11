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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/ideas.js":
/*!*********************!*\
  !*** ./js/ideas.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\n    // Class for active buttons\n    const active_class = 'btn-dark';\n\n    // Class for inactive buttons\n    const inactive_class = 'btn-primary';\n\n    // jQuery object containing all the filter buttons\n    const filter_btn = $('.filter-btn');\n\n    // Animation delay for show() function\n    const animation_delay = 100;\n\n    // List of Available filters\n    const filters = [\n      'all',\n      'difficulty-easy',\n      'difficulty-medium',\n      'difficulty-hard',\n      'skill-javascript',\n      'skill-python',\n      'skill-wordpress',\n      'skill-writing'\n    ];\n\n    // Variable to hold selected filters\n    var selected = [];\n\n    // To display selected filters\n    function showIdeas(selected)\n    {\n        // If no filter is selected/show all\n      if(selected.length == 0){\n        $('.filter').show(animation_delay);\n        return selected;\n      }\n        // Get filters which were not selected\n      hidden = filters.filter(n => !selected.includes(n));\n\n        // Hide not selected\n      for (const idea in hidden) {\n        if (hidden.hasOwnProperty(idea)) {\n          const element = hidden[idea];\n          $('.filter.' + element).hide();\n        }\n      }\n        // Show not selected\n      for (const idea in selected) {\n        if (selected.hasOwnProperty(idea)) {\n          const element = selected[idea];\n          $('.filter.' + element).show(animation_delay);\n        }\n      }\n      return selected;\n    }\n\n    // To reset the selected filters / All Projects button\n    function resetFilters()\n    {\n      $('.filter-btn[data-filter=\"all\"]').removeClass(inactive_class).addClass(active_class);\n      return filter_btn.not('[data-filter=\"all\"]').removeClass(active_class).addClass(inactive_class);\n    }\n\n    // To toggle classes in filter buttons\n    function toggleBtn(btn)\n    {\n      if(btn.hasClass(active_class)){\n       return btn.removeClass(active_class).addClass(inactive_class);\n      }\n      return btn.removeClass(inactive_class).addClass(active_class);\n    }\n\n    // Click event handler\n    filter_btn.click(function() {\n      var value = $(this).data('filter');\n      // Reset all filters and show all\n      if(value == 'all')\n      {\n        selected = [];\n        resetFilters();\n        return showIdeas(selected);\n      }\n      if(selected.indexOf(value) > -1)\n      {\n        // If the filter is already selected, remove it from selected and toggle buttons\n        selected.splice(selected.indexOf(value), 1);\n      }else if(filters.indexOf(value) > -1) {\n        // If the filter is not selected, add it to the selected array and toggle buttons\n        $('.filter-btn[data-filter=\"all\"]').removeClass(active_class).addClass(inactive_class);\n        selected.push(value);\n      }\n      toggleBtn($(this));\n      return showIdeas(selected);\n    });\n  });\n\n//# sourceURL=webpack:///./js/ideas.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() {\n    $(window).scroll(function() {\n        if ($(this).scrollTop() > 500) {\n            $('#back-to-top').fadeIn();\n        } else {\n            $('#back-to-top').fadeOut();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./js/main.js ./js/ideas.js ./sass/main.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/main.js */\"./js/main.js\");\n__webpack_require__(/*! ./js/ideas.js */\"./js/ideas.js\");\nmodule.exports = __webpack_require__(/*! ./sass/main.scss */\"./sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js_./js/ideas.js_./sass/main.scss?");

/***/ })

/******/ });