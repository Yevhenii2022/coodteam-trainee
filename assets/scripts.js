/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_theme/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n//# sourceURL=webpack://webpack_theme/./src/index.js?");

/***/ }),

/***/ "./src/js/libraries/add-alt-title.js":
/*!*******************************************!*\
  !*** ./src/js/libraries/add-alt-title.js ***!
  \*******************************************/
/***/ (() => {

eval("jQuery(\"img:not([title])\").each(function () {\n  if (jQuery(this).attr(\"alt\") !== \"\")\n    jQuery(this).attr(\"title\", jQuery(this).attr(\"alt\"));\n});\n\njQuery(\"img:not([alt])\").each(function () {\n  if (jQuery(this).attr(\"title\") !== \"\")\n    jQuery(this).attr(\"alt\", jQuery(this).attr(\"title\"));\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/add-alt-title.js?");

/***/ }),

/***/ "./src/js/libraries/libraries.js":
/*!***************************************!*\
  !*** ./src/js/libraries/libraries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alt-title */ \"./src/js/libraries/add-alt-title.js\");\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_alt_title__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-mask */ \"./src/js/libraries/phone-mask.js\");\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_mask__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/libraries.js?");

/***/ }),

/***/ "./src/js/libraries/phone-mask.js":
/*!****************************************!*\
  !*** ./src/js/libraries/phone-mask.js ***!
  \****************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var phoneInputs = document.querySelectorAll('input[type=\"tel\"]');\n\n  if (phoneInputs) {\n    phoneInputs.forEach(function (phoneInput) {\n      var phoneMask = IMask(phoneInput, {\n        mask: \"+38(000)000-00-00\",\n      });\n    });\n  }\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/phone-mask.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/parts */ \"./src/js/parts/parts.js\");\n/* harmony import */ var _libraries_libraries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraries/libraries */ \"./src/js/libraries/libraries.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/main.js?");

/***/ }),

/***/ "./src/js/parts/footer.js":
/*!********************************!*\
  !*** ./src/js/parts/footer.js ***!
  \********************************/
/***/ (() => {

eval("// document.addEventListener(\"DOMContentLoaded\", function () {\r\n// \tconst footer = document.querySelector(\".footer__box\");\r\n// \tconst listIcons = document.querySelectorAll(\".footer__icon\");\r\n\r\n// \tlistIcons.forEach(function (listIcon) {\r\n// \t\tlistIcon.addEventListener(\"mouseenter\", function () {\r\n// \t\t\tfooter.style.height = \"7.467rem\";\r\n// \t\t});\r\n\r\n// \t\tlistIcon.addEventListener(\"mouseleave\", function () {\r\n// \t\t\tfooter.style.height = \"6.133rem\";\r\n// \t\t});\r\n// \t});\r\n// });\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/footer.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst wpcf7Elm = document.querySelector(\".wpcf7\");\r\n\tconst submitButton = document.querySelector(\".form__button\");\r\n\r\n\tif (wpcf7Elm) {\r\n\t\twpcf7Elm.addEventListener(\r\n\t\t\t\"wpcf7beforesubmit\",\r\n\t\t\tevent => {\r\n\t\t\t\tif (submitButton) {\r\n\t\t\t\t\tsubmitButton.setAttribute(\"disabled\", \"disabled\");\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tfalse,\r\n\t\t);\r\n\r\n\t\twpcf7Elm.addEventListener(\r\n\t\t\t\"wpcf7mailsent\",\r\n\t\t\tevent => {\r\n\t\t\t\tconst form = event.target;\r\n\t\t\t\tform.reset();\r\n\t\t\t},\r\n\t\t\tfalse,\r\n\t\t);\r\n\r\n\t\twpcf7Elm.addEventListener(\r\n\t\t\t\"wpcf7submit\",\r\n\t\t\tevent => {\r\n\t\t\t\tif (submitButton) {\r\n\t\t\t\t\tsubmitButton.removeAttribute(\"disabled\");\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tfalse,\r\n\t\t);\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/header.js":
/*!********************************!*\
  !*** ./src/js/parts/header.js ***!
  \********************************/
/***/ (() => {

eval("// document.addEventListener(\"DOMContentLoaded\", function () {\r\n// \tconst header = document.querySelector(\".header__wrapper\");\r\n// \tconst headerButton = document.querySelector(\".header__button\");\r\n// \tconst listIcons = document.querySelectorAll(\".header__list-icon\");\r\n\r\n// \tlistIcons.forEach(function (listIcon) {\r\n// \t\tlistIcon.addEventListener(\"mouseenter\", function () {\r\n// \t\t\theader.style.height = \"7.333rem\";\r\n// \t\t});\r\n\r\n// \t\tlistIcon.addEventListener(\"mouseleave\", function () {\r\n// \t\t\theader.style.height = \"6rem\";\r\n// \t\t});\r\n// \t});\r\n\r\n// \theaderButton.addEventListener(\"mouseenter\", function () {\r\n// \t\theader.style.height = \"7.333rem\";\r\n// \t});\r\n\r\n// \theaderButton.addEventListener(\"mouseleave\", function () {\r\n// \t\theader.style.height = \"6rem\";\r\n// \t});\r\n// });\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/header.js?");

/***/ }),

/***/ "./src/js/parts/parts.js":
/*!*******************************!*\
  !*** ./src/js/parts/parts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/js/parts/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/js/parts/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ \"./src/js/parts/popup.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/js/parts/form.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/parts.js?");

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tlet contactsBtn = document.querySelectorAll(\".button--contacts\");\r\n\tlet popup = document.querySelector(\".popup\");\r\n\tlet closeBtn = document.querySelectorAll(\".popup--close\");\r\n\r\n\tif (contactsBtn.length > 0) {\r\n\t\tcontactsBtn.forEach(function (button) {\r\n\t\t\tbutton.addEventListener(\"click\", function () {\r\n\t\t\t\tpopup.classList.add(\"popup--show\");\r\n\t\t\t\tdocument.body.classList.add(\"body--popup\");\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tif (closeBtn.length > 0) {\r\n\t\tcloseBtn.forEach(function (button) {\r\n\t\t\tbutton.addEventListener(\"click\", function () {\r\n\t\t\t\tif (popup.classList.contains(\"popup--show\")) {\r\n\t\t\t\t\tpopup.classList.remove(\"popup--show\");\r\n\t\t\t\t}\r\n\t\t\t\tif (document.body.classList.contains(\"body--popup\")) {\r\n\t\t\t\t\tdocument.body.classList.remove(\"body--popup\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/popup.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst swiper = new Swiper(\".swiper__swiper\", {\r\n\t\tloop: true,\r\n\t\teffect: \"fade\",\r\n\r\n\t\t// If we need pagination\r\n\t\tpagination: {\r\n\t\t\tel: \".swiper__pagination\",\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\r\n\t\t// Navigation arrows\r\n\t\tnavigation: {\r\n\t\t\tnextEl: \".swiper__nav--next\",\r\n\t\t\tprevEl: \".swiper__nav--prev\",\r\n\t\t},\r\n\t});\r\n\r\n\tlet slides = document.querySelectorAll(\".services__card\");\r\n\r\n\tif (slides.length > 4 || window.innerWidth < 1024) {\r\n\t\tvar services = new Swiper(\".services__slider\", {\r\n\t\t\tslidesPerView: 1.5,\r\n\t\t\tspaceBetween: 24,\r\n\t\t\tloop: true,\r\n\t\t\tspeed: 1000,\r\n\t\t\tkeyboard: {\r\n\t\t\t\tenabled: true,\r\n\t\t\t},\r\n\t\t\tpagination: {\r\n\t\t\t\tel: \".services__swiper-pagination\",\r\n\t\t\t\tclickable: true,\r\n\t\t\t\trenderBullet: function (index, className) {\r\n\t\t\t\t\treturn '<span class=\"services__swiper-pagination--span ' + className + '\"></span>';\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t\tbreakpoints: {\r\n\t\t\t\t541: {\r\n\t\t\t\t\tslidesPerView: 4,\r\n\t\t\t\t\tpagination: false,\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t});\r\n\t}\r\n\r\n\tvar portfolio = new Swiper(\".portfolio__slider\", {\r\n\t\tslidesPerView: 1.5,\r\n\t\tspaceBetween: 53,\r\n\t\tloop: true,\r\n\t\tspeed: 1000,\r\n\t\tkeyboard: {\r\n\t\t\tenabled: true,\r\n\t\t},\r\n\t\tpagination: {\r\n\t\t\tel: \".portfolio__swiper-pagination\",\r\n\t\t\tclickable: true,\r\n\t\t\trenderBullet: function (index, className) {\r\n\t\t\t\treturn '<span class=\"portfolio__swiper-pagination--span ' + className + '\"></span>';\r\n\t\t\t},\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t541: {\r\n\t\t\t\tslidesPerView: 3.5,\r\n\t\t\t\tpagination: false,\r\n\t\t\t},\r\n\t\t},\r\n\t});\r\n\r\n\tvar clients = new Swiper(\".clients__slider\", {\r\n\t\tslidesPerView: 1.5,\r\n\t\tspaceBetween: 24,\r\n\t\tloop: true,\r\n\t\tspeed: 1000,\r\n\t\tkeyboard: {\r\n\t\t\tenabled: true,\r\n\t\t},\r\n\t\tpagination: {\r\n\t\t\tel: \".clients__swiper-pagination\",\r\n\t\t\tclickable: true,\r\n\t\t\trenderBullet: function (index, className) {\r\n\t\t\t\treturn '<span class=\"clients__swiper-pagination--span ' + className + '\"></span>';\r\n\t\t\t},\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t541: {\r\n\t\t\t\tslidesPerView: 4.5,\r\n\t\t\t},\r\n\t\t},\r\n\t});\r\n\r\n\tif (window.innerWidth < 1025) {\r\n\t\tvar about = new Swiper(\".about__slider\", {\r\n\t\t\tslidesPerView: 4,\r\n\t\t\tloop: true,\r\n\t\t\tspeed: 1000,\r\n\t\t\tkeyboard: {\r\n\t\t\t\tenabled: true,\r\n\t\t\t},\r\n\t\t\tpagination: {\r\n\t\t\t\tel: \".about__swiper-pagination\",\r\n\t\t\t\tclickable: true,\r\n\t\t\t\trenderBullet: function (index, className) {\r\n\t\t\t\t\treturn '<span class=\"about__swiper-pagination--span ' + className + '\"></span>';\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t\tbreakpoints: {\r\n\t\t\t\t768: {\r\n\t\t\t\t\tslidesPerView: 6,\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t});\r\n\t}\r\n});\r\n\r\n// breakpoints: {\r\n//     // when window width is >= 320px\r\n//     320: {\r\n//         slidesPerView: 1,\r\n//         spaceBetween: 0,\r\n//         slideToClickedSlide: true,\r\n//     },\r\n//     // when window width is >= 640px\r\n//     640: {\r\n//         slidesPerView: 4,\r\n//         spaceBetween: 0,\r\n//         slideToClickedSlide: true,\r\n//     }\r\n// }\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;