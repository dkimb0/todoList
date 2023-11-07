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
button:active{
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,2BAA2B;IAC3B,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;IAChC,2BAA2B;IAC3B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,kCAAkC;IAClC,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,kCAAkC;IAClC,sBAAsB;AAC1B;;;;AAIA;;;IAGI,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;IAGI,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap');\n\n:root{\n    --appWidth: 300px;\n    --offWhite: rgb(243, 243, 243);\n    --white: rgb(255, 255, 255);\n    --lightGrey: rgb(223, 223, 223);\n    --darkGreen: rgb(118, 158, 158);\n    --lightGreen: rgb(157, 212, 212);\n    --offBlack: rgb(10, 10, 10);\n    --darkRed: rgb(220, 76, 76);\n    --lightRed: rgb(226, 147, 147);\n}\n\nbody{\n    font-size: 1.5rem;\n    font-family: 'Merriweather', serif;\n    background-color: var(--lightGrey);\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: center;\n}\n\nbutton{\n    font-size: 1rem;\n    color: var(--offWhite);\n    border-radius:10px;\n    background-color:var(--darkGreen);\n    height: 2rem;\n    border: none;\n}\nbutton:hover,\nbutton:active{\n    background-color:var(--lightGreen);\n    color: var(--offBlack);\n}\n\n\n\n.priorityBtn,\n.completeBtn\n{\n    width: 2rem;\n}\n\n.priorityBtn,\n.completeBtn{\n    margin-right: 2px;\n}\n\n.deleteBtn{\n    margin-left: 2px;\n    margin-top: 2rem;\n    background-color: var(--darkRed);\n}\n\n.deleteBtn:hover{\n    background-color: var(--lightRed);\n}\n\n.itemDate{\n    font-size: 0.75rem;\n    flex-grow: 0;\n    flex-wrap: nowrap;\n    margin-right: 1rem;\n}\n\n.itemContainer{\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n}\n\n.domItem{\n    flex-wrap: wrap;\n    margin-left: .5rem;\n}\n\n* > #details{\n    font-size: 1rem;\n}\n\n.detailDesc,\n.detailDate,\n.detailTitle{\n    white-space: pre;\n    /* margin-bottom: 1rem; */\n    text-wrap: balance;\n}\n\n.boldLabel{\n    font-weight: 900;\n}\n\n#details > button{\n    margin-bottom: 1rem;\n}\n\np {\n    margin: 0;\n    align-self: center;\n    flex-grow: 1;\n    user-select: none;\n}\n\np:hover{\n    cursor: pointer;\n}\n\n.itemBox:hover{\n    background-color: var(--white);\n}\n\n#totalContainer{\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    width: 70vw;\n}\n\n#mainContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n}\n\n#itemAndDetails{\n    display: flex;\n    justify-content: space-between;\n\n    /* border: 1px solid black; */\n}\n\n#items{\n    flex: auto;\n    /* flex-grow: 3; */\n    align-items: stretch;\n    min-width: 25vw;\n}\n\n#detailsContainer{\n    flex: 3;\n}\n\n#listDisplay > *{\n    margin-right: 2px;\n}\n\n#buttonContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n* > #buttonContainer{\n    width: var(--appWidth);\n}\n\n.itemBox{\n    background-color: var(--offWhite);\n    display: flex;\n    justify-content: flex-start;\n    border-radius: 10px;\n    padding: 2px;\n    margin-top: 4px;\n}\n\n.deleteBtn{\n    justify-content: flex-end;\n}\n\n#detailsContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    padding-left: 2rem;\n\n}\n\n#details{\n    display: flex;\n    flex-direction: column;\n    min-width: 25vw;\n}\n\n.itemFrontBtn{\n    display: flex;\n    align-items: stretch;\n}"],"sourceRoot":""}]);
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

        localStorage.setItem('lastList', listName);
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
let lastList;

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

//reload lastList from last session
if (!localStorage.getItem('lastList')){
    lastList = 'default';
}else{
    lastList = localStorage.getItem('lastList');
}

//first load of the lists
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderItems)((0,_appLogic_js__WEBPACK_IMPORTED_MODULE_1__.filterByList)(itemArray, lastList), lastList);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.clearNewItemBtn)()
;(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewItemBtn)(itemArray, lastList);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7O0FBRXBCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RDs7Ozs7Ozs7VUMvWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTBIO0FBQzVCO0FBQ3pFOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzRUFBd0I7QUFDdkU7O0FBRUEsc0RBQWM7QUFDZCx1REFBZTs7QUFFZjtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QyxpRUFBaUUsRUFBRTtBQUNuRSx1QkFBdUIsd0RBQVU7QUFDakMsUUFBUSx5REFBaUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxtRUFBbUUsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSxtREFBVyxDQUFDLDBEQUFZO0FBQ3hCLHVEQUFlO0FBQ2YsdURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHBMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWFwcFdpZHRoOiAzMDBweDtcbiAgICAtLW9mZldoaXRlOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gICAgLS13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIC0tbGlnaHRHcmV5OiByZ2IoMjIzLCAyMjMsIDIyMyk7XG4gICAgLS1kYXJrR3JlZW46IHJnYigxMTgsIDE1OCwgMTU4KTtcbiAgICAtLWxpZ2h0R3JlZW46IHJnYigxNTcsIDIxMiwgMjEyKTtcbiAgICAtLW9mZkJsYWNrOiByZ2IoMTAsIDEwLCAxMCk7XG4gICAgLS1kYXJrUmVkOiByZ2IoMjIwLCA3NiwgNzYpO1xuICAgIC0tbGlnaHRSZWQ6IHJnYigyMjYsIDE0NywgMTQ3KTtcbn1cblxuYm9keXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JleSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZGFya0dyZWVuKTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xufVxuYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0R3JlZW4pO1xuICAgIGNvbG9yOiB2YXIoLS1vZmZCbGFjayk7XG59XG5cblxuXG4ucHJpb3JpdHlCdG4sXG4uY29tcGxldGVCdG5cbntcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLnByaW9yaXR5QnRuLFxuLmNvbXBsZXRlQnRue1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uZGVsZXRlQnRue1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUmVkKTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFJlZCk7XG59XG5cbi5pdGVtRGF0ZXtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLml0ZW1Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uZG9tSXRlbXtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuXG4qID4gI2RldGFpbHN7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGV0YWlsRGVzYyxcbi5kZXRhaWxEYXRlLFxuLmRldGFpbFRpdGxle1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cbiAgICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbi5ib2xkTGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2RldGFpbHMgPiBidXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnA6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbUJveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbiN0b3RhbENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgd2lkdGg6IDcwdnc7XG59XG5cbiNtYWluQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuI2l0ZW1BbmREZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbiNpdGVtc3tcbiAgICBmbGV4OiBhdXRvO1xuICAgIC8qIGZsZXgtZ3JvdzogMzsgKi9cbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBtaW4td2lkdGg6IDI1dnc7XG59XG5cbiNkZXRhaWxzQ29udGFpbmVye1xuICAgIGZsZXg6IDM7XG59XG5cbiNsaXN0RGlzcGxheSA+ICp7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbiNidXR0b25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4qID4gI2J1dHRvbkNvbnRhaW5lcntcbiAgICB3aWR0aDogdmFyKC0tYXBwV2lkdGgpO1xufVxuXG4uaXRlbUJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZGVsZXRlQnRue1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbiNkZXRhaWxzQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG59XG5cbiNkZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDI1dnc7XG59XG5cbi5pdGVtRnJvbnRCdG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7OztBQUlBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlcjp3Z2h0QDQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYXBwV2lkdGg6IDMwMHB4O1xcbiAgICAtLW9mZldoaXRlOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1saWdodEdyZXk6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gICAgLS1kYXJrR3JlZW46IHJnYigxMTgsIDE1OCwgMTU4KTtcXG4gICAgLS1saWdodEdyZWVuOiByZ2IoMTU3LCAyMTIsIDIxMik7XFxuICAgIC0tb2ZmQmxhY2s6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAgLS1kYXJrUmVkOiByZ2IoMjIwLCA3NiwgNzYpO1xcbiAgICAtLWxpZ2h0UmVkOiByZ2IoMjI2LCAxNDcsIDE0Nyk7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrR3JlZW4pO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbGlnaHRHcmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmZCbGFjayk7XFxufVxcblxcblxcblxcbi5wcmlvcml0eUJ0bixcXG4uY29tcGxldGVCdG5cXG57XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlCdG4sXFxuLmNvbXBsZXRlQnRue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuLmRlbGV0ZUJ0bntcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1JlZCk7XFxufVxcblxcbi5kZWxldGVCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuLml0ZW1EYXRle1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLml0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZG9tSXRlbXtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XFxufVxcblxcbiogPiAjZGV0YWlsc3tcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsRGVzYyxcXG4uZGV0YWlsRGF0ZSxcXG4uZGV0YWlsVGl0bGV7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxuLmJvbGRMYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI2RldGFpbHMgPiBidXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxucDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbUJveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4jdG90YWxDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICB3aWR0aDogNzB2dztcXG59XFxuXFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbn1cXG5cXG4jaXRlbUFuZERldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbiNpdGVtc3tcXG4gICAgZmxleDogYXV0bztcXG4gICAgLyogZmxleC1ncm93OiAzOyAqL1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4jZGV0YWlsc0NvbnRhaW5lcntcXG4gICAgZmxleDogMztcXG59XFxuXFxuI2xpc3REaXNwbGF5ID4gKntcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcblxcbiNidXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiogPiAjYnV0dG9uQ29udGFpbmVye1xcbiAgICB3aWR0aDogdmFyKC0tYXBwV2lkdGgpO1xcbn1cXG5cXG4uaXRlbUJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uZGVsZXRlQnRue1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZGV0YWlsc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFxufVxcblxcbiNkZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxufVxcblxcbi5pdGVtRnJvbnRCdG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9tZXRob2RzIG5lZWRlZDogb3JkZXIgc2V0dGluZ1xuZnVuY3Rpb24gY3JlYXRlTGlzdChfbmFtZSwgX29yZGVyKXtcbiAgICBsZXQgbmFtZSA9IF9uYW1lO1xuICAgIGxldCBvcmRlciA9IF9vcmRlcjtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgb3JkZXJcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKF90aXRsZSwgX2xpc3QsIF9vcmRlciwgX2R1ZURhdGUgPSAnTi9BJywgX2Rlc2NyaXB0aW9uID0gJ04vQScsIF9jb21wbGV0ZSA9IGZhbHNlLCBfcHJpb3JpdHkgPSBmYWxzZSl7XG4gICAgLy9hZGQgZm9ybSBsYXRlciBpbiBVSSB3aGljaCB3aWxsIHBvcHVsYXRlIHRoZXNlXG4gICAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICAgIGxldCBsaXN0ID0gX2xpc3Q7XG4gICAgbGV0IGR1ZURhdGUgPSBfZHVlRGF0ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG5cbiAgICBsZXQgY29tcGxldGUgPSBfY29tcGxldGUgPT09ICd0cnVlJztcbiAgICBsZXQgcHJpb3JpdHkgPSBfcHJpb3JpdHkgPT09ICd0cnVlJztcbiAgICBsZXQgZGV0YWlsID0gZmFsc2U7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuICAgIGxldCBzdG9yYWdlSXRlbVN0cmluZztcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcHJpb3JpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RvcmFnZUl0ZW1TdHJpbmcgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgJzo6OjonICsgbGlzdCArICc6Ojo6JyArIGR1ZURhdGUgKyAnOjo6OicgKyBkZXNjcmlwdGlvblxuICAgICsgXCI6Ojo6XCIgKyBjb21wbGV0ZSArICc6Ojo6JyArIHByaW9yaXR5ICsgJzo6OjonICsgb3JkZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVsZXRlID0gKCkgPT4ge1xuICAgICAgICBsaXN0ID0gJ2RlbGV0ZSc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzYyA9IChuZXdEZXNjKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGV0YWlsLFxuICAgICAgICBzdG9yYWdlSXRlbVN0cmluZyxcbiAgICAgICAgb3JkZXIsXG4gICAgICAgIHByaW9yaXR5LFxuXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgICAgICBnZXRDb21wbGV0ZSxcbiAgICAgICAgdG9nZ2xlUHJpb3JpdHksXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICBnZXRTdG9yYWdlSXRlbVN0cmluZyxcbiAgICAgICAgc2V0RGVsZXRlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGF0ZSxcbiAgICAgICAgc2V0RGVzY1xuICAgIH07XG59XG5cbi8vcmV0dXJucyB0cnVlIGlmIG5hbWUgaXMgdW5pcXVlLCBmYWxzZSBpZiBuYW1lIHRha2VuXG5mdW5jdGlvbiBjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpe1xuICAgIGxldCBuYW1lVW5pcXVlID0gKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSBsaXN0TmFtZX0pKS5sZW5ndGg7XG4gICAgaWYgKG5hbWVVbmlxdWUgPT09IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5saXN0ID09PSBsaXN0TmFtZX0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbChpdGVtKXtcbiAgICBpZiAoaXRlbS5kZXRhaWwgPT09IHRydWUpe1xuICAgICAgICBpdGVtLmRldGFpbCA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgICBpdGVtLmRldGFpbCA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlQ291bnRlcnMoKXtcbiAgICBsZXQgc3RvcmFnZUxpc3RDb3VudGVyO1xuICAgIGxldCBzdG9yYWdlSXRlbUNvdW50ZXI7XG4gICAgXG5cbiAgICAvL25ldyBvciBsb2FkIHN0b3JhZ2VMaXN0Q291bnRlclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RDb3VudGVyJykpe1xuICAgICAgICBzdG9yYWdlTGlzdENvdW50ZXIgPSAwO1xuICAgIH1lbHNle1xuICAgICAgICBzdG9yYWdlTGlzdENvdW50ZXIgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RDb3VudGVyJykpO1xuICAgIH1cblxuICAgIC8vbmV3IG9yIGxvYWQgc3RvcmFnZUl0ZW1Db3VudGVyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSl7XG4gICAgICAgIHN0b3JhZ2VJdGVtQ291bnRlciA9IDA7XG4gICAgfWVsc2V7XG4gICAgICAgIHN0b3JhZ2VJdGVtQ291bnRlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbUNvdW50ZXInKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtzdG9yYWdlTGlzdENvdW50ZXIsIHN0b3JhZ2VJdGVtQ291bnRlcl07XG59XG5cbi8vIGZ1bmN0aW9uIGxvYWRMb2NhbFN0b3JhZ2VMaXN0QXJyYXkoc3RvcmFnZUxpc3RDb3VudGVyKXtcbi8vICAgICBsZXQgc3RvcmFnZUxpc3ROYW1lSG9sZGVyO1xuXG4vLyAgICAgaWYgKHN0b3JhZ2VMaXN0Q291bnRlciAhPT0gMCl7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0b3JhZ2VMaXN0Q291bnRlcjsgaSsrKXtcbi8vICAgICAgICAgICAgIHN0b3JhZ2VMaXN0TmFtZUhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsaXN0QXJyYXkke2l9YCk7XG4vLyAgICAgICAgICAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KHN0b3JhZ2VMaXN0TmFtZUhvbGRlciwgaSkpO1xuLy8gICAgICAgICAgICAgaW5pdExpc3RTZWxlY3RCdG4oc3RvcmFnZUxpc3ROYW1lSG9sZGVyLCBpdGVtQXJyYXkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QsIHRvZ2dsZURldGFpbCwgbG9hZExvY2FsU3RvcmFnZUNvdW50ZXJzfTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QsIHRvZ2dsZURldGFpbCB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbi8vaW5pdFxuXG5mdW5jdGlvbiBpbml0RGVmYXVsdExpc3QobGlzdEFycmF5LCBpdGVtQXJyYXkpe1xuICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QoJ2RlZmF1bHQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuICAgIGluaXRMaXN0U2VsZWN0QnRuKCdkZWZhdWx0JywgaXRlbUFycmF5KTtcbn1cblxuZnVuY3Rpb24gaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXksIHN0b3JhZ2VMaXN0Q291bnRlcil7XG4gICAgLy9jcmVhdGluZyBidXR0b24gaW4gRE9NXG4gICAgY29uc3QgaW5pdE5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbml0TmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9ICdORVcgTElTVCc7XG4gICAgXG4gICAgaW5pdE5ld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0TmFtZSA9IHByb21wdCgnTGlzdCBOYW1lOiAnLCAndW50aXRsZWQnKTtcbiAgICAgICAgaWYgKGxpc3ROYW1lID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9jaGVja2luZyBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG4gICAgICAgIGlmIChjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpKXtcbiAgICAgICAgICAgIC8vbGlzdCBhZGRlZCB0byBhcnJheVxuICAgICAgICAgICAgbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdChsaXN0TmFtZSwgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgbGlzdCBzZWxlY3RvciBidXR0b25cbiAgICAgICAgICAgIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpO1xuICAgICAgICAgICAgLy9qdXN0IGNsZWFyIGl0ZW1zLCBhcyBuZXcgbGlzdCBoYXMgbm8gcmVuZGVyYWJsZSBpdGVtc1xuICAgICAgICAgICAgY2xlYXJJdGVtcyhpdGVtQXJyYXkpO1xuICAgICAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLCBsaXN0TmFtZSk7XG5cblxuICAgICAgICAgICAgLy9zZXQgdXAgc3RvcmFnZVxuICAgICAgICAgICAgc3RvcmFnZUxpc3RDb3VudGVyICs9IDE7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdENvdW50ZXInLCBzdG9yYWdlTGlzdENvdW50ZXIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZUxpc3RDb3VudGVyKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxpc3RBcnJheSR7c3RvcmFnZUxpc3RDb3VudGVyfWAsIGxpc3ROYW1lKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBpdGVtQXJyYXkke3N0b3JhZ2VMaXN0Q291bnRlcn1gKSk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBuYW1lIGFscmVhZHkgdGFrZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnRuJykuYXBwZW5kQ2hpbGQoaW5pdE5ld0xpc3RCdG4pO1xufVxuXG4vL3RoaXMgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQgZWFjaCB0aW1lIGxpc3QgdmlldyBpcyBsb2FkZWRcbmZ1bmN0aW9uIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IGluaXROZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0l0ZW1CdG4udGV4dENvbnRlbnQgPSBgKyAke2xpc3ROYW1lfSBJdGVtYDtcblxuICAgIGluaXROZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaXRlbU5hbWUgPSBwcm9tcHQoJ0l0ZW0gdGl0bGU6ICcpO1xuICAgICAgICBpZiAoaXRlbU5hbWUgPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oaXRlbU5hbWUsIGxpc3ROYW1lLCBpdGVtQXJyYXkubGVuZ3RoKzEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLnN0b3JhZ2VJdGVtU3RyaW5nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW1BcnJheSBMZW5ndGg6ICcgKyBpdGVtQXJyYXkubGVuZ3RoKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtQXJyYXkubGVuZ3RofWAsIGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5zdG9yYWdlSXRlbVN0cmluZyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBpdGVtQXJyYXkke2l0ZW1BcnJheS5sZW5ndGh9YCwgaXRlbUFycmF5W2l0ZW1BcnJheS5sZW5ndGggLTFdLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtQXJyYXlbaXRlbUFycmF5Lmxlbmd0aCAtMV0uc3RvcmFnZUl0ZW1TdHJpbmcgKyAnOjo6OicgKyBpdGVtQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1Db3VudGVyJywgaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLCBsaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdJdGVtQnRuKTtcbn1cblxuLy9jcmVhdGVzIG5ldyBsaXN0IHNlbGVjdG9yIGJ1dHRvblxuZnVuY3Rpb24gaW5pdExpc3RTZWxlY3RCdG4obGlzdE5hbWUsIGl0ZW1BcnJheSwgbGlzdEFycmF5KXtcbiAgICAvL2luaXRpYWxpemUgbGlzdCBzZWxlY3QgYnV0dG9uXG4gICAgY29uc3QgbGlzdFNlbGVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxpc3RTZWxlY3RCdG4udGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgICBcbiAgICBsaXN0U2VsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSxsaXN0TmFtZSk7XG4gICAgICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgICAgIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TGlzdCcsIGxpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGlzcGxheScpLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RCdG4pO1xuICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5LCBsaXN0TmFtZSk7XG59XG5cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgaXRlbUFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIC8vY3JlYXRlIERpdiBmb3IgZWFjaCBpdGVtOlxuICAgICAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBsaXN0TmFtZSArIGl0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgaXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1Cb3gnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJykuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG5cbiAgICAgICAgbGV0IGl0ZW1Gcm9udEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRnJvbnRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtRnJvbnRCdG4nKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQoaXRlbUZyb250QnRuKTtcblxuXG4gICAgICAgIC8vZ2VuZXJhdGUgaXRlbSBkaXNwbGF5XG4gICAgICAgIGxldCBkb21JdGVtID0gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcmlvcml0eShpdGVtLCBkb21JdGVtKTtcblxuICAgICAgICAvL2dlbmVyYXRlIHByaW9yaXR5IHRvZ2dsZSBidXR0b24gKG9yZGVyIGJhc2VkIG9uIHByZXBlbmQpXG4gICAgICAgIHByaW9yaXR5SXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy9nZW5lcmF0ZSBjb21wbGV0aW5nIGl0ZW0gYnV0dG9uXG4gICAgICAgIGNvbXBsZXRlSXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvLyBsZXQgaXRlbUJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gaXRlbUJhY2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtQmFja0J0bicpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkuYXBwZW5kQ2hpbGQoaXRlbUJhY2tCdG4pO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgZGV0YWlscyBidXR0b24gKHJlYWxseSBqdXN0IFAgZWxlbWVudClcbiAgICAgICAgZGV0YWlsSXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvL2dlbmVyYXRlIGRlbGV0ZSBidXR0b25cbiAgICAgICAgLy8gZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJJdGVtcyhpdGVtQXJyYXkpe1xuICAgIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJyk7XG4gICAgd2hpbGUgKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGxpc3REaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXRhaWxzKGl0ZW1BcnJheSwgaXRlbVRvU2tpcCl7XG4gICAgaXRlbUFycmF5LmZvckVhY2goaXRlbUNsZWFyID0+IHtcbiAgICAgICAgaXRlbUNsZWFyLmRldGFpbCA9IGZhbHNlO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgZGV0YWlsc0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuICAgIHdoaWxlKGRldGFpbHNEaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgZGV0YWlsc0Rpc3BsYXkucmVtb3ZlQ2hpbGQoZGV0YWlsc0Rpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdJdGVtQnRuKCl7XG4gICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtQnRuJyk7XG4gICAgaWYobmV3SXRlbUJ0bi5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAgIG5ld0l0ZW1CdG4ucmVtb3ZlQ2hpbGQobmV3SXRlbUJ0bi5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaXRlbSwgZG9tSXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZUJ0bicpO1xuICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0udG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgICAgZGlzcGxheUNvbXBsZXRlKGl0ZW0sIGRvbUl0ZW0pO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQoY29tcGxldGVCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUZyb250QnRuJykucHJlcGVuZChjb21wbGV0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDb21wbGV0ZShpdGVtLCBkb21JdGVtKXtcbiAgICBpZiAoaXRlbS5nZXRDb21wbGV0ZSgpID09PSB0cnVlKXtcbiAgICAgICAgZG9tSXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgIH1lbHNle1xuICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbm9uZScpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJdGVtKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgbGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkrJ0NvbnRhaW5lcicpO1xuICAgIGl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtQ29udGFpbmVyJyk7XG4gICAgXG4gICAgbGV0IGRvbUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZG9tSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7bGlzdE5hbWV9IGRvbUl0ZW1gICk7XG4gICAgZG9tSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICBsZXQgZGF0ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtRGF0ZScpO1xuICAgIGRhdGVJdGVtLnRleHRDb250ZW50ID0gJ0R1ZSAnICsgaXRlbS5kdWVEYXRlO1xuXG4gICAgLy9tYWtlIGNvbXBsZXRlIGFuZCBwcmlvcml0eSBpdGVtIHN0eWxpbmcgcGVyc2lzdGVudFxuICAgIGlmIChpdGVtLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgfVxuICAgIGlmIChpdGVtLmdldFByaW9yaXR5KCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKydDb250YWluZXInKS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbiAgICBcbiAgICBpZiAoaXRlbS5kdWVEYXRlID09PSAnTi9BJyl7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKydDb250YWluZXInKS5hcHBlbmRDaGlsZChkYXRlSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUl0ZW07XG59XG5cbmZ1bmN0aW9uIHByaW9yaXR5SXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5QnRuJyk7XG4gICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSAnISc7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLnByZXBlbmQocHJpb3JpdHlCdG4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUZyb250QnRuJykucHJlcGVuZChwcmlvcml0eUJ0bik7XG4gICAgXG4gICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0udG9nZ2xlUHJpb3JpdHkoKTtcbiAgICAgICAgZGlzcGxheVByaW9yaXR5KGl0ZW0sIGRvbUl0ZW0pO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJpb3JpdHkoaXRlbSwgZG9tSXRlbSl7ICAgIFxuICAgIGlmIChpdGVtLmdldFByaW9yaXR5KCkgPT09IHRydWUpe1xuICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRldGFpbEl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGRldGFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5xdWVyeVNlbGVjdG9yKCcuaXRlbUNvbnRhaW5lcicpO1xuICAgIGxldCBkZXRhaWxUb2dnbGVIb2xkZXI7XG4gICAgXG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGRldGFpbFRvZ2dsZUhvbGRlciA9IGl0ZW0uZGV0YWlsO1xuICAgICAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbiAgICAgICAgaXRlbS5kZXRhaWwgPSBkZXRhaWxUb2dnbGVIb2xkZXI7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYm9sZExhYmVsJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JvbGRMYWJlbCcpO1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2xkTGFiZWwnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RJVExFOlxcclxcbic7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9ICdEVUU6XFxyXFxuJztcbiAgICBkZXNjLnRleHRDb250ZW50ID0gJ0RFU0NSSVBUSU9OOlxcclxcbic7XG5cbiAgICBsZXQgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxldCBzaG93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsZXQgc2hvd0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lICsgaXRlbUFycmF5LmluZGV4T2YoaXRlbSkpO1xuXG4gICAgc2hvd1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBzaG93RGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBzaG93RGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBzaG93VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxUaXRsZScpO1xuICAgIHNob3dEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsRGF0ZScpO1xuICAgIHNob3dEZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsRGVzYycpO1xuXG4gICAgaWYgKGl0ZW0uZGV0YWlsID09PSBmYWxzZSl7XG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XG4gICAgICAgIGVkaXRUaXRsZShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lLCBkZXRhaWxzKTtcbiAgICBcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzaG93RGF0ZSk7XG4gICAgICAgIGVkaXREYXRlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuICAgICAgICBcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzaG93RGVzYyk7XG4gICAgICAgIGVkaXREZXNjKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpO1xuXG4gICAgICAgIGRlbGV0ZUl0ZW0oaXRlbSwgaXRlbURpdiwgaXRlbUFycmF5LCBsaXN0TmFtZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbSwgaXRlbURpdiwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlQnRuJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBJdGVtJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdGVtLnNldERlbGV0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpLnJlbW92ZUNoaWxkKGl0ZW1EaXYpO1xuICAgICAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbiAgICB9KTtcblxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbn1cblxuLy9kZXRhaWxzIGVkaXQgZnVuY3Rpb25zOlxuZnVuY3Rpb24gZWRpdFRpdGxlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpe1xuICAgIGNvbnN0IGVkaXRUaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUaXRsZUJ0bi50ZXh0Q29udGVudCA9ICdFZGl0IFRpdGxlJztcbiAgICBlZGl0VGl0bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdGl0bGVIb2xkZXIgPSBpdGVtLnRpdGxlO1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBwcm9tcHQoJ1RpdGxlOiAnKTtcblxuICAgICAgICAvL25lZWQgdG8gZG8gYm90aCwgdXBkYXRlIHNjcmVlbiB3aXRoIGZpcnN0XG4gICAgICAgIGl0ZW0udGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgLy91cGRhdGUgb2JqIHdpdGggc2Vjb25kXG4gICAgICAgIGl0ZW0uc2V0VGl0bGUobmV3VGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUaXRsZT09PScnKTtcblxuICAgICAgICBpZiAobmV3VGl0bGUgPT09ICcnIHx8IG5ld1RpdGxlID09PSBudWxsKXtcbiAgICAgICAgICAgIGl0ZW0udGl0bGUgPSB0aXRsZUhvbGRlcjtcbiAgICAgICAgICAgIGl0ZW0uc2V0VGl0bGUodGl0bGVIb2xkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcblxuICAgICAgICB1cGRhdGVJdGVtU3RvcmFnZShpdGVtLCBpdGVtQXJyYXkpO1xuICAgIH0pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlQnRuKTtcbn1cblxuZnVuY3Rpb24gZWRpdERhdGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyl7XG4gICAgbGV0IGVkaXREYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdERhdGVCdG4udGV4dENvbnRlbnQgPSAnQ2hhbmdlIER1ZSBEYXRlJztcblxuICAgIGVkaXREYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGRhdGVIb2xkZXIgPSBpdGVtLmR1ZURhdGU7XG4gICAgICAgIGxldCBuZXdEYXRlID0gcHJvbXB0KCdEdWUgRGF0ZTogJyk7XG5cbiAgICAgICAgaXRlbS5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgaXRlbS5zZXREYXRlKG5ld0RhdGUpO1xuXG5cbiAgICAgICAgaWYgKG5ld0RhdGUgPT09IG51bGwpe1xuICAgICAgICAgICAgaXRlbS5kdWVEYXRlID0gZGF0ZUhvbGRlcjtcbiAgICAgICAgICAgIGl0ZW0uc2V0RGF0ZShkYXRlSG9sZGVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgICAgICBkaXNwbGF5RGV0YWlsKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xuICAgICAgICB0b2dnbGVEZXRhaWwoaXRlbSk7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSk7ICAgICAgXG4gICAgfSlcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGVkaXREYXRlQnRuKTtcbn1cblxuZnVuY3Rpb24gZWRpdERlc2MoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyl7XG4gICAgbGV0IGVkaXREZXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdERlc2NCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBEZXNjcmlwdGlvbic7XG4gICAgXG4gICAgZWRpdERlc2NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZGVzY0hvbGRlciA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBuZXdEZXNjID0gcHJvbXB0KCdFZGl0IERlc2NyaXB0aW9uOiAnKTtcblxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICAgICAgaXRlbS5zZXREZXNjKG5ld0Rlc2MpO1xuXG4gICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uID09PSBudWxsKXtcbiAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBkZXNjSG9sZGVyO1xuICAgICAgICAgICAgaXRlbS5zZXREZXNjKGRlc2NIb2xkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIGRpc3BsYXlEZXRhaWwoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgICAgIHRvZ2dsZURldGFpbChpdGVtKTtcbiAgICAgICAgdXBkYXRlSXRlbVN0b3JhZ2UoaXRlbSwgaXRlbUFycmF5KTtcbiAgICB9KTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGVkaXREZXNjQnRuKTtcbn1cblxuXG5cbi8vZnVuY3Rpb24gdG8gdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHVwZGF0ZUl0ZW1TdG9yYWdlKGl0ZW0sIGl0ZW1BcnJheSl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGl0ZW1BcnJheSR7aXRlbS5vcmRlcn1gLCBpdGVtLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCkpO1xuICAgIC8vIGl0ZW0uc3RvcmFnZUl0ZW1TdHJpbmcgPSBpdGVtLmdldFN0b3JhZ2VJdGVtU3RyaW5nKCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbUFycmF5WzBdKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaXRlbUFycmF5JHtpdGVtQXJyYXkubGVuZ3RofWAsIGl0ZW1BcnJheVtpdGVtQXJyYXkubGVuZ3RoIC0xXS5nZXRTdG9yYWdlSXRlbVN0cmluZygpKTtcbn1cblxuZXhwb3J0IHtpbml0TGlzdFNlbGVjdEJ0biwgaW5pdE5ld0xpc3RCdG4sIGluaXROZXdJdGVtQnRuLCByZW5kZXJJdGVtcywgaW5pdERlZmF1bHRMaXN0LCBjbGVhck5ld0l0ZW1CdG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXREZWZhdWx0TGlzdCwgaW5pdE5ld0xpc3RCdG4sIGluaXRMaXN0U2VsZWN0QnRuLCByZW5kZXJJdGVtcywgY2xlYXJOZXdJdGVtQnRuLGluaXROZXdJdGVtQnRuIH0gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBmaWx0ZXJCeUxpc3QsIGxvYWRMb2NhbFN0b3JhZ2VDb3VudGVyc30gZnJvbSAnLi9hcHBMb2dpYy5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmNvbnN0IGxpc3RBcnJheSA9IFtdO1xuY29uc3QgaXRlbUFycmF5ID0gW107XG5cbmxldCBzdG9yYWdlTGlzdE5hbWVIb2xkZXI7XG5sZXQgc3RvcmFnZUl0ZW1TdHJpbmdIb2xkZXI7XG5sZXQgc3BsaXRJdGVtU3RyaW5ncztcbmxldCBbc3RvcmFnZUxpc3RDb3VudGVyLCBzdG9yYWdlSXRlbUNvdW50ZXJdID0gbG9hZExvY2FsU3RvcmFnZUNvdW50ZXJzKCk7XG5sZXQgbGFzdExpc3Q7XG5cbmluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5LCBzdG9yYWdlTGlzdENvdW50ZXIpO1xuaW5pdERlZmF1bHRMaXN0KGxpc3RBcnJheSwgaXRlbUFycmF5KTtcblxuLy9yZWxvYWQgbGlzdEFycmF5IGZyb20gbGFzdCBzZXNzaW9uXG5pZiAoc3RvcmFnZUxpc3RDb3VudGVyICE9PSAwKXtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdG9yYWdlTGlzdENvdW50ZXI7IGkrKyl7XG4gICAgICAgIHN0b3JhZ2VMaXN0TmFtZUhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsaXN0QXJyYXkke2l9YCk7XG4gICAgICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3Qoc3RvcmFnZUxpc3ROYW1lSG9sZGVyLCBpKSk7XG4gICAgICAgIGluaXRMaXN0U2VsZWN0QnRuKHN0b3JhZ2VMaXN0TmFtZUhvbGRlciwgaXRlbUFycmF5KTtcbiAgICB9XG59XG5cbi8vcmVsb2FkIGl0ZW1BcnJheSBmcm9tIGxhc3Qgc2Vzc2lvblxuaWYgKHN0b3JhZ2VJdGVtQ291bnRlciAhPT0gMCl7XG4gICAgZm9yIChsZXQgaSA9IDE7IGk8PXN0b3JhZ2VJdGVtQ291bnRlcjsgaSsrKXtcbiAgICAgICAgc3RvcmFnZUl0ZW1TdHJpbmdIb2xkZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaXRlbUFycmF5JHtpfWApO1xuICAgICAgICAvL2NyZWF0ZSBPYmogZm9yIGxpc3RBcnJheSB1c2luZyB0aGUgcGFyc2VkIHRpdGxlIGFuZCBsaXN0XG4gICAgICAgIFxuICAgICAgICBzcGxpdEl0ZW1TdHJpbmdzID0gc3RvcmFnZUl0ZW1TdHJpbmdIb2xkZXIuc3BsaXQoJzo6OjonKTtcbiAgICAgICAgaXRlbUFycmF5LnB1c2goY3JlYXRlSXRlbShzcGxpdEl0ZW1TdHJpbmdzWzBdLCBzcGxpdEl0ZW1TdHJpbmdzWzFdLCBzcGxpdEl0ZW1TdHJpbmdzWzZdLFxuICAgICAgICAgICAgc3BsaXRJdGVtU3RyaW5nc1syXSwgc3BsaXRJdGVtU3RyaW5nc1szXSwgc3BsaXRJdGVtU3RyaW5nc1s0XSxcbiAgICAgICAgICAgIHNwbGl0SXRlbVN0cmluZ3NbNV0pKTtcbiAgICB9XG59XG5cbi8vcmVsb2FkIGxhc3RMaXN0IGZyb20gbGFzdCBzZXNzaW9uXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0TGlzdCcpKXtcbiAgICBsYXN0TGlzdCA9ICdkZWZhdWx0Jztcbn1lbHNle1xuICAgIGxhc3RMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RMaXN0Jyk7XG59XG5cbi8vZmlyc3QgbG9hZCBvZiB0aGUgbGlzdHNcbnJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxhc3RMaXN0KSwgbGFzdExpc3QpO1xuY2xlYXJOZXdJdGVtQnRuKClcbmluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGFzdExpc3QpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9