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

function createItem(_title, _list, _order, _dueDate = 'N/A', _description = 'N/A', _complete = false, _priority = false){
    //add form later in UI which will populate these
    let title = _title;
    let list = _list;
    let dueDate = _dueDate;
    let description = _description;

    let complete = _complete === 'true';
    let priority = _priority === 'true';
    let detail = false;
    let order = _order;
    let storageItemString;

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

    const getStorageItemString = () =>{
        storageItemString = title + '::::' + list + '::::' + dueDate + '::::' + description
    + "::::" + complete + '::::' + priority + '::::' + order;

        return storageItemString;
    }

    return{
        title,
        list,
        dueDate,
        description,
        detail,
        storageItemString,
        order,
        priority,

        toggleComplete,
        getComplete,
        togglePriority,
        getPriority,
        getStorageItemString
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
/* harmony export */   clearNewItemBtn: () => (/* binding */ clearNewItemBtn),
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
        itemArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createItem)(itemName, listName, itemArray.length+1));
        console.log(itemArray[itemArray.length -1].storageItemString);
        console.log('itemArray Length: ' + itemArray.length);

        localStorage.setItem(`itemArray${itemArray.length}`, itemArray[itemArray.length -1].storageItemString);
        localStorage.setItem(`itemArray${itemArray.length}`, itemArray[itemArray.length -1].getStorageItemString());
        // console.log(itemArray[itemArray.length -1].storageItemString + '::::' + itemArray.length);
        localStorage.setItem('itemCounter', itemArray.length);
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
        displayPriority(item, domItem);

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
        displayComplete(item, domItem);
        updateItemStorage(item, itemArray);
    });

    // document.getElementById(listName+itemArray.indexOf(item)).prepend(completeBtn);
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemFrontBtn').prepend(completeBtn);
}

function displayComplete(item, domItem){
    if (item.getComplete() === true){
        domItem.style.setProperty('text-decoration', 'line-through');
    }else{
        domItem.style.setProperty('text-decoration', 'none');
    };
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
        displayPriority(item, domItem);
        updateItemStorage(item, itemArray);
    });
}

function displayPriority(item, domItem){    
    if (item.getPriority() === true){
        domItem.style.color = 'red';
    }else{
        domItem.style.color = 'black';
    };
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



//function to update local storage
function updateItemStorage(item, itemArray){
    localStorage.setItem(`itemArray${item.order}`, item.getStorageItemString());
    // item.storageItemString = item.getStorageItemString();
    // console.log(itemArray[0]);
    // localStorage.setItem(`itemArray${itemArray.length}`, itemArray[itemArray.length -1].getStorageItemString());
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
let storageItemCounter = 0;
let storageItemStringHolder;
let splitItemStrings;
// localStorage.clear();

//new or load storageListCounter
if (!localStorage.getItem('listCounter')){
    storageListCounter = 0;
}else{
    storageListCounter = Number(localStorage.getItem('listCounter'));
}
// console.log(storageListCounter);

//new or load storageItemCounter
if (!localStorage.getItem('itemCounter')){
    storageItemCounter = 0;
}else{
    storageItemCounter = Number(localStorage.getItem('itemCounter'));
}

// console.log(storageItemCounter);




(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewListBtn)(listArray, itemArray, storageListCounter);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initDefaultList)(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.createList)(storageListNameHolder, i));
        // console.log(localStorage.getItem(`listArray${i}`));
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initListSelectBtn)(storageListNameHolder, itemArray);
    }
}

//reload itemArray from last session


if (storageItemCounter !== 0){
    for (let i = 1; i<=storageItemCounter; i++){
        storageItemStringHolder = localStorage.getItem(`itemArray${i}`);
        //create Obj for listArray using the parsed title and list
        
        splitItemStrings = storageItemStringHolder.split('::::');
        // console.log(splitItemStrings);
        // console.log(splitItemStrings[5]);
        itemArray.push((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.createItem)(splitItemStrings[0], splitItemStrings[1], splitItemStrings[6],
            splitItemStrings[2], splitItemStrings[3], splitItemStrings[4],
            splitItemStrings[5]));

        // console.log(itemArray[itemArray.length - 1]);

        
    }
}
// console.log(itemArray);
// console.log(itemArray[0].getPriority());
// console.log(itemArray[0].priority);

(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderItems)((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.filterByList)(itemArray, 'default'),'default');
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.clearNewItemBtn)()
;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewItemBtn)(itemArray, 'default');




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQ7Ozs7Ozs7O1VDblhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwSDtBQUN0RDtBQUMvQzs7O0FBR3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7Ozs7O0FBS0Esc0RBQWM7QUFDZCx1REFBZTs7QUFFZjtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QyxpRUFBaUUsRUFBRTtBQUNuRSx1QkFBdUIsd0RBQVU7QUFDakMsd0RBQXdELEVBQUU7QUFDMUQsUUFBUSx5REFBaUI7QUFDekI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLG1FQUFtRSxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQVU7QUFDakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQVcsQ0FBQywwREFBWTtBQUN4Qix1REFBZTtBQUNmLHVEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1hcHBXaWR0aDogMzAwcHg7XG4gICAgLS1vZmZXaGl0ZTogcmdiKDI0MywgMjQzLCAyNDMpO1xuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAtLWxpZ2h0R3JleTogcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgIC0tZGFya0dyZWVuOiByZ2IoMTE4LCAxNTgsIDE1OCk7XG4gICAgLS1saWdodEdyZWVuOiByZ2IoMTU3LCAyMTIsIDIxMik7XG4gICAgLS1vZmZCbGFjazogcmdiKDEwLCAxMCwgMTApO1xuICAgIC0tZGFya1JlZDogcmdiKDIyMCwgNzYsIDc2KTtcbiAgICAtLWxpZ2h0UmVkOiByZ2IoMjI2LCAxNDcsIDE0Nyk7XG59XG5cbmJvZHl7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmtHcmVlbik7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0R3JlZW4pO1xuICAgIGNvbG9yOiB2YXIoLS1vZmZCbGFjayk7XG59XG5cbi5wcmlvcml0eUJ0bixcbi5jb21wbGV0ZUJ0blxue1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4ucHJpb3JpdHlCdG4sXG4uY29tcGxldGVCdG57XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5kZWxldGVCdG57XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtSZWQpO1xufVxuXG4uZGVsZXRlQnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuLml0ZW1EYXRle1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaXRlbUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5kb21JdGVte1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbiogPiAjZGV0YWlsc3tcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kZXRhaWxEZXNjLFxuLmRldGFpbERhdGUsXG4uZGV0YWlsVGl0bGV7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcbn1cblxuLmJvbGRMYWJlbHtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jZGV0YWlscyA+IGJ1dHRvbntcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxucDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtQm94OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuI3RvdGFsQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICB3aWR0aDogNzB2dztcbn1cblxuI21haW5Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jaXRlbUFuZERldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuI2l0ZW1ze1xuICAgIGZsZXg6IGF1dG87XG4gICAgLyogZmxleC1ncm93OiAzOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1pbi13aWR0aDogMjV2dztcbn1cblxuI2RldGFpbHNDb250YWluZXJ7XG4gICAgZmxleDogMztcbn1cblxuI2xpc3REaXNwbGF5ID4gKntcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuI2J1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiogPiAjYnV0dG9uQ29udGFpbmVye1xuICAgIHdpZHRoOiB2YXIoLS1hcHBXaWR0aCk7XG59XG5cbi5pdGVtQm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5kZWxldGVCdG57XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuI2RldGFpbHNDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG5cbn1cblxuI2RldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMjV2dztcbn1cblxuLml0ZW1Gcm9udEJ0bntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYXBwV2lkdGg6IDMwMHB4O1xcbiAgICAtLW9mZldoaXRlOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1saWdodEdyZXk6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gICAgLS1kYXJrR3JlZW46IHJnYigxMTgsIDE1OCwgMTU4KTtcXG4gICAgLS1saWdodEdyZWVuOiByZ2IoMTU3LCAyMTIsIDIxMik7XFxuICAgIC0tb2ZmQmxhY2s6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAgLS1kYXJrUmVkOiByZ2IoMjIwLCA3NiwgNzYpO1xcbiAgICAtLWxpZ2h0UmVkOiByZ2IoMjI2LCAxNDcsIDE0Nyk7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JlZW4pO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodEdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLW9mZkJsYWNrKTtcXG59XFxuXFxuLnByaW9yaXR5QnRuLFxcbi5jb21wbGV0ZUJ0blxcbntcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bixcXG4uY29tcGxldGVCdG57XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG5cXG4uZGVsZXRlQnRue1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUmVkKTtcXG59XFxuXFxuLmRlbGV0ZUJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRSZWQpO1xcbn1cXG5cXG4uaXRlbURhdGV7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uaXRlbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5kb21JdGVte1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuKiA+ICNkZXRhaWxze1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kZXRhaWxEZXNjLFxcbi5kZXRhaWxEYXRlLFxcbi5kZXRhaWxUaXRsZXtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cXG4gICAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG4uYm9sZExhYmVse1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jZGV0YWlscyA+IGJ1dHRvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5wOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtQm94OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbiN0b3RhbENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxufVxcblxcbiNpdGVtQW5kRGV0YWlsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuI2l0ZW1ze1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICAvKiBmbGV4LWdyb3c6IDM7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxufVxcblxcbiNkZXRhaWxzQ29udGFpbmVye1xcbiAgICBmbGV4OiAzO1xcbn1cXG5cXG4jbGlzdERpc3BsYXkgPiAqe1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuI2J1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuKiA+ICNidXR0b25Db250YWluZXJ7XFxuICAgIHdpZHRoOiB2YXIoLS1hcHBXaWR0aCk7XFxufVxcblxcbi5pdGVtQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi5kZWxldGVCdG57XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNkZXRhaWxzQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXG59XFxuXFxuI2RldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMjV2dztcXG59XFxuXFxuLml0ZW1Gcm9udEJ0bntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL21ldGhvZHMgbmVlZGVkOiBvcmRlciBzZXR0aW5nXG5mdW5jdGlvbiBjcmVhdGVMaXN0KF9uYW1lLCBfb3JkZXIpe1xuICAgIGxldCBuYW1lID0gX25hbWU7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBvcmRlclxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oX3RpdGxlLCBfbGlzdCwgX29yZGVyLCBfZHVlRGF0ZSA9ICdOL0EnLCBfZGVzY3JpcHRpb24gPSAnTi9BJywgX2NvbXBsZXRlID0gZmFsc2UsIF9wcmlvcml0eSA9IGZhbHNlKXtcbiAgICAvL2FkZCBmb3JtIGxhdGVyIGluIFVJIHdoaWNoIHdpbGwgcG9wdWxhdGUgdGhlc2VcbiAgICBsZXQgdGl0bGUgPSBfdGl0bGU7XG4gICAgbGV0IGxpc3QgPSBfbGlzdDtcbiAgICBsZXQgZHVlRGF0ZSA9IF9kdWVEYXRlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcblxuICAgIGxldCBjb21wbGV0ZSA9IF9jb21wbGV0ZSA9PT0gJ3RydWUnO1xuICAgIGxldCBwcmlvcml0eSA9IF9wcmlvcml0eSA9PT0gJ3RydWUnO1xuICAgIGxldCBkZXRhaWwgPSBmYWxzZTtcbiAgICBsZXQgb3JkZXIgPSBfb3JkZXI7XG4gICAgbGV0IHN0b3JhZ2VJdGVtU3RyaW5nO1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wbGV0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcHJpb3JpdHkgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwcmlvcml0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdG9yYWdlSXRlbVN0cmluZyA9ICgpID0+e1xuICAgICAgICBzdG9yYWdlSXRlbVN0cmluZyA9IHRpdGxlICsgJzo6OjonICsgbGlzdCArICc6Ojo6JyArIGR1ZURhdGUgKyAnOjo6OicgKyBkZXNjcmlwdGlvblxuICAgICsgXCI6Ojo6XCIgKyBjb21wbGV0ZSArICc6Ojo6JyArIHByaW9yaXR5ICsgJzo6OjonICsgb3JkZXI7XG5cbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VJdGVtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGxpc3QsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXRhaWwsXG4gICAgICAgIHN0b3JhZ2VJdGVtU3RyaW5nLFxuICAgICAgICBvcmRlcixcbiAgICAgICAgcHJpb3JpdHksXG5cbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgICAgIGdldENvbXBsZXRlLFxuICAgICAgICB0b2dnbGVQcmlvcml0eSxcbiAgICAgICAgZ2V0UHJpb3JpdHksXG4gICAgICAgIGdldFN0b3JhZ2VJdGVtU3RyaW5nXG4gICAgfTtcbn1cblxuLy9yZXR1cm5zIHRydWUgaWYgbmFtZSBpcyB1bmlxdWUsIGZhbHNlIGlmIG5hbWUgdGFrZW5cbmZ1bmN0aW9uIGNoZWNrTGlzdE5hbWUobGlzdE5hbWUsIGxpc3RBcnJheSl7XG4gICAgbGV0IG5hbWVVbmlxdWUgPSAobGlzdEFycmF5LmZpbHRlcigobGlzdCkgPT4ge3JldHVybiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lfSkpLmxlbmd0aDtcbiAgICBpZiAobmFtZVVuaXF1ZSA9PT0gMCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgY29uc3QgcmVzdWx0ID0gaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge3JldHVybiBpdGVtLmxpc3QgPT09IGxpc3ROYW1lfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlsKGl0ZW0pe1xuICAgIGlmIChpdGVtLmRldGFpbCA9PT0gdHJ1ZSl7XG4gICAgICAgIGl0ZW0uZGV0YWlsID0gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICAgIGl0ZW0uZGV0YWlsID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCwgdG9nZ2xlRGV0YWlsIH07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCwgY3JlYXRlSXRlbSwgY2hlY2tMaXN0TmFtZSwgZmlsdGVyQnlMaXN0LCB0b2dnbGVEZXRhaWwgfSBmcm9tIFwiLi9hcHBMb2dpY1wiO1xuXG4vL2luaXRcblxuZnVuY3Rpb24gaW5pdERlZmF1bHRMaXN0KGxpc3RBcnJheSwgaXRlbUFycmF5KXtcbiAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KCdkZWZhdWx0JywgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbiAgICBpbml0TGlzdFNlbGVjdEJ0bignZGVmYXVsdCcsIGl0ZW1BcnJheSk7XG59XG5cbmZ1bmN0aW9uIGluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5LCBzdG9yYWdlTGlzdENvdW50ZXIpe1xuICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIERPTVxuICAgIGNvbnN0IGluaXROZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0xpc3RCdG4udGV4dENvbnRlbnQgPSAnTkVXIExJU1QnO1xuICAgIFxuICAgIGluaXROZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoJ0xpc3QgTmFtZTogJywgJ3VudGl0bGVkJyk7XG4gICAgICAgIGlmIChsaXN0TmFtZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY2hlY2tpbmcgaWYgbmFtZSBleGlzdHMgYWxyZWFkeVxuICAgICAgICBpZiAoY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KSl7XG4gICAgICAgICAgICAvL2xpc3QgYWRkZWQgdG8gYXJyYXlcbiAgICAgICAgICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QobGlzdE5hbWUsIGxpc3RBcnJheS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIGxpc3Qgc2VsZWN0b3IgYnV0dG9uXG4gICAgICAgICAgICBpbml0TGlzdFNlbGVjdEJ0bihsaXN0TmFtZSwgaXRlbUFycmF5KTtcbiAgICAgICAgICAgIC8vanVzdCBjbGVhciBpdGVtcywgYXMgbmV3IGxpc3QgaGFzIG5vIHJlbmRlcmFibGUgaXRlbXNcbiAgICAgICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuXG5cbiAgICAgICAgICAgIC8vc2V0IHVwIHN0b3JhZ2VcbiAgICAgICAgICAgIHN0b3JhZ2VMaXN0Q291bnRlciArPSAxO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RDb3VudGVyJywgc3RvcmFnZUxpc3RDb3VudGVyKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VMaXN0Q291bnRlcik7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsaXN0QXJyYXkke3N0b3JhZ2VMaXN0Q291bnRlcn1gLCBsaXN0TmFtZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbUFycmF5JHtzdG9yYWdlTGlzdENvdW50ZXJ9YCkpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgbmFtZSBhbHJlYWR5IHRha2VuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdEJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdMaXN0QnRuKTtcbn1cblxuLy90aGlzIG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGVhY2ggdGltZSBsaXN0IHZpZXcgaXMgbG9hZGVkXG5mdW5jdGlvbiBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBpbml0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdJdGVtQnRuLnRleHRDb250ZW50ID0gYCsgJHtsaXN0TmFtZX0gSXRlbWA7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcbiAgICAgICAgaWYgKGl0ZW1OYW1lID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSwgaXRlbUFycmF5Lmxlbmd0aCsxKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5zdG9yYWdlSXRlbVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpdGVtQXJyYXkgTGVuZ3RoOiAnICsgaXRlbUFycmF5Lmxlbmd0aCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGl0ZW1BcnJheSR7aXRlbUFycmF5Lmxlbmd0aH1gLCBpdGVtQXJyYXlbaXRlbUFycmF5Lmxlbmd0aCAtMV0uc3RvcmFnZUl0ZW1TdHJpbmcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtQXJyYXkubGVuZ3RofWAsIGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5nZXRTdG9yYWdlSXRlbVN0cmluZygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLnN0b3JhZ2VJdGVtU3RyaW5nICsgJzo6OjonICsgaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtQ291bnRlcicsIGl0ZW1BcnJheS5sZW5ndGgpO1xuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3SXRlbUJ0bik7XG59XG5cbi8vY3JlYXRlcyBuZXcgbGlzdCBzZWxlY3RvciBidXR0b25cbmZ1bmN0aW9uIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXksIGxpc3RBcnJheSl7XG4gICAgLy9pbml0aWFsaXplIGxpc3Qgc2VsZWN0IGJ1dHRvblxuICAgIGNvbnN0IGxpc3RTZWxlY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0U2VsZWN0QnRuLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gICAgXG4gICAgbGlzdFNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksbGlzdE5hbWUpO1xuICAgICAgICBjbGVhck5ld0l0ZW1CdG4oKVxuICAgICAgICBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGlzcGxheScpLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RCdG4pO1xuICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5LCBsaXN0TmFtZSk7XG59XG5cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgaXRlbUFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIC8vY3JlYXRlIERpdiBmb3IgZWFjaCBpdGVtOlxuICAgICAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBsaXN0TmFtZSArIGl0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgaXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Cb3gnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJykuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgICAgICAgbGV0IGl0ZW1Gcm9udEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRnJvbnRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtRnJvbnRCdG4nKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQoaXRlbUZyb250QnRuKTtcblxuXG4gICAgICAgIC8vZ2VuZXJhdGUgaXRlbSBkaXNwbGF5XG4gICAgICAgIGxldCBkb21JdGVtID0gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcmlvcml0eShpdGVtLCBkb21JdGVtKTtcblxuICAgICAgICAvL2dlbmVyYXRlIHByaW9yaXR5IHRvZ2dsZSBidXR0b24gKG9yZGVyIGJhc2VkIG9uIHByZXBlbmQpXG4gICAgICAgIHByaW9yaXR5SXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy9nZW5lcmF0ZSBjb21wbGV0aW5nIGl0ZW0gYnV0dG9uXG4gICAgICAgIGNvbXBsZXRlSXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvLyBsZXQgaXRlbUJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gaXRlbUJhY2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtQmFja0J0bicpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkuYXBwZW5kQ2hpbGQoaXRlbUJhY2tCdG4pO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgZGV0YWlscyBidXR0b24gKHJlYWxseSBqdXN0IFAgZWxlbWVudClcbiAgICAgICAgZGV0YWlsSXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvL2dlbmVyYXRlIGRlbGV0ZSBidXR0b25cbiAgICAgICAgLy8gZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJJdGVtcyhpdGVtQXJyYXkpe1xuICAgIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJyk7XG4gICAgd2hpbGUgKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGxpc3REaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXRhaWxzKGl0ZW1BcnJheSwgaXRlbVRvU2tpcCl7XG4gICAgaXRlbUFycmF5LmZvckVhY2goaXRlbUNsZWFyID0+IHtcbiAgICAgICAgaXRlbUNsZWFyLmRldGFpbCA9IGZhbHNlO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgZGV0YWlsc0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuICAgIHdoaWxlKGRldGFpbHNEaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkucmVtb3ZlQ2hpbGQoZGV0YWlsc0Rpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdJdGVtQnRuKCl7XG4gICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQnRuJyk7XG4gICAgaWYobmV3SXRlbUJ0bi5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAgIG5ld0l0ZW1CdG4ucmVtb3ZlQ2hpbGQobmV3SXRlbUJ0bi5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaXRlbSwgZG9tSXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZUJ0bicpO1xuICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0udG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgICAgZGlzcGxheUNvbXBsZXRlKGl0ZW0sIGRvbUl0ZW0pO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQoY29tcGxldGVCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUZyb250QnRuJykucHJlcGVuZChjb21wbGV0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb21wbGV0ZShpdGVtLCBkb21JdGVtKXtcbiAgICBpZiAoaXRlbS5nZXRDb21wbGV0ZSgpID09PSB0cnVlKXtcbiAgICAgICAgZG9tSXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgIH1lbHNle1xuICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbm9uZScpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJdGVtKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgbGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpO1xuICAgIGl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtQ29udGFpbmVyJyk7XG4gICAgXG4gICAgbGV0IGRvbUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZG9tSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7bGlzdE5hbWV9IGRvbUl0ZW1gICk7XG4gICAgZG9tSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICBsZXQgZGF0ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtRGF0ZScpO1xuICAgIGRhdGVJdGVtLnRleHRDb250ZW50ID0gJ0R1ZSAnICsgaXRlbS5kdWVEYXRlO1xuXG4gICAgLy9tYWtlIGNvbXBsZXRlIGFuZCBwcmlvcml0eSBpdGVtIHN0eWxpbmcgcGVyc2lzdGVudFxuICAgIGlmIChpdGVtLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfVxuICAgIGlmIChpdGVtLmdldFByaW9yaXR5KCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKydDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbiAgICBcbiAgICBpZiAoaXRlbS5kdWVEYXRlID09PSAnTi9BJyl7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKydDb250YWluZXInKS5hcHBlbmRDaGlsZChkYXRlSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUl0ZW07XG59XG5cbmZ1bmN0aW9uIHByaW9yaXR5SXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5QnRuJyk7XG4gICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSAnISc7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQocHJpb3JpdHlCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUZyb250QnRuJykucHJlcGVuZChwcmlvcml0eUJ0bik7XG4gICAgXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0udG9nZ2xlUHJpb3JpdHkoKTtcbiAgICAgICAgZGlzcGxheVByaW9yaXR5KGl0ZW0sIGRvbUl0ZW0pO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJpb3JpdHkoaXRlbSwgZG9tSXRlbSl7ICAgIFxuICAgIGlmIChpdGVtLmdldFByaW9yaXR5KCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRldGFpbEl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGRldGFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUNvbnRhaW5lcicpO1xuICAgIGxldCBkZXRhaWxUb2dnbGVIb2xkZXI7XG4gICAgXG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGRldGFpbFRvZ2dsZUhvbGRlciA9IGl0ZW0uZGV0YWlsO1xuICAgICAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbiAgICAgICAgaXRlbS5kZXRhaWwgPSBkZXRhaWxUb2dnbGVIb2xkZXI7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9sZExhYmVsJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvbGRMYWJlbCcpO1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2xkTGFiZWwnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RJVExFOlxcclxcbic7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9ICdEVUU6XFxyXFxuJztcbiAgICBkZXNjLnRleHRDb250ZW50ID0gJ0RFU0NSSVBUSU9OOlxcclxcbic7XG5cbiAgICBsZXQgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBzaG93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsZXQgc2hvd0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lICsgaXRlbUFycmF5LmluZGV4T2YoaXRlbSkpO1xuXG4gICAgc2hvd1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBzaG93RGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBzaG93RGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBzaG93VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxUaXRsZScpO1xuICAgIHNob3dEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsRGF0ZScpO1xuICAgIHNob3dEZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsRGVzYycpO1xuXG4gICAgaWYgKGl0ZW0uZGV0YWlsID09PSBmYWxzZSl7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XG4gICAgICAgIGVkaXRUaXRsZShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKTtcbiAgICBcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzaG93RGF0ZSk7XG4gICAgICAgIGVkaXREYXRlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuICAgICAgICBcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzaG93RGVzYyk7XG4gICAgICAgIGVkaXREZXNjKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuXG4gICAgICAgIGRlbGV0ZUl0ZW0oaXRlbSwgaXRlbURpdiwgaXRlbUFycmF5LCBsaXN0TmFtZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbSwgaXRlbURpdiwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlQnRuJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBJdGVtJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdGVtLmxpc3QgPSAnZGVsZXRlJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJykucmVtb3ZlQ2hpbGQoaXRlbURpdik7XG4gICAgICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xuICAgIH0pO1xuXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xufVxuXG4vL2RldGFpbHMgZWRpdCBmdW5jdGlvbnM6XG5mdW5jdGlvbiBlZGl0VGl0bGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyl7XG4gICAgY29uc3QgZWRpdFRpdGxlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFRpdGxlQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgVGl0bGUnO1xuICAgIGVkaXRUaXRsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0aXRsZUhvbGRlciA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGl0ZW0udGl0bGUgPSBwcm9tcHQoJ1RpdGxlOiAnKTtcbiAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IG51bGwpe1xuICAgICAgICAgICAgaXRlbS50aXRsZSA9IHRpdGxlSG9sZGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICB9KTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGVkaXRUaXRsZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGVkaXREYXRlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpe1xuICAgIGxldCBlZGl0RGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXREYXRlQnRuLnRleHRDb250ZW50ID0gJ0NoYW5nZSBEdWUgRGF0ZSc7XG5cbiAgICBlZGl0RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkYXRlSG9sZGVyID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICBpdGVtLmR1ZURhdGUgPSBwcm9tcHQoJ0R1ZSBEYXRlOiAnKTtcbiAgICAgICAgaWYgKGl0ZW0uZHVlRGF0ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBpdGVtLmR1ZURhdGUgPSBkYXRlSG9sZGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTsgICAgICBcbiAgICB9KVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdERhdGVCdG4pO1xufVxuXG5mdW5jdGlvbiBlZGl0RGVzYyhpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKXtcbiAgICBsZXQgZWRpdERlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0RGVzY0J0bi50ZXh0Q29udGVudCA9ICdFZGl0IERlc2NyaXB0aW9uJztcbiAgICBcbiAgICBlZGl0RGVzY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkZXNjSG9sZGVyID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbS5kZXNjcmlwdGlvbiA9IHByb21wdCgnRWRpdCBEZXNjcmlwdGlvbjogJyk7XG4gICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uID09PSBudWxsKXtcbiAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBkZXNjSG9sZGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICB9KTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGVkaXREZXNjQnRuKTtcbn1cblxuXG5cbi8vZnVuY3Rpb24gdG8gdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGl0ZW1BcnJheSR7aXRlbS5vcmRlcn1gLCBpdGVtLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xuICAgIC8vIGl0ZW0uc3RvcmFnZUl0ZW1TdHJpbmcgPSBpdGVtLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5WzBdKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtQXJyYXkubGVuZ3RofWAsIGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5nZXRTdG9yYWdlSXRlbVN0cmluZygpKTtcbn1cblxuZXhwb3J0IHtpbml0TGlzdFNlbGVjdEJ0biwgaW5pdE5ld0xpc3RCdG4sIGluaXROZXdJdGVtQnRuLCByZW5kZXJJdGVtcywgaW5pdERlZmF1bHRMaXN0LCBjbGVhck5ld0l0ZW1CdG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXREZWZhdWx0TGlzdCwgaW5pdE5ld0xpc3RCdG4sIGluaXRMaXN0U2VsZWN0QnRuLCByZW5kZXJJdGVtcywgY2xlYXJOZXdJdGVtQnRuLGluaXROZXdJdGVtQnRuIH0gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBmaWx0ZXJCeUxpc3R9IGZyb20gJy4vYXBwTG9naWMuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgbGlzdEFycmF5ID0gW107XG5jb25zdCBpdGVtQXJyYXkgPSBbXTtcblxubGV0IHN0b3JhZ2VMaXN0Q291bnRlciA9IDA7XG5sZXQgc3RvcmFnZUxpc3ROYW1lSG9sZGVyO1xubGV0IHN0b3JhZ2VJdGVtQ291bnRlciA9IDA7XG5sZXQgc3RvcmFnZUl0ZW1TdHJpbmdIb2xkZXI7XG5sZXQgc3BsaXRJdGVtU3RyaW5ncztcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vL25ldyBvciBsb2FkIHN0b3JhZ2VMaXN0Q291bnRlclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdENvdW50ZXInKSl7XG4gICAgc3RvcmFnZUxpc3RDb3VudGVyID0gMDtcbn1lbHNle1xuICAgIHN0b3JhZ2VMaXN0Q291bnRlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdENvdW50ZXInKSk7XG59XG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlTGlzdENvdW50ZXIpO1xuXG4vL25ldyBvciBsb2FkIHN0b3JhZ2VJdGVtQ291bnRlclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSl7XG4gICAgc3RvcmFnZUl0ZW1Db3VudGVyID0gMDtcbn1lbHNle1xuICAgIHN0b3JhZ2VJdGVtQ291bnRlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSk7XG59XG5cbi8vIGNvbnNvbGUubG9nKHN0b3JhZ2VJdGVtQ291bnRlcik7XG5cblxuXG5cbmluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5LCBzdG9yYWdlTGlzdENvdW50ZXIpO1xuaW5pdERlZmF1bHRMaXN0KGxpc3RBcnJheSwgaXRlbUFycmF5KTtcblxuLy9yZWxvYWQgbGlzdEFycmF5IGZyb20gbGFzdCBzZXNzaW9uXG5pZiAoc3RvcmFnZUxpc3RDb3VudGVyICE9PSAwKXtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdG9yYWdlTGlzdENvdW50ZXI7IGkrKyl7XG4gICAgICAgIHN0b3JhZ2VMaXN0TmFtZUhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsaXN0QXJyYXkke2l9YCk7XG4gICAgICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3Qoc3RvcmFnZUxpc3ROYW1lSG9sZGVyLCBpKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsaXN0QXJyYXkke2l9YCkpO1xuICAgICAgICBpbml0TGlzdFNlbGVjdEJ0bihzdG9yYWdlTGlzdE5hbWVIb2xkZXIsIGl0ZW1BcnJheSk7XG4gICAgfVxufVxuXG4vL3JlbG9hZCBpdGVtQXJyYXkgZnJvbSBsYXN0IHNlc3Npb25cblxuXG5pZiAoc3RvcmFnZUl0ZW1Db3VudGVyICE9PSAwKXtcbiAgICBmb3IgKGxldCBpID0gMTsgaTw9c3RvcmFnZUl0ZW1Db3VudGVyOyBpKyspe1xuICAgICAgICBzdG9yYWdlSXRlbVN0cmluZ0hvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtQXJyYXkke2l9YCk7XG4gICAgICAgIC8vY3JlYXRlIE9iaiBmb3IgbGlzdEFycmF5IHVzaW5nIHRoZSBwYXJzZWQgdGl0bGUgYW5kIGxpc3RcbiAgICAgICAgXG4gICAgICAgIHNwbGl0SXRlbVN0cmluZ3MgPSBzdG9yYWdlSXRlbVN0cmluZ0hvbGRlci5zcGxpdCgnOjo6OicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGxpdEl0ZW1TdHJpbmdzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3BsaXRJdGVtU3RyaW5nc1s1XSk7XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oc3BsaXRJdGVtU3RyaW5nc1swXSwgc3BsaXRJdGVtU3RyaW5nc1sxXSwgc3BsaXRJdGVtU3RyaW5nc1s2XSxcbiAgICAgICAgICAgIHNwbGl0SXRlbVN0cmluZ3NbMl0sIHNwbGl0SXRlbVN0cmluZ3NbM10sIHNwbGl0SXRlbVN0cmluZ3NbNF0sXG4gICAgICAgICAgICBzcGxpdEl0ZW1TdHJpbmdzWzVdKSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgXG4gICAgfVxufVxuLy8gY29uc29sZS5sb2coaXRlbUFycmF5KTtcbi8vIGNvbnNvbGUubG9nKGl0ZW1BcnJheVswXS5nZXRQcmlvcml0eSgpKTtcbi8vIGNvbnNvbGUubG9nKGl0ZW1BcnJheVswXS5wcmlvcml0eSk7XG5cbnJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksICdkZWZhdWx0JyksJ2RlZmF1bHQnKTtcbmNsZWFyTmV3SXRlbUJ0bigpXG5pbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksICdkZWZhdWx0Jyk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=