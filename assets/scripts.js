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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  var phoneInputs = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\n  if (phoneInputs) {\r\n    phoneInputs.forEach(function (phoneInput) {\r\n      var phoneMask = IMask(phoneInput, {\r\n        mask: \"+38(000)000-00-00\",\r\n      });\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/phone-mask.js?");

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

eval("document.addEventListener(\r\n\t'DOMContentLoaded',\r\n\tfunction () {\r\n\t\tconst wpcf7Elm =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t'.wpcf7',\r\n\t\t\t);\r\n\t\tconst submitButton =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t'.form__button',\r\n\t\t\t);\r\n\t\tlet popupSuccess =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t'.success',\r\n\t\t\t);\r\n\r\n\t\tif (wpcf7Elm) {\r\n\t\t\twpcf7Elm.addEventListener(\r\n\t\t\t\t'wpcf7beforesubmit',\r\n\t\t\t\t() => {\r\n\t\t\t\t\tif (\r\n\t\t\t\t\t\tsubmitButton\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\tsubmitButton.setAttribute(\r\n\t\t\t\t\t\t\t'disabled',\r\n\t\t\t\t\t\t\t'disabled',\r\n\t\t\t\t\t\t);\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tfalse,\r\n\t\t\t);\r\n\r\n\t\t\twpcf7Elm.addEventListener(\r\n\t\t\t\t'wpcf7mailsent',\r\n\t\t\t\t// \"wpcf7mailfailed\",\r\n\t\t\t\t// \"wpcf7submit\",\r\n\t\t\t\tevent => {\r\n\t\t\t\t\tpopupSuccess.classList.add(\r\n\t\t\t\t\t\t'success--show',\r\n\t\t\t\t\t);\r\n\t\t\t\t\tdocument.body.classList.add(\r\n\t\t\t\t\t\t'body--popup',\r\n\t\t\t\t\t);\r\n\t\t\t\t\tconst form =\r\n\t\t\t\t\t\tevent.target;\r\n\t\t\t\t\tform.reset();\r\n\t\t\t\t},\r\n\t\t\t\tfalse,\r\n\t\t\t);\r\n\r\n\t\t\twpcf7Elm.addEventListener(\r\n\t\t\t\t'wpcf7submit',\r\n\t\t\t\t() => {\r\n\t\t\t\t\tif (\r\n\t\t\t\t\t\tsubmitButton\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\tsubmitButton.removeAttribute(\r\n\t\t\t\t\t\t\t'disabled',\r\n\t\t\t\t\t\t);\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tfalse,\r\n\t\t\t);\r\n\t\t}\r\n\r\n\t\t// input file\r\n\t\tlet inputFile =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t\"input[type='file']\",\r\n\t\t\t);\r\n\t\tlet fileNameDisplay =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t'.form__file-text',\r\n\t\t\t);\r\n\t\tlet inputClear =\r\n\t\t\tdocument.querySelector(\r\n\t\t\t\t'.button__delete',\r\n\t\t\t);\r\n\t\tlet icons = {\r\n\t\t\tpdf: '/wp-content/themes/pointer-theme/assets/images/icon-pdf.jpg',\r\n\t\t\tdoc: '/wp-content/themes/pointer-theme/assets/images/icon-doc.jpg',\r\n\t\t\timg: '/wp-content/themes/pointer-theme/assets/images/icon-img.jpg',\r\n\t\t};\r\n\r\n\t\tif (inputFile) {\r\n\t\t\tinputFile.addEventListener(\r\n\t\t\t\t'change',\r\n\t\t\t\tfunction () {\r\n\t\t\t\t\tlet fileName =\r\n\t\t\t\t\t\tthis\r\n\t\t\t\t\t\t\t.files[0]\r\n\t\t\t\t\t\t\t.name;\r\n\t\t\t\t\tlet fileType =\r\n\t\t\t\t\t\tthis\r\n\t\t\t\t\t\t\t.files[0]\r\n\t\t\t\t\t\t\t.type;\r\n\r\n\t\t\t\t\tlet iconName;\r\n\t\t\t\t\tif (\r\n\t\t\t\t\t\tfileType.includes(\r\n\t\t\t\t\t\t\t'pdf',\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\ticonName =\r\n\t\t\t\t\t\t\ticons.pdf;\r\n\t\t\t\t\t} else if (\r\n\t\t\t\t\t\tfileType.includes(\r\n\t\t\t\t\t\t\t'doc',\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\ticonName =\r\n\t\t\t\t\t\t\ticons.doc;\r\n\t\t\t\t\t} else if (\r\n\t\t\t\t\t\tfileType.includes(\r\n\t\t\t\t\t\t\t'png',\r\n\t\t\t\t\t\t) ||\r\n\t\t\t\t\t\tfileType.includes(\r\n\t\t\t\t\t\t\t'jpeg',\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\ticonName =\r\n\t\t\t\t\t\t\ticons.img;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\ticonName =\r\n\t\t\t\t\t\t\t'';\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfileNameDisplay.innerHTML =\r\n\t\t\t\t\t\ticonName\r\n\t\t\t\t\t\t\t? `<img class=\"form__file-icon\" src=${iconName} /><span> ${fileName}</span>`\r\n\t\t\t\t\t\t\t: 'Прикріпити файл';\r\n\t\t\t\t},\r\n\t\t\t);\r\n\t\t}\r\n\r\n\t\t//clear input\r\n\t\tif (\r\n\t\t\tinputClear\r\n\t\t) {\r\n\t\t\tinputClear.addEventListener(\r\n\t\t\t\t'click',\r\n\t\t\t\tfunction () {\r\n\t\t\t\t\tif (\r\n\t\t\t\t\t\tinputFile\r\n\t\t\t\t\t\t\t.files\r\n\t\t\t\t\t\t\t.length >\r\n\t\t\t\t\t\t0\r\n\t\t\t\t\t) {\r\n\t\t\t\t\t\tinputFile.value =\r\n\t\t\t\t\t\t\t'';\r\n\t\t\t\t\t\tfileNameDisplay.innerText =\r\n\t\t\t\t\t\t\t'Прикріпити файл';\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t);\r\n\t\t}\r\n\t},\r\n);\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/header.js":
/*!********************************!*\
  !*** ./src/js/parts/header.js ***!
  \********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst header = document.querySelector(\".header\");\r\n\tscrollPrev = 0;\r\n\r\n\twindow.addEventListener(\"scroll\", function () {\r\n\t\tconst scrolled = window.pageYOffset || this.document.documentElement.scrollTop;\r\n\r\n\t\tif (scrolled > 100 && scrolled > scrollPrev) {\r\n\t\t\theader.classList.add(\"header--hidden\");\r\n\t\t} else {\r\n\t\t\theader.classList.remove(\"header--hidden\");\r\n\t\t}\r\n\t\tscrollPrev = scrolled;\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/header.js?");

/***/ }),

/***/ "./src/js/parts/parts.js":
/*!*******************************!*\
  !*** ./src/js/parts/parts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/js/parts/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/js/parts/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ \"./src/js/parts/popup.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/js/parts/form.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success */ \"./src/js/parts/success.js\");\n/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_success__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./versions */ \"./src/js/parts/versions.js\");\n/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_versions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions */ \"./src/js/parts/questions.js\");\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_questions__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/parts.js?");

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tlet contactsBtn = document.querySelectorAll(\".button--contacts\");\r\n\tlet popup = document.querySelector(\".popup\");\r\n\tlet closeBtn = document.querySelectorAll(\".popup--close\");\r\n\r\n\tif (contactsBtn.length > 0) {\r\n\t\tcontactsBtn.forEach(function (button) {\r\n\t\t\tbutton.addEventListener(\"click\", function () {\r\n\t\t\t\tpopup.classList.add(\"popup--show\");\r\n\t\t\t\tdocument.body.classList.add(\"body--popup\");\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tif (closeBtn.length > 0) {\r\n\t\tcloseBtn.forEach(function (button) {\r\n\t\t\tbutton.addEventListener(\"click\", function () {\r\n\t\t\t\tif (popup.classList.contains(\"popup--show\")) {\r\n\t\t\t\t\tpopup.classList.remove(\"popup--show\");\r\n\t\t\t\t}\r\n\t\t\t\tif (document.body.classList.contains(\"body--popup\")) {\r\n\t\t\t\t\tdocument.body.classList.remove(\"body--popup\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/popup.js?");

/***/ }),

/***/ "./src/js/parts/questions.js":
/*!***********************************!*\
  !*** ./src/js/parts/questions.js ***!
  \***********************************/
/***/ (() => {

eval("document.addEventListener(\r\n\t'DOMContentLoaded',\r\n\tfunction () {\r\n\t\tlet accordionList =\r\n\t\t\tdocument.querySelectorAll(\r\n\t\t\t\t'.questions__block',\r\n\t\t\t);\r\n\t\tif (\r\n\t\t\taccordionList.length >\r\n\t\t\t0\r\n\t\t) {\r\n\t\t\taccordionList.forEach(\r\n\t\t\t\titem => {\r\n\t\t\t\t\tlet question =\r\n\t\t\t\t\t\titem.querySelector(\r\n\t\t\t\t\t\t\t'.questions__question',\r\n\t\t\t\t\t\t);\r\n\t\t\t\t\tquestion.addEventListener(\r\n\t\t\t\t\t\t'click',\r\n\t\t\t\t\t\t() => {\r\n\t\t\t\t\t\t\tlet content =\r\n\t\t\t\t\t\t\t\titem.querySelector(\r\n\t\t\t\t\t\t\t\t\t'.questions__answear',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tlet isActive =\r\n\t\t\t\t\t\t\t\titem.classList.contains(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tdocument\r\n\t\t\t\t\t\t\t\t.querySelectorAll(\r\n\t\t\t\t\t\t\t\t\t'.questions__block',\r\n\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t.forEach(\r\n\t\t\t\t\t\t\t\t\tblock => {\r\n\t\t\t\t\t\t\t\t\t\tif (\r\n\t\t\t\t\t\t\t\t\t\t\tblock !==\r\n\t\t\t\t\t\t\t\t\t\t\t\titem &&\r\n\t\t\t\t\t\t\t\t\t\t\tblock.classList.contains(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tblock.classList.remove(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t\t\t\tblock.querySelector(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'.questions__answear',\r\n\t\t\t\t\t\t\t\t\t\t\t).style.maxHeight =\r\n\t\t\t\t\t\t\t\t\t\t\t\tnull;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tif (\r\n\t\t\t\t\t\t\t\t!isActive\r\n\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\titem.classList.add(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\tcontent.style.maxHeight =\r\n\t\t\t\t\t\t\t\t\tcontent.scrollHeight +\r\n\t\t\t\t\t\t\t\t\t'px';\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\titem.classList.remove(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\tcontent.style.maxHeight =\r\n\t\t\t\t\t\t\t\t\tnull;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t);\r\n\t\t\t\t},\r\n\t\t\t);\r\n\t\t}\r\n\t},\r\n);\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/questions.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ (() => {

eval("document.addEventListener(\r\n\t'DOMContentLoaded',\r\n\tfunction () {\r\n\t\tconst swiper =\r\n\t\t\tnew Swiper(\r\n\t\t\t\t'.swiper__swiper',\r\n\t\t\t\t{\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\teffect:\r\n\t\t\t\t\t\t'fade',\r\n\r\n\t\t\t\t\t// If we need pagination\r\n\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tel: '.swiper__pagination',\r\n\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t},\r\n\r\n\t\t\t\t\t// Navigation arrows\r\n\t\t\t\t\tnavigation:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tnextEl:\r\n\t\t\t\t\t\t\t\t'.swiper__nav--next',\r\n\t\t\t\t\t\t\tprevEl:\r\n\t\t\t\t\t\t\t\t'.swiper__nav--prev',\r\n\t\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t);\r\n\r\n\t\tlet slides =\r\n\t\t\tdocument.querySelectorAll(\r\n\t\t\t\t'.services__card',\r\n\t\t\t);\r\n\r\n\t\tif (\r\n\t\t\tslides.length >\r\n\t\t\t\t4 ||\r\n\t\t\twindow.innerWidth <\r\n\t\t\t\t1024\r\n\t\t) {\r\n\t\t\tvar services =\r\n\t\t\t\tnew Swiper(\r\n\t\t\t\t\t'.services__slider',\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tslidesPerView: 1.11,\r\n\t\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\t\tloop: true,\r\n\t\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tel: '.services__swiper-pagination',\r\n\t\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t\t'<span class=\"services__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t541: {\r\n\t\t\t\t\t\t\t\t\tslidesPerView: 4,\r\n\t\t\t\t\t\t\t\t\tspaceBetween: 24,\r\n\t\t\t\t\t\t\t\t\tpagination: false,\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t},\r\n\t\t\t\t);\r\n\t\t}\r\n\r\n\t\tvar portfolio =\r\n\t\t\tnew Swiper(\r\n\t\t\t\t'.portfolio__slider',\r\n\t\t\t\t{\r\n\t\t\t\t\tslidesPerView: 1.17,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tel: '.portfolio__swiper-pagination',\r\n\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t'<span class=\"portfolio__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t541: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 40,\r\n\t\t\t\t\t\t\t\tslidesPerView: 2.5,\r\n\t\t\t\t\t\t\t\tpagination: false,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t1024: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 53,\r\n\t\t\t\t\t\t\t\tslidesPerView: 3.5,\r\n\t\t\t\t\t\t\t\tpagination: false,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t);\r\n\r\n\t\tvar clients =\r\n\t\t\tnew Swiper(\r\n\t\t\t\t'.clients__slider',\r\n\t\t\t\t{\r\n\t\t\t\t\tslidesPerView: 1.35,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tel: '.clients__swiper-pagination',\r\n\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t'<span class=\"clients__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t541: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 16,\r\n\t\t\t\t\t\t\t\tslidesPerView: 3.5,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t1024: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 24,\r\n\t\t\t\t\t\t\t\tslidesPerView: 4.5,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t);\r\n\r\n\t\tif (\r\n\t\t\twindow.innerWidth <\r\n\t\t\t1025\r\n\t\t) {\r\n\t\t\tvar about =\r\n\t\t\t\tnew Swiper(\r\n\t\t\t\t\t'.about__slider',\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tslidesPerView: 4,\r\n\t\t\t\t\t\tloop: true,\r\n\t\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tel: '.about__swiper-pagination',\r\n\t\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t\t'<span class=\"about__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t768: {\r\n\t\t\t\t\t\t\t\t\tslidesPerView: 6,\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t},\r\n\t\t\t\t);\r\n\t\t}\r\n\r\n\t\tif (\r\n\t\t\twindow.innerWidth <\r\n\t\t\t1025\r\n\t\t) {\r\n\t\t\tvar technologies =\r\n\t\t\t\tnew Swiper(\r\n\t\t\t\t\t'.technologies__slider',\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tslidesPerView: 4,\r\n\t\t\t\t\t\tloop: true,\r\n\t\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\tel: '.technologies__swiper-pagination',\r\n\t\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t\t'<span class=\"technologies__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t768: {\r\n\t\t\t\t\t\t\t\t\tslidesPerView: 6,\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t},\r\n\t\t\t\t);\r\n\t\t}\r\n\r\n\t\tvar desktop =\r\n\t\t\tnew Swiper(\r\n\t\t\t\t'.desktop__slider',\r\n\t\t\t\t{\r\n\t\t\t\t\tslidesPerView: 0.8,\r\n\t\t\t\t\t// spaceBetween: 10,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tel: '.desktop__swiper-pagination',\r\n\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t'<span class=\"desktop__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t541: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 16,\r\n\t\t\t\t\t\t\t\tslidesPerView: 1.15,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t1024: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 24,\r\n\t\t\t\t\t\t\t\tslidesPerView: 1.3,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t);\r\n\r\n\t\tvar mobile =\r\n\t\t\tnew Swiper(\r\n\t\t\t\t'.mobile__slider',\r\n\t\t\t\t{\r\n\t\t\t\t\tslidesPerView: 1.35,\r\n\t\t\t\t\tspaceBetween: 11,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\tspeed: 1000,\r\n\t\t\t\t\tkeyboard:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tenabled: true,\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tpagination:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tel: '.mobile__swiper-pagination',\r\n\t\t\t\t\t\t\tclickable: true,\r\n\t\t\t\t\t\t\trenderBullet:\r\n\t\t\t\t\t\t\t\tfunction (\r\n\t\t\t\t\t\t\t\t\tindex,\r\n\t\t\t\t\t\t\t\t\tclassName,\r\n\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\treturn (\r\n\t\t\t\t\t\t\t\t\t\t'<span class=\"mobile__swiper-pagination--span ' +\r\n\t\t\t\t\t\t\t\t\t\tclassName +\r\n\t\t\t\t\t\t\t\t\t\t'\"></span>'\r\n\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\tbreakpoints:\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t541: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 16,\r\n\t\t\t\t\t\t\t\tslidesPerView: 2.5,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t1024: {\r\n\t\t\t\t\t\t\t\tspaceBetween: 24,\r\n\t\t\t\t\t\t\t\tslidesPerView: 3.5,\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t},\r\n\t\t\t\t},\r\n\t\t\t);\r\n\t},\r\n);\r\n\r\n// breakpoints: {\r\n//     // when window width is >= 320px\r\n//     320: {\r\n//         slidesPerView: 1,\r\n//         spaceBetween: 0,\r\n//         slideToClickedSlide: true,\r\n//     },\r\n//     // when window width is >= 640px\r\n//     640: {\r\n//         slidesPerView: 4,\r\n//         spaceBetween: 0,\r\n//         slideToClickedSlide: true,\r\n//     }\r\n// }\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/success.js":
/*!*********************************!*\
  !*** ./src/js/parts/success.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tlet popup = document.querySelector(\".popup\");\r\n\tlet popupSuccess = document.querySelector(\".success\");\r\n\tlet closeBtn = document.querySelectorAll(\".success--close\");\r\n\r\n\tif (closeBtn.length > 0) {\r\n\t\tcloseBtn.forEach(function (button) {\r\n\t\t\tbutton.addEventListener(\"click\", function () {\r\n\t\t\t\tif (popupSuccess.classList.contains(\"success--show\")) {\r\n\t\t\t\t\tpopupSuccess.classList.remove(\"success--show\");\r\n\t\t\t\t}\r\n\t\t\t\tif (popup.classList.contains(\"popup--show\")) {\r\n\t\t\t\t\tpopup.classList.remove(\"popup--show\");\r\n\t\t\t\t}\r\n\t\t\t\tif (document.body.classList.contains(\"body--popup\")) {\r\n\t\t\t\t\tdocument.body.classList.remove(\"body--popup\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/success.js?");

/***/ }),

/***/ "./src/js/parts/versions.js":
/*!**********************************!*\
  !*** ./src/js/parts/versions.js ***!
  \**********************************/
/***/ (() => {

eval("document.addEventListener(\r\n\t'DOMContentLoaded',\r\n\tfunction () {\r\n\t\tlet accordionList =\r\n\t\t\tdocument.querySelectorAll(\r\n\t\t\t\t'.versions__block',\r\n\t\t\t);\r\n\t\tif (\r\n\t\t\taccordionList.length >\r\n\t\t\t0\r\n\t\t) {\r\n\t\t\taccordionList.forEach(\r\n\t\t\t\titem => {\r\n\t\t\t\t\tlet question =\r\n\t\t\t\t\t\titem.querySelector(\r\n\t\t\t\t\t\t\t'.versions__question',\r\n\t\t\t\t\t\t);\r\n\t\t\t\t\tquestion.addEventListener(\r\n\t\t\t\t\t\t'click',\r\n\t\t\t\t\t\t() => {\r\n\t\t\t\t\t\t\tlet content =\r\n\t\t\t\t\t\t\t\titem.querySelector(\r\n\t\t\t\t\t\t\t\t\t'.versions__answear',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tlet isActive =\r\n\t\t\t\t\t\t\t\titem.classList.contains(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tdocument\r\n\t\t\t\t\t\t\t\t.querySelectorAll(\r\n\t\t\t\t\t\t\t\t\t'.versions__block',\r\n\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t.forEach(\r\n\t\t\t\t\t\t\t\t\tblock => {\r\n\t\t\t\t\t\t\t\t\t\tif (\r\n\t\t\t\t\t\t\t\t\t\t\tblock !==\r\n\t\t\t\t\t\t\t\t\t\t\t\titem &&\r\n\t\t\t\t\t\t\t\t\t\t\tblock.classList.contains(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tblock.classList.remove(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\t\t\t\tblock.querySelector(\r\n\t\t\t\t\t\t\t\t\t\t\t\t'.versions__answear',\r\n\t\t\t\t\t\t\t\t\t\t\t).style.maxHeight =\r\n\t\t\t\t\t\t\t\t\t\t\t\tnull;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\tif (\r\n\t\t\t\t\t\t\t\t!isActive\r\n\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\titem.classList.add(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\tcontent.style.maxHeight =\r\n\t\t\t\t\t\t\t\t\tcontent.scrollHeight +\r\n\t\t\t\t\t\t\t\t\t'px';\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\titem.classList.remove(\r\n\t\t\t\t\t\t\t\t\t'active',\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t\tcontent.style.maxHeight =\r\n\t\t\t\t\t\t\t\t\tnull;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t);\r\n\t\t\t\t},\r\n\t\t\t);\r\n\t\t}\r\n\t},\r\n);\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/versions.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_theme/./src/scss/main.scss?");

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