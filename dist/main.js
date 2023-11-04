/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --appWidth: 300px;
    --offWhite: rgb(243, 243, 243);
    --white: rgb(255, 255, 255);
    --lightGrey: rgb(223, 223, 223);
    --darkGreen: rgb(118, 158, 158);
    --lightGreen: rgb(157, 212, 212);
    --offBlack: rgb(10, 10, 10);
    --darkRed: rgb(220, 76, 76);
    --lightRed: rgb(226, 147, 147);
}

body{
    font-size: 1.5rem;
    font-family: 'Merriweather', serif;
    background-color: var(--lightGrey);
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
}

button{
    font-size: 1rem;
    color: var(--offWhite);
    border-radius:10px;
    background-color:var(--darkGreen);
    height: 2rem;
    border: none;
}
button:hover,
button:focus{
    background-color:var(--lightGreen);
    color: var(--offBlack);
}

.priorityBtn,
.completeBtn
{
    width: 2rem;
}

.priorityBtn,
.completeBtn{
    margin-right: 2px;
}

.deleteBtn{
    margin-left: 2px;
    margin-top: 2rem;
    background-color: var(--darkRed);
}

.deleteBtn:hover{
    background-color: var(--lightRed);
}

.itemDate{
    font-size: 0.75rem;
    flex-grow: 0;
    flex-wrap: nowrap;
    margin-right: 1rem;
}

.itemContainer{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

.domItem{
    flex-wrap: wrap;
    margin-left: .5rem;
}

* > #details{
    font-size: 1rem;
}

.detailDesc,
.detailDate,
.detailTitle{
    white-space: pre;
    /* margin-bottom: 1rem; */
    text-wrap: balance;
}

.boldLabel{
    font-weight: 900;
}

#details > button{
    margin-bottom: 1rem;
}

p {
    margin: 0;
    align-self: center;
    flex-grow: 1;
    user-select: none;
}

p:hover{
    cursor: pointer;
}

.itemBox:hover{
    background-color: var(--white);
}

#totalContainer{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    width: 70vw;
}

#mainContainer{
    display: flex;
    flex-direction: column;
    align-items: left;
}

#itemAndDetails{
    display: flex;
    justify-content: space-between;

    /* border: 1px solid black; */
}

#items{
    flex: auto;
    /* flex-grow: 3; */
    align-items: stretch;
    min-width: 25vw;
}

#detailsContainer{
    flex: 3;
}

#listDisplay > *{
    margin-right: 2px;
}

#buttonContainer{
    display: flex;
    flex-direction: column;
}

* > #buttonContainer{
    width: var(--appWidth);
}

.itemBox{
    background-color: var(--offWhite);
    display: flex;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 2px;
    margin-top: 4px;
}

.deleteBtn{
    justify-content: flex-end;
}

#detailsContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 2rem;

}

#details{
    display: flex;
    flex-direction: column;
    min-width: 25vw;
}

.itemFrontBtn{
    display: flex;
    align-items: stretch;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,2BAA2B;IAC3B,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,2BAA2B;IAC3B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,kCAAkC;IAClC,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;IAGI,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap');\n\n:root{\n    --appWidth: 300px;\n    --offWhite: rgb(243, 243, 243);\n    --white: rgb(255, 255, 255);\n    --lightGrey: rgb(223, 223, 223);\n    --darkGreen: rgb(118, 158, 158);\n    --lightGreen: rgb(157, 212, 212);\n    --offBlack: rgb(10, 10, 10);\n    --darkRed: rgb(220, 76, 76);\n    --lightRed: rgb(226, 147, 147);\n}\n\nbody{\n    font-size: 1.5rem;\n    font-family: 'Merriweather', serif;\n    background-color: var(--lightGrey);\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: center;\n}\n\nbutton{\n    font-size: 1rem;\n    color: var(--offWhite);\n    border-radius:10px;\n    background-color:var(--darkGreen);\n    height: 2rem;\n    border: none;\n}\nbutton:hover,\nbutton:focus{\n    background-color:var(--lightGreen);\n    color: var(--offBlack);\n}\n\n.priorityBtn,\n.completeBtn\n{\n    width: 2rem;\n}\n\n.priorityBtn,\n.completeBtn{\n    margin-right: 2px;\n}\n\n.deleteBtn{\n    margin-left: 2px;\n    margin-top: 2rem;\n    background-color: var(--darkRed);\n}\n\n.deleteBtn:hover{\n    background-color: var(--lightRed);\n}\n\n.itemDate{\n    font-size: 0.75rem;\n    flex-grow: 0;\n    flex-wrap: nowrap;\n    margin-right: 1rem;\n}\n\n.itemContainer{\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n}\n\n.domItem{\n    flex-wrap: wrap;\n    margin-left: .5rem;\n}\n\n* > #details{\n    font-size: 1rem;\n}\n\n.detailDesc,\n.detailDate,\n.detailTitle{\n    white-space: pre;\n    /* margin-bottom: 1rem; */\n    text-wrap: balance;\n}\n\n.boldLabel{\n    font-weight: 900;\n}\n\n#details > button{\n    margin-bottom: 1rem;\n}\n\np {\n    margin: 0;\n    align-self: center;\n    flex-grow: 1;\n    user-select: none;\n}\n\np:hover{\n    cursor: pointer;\n}\n\n.itemBox:hover{\n    background-color: var(--white);\n}\n\n#totalContainer{\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    width: 70vw;\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n}\n\n#itemAndDetails{\n    display: flex;\n    justify-content: space-between;\n\n    /* border: 1px solid black; */\n}\n\n#items{\n    flex: auto;\n    /* flex-grow: 3; */\n    align-items: stretch;\n    min-width: 25vw;\n}\n\n#detailsContainer{\n    flex: 3;\n}\n\n#listDisplay > *{\n    margin-right: 2px;\n}\n\n#buttonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n* > #buttonContainer{\n    width: var(--appWidth);\n}\n\n.itemBox{\n    background-color: var(--offWhite);\n    display: flex;\n    justify-content: flex-start;\n    border-radius: 10px;\n    padding: 2px;\n    margin-top: 4px;\n}\n\n.deleteBtn{\n    justify-content: flex-end;\n}\n\n#detailsContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    padding-left: 2rem;\n\n}\n\n#details{\n    display: flex;\n    flex-direction: column;\n    min-width: 25vw;\n}\n\n.itemFrontBtn{\n    display: flex;\n    align-items: stretch;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkListName: () => (/* binding */ checkListName),
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   filterByList: () => (/* binding */ filterByList),
/* harmony export */   toggleDetail: () => (/* binding */ toggleDetail)
/* harmony export */ });
//methods needed: order setting
function createList(_name, _order){
    let name = _name;
    let order = _order;

    return{
        name,
        order
    };
}

function createItem(_title, _list){
    //add form later in UI which will populate these
    let title = _title;
    let list = _list;
    let dueDate = 'N/A';
    let description = 'N/A';

    let complete = false;
    let priority = false;
    let detail = false;

    const toggleComplete = () => {
        if (complete === true){
            complete = false;
        }else{
            complete = true;
        }
    }

    const getComplete = () => {
        return complete;
    }

    const togglePriority = () => {
        if (priority === true) {
            priority = false;
        }else{
            priority = true;
        }
    };

    const getPriority = () => {
        return priority;
    }

    let storageItemString = '::TITLE::' + title + '::LIST::' + list + '::DUEDATE::' + dueDate + '::DESCRIPTION::' + description
    + "::COMPLETE::" + complete + '::PRIORITY::' + priority;

    return{
        title,
        list,
        dueDate,
        description,
        detail,
        storageItemString,

        toggleComplete,
        getComplete,
        togglePriority,
        getPriority
    };
}

//returns true if name is unique, false if name taken
function checkListName(listName, listArray){
    let nameUnique = (listArray.filter((list) => {return list.name === listName})).length;
    if (nameUnique === 0){
        return true;
    }else{
        return false;
    }
}

function filterByList(itemArray, listName){
    const result = itemArray.filter((item) => {return item.list === listName});
    return result;
}

function toggleDetail(item){
    if (item.detail === true){
        item.detail = false;
    }else{
        item.detail = true;
    }
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDefaultList: () => (/* binding */ initDefaultList),
/* harmony export */   initListSelectBtn: () => (/* binding */ initListSelectBtn),
/* harmony export */   initNewItemBtn: () => (/* binding */ initNewItemBtn),
/* harmony export */   initNewListBtn: () => (/* binding */ initNewListBtn),
/* harmony export */   renderItems: () => (/* binding */ renderItems)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");


//init

function initDefaultList(listArray, itemArray){
    listArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createList)('default', listArray.length + 1));
    initListSelectBtn('default', itemArray);
}

function initNewListBtn(listArray, itemArray, storageListCounter){
    //creating button in DOM
    const initNewListBtn = document.createElement('button');
    initNewListBtn.textContent = 'NEW LIST';
    
    initNewListBtn.addEventListener('click', () => {
        let listName = prompt('List Name: ', 'untitled');
        if (listName === null){
            return;
        }
        
        //checking if name exists already
        if ((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.checkListName)(listName, listArray)){
            //list added to array
            listArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createList)(listName, listArray.length + 1));
            //generate list selector button
            initListSelectBtn(listName, itemArray);
            //just clear items, as new list has no renderable items
            clearItems(itemArray);
            renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName), listName);


            //set up storage
            storageListCounter += 1;
            localStorage.setItem('listCounter', storageListCounter);
            // console.log(storageListCounter);

            localStorage.setItem(`listArray${storageListCounter}`, listName);
            // console.log(localStorage.getItem(`itemArray${storageListCounter}`));

        }else{
            console.log('list name already taken');
        }
    });
    document.getElementById('newListBtn').appendChild(initNewListBtn);
}

//this needs to be re-rendered each time list view is loaded
function initNewItemBtn(itemArray, listName){
    const initNewItemBtn = document.createElement('button');
    initNewItemBtn.textContent = `+ ${listName} Item`;

    initNewItemBtn.addEventListener('click', () => {
        let itemName = prompt('Item title: ');
        if (itemName === null){
            return;
        }
        itemArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createItem)(itemName, listName));
        // localStorage.setItem();
        console.log(itemArray[0].storageItemString);

        clearItems(itemArray);
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName), listName);
    });

    document.getElementById('newItemBtn').appendChild(initNewItemBtn);
}

//creates new list selector button
function initListSelectBtn(listName, itemArray, listArray){
    //initialize list select button
    const listSelectBtn = document.createElement('button');
    listSelectBtn.textContent = listName;
    
    listSelectBtn.addEventListener('click', () => {
        clearItems(itemArray);
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName),listName);
        clearNewItemBtn()
        initNewItemBtn(itemArray, listName);
    });

    document.getElementById('listDisplay').appendChild(listSelectBtn);
    clearNewItemBtn()
    initNewItemBtn(itemArray, listName);
}


function renderItems(itemArray, listName){
    itemArray.forEach(item => {
        //create Div for each item:
        let itemDiv = document.createElement('div');
        itemDiv.setAttribute('id', listName + itemArray.indexOf(item));
        itemDiv.setAttribute('class', 'itemBox');
        document.getElementById('items').appendChild(itemDiv);

        let itemFrontBtn = document.createElement('div');
        itemFrontBtn.setAttribute('class', 'itemFrontBtn');
        document.getElementById(listName+itemArray.indexOf(item)).prepend(itemFrontBtn);


        //generate item display
        let domItem = displayItem(item, itemArray, listName);

        //generate priority toggle button (order based on prepend)
        priorityItem(item, domItem, itemArray, listName);

        //generate completing item button
        completeItem(item, domItem, itemArray, listName);

        // let itemBackBtn = document.createElement('div');
        // itemBackBtn.setAttribute('class', 'itemBackBtn');
        // document.getElementById(listName+itemArray.indexOf(item)).appendChild(itemBackBtn);

        //generate details button (really just P element)
        detailItem(item, itemArray, listName);

        //generate delete button
        // deleteItem(item, itemDiv, itemArray, listName);
    });
}

function clearItems(itemArray){
    const listDisplay = document.getElementById('items');
    while (listDisplay.firstElementChild) {
        listDisplay.removeChild(listDisplay.firstElementChild);
    }

    clearDetails(itemArray);
}

function clearDetails(itemArray, itemToSkip){
    itemArray.forEach(itemClear => {
        itemClear.detail = false;
    })
    
    const detailsDisplay = document.getElementById('details');
    while(detailsDisplay.firstElementChild){
        detailsDisplay.removeChild(detailsDisplay.firstElementChild);
    }
}

function clearNewItemBtn(){
    const newItemBtn = document.getElementById('newItemBtn');
    if(newItemBtn.firstElementChild){
        newItemBtn.removeChild(newItemBtn.firstElementChild);
    }
}

function completeItem(item, domItem, itemArray, listName){
    let completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'completeBtn');
    completeBtn.textContent = '✓';
    
    completeBtn.addEventListener('click', () => {
        item.toggleComplete();

        if (item.getComplete() === true){
            domItem.style.setProperty('text-decoration', 'line-through');
        }else{
            domItem.style.setProperty('text-decoration', 'none');
        };
    });

    // document.getElementById(listName+itemArray.indexOf(item)).prepend(completeBtn);
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemFrontBtn').prepend(completeBtn);
}

function displayItem(item, itemArray, listName){
    let itemContainer = document.createElement('div');
    itemContainer.setAttribute('id', listName+itemArray.indexOf(item)+'Container');
    itemContainer.setAttribute('class', 'itemContainer');
    
    let domItem = document.createElement('p');
    domItem.setAttribute('class', `${listName} domItem` );
    domItem.textContent = item.title;

    let dateItem = document.createElement('p');
    dateItem.setAttribute('class', 'itemDate');
    dateItem.textContent = 'Due ' + item.dueDate;

    //make complete and priority item styling persistent
    if (item.getComplete() === true){
        domItem.style.setProperty('text-decoration', 'line-through');
    }
    if (item.getPriority() === true){
        domItem.style.color = 'red';
    }

    document.getElementById(listName+itemArray.indexOf(item)).appendChild(itemContainer);
    document.getElementById(listName+itemArray.indexOf(item)+'Container').appendChild(domItem);
    
    if (item.dueDate === 'N/A'){
    }else{
        document.getElementById(listName+itemArray.indexOf(item)+'Container').appendChild(dateItem);
    }

    return domItem;
}

function priorityItem(item, domItem, itemArray, listName){
    let priorityBtn = document.createElement('button');
    priorityBtn.setAttribute('class', 'priorityBtn');
    priorityBtn.textContent = '!';
    // document.getElementById(listName+itemArray.indexOf(item)).prepend(priorityBtn);
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemFrontBtn').prepend(priorityBtn);
    
    priorityBtn.addEventListener('click', () => {
        item.togglePriority();
        if (item.getPriority() === true){
            domItem.style.color = 'red';
        }else{
            domItem.style.color = 'black';
        };
    });
}

function detailItem(item, itemArray, listName){
    let detailBtn = document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemContainer');
    let detailToggleHolder;
    
    detailBtn.addEventListener('click', function(){
        
        detailToggleHolder = item.detail;
        clearDetails(itemArray);
        item.detail = detailToggleHolder;
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);
        
    });
}

function displayDetail(item, itemArray, listName){
    let details = document.getElementById('details');

    let title = document.createElement('span');
    let date = document.createElement('span');
    let desc = document.createElement('span');
    title.setAttribute('class', 'boldLabel');
    date.setAttribute('class', 'boldLabel');
    desc.setAttribute('class', 'boldLabel');

    title.textContent = 'TITLE:\r\n';
    date.textContent = 'DUE:\r\n';
    desc.textContent = 'DESCRIPTION:\r\n';

    let showTitle = document.createElement('span');
    let showDate = document.createElement('span');
    let showDesc = document.createElement('span');

    let itemDiv = document.getElementById(listName + itemArray.indexOf(item));

    showTitle.textContent = item.title;
    showDate.textContent = item.dueDate;
    showDesc.textContent = item.description;

    showTitle.setAttribute('class', 'detailTitle');
    showDate.setAttribute('class', 'detailDate');
    showDesc.setAttribute('class', 'detailDesc');

    if (item.detail === false){
        details.appendChild(title);
        details.appendChild(showTitle);
        editTitle(item, itemArray, listName, details);
    
        details.appendChild(date);
        details.appendChild(showDate);
        editDate(item, itemArray, listName, details);
        
        details.appendChild(desc);
        details.appendChild(showDesc);
        editDesc(item, itemArray, listName, details);

        deleteItem(item, itemDiv, itemArray, listName)
    }
}

function deleteItem(item, itemDiv, itemArray, listName){
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.textContent = 'Delete Item';

    deleteBtn.addEventListener('click', function() {
        item.list = 'delete';
        document.getElementById('items').removeChild(itemDiv);
        clearDetails(itemArray);
    });

    details.appendChild(deleteBtn);
}

//details edit functions:
function editTitle(item, itemArray, listName, details){
    const editTitleBtn = document.createElement('button');
    editTitleBtn.textContent = 'Edit Title';
    editTitleBtn.addEventListener('click', function(){
        let titleHolder = item.title;
        item.title = prompt('Title: ');
        if (item.title === null){
            item.title = titleHolder;
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);
    });
    details.appendChild(editTitleBtn);
}

function editDate(item, itemArray, listName, details){
    let editDateBtn = document.createElement('button');
    editDateBtn.textContent = 'Change Due Date';

    editDateBtn.addEventListener('click', function(){
        let dateHolder = item.dueDate;
        item.dueDate = prompt('Due Date: ');
        if (item.dueDate === null){
            item.dueDate = dateHolder;
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);      
    })
    details.appendChild(editDateBtn);
}

function editDesc(item, itemArray, listName, details){
    let editDescBtn = document.createElement('button');
    editDescBtn.textContent = 'Edit Description';
    
    editDescBtn.addEventListener('click', function(){
        let descHolder = item.description;
        item.description = prompt('Edit Description: ');
        if (item.description === null){
            item.description = descHolder;
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);
    });
    details.appendChild(editDescBtn);
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _appLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic.js */ "./src/appLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const listArray = [];
const itemArray = [];

let storageListCounter = 0;
let storageListNameHolder;
// localStorage.clear();

//new or load storageListCounter
if (!localStorage.getItem('listCounter')){
    storageListCounter = 0;
}else{
    storageListCounter = Number(localStorage.getItem('listCounter'));
}
console.log(storageListCounter);





(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewListBtn)(listArray, itemArray, storageListCounter);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initDefaultList)(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.createList)(storageListNameHolder, i));
        console.log(localStorage.getItem(`listArray${i}`));
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initListSelectBtn)(storageListNameHolder, itemArray);
    }
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztVQ3hWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNkU7QUFDbkM7QUFDckI7OztBQUdyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7QUFNQSxzREFBYztBQUNkLHVEQUFlOztBQUVmO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDLGlFQUFpRSxFQUFFO0FBQ25FLHVCQUF1Qix3REFBVTtBQUNqQyxxREFBcUQsRUFBRTtBQUN2RCxRQUFRLHlEQUFpQjtBQUN6QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1hcHBXaWR0aDogMzAwcHg7XG4gICAgLS1vZmZXaGl0ZTogcmdiKDI0MywgMjQzLCAyNDMpO1xuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAtLWxpZ2h0R3JleTogcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgIC0tZGFya0dyZWVuOiByZ2IoMTE4LCAxNTgsIDE1OCk7XG4gICAgLS1saWdodEdyZWVuOiByZ2IoMTU3LCAyMTIsIDIxMik7XG4gICAgLS1vZmZCbGFjazogcmdiKDEwLCAxMCwgMTApO1xuICAgIC0tZGFya1JlZDogcmdiKDIyMCwgNzYsIDc2KTtcbiAgICAtLWxpZ2h0UmVkOiByZ2IoMjI2LCAxNDcsIDE0Nyk7XG59XG5cbmJvZHl7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmtHcmVlbik7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0R3JlZW4pO1xuICAgIGNvbG9yOiB2YXIoLS1vZmZCbGFjayk7XG59XG5cbi5wcmlvcml0eUJ0bixcbi5jb21wbGV0ZUJ0blxue1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4ucHJpb3JpdHlCdG4sXG4uY29tcGxldGVCdG57XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5kZWxldGVCdG57XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtSZWQpO1xufVxuXG4uZGVsZXRlQnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuLml0ZW1EYXRle1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaXRlbUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5kb21JdGVte1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbiogPiAjZGV0YWlsc3tcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kZXRhaWxEZXNjLFxuLmRldGFpbERhdGUsXG4uZGV0YWlsVGl0bGV7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcbn1cblxuLmJvbGRMYWJlbHtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jZGV0YWlscyA+IGJ1dHRvbntcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxucDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtQm94OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuI3RvdGFsQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICB3aWR0aDogNzB2dztcbn1cblxuI21haW5Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jaXRlbUFuZERldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuI2l0ZW1ze1xuICAgIGZsZXg6IGF1dG87XG4gICAgLyogZmxleC1ncm93OiAzOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1pbi13aWR0aDogMjV2dztcbn1cblxuI2RldGFpbHNDb250YWluZXJ7XG4gICAgZmxleDogMztcbn1cblxuI2xpc3REaXNwbGF5ID4gKntcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuI2J1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiogPiAjYnV0dG9uQ29udGFpbmVye1xuICAgIHdpZHRoOiB2YXIoLS1hcHBXaWR0aCk7XG59XG5cbi5pdGVtQm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5kZWxldGVCdG57XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuI2RldGFpbHNDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG5cbn1cblxuI2RldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMjV2dztcbn1cblxuLml0ZW1Gcm9udEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYXBwV2lkdGg6IDMwMHB4O1xcbiAgICAtLW9mZldoaXRlOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1saWdodEdyZXk6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gICAgLS1kYXJrR3JlZW46IHJnYigxMTgsIDE1OCwgMTU4KTtcXG4gICAgLS1saWdodEdyZWVuOiByZ2IoMTU3LCAyMTIsIDIxMik7XFxuICAgIC0tb2ZmQmxhY2s6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAgLS1kYXJrUmVkOiByZ2IoMjIwLCA3NiwgNzYpO1xcbiAgICAtLWxpZ2h0UmVkOiByZ2IoMjI2LCAxNDcsIDE0Nyk7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JlZW4pO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodEdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLW9mZkJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5QnRuLFxcbi5jb21wbGV0ZUJ0blxcbntcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bixcXG4uY29tcGxldGVCdG57XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG5cXG4uZGVsZXRlQnRue1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUmVkKTtcXG59XFxuXFxuLmRlbGV0ZUJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRSZWQpO1xcbn1cXG5cXG4uaXRlbURhdGV7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uaXRlbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5kb21JdGVte1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuKiA+ICNkZXRhaWxze1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kZXRhaWxEZXNjLFxcbi5kZXRhaWxEYXRlLFxcbi5kZXRhaWxUaXRsZXtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cXG4gICAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG4uYm9sZExhYmVse1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jZGV0YWlscyA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5wOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtQm94OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbiN0b3RhbENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxufVxcblxcbiNpdGVtQW5kRGV0YWlsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuI2l0ZW1ze1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICAvKiBmbGV4LWdyb3c6IDM7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxufVxcblxcbiNkZXRhaWxzQ29udGFpbmVye1xcbiAgICBmbGV4OiAzO1xcbn1cXG5cXG4jbGlzdERpc3BsYXkgPiAqe1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuI2J1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuKiA+ICNidXR0b25Db250YWluZXJ7XFxuICAgIHdpZHRoOiB2YXIoLS1hcHBXaWR0aCk7XFxufVxcblxcbi5pdGVtQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi5kZWxldGVCdG57XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNkZXRhaWxzQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXG59XFxuXFxuI2RldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMjV2dztcXG59XFxuXFxuLml0ZW1Gcm9udEJ0bntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL21ldGhvZHMgbmVlZGVkOiBvcmRlciBzZXR0aW5nXG5mdW5jdGlvbiBjcmVhdGVMaXN0KF9uYW1lLCBfb3JkZXIpe1xuICAgIGxldCBuYW1lID0gX25hbWU7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBvcmRlclxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oX3RpdGxlLCBfbGlzdCl7XG4gICAgLy9hZGQgZm9ybSBsYXRlciBpbiBVSSB3aGljaCB3aWxsIHBvcHVsYXRlIHRoZXNlXG4gICAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICAgIGxldCBsaXN0ID0gX2xpc3Q7XG4gICAgbGV0IGR1ZURhdGUgPSAnTi9BJztcbiAgICBsZXQgZGVzY3JpcHRpb24gPSAnTi9BJztcblxuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIGxldCBwcmlvcml0eSA9IGZhbHNlO1xuICAgIGxldCBkZXRhaWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcHJpb3JpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgbGV0IHN0b3JhZ2VJdGVtU3RyaW5nID0gJzo6VElUTEU6OicgKyB0aXRsZSArICc6OkxJU1Q6OicgKyBsaXN0ICsgJzo6RFVFREFURTo6JyArIGR1ZURhdGUgKyAnOjpERVNDUklQVElPTjo6JyArIGRlc2NyaXB0aW9uXG4gICAgKyBcIjo6Q09NUExFVEU6OlwiICsgY29tcGxldGUgKyAnOjpQUklPUklUWTo6JyArIHByaW9yaXR5O1xuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRldGFpbCxcbiAgICAgICAgc3RvcmFnZUl0ZW1TdHJpbmcsXG5cbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgICAgIGdldENvbXBsZXRlLFxuICAgICAgICB0b2dnbGVQcmlvcml0eSxcbiAgICAgICAgZ2V0UHJpb3JpdHlcbiAgICB9O1xufVxuXG4vL3JldHVybnMgdHJ1ZSBpZiBuYW1lIGlzIHVuaXF1ZSwgZmFsc2UgaWYgbmFtZSB0YWtlblxuZnVuY3Rpb24gY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KXtcbiAgICBsZXQgbmFtZVVuaXF1ZSA9IChsaXN0QXJyYXkuZmlsdGVyKChsaXN0KSA9PiB7cmV0dXJuIGxpc3QubmFtZSA9PT0gbGlzdE5hbWV9KSkubGVuZ3RoO1xuICAgIGlmIChuYW1lVW5pcXVlID09PSAwKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCByZXN1bHQgPSBpdGVtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7cmV0dXJuIGl0ZW0ubGlzdCA9PT0gbGlzdE5hbWV9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZXRhaWwoaXRlbSl7XG4gICAgaWYgKGl0ZW0uZGV0YWlsID09PSB0cnVlKXtcbiAgICAgICAgaXRlbS5kZXRhaWwgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaXRlbS5kZXRhaWwgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCwgdG9nZ2xlRGV0YWlsIH07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCwgY3JlYXRlSXRlbSwgY2hlY2tMaXN0TmFtZSwgZmlsdGVyQnlMaXN0LCB0b2dnbGVEZXRhaWwgfSBmcm9tIFwiLi9hcHBMb2dpY1wiO1xuXG4vL2luaXRcblxuZnVuY3Rpb24gaW5pdERlZmF1bHRMaXN0KGxpc3RBcnJheSwgaXRlbUFycmF5KXtcbiAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KCdkZWZhdWx0JywgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbiAgICBpbml0TGlzdFNlbGVjdEJ0bignZGVmYXVsdCcsIGl0ZW1BcnJheSk7XG59XG5cbmZ1bmN0aW9uIGluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5LCBzdG9yYWdlTGlzdENvdW50ZXIpe1xuICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIERPTVxuICAgIGNvbnN0IGluaXROZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0xpc3RCdG4udGV4dENvbnRlbnQgPSAnTkVXIExJU1QnO1xuICAgIFxuICAgIGluaXROZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoJ0xpc3QgTmFtZTogJywgJ3VudGl0bGVkJyk7XG4gICAgICAgIGlmIChsaXN0TmFtZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY2hlY2tpbmcgaWYgbmFtZSBleGlzdHMgYWxyZWFkeVxuICAgICAgICBpZiAoY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KSl7XG4gICAgICAgICAgICAvL2xpc3QgYWRkZWQgdG8gYXJyYXlcbiAgICAgICAgICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QobGlzdE5hbWUsIGxpc3RBcnJheS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIGxpc3Qgc2VsZWN0b3IgYnV0dG9uXG4gICAgICAgICAgICBpbml0TGlzdFNlbGVjdEJ0bihsaXN0TmFtZSwgaXRlbUFycmF5KTtcbiAgICAgICAgICAgIC8vanVzdCBjbGVhciBpdGVtcywgYXMgbmV3IGxpc3QgaGFzIG5vIHJlbmRlcmFibGUgaXRlbXNcbiAgICAgICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuXG5cbiAgICAgICAgICAgIC8vc2V0IHVwIHN0b3JhZ2VcbiAgICAgICAgICAgIHN0b3JhZ2VMaXN0Q291bnRlciArPSAxO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RDb3VudGVyJywgc3RvcmFnZUxpc3RDb3VudGVyKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VMaXN0Q291bnRlcik7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsaXN0QXJyYXkke3N0b3JhZ2VMaXN0Q291bnRlcn1gLCBsaXN0TmFtZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbUFycmF5JHtzdG9yYWdlTGlzdENvdW50ZXJ9YCkpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgbmFtZSBhbHJlYWR5IHRha2VuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdEJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdMaXN0QnRuKTtcbn1cblxuLy90aGlzIG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGVhY2ggdGltZSBsaXN0IHZpZXcgaXMgbG9hZGVkXG5mdW5jdGlvbiBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBpbml0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdJdGVtQnRuLnRleHRDb250ZW50ID0gYCsgJHtsaXN0TmFtZX0gSXRlbWA7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcbiAgICAgICAgaWYgKGl0ZW1OYW1lID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSkpO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXlbMF0uc3RvcmFnZUl0ZW1TdHJpbmcpO1xuXG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLCBsaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdJdGVtQnRuKTtcbn1cblxuLy9jcmVhdGVzIG5ldyBsaXN0IHNlbGVjdG9yIGJ1dHRvblxuZnVuY3Rpb24gaW5pdExpc3RTZWxlY3RCdG4obGlzdE5hbWUsIGl0ZW1BcnJheSwgbGlzdEFycmF5KXtcbiAgICAvL2luaXRpYWxpemUgbGlzdCBzZWxlY3QgYnV0dG9uXG4gICAgY29uc3QgbGlzdFNlbGVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxpc3RTZWxlY3RCdG4udGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgICBcbiAgICBsaXN0U2VsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSxsaXN0TmFtZSk7XG4gICAgICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgICAgIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REaXNwbGF5JykuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdEJ0bik7XG4gICAgY2xlYXJOZXdJdGVtQnRuKClcbiAgICBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKTtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBpdGVtQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgLy9jcmVhdGUgRGl2IGZvciBlYWNoIGl0ZW06XG4gICAgICAgIGxldCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGxpc3ROYW1lICsgaXRlbUFycmF5LmluZGV4T2YoaXRlbSkpO1xuICAgICAgICBpdGVtRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbUJveCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICAgICAgICBsZXQgaXRlbUZyb250QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Gcm9udEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Gcm9udEJ0bicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChpdGVtRnJvbnRCdG4pO1xuXG5cbiAgICAgICAgLy9nZW5lcmF0ZSBpdGVtIGRpc3BsYXlcbiAgICAgICAgbGV0IGRvbUl0ZW0gPSBkaXNwbGF5SXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvL2dlbmVyYXRlIHByaW9yaXR5IHRvZ2dsZSBidXR0b24gKG9yZGVyIGJhc2VkIG9uIHByZXBlbmQpXG4gICAgICAgIHByaW9yaXR5SXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvL2dlbmVyYXRlIGNvbXBsZXRpbmcgaXRlbSBidXR0b25cbiAgICAgICAgY29tcGxldGVJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIC8vIGxldCBpdGVtQmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBpdGVtQmFja0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1CYWNrQnRuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5hcHBlbmRDaGlsZChpdGVtQmFja0J0bik7XG5cbiAgICAgICAgLy9nZW5lcmF0ZSBkZXRhaWxzIGJ1dHRvbiAocmVhbGx5IGp1c3QgUCBlbGVtZW50KVxuICAgICAgICBkZXRhaWxJdGVtKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICAvLyBkZWxldGVJdGVtKGl0ZW0sIGl0ZW1EaXYsIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckl0ZW1zKGl0ZW1BcnJheSl7XG4gICAgY29uc3QgbGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICB3aGlsZSAobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbGlzdERpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRldGFpbHMoaXRlbUFycmF5LCBpdGVtVG9Ta2lwKXtcbiAgICBpdGVtQXJyYXkuZm9yRWFjaChpdGVtQ2xlYXIgPT4ge1xuICAgICAgICBpdGVtQ2xlYXIuZGV0YWlsID0gZmFsc2U7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBkZXRhaWxzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XG4gICAgd2hpbGUoZGV0YWlsc0Rpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgICBkZXRhaWxzRGlzcGxheS5yZW1vdmVDaGlsZChkZXRhaWxzRGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck5ld0l0ZW1CdG4oKXtcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKTtcbiAgICBpZihuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgbmV3SXRlbUJ0bi5yZW1vdmVDaGlsZChuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlQnRuJyk7XG4gICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICBcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS50b2dnbGVDb21wbGV0ZSgpO1xuXG4gICAgICAgIGlmIChpdGVtLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgZG9tSXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRvbUl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChjb21wbGV0ZUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRnJvbnRCdG4nKS5wcmVwZW5kKGNvbXBsZXRlQnRuKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSsnQ29udGFpbmVyJyk7XG4gICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Db250YWluZXInKTtcbiAgICBcbiAgICBsZXQgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkb21JdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtsaXN0TmFtZX0gZG9tSXRlbWAgKTtcbiAgICBkb21JdGVtLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblxuICAgIGxldCBkYXRlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1EYXRlJyk7XG4gICAgZGF0ZUl0ZW0udGV4dENvbnRlbnQgPSAnRHVlICcgKyBpdGVtLmR1ZURhdGU7XG5cbiAgICAvL21ha2UgY29tcGxldGUgYW5kIHByaW9yaXR5IGl0ZW0gc3R5bGluZyBwZXJzaXN0ZW50XG4gICAgaWYgKGl0ZW0uZ2V0Q29tcGxldGUoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uZ2V0UHJpb3JpdHkoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbUl0ZW0pO1xuICAgIFxuICAgIGlmIChpdGVtLmR1ZURhdGUgPT09ICdOL0EnKXtcbiAgICB9ZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRhdGVJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tSXRlbTtcbn1cblxuZnVuY3Rpb24gcHJpb3JpdHlJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlCdG4nKTtcbiAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9ICchJztcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChwcmlvcml0eUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRnJvbnRCdG4nKS5wcmVwZW5kKHByaW9yaXR5QnRuKTtcbiAgICBcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS50b2dnbGVQcmlvcml0eSgpO1xuICAgICAgICBpZiAoaXRlbS5nZXRQcmlvcml0eSgpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsSXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGV0YWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQ29udGFpbmVyJyk7XG4gICAgbGV0IGRldGFpbFRvZ2dsZUhvbGRlcjtcbiAgICBcbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgZGV0YWlsVG9nZ2xlSG9sZGVyID0gaXRlbS5kZXRhaWw7XG4gICAgICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xuICAgICAgICBpdGVtLmRldGFpbCA9IGRldGFpbFRvZ2dsZUhvbGRlcjtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2xkTGFiZWwnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9sZExhYmVsJyk7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvbGRMYWJlbCcpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVElUTEU6XFxyXFxuJztcbiAgICBkYXRlLnRleHRDb250ZW50ID0gJ0RVRTpcXHJcXG4nO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSAnREVTQ1JJUFRJT046XFxyXFxuJztcblxuICAgIGxldCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IHNob3dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBzaG93RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGxldCBpdGVtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUgKyBpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSk7XG5cbiAgICBzaG93VGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIHNob3dEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICAgIHNob3dEZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIHNob3dUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbFRpdGxlJyk7XG4gICAgc2hvd0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxEYXRlJyk7XG4gICAgc2hvd0Rlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxEZXNjJyk7XG5cbiAgICBpZiAoaXRlbS5kZXRhaWwgPT09IGZhbHNlKXtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoc2hvd1RpdGxlKTtcbiAgICAgICAgZWRpdFRpdGxlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuICAgIFxuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dEYXRlKTtcbiAgICAgICAgZWRpdERhdGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyk7XG4gICAgICAgIFxuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dEZXNjKTtcbiAgICAgICAgZWRpdERlc2MoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyk7XG5cbiAgICAgICAgZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVCdG4nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIEl0ZW0nO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0ZW0ubGlzdCA9ICdkZWxldGUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5yZW1vdmVDaGlsZChpdGVtRGl2KTtcbiAgICAgICAgY2xlYXJEZXRhaWxzKGl0ZW1BcnJheSk7XG4gICAgfSk7XG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG59XG5cbi8vZGV0YWlscyBlZGl0IGZ1bmN0aW9uczpcbmZ1bmN0aW9uIGVkaXRUaXRsZShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKXtcbiAgICBjb25zdCBlZGl0VGl0bGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0VGl0bGVCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBUaXRsZSc7XG4gICAgZWRpdFRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHRpdGxlSG9sZGVyID0gaXRlbS50aXRsZTtcbiAgICAgICAgaXRlbS50aXRsZSA9IHByb21wdCgnVGl0bGU6ICcpO1xuICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBpdGVtLnRpdGxlID0gdGl0bGVIb2xkZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuICAgIH0pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlQnRuKTtcbn1cblxuZnVuY3Rpb24gZWRpdERhdGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyl7XG4gICAgbGV0IGVkaXREYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdERhdGVCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIER1ZSBEYXRlJztcblxuICAgIGVkaXREYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGRhdGVIb2xkZXIgPSBpdGVtLmR1ZURhdGU7XG4gICAgICAgIGl0ZW0uZHVlRGF0ZSA9IHByb21wdCgnRHVlIERhdGU6ICcpO1xuICAgICAgICBpZiAoaXRlbS5kdWVEYXRlID09PSBudWxsKXtcbiAgICAgICAgICAgIGl0ZW0uZHVlRGF0ZSA9IGRhdGVIb2xkZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pOyAgICAgIFxuICAgIH0pXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChlZGl0RGF0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGVkaXREZXNjKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpe1xuICAgIGxldCBlZGl0RGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXREZXNjQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgRGVzY3JpcHRpb24nO1xuICAgIFxuICAgIGVkaXREZXNjQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGRlc2NIb2xkZXIgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gcHJvbXB0KCdFZGl0IERlc2NyaXB0aW9uOiAnKTtcbiAgICAgICAgaWYgKGl0ZW0uZGVzY3JpcHRpb24gPT09IG51bGwpe1xuICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NIb2xkZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuICAgIH0pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdERlc2NCdG4pO1xufVxuXG5cbmV4cG9ydCB7aW5pdExpc3RTZWxlY3RCdG4sIGluaXROZXdMaXN0QnRuLCBpbml0TmV3SXRlbUJ0biwgcmVuZGVySXRlbXMsIGluaXREZWZhdWx0TGlzdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdERlZmF1bHRMaXN0LCBpbml0TmV3TGlzdEJ0biwgaW5pdExpc3RTZWxlY3RCdG4gfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3R9IGZyb20gJy4vYXBwTG9naWMuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgbGlzdEFycmF5ID0gW107XG5jb25zdCBpdGVtQXJyYXkgPSBbXTtcblxubGV0IHN0b3JhZ2VMaXN0Q291bnRlciA9IDA7XG5sZXQgc3RvcmFnZUxpc3ROYW1lSG9sZGVyO1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vbmV3IG9yIGxvYWQgc3RvcmFnZUxpc3RDb3VudGVyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0Q291bnRlcicpKXtcbiAgICBzdG9yYWdlTGlzdENvdW50ZXIgPSAwO1xufWVsc2V7XG4gICAgc3RvcmFnZUxpc3RDb3VudGVyID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0Q291bnRlcicpKTtcbn1cbmNvbnNvbGUubG9nKHN0b3JhZ2VMaXN0Q291bnRlcik7XG5cblxuXG5cblxuaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXksIHN0b3JhZ2VMaXN0Q291bnRlcik7XG5pbml0RGVmYXVsdExpc3QobGlzdEFycmF5LCBpdGVtQXJyYXkpO1xuXG4vL3JlbG9hZCBsaXN0QXJyYXkgZnJvbSBsYXN0IHNlc3Npb25cbmlmIChzdG9yYWdlTGlzdENvdW50ZXIgIT09IDApe1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0b3JhZ2VMaXN0Q291bnRlcjsgaSsrKXtcbiAgICAgICAgc3RvcmFnZUxpc3ROYW1lSG9sZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxpc3RBcnJheSR7aX1gKTtcbiAgICAgICAgbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdChzdG9yYWdlTGlzdE5hbWVIb2xkZXIsIGkpKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxpc3RBcnJheSR7aX1gKSk7XG4gICAgICAgIGluaXRMaXN0U2VsZWN0QnRuKHN0b3JhZ2VMaXN0TmFtZUhvbGRlciwgaXRlbUFycmF5KTtcbiAgICB9XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==