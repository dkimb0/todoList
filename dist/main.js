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
/* harmony export */   loadLocalStorageCounters: () => (/* binding */ loadLocalStorageCounters),
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
        return title + '::::' + list + '::::' + dueDate + '::::' + description
    + "::::" + complete + '::::' + priority + '::::' + order;
    }

    const setDelete = () => {
        list = 'delete';
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDate = (newDate) => {
        dueDate = newDate;
    }

    const setDesc = (newDesc) => {
        description = newDesc;
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
        getStorageItemString,
        setDelete,
        setTitle,
        setDate,
        setDesc
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

function loadLocalStorageCounters(){
    let storageListCounter;
    let storageItemCounter;
    

    //new or load storageListCounter
    if (!localStorage.getItem('listCounter')){
        storageListCounter = 0;
    }else{
        storageListCounter = Number(localStorage.getItem('listCounter'));
    }

    //new or load storageItemCounter
    if (!localStorage.getItem('itemCounter')){
        storageItemCounter = 0;
    }else{
        storageItemCounter = Number(localStorage.getItem('itemCounter'));
    }

    return [storageListCounter, storageItemCounter];
}

// function loadLocalStorageListArray(storageListCounter){
//     let storageListNameHolder;

//     if (storageListCounter !== 0){
//         for (let i = 1; i <= storageListCounter; i++){
//             storageListNameHolder = localStorage.getItem(`listArray${i}`);
//             listArray.push(createList(storageListNameHolder, i));
//             initListSelectBtn(storageListNameHolder, itemArray);
//         }
//     }
// }



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
        // console.log(itemArray[itemArray.length -1].storageItemString);
        // console.log('itemArray Length: ' + itemArray.length);

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
        item.setDelete();
        console.log(item.getStorageItemString());
        updateItemStorage(item, itemArray);

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
        let newTitle = prompt('Title: ');

        //need to do both, update screen with first
        item.title = newTitle;
        //update obj with second
        item.setTitle(newTitle);
        // console.log(newTitle==='');

        if (newTitle === '' || newTitle === null){
            item.title = titleHolder;
            item.setTitle(titleHolder);
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);

        updateItemStorage(item, itemArray);
    });
    details.appendChild(editTitleBtn);
}

function editDate(item, itemArray, listName, details){
    let editDateBtn = document.createElement('button');
    editDateBtn.textContent = 'Change Due Date';

    editDateBtn.addEventListener('click', function(){
        let dateHolder = item.dueDate;
        let newDate = prompt('Due Date: ');

        item.dueDate = newDate;
        item.setDate(newDate);


        if (newDate === null){
            item.dueDate = dateHolder;
            item.setDate(dateHolder);
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);
        updateItemStorage(item, itemArray);      
    })
    details.appendChild(editDateBtn);
}

function editDesc(item, itemArray, listName, details){
    let editDescBtn = document.createElement('button');
    editDescBtn.textContent = 'Edit Description';
    
    editDescBtn.addEventListener('click', function(){
        let descHolder = item.description;
        let newDesc = prompt('Edit Description: ');

        item.description = newDesc;
        item.setDesc(newDesc);

        if (item.description === null){
            item.description = descHolder;
            item.setDesc(descHolder);
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(item);
        updateItemStorage(item, itemArray);
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




// localStorage.clear();

const listArray = [];
const itemArray = [];

let storageListNameHolder;
let storageItemStringHolder;
let splitItemStrings;
let [storageListCounter, storageItemCounter] = (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorageCounters)();

(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewListBtn)(listArray, itemArray, storageListCounter);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initDefaultList)(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.createList)(storageListNameHolder, i));
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initListSelectBtn)(storageListNameHolder, itemArray);
    }
}

//reload itemArray from last session
if (storageItemCounter !== 0){
    for (let i = 1; i<=storageItemCounter; i++){
        storageItemStringHolder = localStorage.getItem(`itemArray${i}`);
        //create Obj for listArray using the parsed title and list
        
        splitItemStrings = storageItemStringHolder.split('::::');
        itemArray.push((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.createItem)(splitItemStrings[0], splitItemStrings[1], splitItemStrings[6],
            splitItemStrings[2], splitItemStrings[3], splitItemStrings[4],
            splitItemStrings[5]));
    }
}

//first load of the lists
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderItems)((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.filterByList)(itemArray, 'default'),'default');
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.clearNewItemBtn)()
;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewItemBtn)(itemArray, 'default');




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLDhCQUE4QjtBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRCx3RUFBd0UsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEorRjs7QUFFL0Y7O0FBRUE7QUFDQSxtQkFBbUIscURBQVU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFhO0FBQ3pCO0FBQ0EsMkJBQTJCLHFEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFZOzs7QUFHcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLG1CQUFtQjtBQUNoRSw0REFBNEQsbUJBQW1COztBQUUvRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFVO0FBQ2pDO0FBQ0E7O0FBRUEseUNBQXlDLGlCQUFpQjtBQUMxRCx5Q0FBeUMsaUJBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBWTtBQUNoQyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBWTtBQUNoQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZOztBQUVwQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQ7Ozs7Ozs7O1VDN1lBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwSDtBQUM1QjtBQUN6RTs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0VBQXdCOztBQUV2RSxzREFBYztBQUNkLHVEQUFlOztBQUVmO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDLGlFQUFpRSxFQUFFO0FBQ25FLHVCQUF1Qix3REFBVTtBQUNqQyxRQUFRLHlEQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLG1FQUFtRSxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFXLENBQUMsMERBQVk7QUFDeEIsdURBQWU7QUFDZix1REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyOndnaHRANDAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYXBwV2lkdGg6IDMwMHB4O1xuICAgIC0tb2ZmV2hpdGU6IHJnYigyNDMsIDI0MywgMjQzKTtcbiAgICAtLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgLS1saWdodEdyZXk6IHJnYigyMjMsIDIyMywgMjIzKTtcbiAgICAtLWRhcmtHcmVlbjogcmdiKDExOCwgMTU4LCAxNTgpO1xuICAgIC0tbGlnaHRHcmVlbjogcmdiKDE1NywgMjEyLCAyMTIpO1xuICAgIC0tb2ZmQmxhY2s6IHJnYigxMCwgMTAsIDEwKTtcbiAgICAtLWRhcmtSZWQ6IHJnYigyMjAsIDc2LCA3Nik7XG4gICAgLS1saWdodFJlZDogcmdiKDIyNiwgMTQ3LCAxNDcpO1xufVxuXG5ib2R5e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbntcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JlZW4pO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5idXR0b246aG92ZXIsXG5idXR0b246Zm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodEdyZWVuKTtcbiAgICBjb2xvcjogdmFyKC0tb2ZmQmxhY2spO1xufVxuXG4ucHJpb3JpdHlCdG4sXG4uY29tcGxldGVCdG5cbntcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLnByaW9yaXR5QnRuLFxuLmNvbXBsZXRlQnRue1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uZGVsZXRlQnRue1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUmVkKTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFJlZCk7XG59XG5cbi5pdGVtRGF0ZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLml0ZW1Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uZG9tSXRlbXtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuXG4qID4gI2RldGFpbHN7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGV0YWlsRGVzYyxcbi5kZXRhaWxEYXRlLFxuLmRldGFpbFRpdGxle1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cbiAgICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbi5ib2xkTGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2RldGFpbHMgPiBidXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnA6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbUJveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbiN0b3RhbENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgd2lkdGg6IDcwdnc7XG59XG5cbiNtYWluQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuI2l0ZW1BbmREZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbiNpdGVtc3tcbiAgICBmbGV4OiBhdXRvO1xuICAgIC8qIGZsZXgtZ3JvdzogMzsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBtaW4td2lkdGg6IDI1dnc7XG59XG5cbiNkZXRhaWxzQ29udGFpbmVye1xuICAgIGZsZXg6IDM7XG59XG5cbiNsaXN0RGlzcGxheSA+ICp7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbiNidXR0b25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4qID4gI2J1dHRvbkNvbnRhaW5lcntcbiAgICB3aWR0aDogdmFyKC0tYXBwV2lkdGgpO1xufVxuXG4uaXRlbUJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZGVsZXRlQnRue1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbiNkZXRhaWxzQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG59XG5cbiNkZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDI1dnc7XG59XG5cbi5pdGVtRnJvbnRCdG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA0MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgICAtLWFwcFdpZHRoOiAzMDBweDtcXG4gICAgLS1vZmZXaGl0ZTogcmdiKDI0MywgMjQzLCAyNDMpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tbGlnaHRHcmV5OiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICAgIC0tZGFya0dyZWVuOiByZ2IoMTE4LCAxNTgsIDE1OCk7XFxuICAgIC0tbGlnaHRHcmVlbjogcmdiKDE1NywgMjEyLCAyMTIpO1xcbiAgICAtLW9mZkJsYWNrOiByZ2IoMTAsIDEwLCAxMCk7XFxuICAgIC0tZGFya1JlZDogcmdiKDIyMCwgNzYsIDc2KTtcXG4gICAgLS1saWdodFJlZDogcmdiKDIyNiwgMTQ3LCAxNDcpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZGFya0dyZWVuKTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbGlnaHRHcmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZCbGFjayk7XFxufVxcblxcbi5wcmlvcml0eUJ0bixcXG4uY29tcGxldGVCdG5cXG57XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlCdG4sXFxuLmNvbXBsZXRlQnRue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuLmRlbGV0ZUJ0bntcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1JlZCk7XFxufVxcblxcbi5kZWxldGVCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuLml0ZW1EYXRle1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLml0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZG9tSXRlbXtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxufVxcblxcbiogPiAjZGV0YWlsc3tcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsRGVzYyxcXG4uZGV0YWlsRGF0ZSxcXG4uZGV0YWlsVGl0bGV7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxuLmJvbGRMYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI2RldGFpbHMgPiBidXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxucDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbUJveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4jdG90YWxDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICB3aWR0aDogNzB2dztcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbn1cXG5cXG4jaXRlbUFuZERldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbiNpdGVtc3tcXG4gICAgZmxleDogYXV0bztcXG4gICAgLyogZmxleC1ncm93OiAzOyAqL1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4jZGV0YWlsc0NvbnRhaW5lcntcXG4gICAgZmxleDogMztcXG59XFxuXFxuI2xpc3REaXNwbGF5ID4gKntcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcblxcbiNidXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiogPiAjYnV0dG9uQ29udGFpbmVye1xcbiAgICB3aWR0aDogdmFyKC0tYXBwV2lkdGgpO1xcbn1cXG5cXG4uaXRlbUJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uZGVsZXRlQnRue1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZGV0YWlsc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFxufVxcblxcbiNkZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxufVxcblxcbi5pdGVtRnJvbnRCdG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9tZXRob2RzIG5lZWRlZDogb3JkZXIgc2V0dGluZ1xuZnVuY3Rpb24gY3JlYXRlTGlzdChfbmFtZSwgX29yZGVyKXtcbiAgICBsZXQgbmFtZSA9IF9uYW1lO1xuICAgIGxldCBvcmRlciA9IF9vcmRlcjtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgb3JkZXJcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKF90aXRsZSwgX2xpc3QsIF9vcmRlciwgX2R1ZURhdGUgPSAnTi9BJywgX2Rlc2NyaXB0aW9uID0gJ04vQScsIF9jb21wbGV0ZSA9IGZhbHNlLCBfcHJpb3JpdHkgPSBmYWxzZSl7XG4gICAgLy9hZGQgZm9ybSBsYXRlciBpbiBVSSB3aGljaCB3aWxsIHBvcHVsYXRlIHRoZXNlXG4gICAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICAgIGxldCBsaXN0ID0gX2xpc3Q7XG4gICAgbGV0IGR1ZURhdGUgPSBfZHVlRGF0ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG5cbiAgICBsZXQgY29tcGxldGUgPSBfY29tcGxldGUgPT09ICd0cnVlJztcbiAgICBsZXQgcHJpb3JpdHkgPSBfcHJpb3JpdHkgPT09ICd0cnVlJztcbiAgICBsZXQgZGV0YWlsID0gZmFsc2U7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuICAgIGxldCBzdG9yYWdlSXRlbVN0cmluZztcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcHJpb3JpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RvcmFnZUl0ZW1TdHJpbmcgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgJzo6OjonICsgbGlzdCArICc6Ojo6JyArIGR1ZURhdGUgKyAnOjo6OicgKyBkZXNjcmlwdGlvblxuICAgICsgXCI6Ojo6XCIgKyBjb21wbGV0ZSArICc6Ojo6JyArIHByaW9yaXR5ICsgJzo6OjonICsgb3JkZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVsZXRlID0gKCkgPT4ge1xuICAgICAgICBsaXN0ID0gJ2RlbGV0ZSc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzYyA9IChuZXdEZXNjKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGV0YWlsLFxuICAgICAgICBzdG9yYWdlSXRlbVN0cmluZyxcbiAgICAgICAgb3JkZXIsXG4gICAgICAgIHByaW9yaXR5LFxuXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgICAgICBnZXRDb21wbGV0ZSxcbiAgICAgICAgdG9nZ2xlUHJpb3JpdHksXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICBnZXRTdG9yYWdlSXRlbVN0cmluZyxcbiAgICAgICAgc2V0RGVsZXRlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGF0ZSxcbiAgICAgICAgc2V0RGVzY1xuICAgIH07XG59XG5cbi8vcmV0dXJucyB0cnVlIGlmIG5hbWUgaXMgdW5pcXVlLCBmYWxzZSBpZiBuYW1lIHRha2VuXG5mdW5jdGlvbiBjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpe1xuICAgIGxldCBuYW1lVW5pcXVlID0gKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSBsaXN0TmFtZX0pKS5sZW5ndGg7XG4gICAgaWYgKG5hbWVVbmlxdWUgPT09IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5saXN0ID09PSBsaXN0TmFtZX0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbChpdGVtKXtcbiAgICBpZiAoaXRlbS5kZXRhaWwgPT09IHRydWUpe1xuICAgICAgICBpdGVtLmRldGFpbCA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgICBpdGVtLmRldGFpbCA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlQ291bnRlcnMoKXtcbiAgICBsZXQgc3RvcmFnZUxpc3RDb3VudGVyO1xuICAgIGxldCBzdG9yYWdlSXRlbUNvdW50ZXI7XG4gICAgXG5cbiAgICAvL25ldyBvciBsb2FkIHN0b3JhZ2VMaXN0Q291bnRlclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RDb3VudGVyJykpe1xuICAgICAgICBzdG9yYWdlTGlzdENvdW50ZXIgPSAwO1xuICAgIH1lbHNle1xuICAgICAgICBzdG9yYWdlTGlzdENvdW50ZXIgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RDb3VudGVyJykpO1xuICAgIH1cblxuICAgIC8vbmV3IG9yIGxvYWQgc3RvcmFnZUl0ZW1Db3VudGVyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSl7XG4gICAgICAgIHN0b3JhZ2VJdGVtQ291bnRlciA9IDA7XG4gICAgfWVsc2V7XG4gICAgICAgIHN0b3JhZ2VJdGVtQ291bnRlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtzdG9yYWdlTGlzdENvdW50ZXIsIHN0b3JhZ2VJdGVtQ291bnRlcl07XG59XG5cbi8vIGZ1bmN0aW9uIGxvYWRMb2NhbFN0b3JhZ2VMaXN0QXJyYXkoc3RvcmFnZUxpc3RDb3VudGVyKXtcbi8vICAgICBsZXQgc3RvcmFnZUxpc3ROYW1lSG9sZGVyO1xuXG4vLyAgICAgaWYgKHN0b3JhZ2VMaXN0Q291bnRlciAhPT0gMCl7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0b3JhZ2VMaXN0Q291bnRlcjsgaSsrKXtcbi8vICAgICAgICAgICAgIHN0b3JhZ2VMaXN0TmFtZUhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsaXN0QXJyYXkke2l9YCk7XG4vLyAgICAgICAgICAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KHN0b3JhZ2VMaXN0TmFtZUhvbGRlciwgaSkpO1xuLy8gICAgICAgICAgICAgaW5pdExpc3RTZWxlY3RCdG4oc3RvcmFnZUxpc3ROYW1lSG9sZGVyLCBpdGVtQXJyYXkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QsIHRvZ2dsZURldGFpbCwgbG9hZExvY2FsU3RvcmFnZUNvdW50ZXJzfTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QsIHRvZ2dsZURldGFpbCB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbi8vaW5pdFxuXG5mdW5jdGlvbiBpbml0RGVmYXVsdExpc3QobGlzdEFycmF5LCBpdGVtQXJyYXkpe1xuICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QoJ2RlZmF1bHQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuICAgIGluaXRMaXN0U2VsZWN0QnRuKCdkZWZhdWx0JywgaXRlbUFycmF5KTtcbn1cblxuZnVuY3Rpb24gaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXksIHN0b3JhZ2VMaXN0Q291bnRlcil7XG4gICAgLy9jcmVhdGluZyBidXR0b24gaW4gRE9NXG4gICAgY29uc3QgaW5pdE5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbml0TmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9ICdORVcgTElTVCc7XG4gICAgXG4gICAgaW5pdE5ld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0TmFtZSA9IHByb21wdCgnTGlzdCBOYW1lOiAnLCAndW50aXRsZWQnKTtcbiAgICAgICAgaWYgKGxpc3ROYW1lID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9jaGVja2luZyBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG4gICAgICAgIGlmIChjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpKXtcbiAgICAgICAgICAgIC8vbGlzdCBhZGRlZCB0byBhcnJheVxuICAgICAgICAgICAgbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdChsaXN0TmFtZSwgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgbGlzdCBzZWxlY3RvciBidXR0b25cbiAgICAgICAgICAgIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpO1xuICAgICAgICAgICAgLy9qdXN0IGNsZWFyIGl0ZW1zLCBhcyBuZXcgbGlzdCBoYXMgbm8gcmVuZGVyYWJsZSBpdGVtc1xuICAgICAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLCBsaXN0TmFtZSk7XG5cblxuICAgICAgICAgICAgLy9zZXQgdXAgc3RvcmFnZVxuICAgICAgICAgICAgc3RvcmFnZUxpc3RDb3VudGVyICs9IDE7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdENvdW50ZXInLCBzdG9yYWdlTGlzdENvdW50ZXIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZUxpc3RDb3VudGVyKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxpc3RBcnJheSR7c3RvcmFnZUxpc3RDb3VudGVyfWAsIGxpc3ROYW1lKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtQXJyYXkke3N0b3JhZ2VMaXN0Q291bnRlcn1gKSk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBuYW1lIGFscmVhZHkgdGFrZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnRuJykuYXBwZW5kQ2hpbGQoaW5pdE5ld0xpc3RCdG4pO1xufVxuXG4vL3RoaXMgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQgZWFjaCB0aW1lIGxpc3QgdmlldyBpcyBsb2FkZWRcbmZ1bmN0aW9uIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IGluaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0l0ZW1CdG4udGV4dENvbnRlbnQgPSBgKyAke2xpc3ROYW1lfSBJdGVtYDtcblxuICAgIGluaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaXRlbU5hbWUgPSBwcm9tcHQoJ0l0ZW0gdGl0bGU6ICcpO1xuICAgICAgICBpZiAoaXRlbU5hbWUgPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oaXRlbU5hbWUsIGxpc3ROYW1lLCBpdGVtQXJyYXkubGVuZ3RoKzEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLnN0b3JhZ2VJdGVtU3RyaW5nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW1BcnJheSBMZW5ndGg6ICcgKyBpdGVtQXJyYXkubGVuZ3RoKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtQXJyYXkubGVuZ3RofWAsIGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5zdG9yYWdlSXRlbVN0cmluZyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtQXJyYXkke2l0ZW1BcnJheS5sZW5ndGh9YCwgaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXlbaXRlbUFycmF5Lmxlbmd0aCAtMV0uc3RvcmFnZUl0ZW1TdHJpbmcgKyAnOjo6OicgKyBpdGVtQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1Db3VudGVyJywgaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLCBsaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdJdGVtQnRuKTtcbn1cblxuLy9jcmVhdGVzIG5ldyBsaXN0IHNlbGVjdG9yIGJ1dHRvblxuZnVuY3Rpb24gaW5pdExpc3RTZWxlY3RCdG4obGlzdE5hbWUsIGl0ZW1BcnJheSwgbGlzdEFycmF5KXtcbiAgICAvL2luaXRpYWxpemUgbGlzdCBzZWxlY3QgYnV0dG9uXG4gICAgY29uc3QgbGlzdFNlbGVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxpc3RTZWxlY3RCdG4udGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgICBcbiAgICBsaXN0U2VsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSxsaXN0TmFtZSk7XG4gICAgICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgICAgIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REaXNwbGF5JykuYXBwZW5kQ2hpbGQobGlzdFNlbGVjdEJ0bik7XG4gICAgY2xlYXJOZXdJdGVtQnRuKClcbiAgICBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKTtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBpdGVtQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgLy9jcmVhdGUgRGl2IGZvciBlYWNoIGl0ZW06XG4gICAgICAgIGxldCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGxpc3ROYW1lICsgaXRlbUFycmF5LmluZGV4T2YoaXRlbSkpO1xuICAgICAgICBpdGVtRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbUJveCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuICAgICAgICBsZXQgaXRlbUZyb250QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Gcm9udEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Gcm9udEJ0bicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChpdGVtRnJvbnRCdG4pO1xuXG5cbiAgICAgICAgLy9nZW5lcmF0ZSBpdGVtIGRpc3BsYXlcbiAgICAgICAgbGV0IGRvbUl0ZW0gPSBkaXNwbGF5SXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheVByaW9yaXR5KGl0ZW0sIGRvbUl0ZW0pO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgcHJpb3JpdHkgdG9nZ2xlIGJ1dHRvbiAob3JkZXIgYmFzZWQgb24gcHJlcGVuZClcbiAgICAgICAgcHJpb3JpdHlJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgICAgICBcblxuICAgICAgICAvL2dlbmVyYXRlIGNvbXBsZXRpbmcgaXRlbSBidXR0b25cbiAgICAgICAgY29tcGxldGVJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIC8vIGxldCBpdGVtQmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBpdGVtQmFja0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1CYWNrQnRuJyk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5hcHBlbmRDaGlsZChpdGVtQmFja0J0bik7XG5cbiAgICAgICAgLy9nZW5lcmF0ZSBkZXRhaWxzIGJ1dHRvbiAocmVhbGx5IGp1c3QgUCBlbGVtZW50KVxuICAgICAgICBkZXRhaWxJdGVtKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICAvLyBkZWxldGVJdGVtKGl0ZW0sIGl0ZW1EaXYsIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckl0ZW1zKGl0ZW1BcnJheSl7XG4gICAgY29uc3QgbGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICB3aGlsZSAobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbGlzdERpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBjbGVhckRldGFpbHMoaXRlbUFycmF5LCBpdGVtVG9Ta2lwKXtcbiAgICBpdGVtQXJyYXkuZm9yRWFjaChpdGVtQ2xlYXIgPT4ge1xuICAgICAgICBpdGVtQ2xlYXIuZGV0YWlsID0gZmFsc2U7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBkZXRhaWxzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XG4gICAgd2hpbGUoZGV0YWlsc0Rpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgICBkZXRhaWxzRGlzcGxheS5yZW1vdmVDaGlsZChkZXRhaWxzRGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck5ld0l0ZW1CdG4oKXtcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKTtcbiAgICBpZihuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgbmV3SXRlbUJ0bi5yZW1vdmVDaGlsZChuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlQnRuJyk7XG4gICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICBcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICBkaXNwbGF5Q29tcGxldGUoaXRlbSwgZG9tSXRlbSk7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSk7XG4gICAgfSk7XG5cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChjb21wbGV0ZUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRnJvbnRCdG4nKS5wcmVwZW5kKGNvbXBsZXRlQnRuKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvbXBsZXRlKGl0ZW0sIGRvbUl0ZW0pe1xuICAgIGlmIChpdGVtLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSsnQ29udGFpbmVyJyk7XG4gICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Db250YWluZXInKTtcbiAgICBcbiAgICBsZXQgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkb21JdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtsaXN0TmFtZX0gZG9tSXRlbWAgKTtcbiAgICBkb21JdGVtLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblxuICAgIGxldCBkYXRlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1EYXRlJyk7XG4gICAgZGF0ZUl0ZW0udGV4dENvbnRlbnQgPSAnRHVlICcgKyBpdGVtLmR1ZURhdGU7XG5cbiAgICAvL21ha2UgY29tcGxldGUgYW5kIHByaW9yaXR5IGl0ZW0gc3R5bGluZyBwZXJzaXN0ZW50XG4gICAgaWYgKGl0ZW0uZ2V0Q29tcGxldGUoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uZ2V0UHJpb3JpdHkoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvbUl0ZW0pO1xuICAgIFxuICAgIGlmIChpdGVtLmR1ZURhdGUgPT09ICdOL0EnKXtcbiAgICB9ZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRhdGVJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tSXRlbTtcbn1cblxuZnVuY3Rpb24gcHJpb3JpdHlJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlCdG4nKTtcbiAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9ICchJztcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkucHJlcGVuZChwcmlvcml0eUJ0bik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRnJvbnRCdG4nKS5wcmVwZW5kKHByaW9yaXR5QnRuKTtcbiAgICBcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS50b2dnbGVQcmlvcml0eSgpO1xuICAgICAgICBkaXNwbGF5UHJpb3JpdHkoaXRlbSwgZG9tSXRlbSk7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcmlvcml0eShpdGVtLCBkb21JdGVtKXsgICAgXG4gICAgaWYgKGl0ZW0uZ2V0UHJpb3JpdHkoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9ZWxzZXtcbiAgICAgICAgZG9tSXRlbS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsSXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGV0YWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQ29udGFpbmVyJyk7XG4gICAgbGV0IGRldGFpbFRvZ2dsZUhvbGRlcjtcbiAgICBcbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgZGV0YWlsVG9nZ2xlSG9sZGVyID0gaXRlbS5kZXRhaWw7XG4gICAgICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xuICAgICAgICBpdGVtLmRldGFpbCA9IGRldGFpbFRvZ2dsZUhvbGRlcjtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2xkTGFiZWwnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9sZExhYmVsJyk7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvbGRMYWJlbCcpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVElUTEU6XFxyXFxuJztcbiAgICBkYXRlLnRleHRDb250ZW50ID0gJ0RVRTpcXHJcXG4nO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSAnREVTQ1JJUFRJT046XFxyXFxuJztcblxuICAgIGxldCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IHNob3dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBzaG93RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGxldCBpdGVtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUgKyBpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSk7XG5cbiAgICBzaG93VGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIHNob3dEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICAgIHNob3dEZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIHNob3dUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbFRpdGxlJyk7XG4gICAgc2hvd0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxEYXRlJyk7XG4gICAgc2hvd0Rlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxEZXNjJyk7XG5cbiAgICBpZiAoaXRlbS5kZXRhaWwgPT09IGZhbHNlKXtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoc2hvd1RpdGxlKTtcbiAgICAgICAgZWRpdFRpdGxlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuICAgIFxuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dEYXRlKTtcbiAgICAgICAgZWRpdERhdGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyk7XG4gICAgICAgIFxuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dEZXNjKTtcbiAgICAgICAgZWRpdERlc2MoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyk7XG5cbiAgICAgICAgZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVCdG4nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIEl0ZW0nO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0ZW0uc2V0RGVsZXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uZ2V0U3RvcmFnZUl0ZW1TdHJpbmcoKSk7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJykucmVtb3ZlQ2hpbGQoaXRlbURpdik7XG4gICAgICAgIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpO1xuICAgIH0pO1xuXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xufVxuXG4vL2RldGFpbHMgZWRpdCBmdW5jdGlvbnM6XG5mdW5jdGlvbiBlZGl0VGl0bGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyl7XG4gICAgY29uc3QgZWRpdFRpdGxlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFRpdGxlQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgVGl0bGUnO1xuICAgIGVkaXRUaXRsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0aXRsZUhvbGRlciA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IHByb21wdCgnVGl0bGU6ICcpO1xuXG4gICAgICAgIC8vbmVlZCB0byBkbyBib3RoLCB1cGRhdGUgc2NyZWVuIHdpdGggZmlyc3RcbiAgICAgICAgaXRlbS50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAvL3VwZGF0ZSBvYmogd2l0aCBzZWNvbmRcbiAgICAgICAgaXRlbS5zZXRUaXRsZShuZXdUaXRsZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RpdGxlPT09JycpO1xuXG4gICAgICAgIGlmIChuZXdUaXRsZSA9PT0gJycgfHwgbmV3VGl0bGUgPT09IG51bGwpe1xuICAgICAgICAgICAgaXRlbS50aXRsZSA9IHRpdGxlSG9sZGVyO1xuICAgICAgICAgICAgaXRlbS5zZXRUaXRsZSh0aXRsZUhvbGRlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuXG4gICAgICAgIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSk7XG4gICAgfSk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChlZGl0VGl0bGVCdG4pO1xufVxuXG5mdW5jdGlvbiBlZGl0RGF0ZShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKXtcbiAgICBsZXQgZWRpdERhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0RGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgRHVlIERhdGUnO1xuXG4gICAgZWRpdERhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZGF0ZUhvbGRlciA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IG5ld0RhdGUgPSBwcm9tcHQoJ0R1ZSBEYXRlOiAnKTtcblxuICAgICAgICBpdGVtLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgICAgICBpdGVtLnNldERhdGUobmV3RGF0ZSk7XG5cblxuICAgICAgICBpZiAobmV3RGF0ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBpdGVtLmR1ZURhdGUgPSBkYXRlSG9sZGVyO1xuICAgICAgICAgICAgaXRlbS5zZXREYXRlKGRhdGVIb2xkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICAgICAgdXBkYXRlSXRlbVN0b3JhZ2UoaXRlbSwgaXRlbUFycmF5KTsgICAgICBcbiAgICB9KVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdERhdGVCdG4pO1xufVxuXG5mdW5jdGlvbiBlZGl0RGVzYyhpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKXtcbiAgICBsZXQgZWRpdERlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0RGVzY0J0bi50ZXh0Q29udGVudCA9ICdFZGl0IERlc2NyaXB0aW9uJztcbiAgICBcbiAgICBlZGl0RGVzY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkZXNjSG9sZGVyID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IG5ld0Rlc2MgPSBwcm9tcHQoJ0VkaXQgRGVzY3JpcHRpb246ICcpO1xuXG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICAgICAgICBpdGVtLnNldERlc2MobmV3RGVzYyk7XG5cbiAgICAgICAgaWYgKGl0ZW0uZGVzY3JpcHRpb24gPT09IG51bGwpe1xuICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NIb2xkZXI7XG4gICAgICAgICAgICBpdGVtLnNldERlc2MoZGVzY0hvbGRlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgZGlzcGxheURldGFpbChpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlRGV0YWlsKGl0ZW0pO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdERlc2NCdG4pO1xufVxuXG5cblxuLy9mdW5jdGlvbiB0byB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gdXBkYXRlSXRlbVN0b3JhZ2UoaXRlbSwgaXRlbUFycmF5KXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtLm9yZGVyfWAsIGl0ZW0uZ2V0U3RvcmFnZUl0ZW1TdHJpbmcoKSk7XG4gICAgLy8gaXRlbS5zdG9yYWdlSXRlbVN0cmluZyA9IGl0ZW0uZ2V0U3RvcmFnZUl0ZW1TdHJpbmcoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXlbMF0pO1xuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtQXJyYXkke2l0ZW1BcnJheS5sZW5ndGh9YCwgaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xufVxuXG5leHBvcnQge2luaXRMaXN0U2VsZWN0QnRuLCBpbml0TmV3TGlzdEJ0biwgaW5pdE5ld0l0ZW1CdG4sIHJlbmRlckl0ZW1zLCBpbml0RGVmYXVsdExpc3QsIGNsZWFyTmV3SXRlbUJ0bn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdERlZmF1bHRMaXN0LCBpbml0TmV3TGlzdEJ0biwgaW5pdExpc3RTZWxlY3RCdG4sIHJlbmRlckl0ZW1zLCBjbGVhck5ld0l0ZW1CdG4saW5pdE5ld0l0ZW1CdG4gfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGZpbHRlckJ5TGlzdCwgbG9hZExvY2FsU3RvcmFnZUNvdW50ZXJzfSBmcm9tICcuL2FwcExvZ2ljLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuY29uc3QgbGlzdEFycmF5ID0gW107XG5jb25zdCBpdGVtQXJyYXkgPSBbXTtcblxubGV0IHN0b3JhZ2VMaXN0TmFtZUhvbGRlcjtcbmxldCBzdG9yYWdlSXRlbVN0cmluZ0hvbGRlcjtcbmxldCBzcGxpdEl0ZW1TdHJpbmdzO1xubGV0IFtzdG9yYWdlTGlzdENvdW50ZXIsIHN0b3JhZ2VJdGVtQ291bnRlcl0gPSBsb2FkTG9jYWxTdG9yYWdlQ291bnRlcnMoKTtcblxuaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXksIHN0b3JhZ2VMaXN0Q291bnRlcik7XG5pbml0RGVmYXVsdExpc3QobGlzdEFycmF5LCBpdGVtQXJyYXkpO1xuXG4vL3JlbG9hZCBsaXN0QXJyYXkgZnJvbSBsYXN0IHNlc3Npb25cbmlmIChzdG9yYWdlTGlzdENvdW50ZXIgIT09IDApe1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0b3JhZ2VMaXN0Q291bnRlcjsgaSsrKXtcbiAgICAgICAgc3RvcmFnZUxpc3ROYW1lSG9sZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxpc3RBcnJheSR7aX1gKTtcbiAgICAgICAgbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdChzdG9yYWdlTGlzdE5hbWVIb2xkZXIsIGkpKTtcbiAgICAgICAgaW5pdExpc3RTZWxlY3RCdG4oc3RvcmFnZUxpc3ROYW1lSG9sZGVyLCBpdGVtQXJyYXkpO1xuICAgIH1cbn1cblxuLy9yZWxvYWQgaXRlbUFycmF5IGZyb20gbGFzdCBzZXNzaW9uXG5pZiAoc3RvcmFnZUl0ZW1Db3VudGVyICE9PSAwKXtcbiAgICBmb3IgKGxldCBpID0gMTsgaTw9c3RvcmFnZUl0ZW1Db3VudGVyOyBpKyspe1xuICAgICAgICBzdG9yYWdlSXRlbVN0cmluZ0hvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtQXJyYXkke2l9YCk7XG4gICAgICAgIC8vY3JlYXRlIE9iaiBmb3IgbGlzdEFycmF5IHVzaW5nIHRoZSBwYXJzZWQgdGl0bGUgYW5kIGxpc3RcbiAgICAgICAgXG4gICAgICAgIHNwbGl0SXRlbVN0cmluZ3MgPSBzdG9yYWdlSXRlbVN0cmluZ0hvbGRlci5zcGxpdCgnOjo6OicpO1xuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKHNwbGl0SXRlbVN0cmluZ3NbMF0sIHNwbGl0SXRlbVN0cmluZ3NbMV0sIHNwbGl0SXRlbVN0cmluZ3NbNl0sXG4gICAgICAgICAgICBzcGxpdEl0ZW1TdHJpbmdzWzJdLCBzcGxpdEl0ZW1TdHJpbmdzWzNdLCBzcGxpdEl0ZW1TdHJpbmdzWzRdLFxuICAgICAgICAgICAgc3BsaXRJdGVtU3RyaW5nc1s1XSkpO1xuICAgIH1cbn1cblxuLy9maXJzdCBsb2FkIG9mIHRoZSBsaXN0c1xucmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgJ2RlZmF1bHQnKSwnZGVmYXVsdCcpO1xuY2xlYXJOZXdJdGVtQnRuKClcbmluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgJ2RlZmF1bHQnKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==