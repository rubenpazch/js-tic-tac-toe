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

/***/ "./node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  width: 100%;\\n}\\n\\n#board {\\n  position: relative;\\n  width: 30%;\\n  margin: 0 auto;\\n  margin: 20vh 0 0 35vw;\\n}\\n\\n.board-img {\\n  width: 100%;\\n}\\n\\n.cell {\\n  width: 30%;\\n  height: 30%;\\n  opacity: 0;\\n}\\n\\n#cell-1 {\\n  position: absolute;\\n  top: 2%;\\n  left: 2%;\\n}\\n\\n#cell-1 img {\\n  width: 100%;\\n}\\n\\n#cell-2 {\\n  position: absolute;\\n  top: 2%;\\n  left: 36%;\\n}\\n\\n#cell-3 {\\n  position: absolute;\\n  top: 2%;\\n  left: 69%;\\n}\\n\\n#cell-4 {\\n  position: absolute;\\n  top: 36%;\\n  left: 2%;\\n}\\n\\n#cell-5 {\\n  position: absolute;\\n  top: 36%;\\n  left: 36%;\\n}\\n\\n#cell-6 {\\n  position: absolute;\\n  top: 36%;\\n  left: 69%;\\n}\\n\\n#cell-7 {\\n  position: absolute;\\n  top: 69%;\\n  left: 2%;\\n}\\n\\n#cell-8 {\\n  position: absolute;\\n  top: 69%;\\n  left: 36%;\\n}\\n\\n#cell-9 {\\n  position: absolute;\\n  top: 69%;\\n  left: 69%;\\n}\\n\\n#win-screen {\\n  text-align: center;\\n  display: none;\\n}\\n\\n.nav-game {\\n  background-color: #b1ecb1;\\n}\\n\\n.w-30 {\\n  width: 30%;\\n}\\n\\n.wrapper-form {\\n  width: 100%;\\n  display: flex;\\n  flex-flow: row;\\n  justify-content: center;\\n  align-items: center;\\n  padding-top: 20vh;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/boardModule.js":
/*!****************************!*\
  !*** ./src/boardModule.js ***!
  \****************************/
/*! exports provided: boardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardModule\", function() { return boardModule; });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/globals.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _displayModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayModule */ \"./src/displayModule.js\");\n\n\n\n\nconst boardModule = (() => {\n  let cells = ['', '', '', '', '', '', '', '', ''];\n  const checkWin = () => {\n    const tempArray = [];\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[0] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[1] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[2]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[3] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[4] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[5]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[6] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[7] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[8]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[0] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[3] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[6]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[1] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[4] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[7]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[2] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[5] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[8]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[0] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[4] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[8]);\n    tempArray.push(_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[6] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[4] && _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === cells[2]);\n    return tempArray.some(x => x === true);\n  };\n\n  const checkDraw = () => {\n    if ((cells.every(x => x !== '')) && !checkWin()) return true;\n    return false;\n  };\n\n  const fillBoardCell = (index) => {\n    if (cells[index - 1] === '') {\n      cells[index - 1] = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn;\n      return index;\n    }\n    return -1;\n  };\n\n  const resetGame = () => {\n    cells = ['', '', '', '', '', '', '', '', ''];\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].cleanCells();\n    _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].continueGame = true;\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].hideElement('win-screen');\n  };\n\n  const newGame = () => {\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].cleanCells();\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].hideElement('board');\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showElement('players');\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].cleanForm();\n    _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].continueGame = true;\n  };\n\n  const startGame = () => {\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showElement('board');\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].initializeBoardButtons();\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showElement('reset-top-button');\n    const namePlayer1 = document.getElementById('PlayerName1');\n    const namePlayer2 = document.getElementById('PlayerName2');\n    const symbol = document.getElementById('inputSymbolGame');\n\n\n    if (namePlayer1.value === '') {\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1 = Object(_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"Player\"])('player-1', 'X');\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2 = Object(_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"Player\"])('player-2', 'O');\n    } else {\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1 = Object(_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"Player\"])(namePlayer1.value);\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2 = Object(_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"Player\"])(namePlayer2.value);\n    }\n\n    if (symbol.value === 1) {\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.symbol = 'X';\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.symbol = 'O';\n    } else {\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.symbol = 'O';\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.symbol = 'X';\n    }\n\n\n    document.getElementById('show-symbol-player-1').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.symbol;\n    document.getElementById('show-symbol-player-2').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.symbol;\n\n    document.getElementById('name-player-1').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.name;\n    document.getElementById('name-player-2').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.name;\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].updateScores();\n\n    _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].hideElement('players');\n  };\n\n  const showMessageWinner = () => {\n    const winMessage = document.getElementById('win-message');\n    if (_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.symbol) {\n      winMessage.innerHTML = `${_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.name} wins this round!`;\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.increaseScore();\n    }\n    if (_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.symbol) {\n      winMessage.innerHTML = `${_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.name} wins this round!`;\n      _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player2.increaseScore();\n    }\n  };\n\n  const takeTurn = (cellId, index) => {\n    if (_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].continueGame) {\n      const cell = document.getElementById(cellId);\n      const turnSuccess = fillBoardCell(index);\n      if (turnSuccess !== -1) {\n        _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].fadeIn(cell);\n        if (checkWin()) {\n          _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showElement('win-screen');\n          showMessageWinner();\n          _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].updateScores();\n          _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].continueGame = false;\n        }\n        if (checkDraw()) {\n          _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showElement('win-screen');\n          _displayModule__WEBPACK_IMPORTED_MODULE_2__[\"displayModule\"].showMessageDraw();\n          _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].continueGame = false;\n        }\n        cell.innerHTML = `<img class='board-img' src='../img/tictactoe${_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn}.svg'>`;\n        if (_globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn === 'X') {\n          _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn = 'O';\n        } else {\n          _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].turn = 'X';\n        }\n      }\n    }\n  };\n\n  return {\n    checkWin, fillBoardCell, checkDraw, resetGame, newGame, startGame, showMessageWinner, takeTurn,\n  };\n})();\n\n//# sourceURL=webpack:///./src/boardModule.js?");

/***/ }),

/***/ "./src/displayModule.js":
/*!******************************!*\
  !*** ./src/displayModule.js ***!
  \******************************/
/*! exports provided: displayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayModule\", function() { return displayModule; });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/globals.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boardModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardModule */ \"./src/boardModule.js\");\n\n\n\nconst displayModule = (() => {\n  const showMessageDraw = () => {\n    const winMessage = document.getElementById('win-message');\n    winMessage.innerHTML = 'It\\'s a draw';\n  };\n\n  const showElement = (elementId) => {\n    const form = document.getElementById(elementId);\n    form.style.display = 'block';\n  };\n\n  const hideElement = (elementId) => {\n    const form = document.getElementById(elementId);\n    form.style.display = 'none';\n  };\n\n\n  const updateScores = () => {\n    document.getElementById('score-player-1').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].player1.getScore();\n    document.getElementById('score-player-2').innerHTML = _globals__WEBPACK_IMPORTED_MODULE_0__[\"globals\"].globals.player2.getScore();\n  };\n\n  const cleanCells = () => {\n    for (let i = 1; i < 10; i += 1) {\n      const cellString = `cell-${i.toString()}`;\n      const cell = document.getElementById(cellString);\n      cell.style.opacity = 0;\n      cell.innerHTML = '';\n    }\n  };\n\n\n  const cleanForm = () => {\n    document.getElementById('PlayerName1').value = '';\n    document.getElementById('PlayerName2').value = '';\n    document.getElementById('name-player-1').innerHTML = '[name]';\n    document.getElementById('name-player-2').innerHTML = '[name]';\n    document.getElementById('score-player-1').innerHTML = '[score]';\n    document.getElementById('score-player-2').innerHTML = '[score]';\n    document.getElementById('show-symbol-player-1').innerHTML = '[symbol]';\n    document.getElementById('show-symbol-player-2').innerHTML = '[symbol]';\n  };\n\n  const addOnClickEvent = (element, action) => {\n    element.onclick = action;\n  };\n\n  const fadeIn = (element) => {\n    let op = 0.1; // initial opacity\n    element.style.display = 'block';\n    const timer = setInterval(() => {\n      if (op >= 1) {\n        clearInterval(timer);\n      }\n      element.style.opacity = op;\n      element.style.filter = `alpha(opacity=${op * 100})`;\n      op += op * 0.1;\n    }, 10);\n  };\n\n  const initializeBoardButtons = () => {\n    for(let i = 0; i < 9; i+=1){\n      document.getElementById(`cell-${i}`).addEventListener(\"click\", function() {\n        _boardModule__WEBPACK_IMPORTED_MODULE_1__[\"boardModule\"].takeTurn(`cell-${i}`, i);\n      });\n    }\n  };\n  \n\n  return {\n    showMessageDraw,\n    showElement,\n    updateScores,\n    cleanCells,\n    hideElement,\n    cleanForm,\n    addOnClickEvent,\n    fadeIn,\n    initializeBoardButtons\n  };\n})();\n\n//# sourceURL=webpack:///./src/displayModule.js?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const globals = (() => {\n  let turn = 'X';\n  let player1;\n  let player2;\n  let continueGame = true;\n})();\n\n//# sourceURL=webpack:///./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ \"./style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _displayModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayModule */ \"./src/displayModule.js\");\n/* harmony import */ var _boardModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardModule */ \"./src/boardModule.js\");\n\n\n\n\n\nwindow.onload = function loadGame() {\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].hideElement('board');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].showElement('players');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].hideElement('reset-top-button');\n\n  const newGameButton = document.getElementById('new-game-button');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].addOnClickEvent(newGameButton, _boardModule__WEBPACK_IMPORTED_MODULE_2__[\"boardModule\"].newGame);\n  const startGameButton = document.getElementById('start-game-button');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].addOnClickEvent(startGameButton, _boardModule__WEBPACK_IMPORTED_MODULE_2__[\"boardModule\"].startGame);\n  const resetGameButton = document.getElementById('reset-top-button');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].addOnClickEvent(resetGameButton, _boardModule__WEBPACK_IMPORTED_MODULE_2__[\"boardModule\"].resetGame);\n  const resetBottomButton = document.getElementById('reset-bottom-button');\n  _displayModule__WEBPACK_IMPORTED_MODULE_1__[\"displayModule\"].addOnClickEvent(resetBottomButton, _boardModule__WEBPACK_IMPORTED_MODULE_2__[\"boardModule\"].resetGame);\n\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nconst Player = (name, symbol) => {\n  let score = 0;\n  const getScore = () => score;\n  const increaseScore = () => {\n    score += 1;\n  };\n  return {\n    name, symbol, increaseScore, getScore,\n  };\n};\n\n//# sourceURL=webpack:///./src/playerFactory.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ })

/******/ });