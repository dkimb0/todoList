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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.itemBox{
    border: 1px solid black;
    max-width: 180px;
    display: flex;
    height: min-content;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB","sourcesContent":[".itemBox{\n    border: 1px solid black;\n    max-width: 180px;\n    display: flex;\n    height: min-content;\n}"],"sourceRoot":""}]);
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
/* harmony export */   filterByList: () => (/* binding */ filterByList)
/* harmony export */ });

//methods needed: order setting
function createList(_name, _order){
    let name = _name;
    let visible = true;
    let order = _order;

    const toggleVisible = () => {
        if (visible === true){
            visible = false;
        }else{
            visible = true;
        }
        return visible;
    };

    const getVisible = () => {
        return visible;
    };

    return{
        name,
        order,
        toggleVisible,
        getVisible
    };
}

function createItem(_title, _list){
    //add form later in UI which will populate these
    let title = _title;
    let list = _list;
    let dueDate = '';

    let complete = false;
    let priority = false;
    let detail = false;



    const toggleDetail = () => {
        if (detail === true){
            detail = false;
        }else{
            detail = true;
        }
    };

    const getDetail = () => {
        return detail;
    }

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

    const toggleDelete = () => {
        list = 'deleted';
    }

    return{
        title,
        list,
        dueDate,
        detail,

        toggleDetail,
        getDetail,
        toggleComplete,
        getComplete,
        togglePriority,
        getPriority,
        toggleDelete,

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



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initListSelectBtn: () => (/* binding */ initListSelectBtn),
/* harmony export */   initNewItemBtn: () => (/* binding */ initNewItemBtn),
/* harmony export */   initNewListBtn: () => (/* binding */ initNewListBtn),
/* harmony export */   renderItems: () => (/* binding */ renderItems)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");



//init
function initNewListBtn(listArray, itemArray){
    //creating button in DOM
    const initNewListBtn = document.createElement('button');
    initNewListBtn.textContent = 'New List';
    
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
        clearItems(itemArray);
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName), listName);
    });

    document.getElementById('newItemBtn').appendChild(initNewItemBtn);
}

//creates new list selector button
function initListSelectBtn(listName, itemArray){
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

        //generate item display
        let domItem = displayItem(item, itemArray, listName);

        //generate priority toggle button (order based on prepend)
        priorityItem(item, domItem, itemArray, listName);

        //generate completing item button
        completeItem(item, domItem, itemArray, listName);

        //generate details button
        detailItem(item, itemArray, listName);

        //create Div for details of each item:
        let detailDiv = document.createElement('div');
        //create name display + name change button
        //create description display + description change button
        //create date display + date change button
        //create priority display + priority change button

        //generate delete button
        deleteItem(item, itemDiv, itemArray, listName);
    });
}

function clearItems(itemArray){
    const listDisplay = document.getElementById('items');
    while (listDisplay.firstElementChild) {
        listDisplay.removeChild(listDisplay.firstElementChild);
    }

    clearDetails(itemArray);
}

function clearDetails(itemArray){
    for (let i in itemArray){
        itemArray[i].detail = false;
        console.log(itemArray[i].detail);
    };
    
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
    completeBtn.textContent = 'x';
    
    completeBtn.addEventListener('click', () => {
        item.toggleComplete();

        if (item.getComplete() === true){
            domItem.style.setProperty('text-decoration', 'line-through');
        }else{
            domItem.style.setProperty('text-decoration', 'none');
        };
    });

    document.getElementById(listName+itemArray.indexOf(item)).prepend(completeBtn);
}

function displayItem(item, itemArray, listName){
    let domItem = document.createElement('p');
    domItem.setAttribute('class', listName);
    domItem.textContent = item.title;
    //make complete and priority item styling persistent
    if (item.getComplete() === true){
        domItem.style.setProperty('text-decoration', 'line-through');
    }
    if (item.getPriority() === true){
        domItem.style.color = 'red';
    }
    document.getElementById(listName+itemArray.indexOf(item)).appendChild(domItem);

    return domItem;
}

function priorityItem(item, domItem, itemArray, listName){
    let priorityBtn = document.createElement('button');
    priorityBtn.textContent = '!';
    document.getElementById(listName+itemArray.indexOf(item)).prepend(priorityBtn);
    
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
    let detailBtn = document.createElement('button');
    detailBtn.textContent = 'Details'
    document.getElementById(listName+itemArray.indexOf(item)).appendChild(detailBtn);
    
    detailBtn.addEventListener('click', function(){
        let details = document.getElementById('details');

        let showTitle = document.createElement('span');
        let showDate = document.createElement('span');

        showTitle.textContent = 'Title: ' + item.title;
        showDate.textContent = '// Due Date: ' + item.dueDate;
        
        if (item.detail === true){
            clearDetails(itemArray);
        }else{
            details.appendChild(showTitle);
            editTitle(item, itemArray, listName, details);    
            details.appendChild(showDate);
            item.detail = true;
        }
        //create Date edit
        // editDate();
    })
}

function deleteItem(item, itemDiv, itemArray, listName){
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    document.getElementById(listName+itemArray.indexOf(item)).appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        item.list = 'delete';
        document.getElementById('items').removeChild(itemDiv);
    });
}

// function reset

//details edit functions:
function editTitle(item, itemArray, listName, details){
    const editTitleBtn = document.createElement('button');
    editTitleBtn.textContent = 'Edit Title';
    editTitleBtn.addEventListener('click', function(){
        item.title = prompt('Title: ');
        clearItems(itemArray);
        if (item.getDetail() === true){
            item.toggleDetail();
        }
        renderItems(itemArray, listName);
        //add something just to reload details menu
        //need separate function for renderDetails()
    });
    details.appendChild(editTitleBtn);
}

// function editDate(item){
//     let editDateBtn = document.createElement('button');
//     editDate.textContent = 'Change Date';
//     document.getElementById('details').appendChild(editDateBtn);

//     editDateBtn.addEventListener('click', function(){
//         item.dueDate = prompt('Due Date: ');
//     })

//     renderDetail();
// }




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const listArray = [];
const itemArray = [];
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewListBtn)(listArray, itemArray);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTs7Ozs7Ozs7O1VDcFBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ0s7QUFDekI7OztBQUdyQjtBQUNBO0FBQ0Esc0RBQWMsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHBMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLml0ZW1Cb3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtQm94e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuLy9tZXRob2RzIG5lZWRlZDogb3JkZXIgc2V0dGluZ1xuZnVuY3Rpb24gY3JlYXRlTGlzdChfbmFtZSwgX29yZGVyKXtcbiAgICBsZXQgbmFtZSA9IF9uYW1lO1xuICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgICBsZXQgb3JkZXIgPSBfb3JkZXI7XG5cbiAgICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZpc2libGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFZpc2libGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB2aXNpYmxlO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG9yZGVyLFxuICAgICAgICB0b2dnbGVWaXNpYmxlLFxuICAgICAgICBnZXRWaXNpYmxlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbShfdGl0bGUsIF9saXN0KXtcbiAgICAvL2FkZCBmb3JtIGxhdGVyIGluIFVJIHdoaWNoIHdpbGwgcG9wdWxhdGUgdGhlc2VcbiAgICBsZXQgdGl0bGUgPSBfdGl0bGU7XG4gICAgbGV0IGxpc3QgPSBfbGlzdDtcbiAgICBsZXQgZHVlRGF0ZSA9ICcnO1xuXG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgbGV0IHByaW9yaXR5ID0gZmFsc2U7XG4gICAgbGV0IGRldGFpbCA9IGZhbHNlO1xuXG5cblxuICAgIGNvbnN0IHRvZ2dsZURldGFpbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRldGFpbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBkZXRhaWwgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkZXRhaWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERldGFpbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRldGFpbDtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZURlbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgbGlzdCA9ICdkZWxldGVkJztcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBkZXRhaWwsXG5cbiAgICAgICAgdG9nZ2xlRGV0YWlsLFxuICAgICAgICBnZXREZXRhaWwsXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgICAgICBnZXRDb21wbGV0ZSxcbiAgICAgICAgdG9nZ2xlUHJpb3JpdHksXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICB0b2dnbGVEZWxldGUsXG5cbiAgICB9O1xufVxuXG4vL3JldHVybnMgdHJ1ZSBpZiBuYW1lIGlzIHVuaXF1ZSwgZmFsc2UgaWYgbmFtZSB0YWtlblxuZnVuY3Rpb24gY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KXtcbiAgICBsZXQgbmFtZVVuaXF1ZSA9IChsaXN0QXJyYXkuZmlsdGVyKChsaXN0KSA9PiB7cmV0dXJuIGxpc3QubmFtZSA9PT0gbGlzdE5hbWV9KSkubGVuZ3RoO1xuICAgIGlmIChuYW1lVW5pcXVlID09PSAwKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCByZXN1bHQgPSBpdGVtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7cmV0dXJuIGl0ZW0ubGlzdCA9PT0gbGlzdE5hbWV9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QgfTsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbi8vaW5pdFxuZnVuY3Rpb24gaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXkpe1xuICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIERPTVxuICAgIGNvbnN0IGluaXROZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0xpc3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICAgIFxuICAgIGluaXROZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoJ0xpc3QgTmFtZTogJywgJ3VudGl0bGVkJyk7XG4gICAgICAgIGlmIChsaXN0TmFtZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY2hlY2tpbmcgaWYgbmFtZSBleGlzdHMgYWxyZWFkeVxuICAgICAgICBpZiAoY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KSl7XG4gICAgICAgICAgICAvL2xpc3QgYWRkZWQgdG8gYXJyYXlcbiAgICAgICAgICAgIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QobGlzdE5hbWUsIGxpc3RBcnJheS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIGxpc3Qgc2VsZWN0b3IgYnV0dG9uXG4gICAgICAgICAgICBpbml0TGlzdFNlbGVjdEJ0bihsaXN0TmFtZSwgaXRlbUFycmF5KTtcbiAgICAgICAgICAgIC8vanVzdCBjbGVhciBpdGVtcywgYXMgbmV3IGxpc3QgaGFzIG5vIHJlbmRlcmFibGUgaXRlbXNcbiAgICAgICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgbmFtZSBhbHJlYWR5IHRha2VuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdEJ0bicpLmFwcGVuZENoaWxkKGluaXROZXdMaXN0QnRuKTtcbn1cblxuLy90aGlzIG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGVhY2ggdGltZSBsaXN0IHZpZXcgaXMgbG9hZGVkXG5mdW5jdGlvbiBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBpbml0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdJdGVtQnRuLnRleHRDb250ZW50ID0gYCsgJHtsaXN0TmFtZX0gSXRlbWA7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcbiAgICAgICAgaWYgKGl0ZW1OYW1lID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSkpO1xuICAgICAgICBjbGVhckl0ZW1zKGl0ZW1BcnJheSk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3SXRlbUJ0bik7XG59XG5cbi8vY3JlYXRlcyBuZXcgbGlzdCBzZWxlY3RvciBidXR0b25cbmZ1bmN0aW9uIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpe1xuICAgIC8vaW5pdGlhbGl6ZSBsaXN0IHNlbGVjdCBidXR0b25cbiAgICBjb25zdCBsaXN0U2VsZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdFNlbGVjdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIFxuICAgIGxpc3RTZWxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpLGxpc3ROYW1lKTtcbiAgICAgICAgY2xlYXJOZXdJdGVtQnRuKClcbiAgICAgICAgaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdERpc3BsYXknKS5hcHBlbmRDaGlsZChsaXN0U2VsZWN0QnRuKTtcbiAgICBjbGVhck5ld0l0ZW1CdG4oKVxuICAgIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgbGlzdE5hbWUpO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1zKGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGl0ZW1BcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAvL2NyZWF0ZSBEaXYgZm9yIGVhY2ggaXRlbTpcbiAgICAgICAgbGV0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgbGlzdE5hbWUgKyBpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgIGl0ZW1EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtQm94Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG4gICAgICAgIC8vZ2VuZXJhdGUgaXRlbSBkaXNwbGF5XG4gICAgICAgIGxldCBkb21JdGVtID0gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG5cbiAgICAgICAgLy9nZW5lcmF0ZSBwcmlvcml0eSB0b2dnbGUgYnV0dG9uIChvcmRlciBiYXNlZCBvbiBwcmVwZW5kKVxuICAgICAgICBwcmlvcml0eUl0ZW0oaXRlbSwgZG9tSXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG5cbiAgICAgICAgLy9nZW5lcmF0ZSBjb21wbGV0aW5nIGl0ZW0gYnV0dG9uXG4gICAgICAgIGNvbXBsZXRlSXRlbShpdGVtLCBkb21JdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKTtcblxuICAgICAgICAvL2dlbmVyYXRlIGRldGFpbHMgYnV0dG9uXG4gICAgICAgIGRldGFpbEl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG5cbiAgICAgICAgLy9jcmVhdGUgRGl2IGZvciBkZXRhaWxzIG9mIGVhY2ggaXRlbTpcbiAgICAgICAgbGV0IGRldGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL2NyZWF0ZSBuYW1lIGRpc3BsYXkgKyBuYW1lIGNoYW5nZSBidXR0b25cbiAgICAgICAgLy9jcmVhdGUgZGVzY3JpcHRpb24gZGlzcGxheSArIGRlc2NyaXB0aW9uIGNoYW5nZSBidXR0b25cbiAgICAgICAgLy9jcmVhdGUgZGF0ZSBkaXNwbGF5ICsgZGF0ZSBjaGFuZ2UgYnV0dG9uXG4gICAgICAgIC8vY3JlYXRlIHByaW9yaXR5IGRpc3BsYXkgKyBwcmlvcml0eSBjaGFuZ2UgYnV0dG9uXG5cbiAgICAgICAgLy9nZW5lcmF0ZSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGRlbGV0ZUl0ZW0oaXRlbSwgaXRlbURpdiwgaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFySXRlbXMoaXRlbUFycmF5KXtcbiAgICBjb25zdCBsaXN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpO1xuICAgIHdoaWxlIChsaXN0RGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBsaXN0RGlzcGxheS5yZW1vdmVDaGlsZChsaXN0RGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgY2xlYXJEZXRhaWxzKGl0ZW1BcnJheSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGV0YWlscyhpdGVtQXJyYXkpe1xuICAgIGZvciAobGV0IGkgaW4gaXRlbUFycmF5KXtcbiAgICAgICAgaXRlbUFycmF5W2ldLmRldGFpbCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXlbaV0uZGV0YWlsKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGRldGFpbHNEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcbiAgICB3aGlsZShkZXRhaWxzRGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAgIGRldGFpbHNEaXNwbGF5LnJlbW92ZUNoaWxkKGRldGFpbHNEaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3SXRlbUJ0bigpe1xuICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUJ0bicpO1xuICAgIGlmKG5ld0l0ZW1CdG4uZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgICBuZXdJdGVtQnRuLnJlbW92ZUNoaWxkKG5ld0l0ZW1CdG4uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGxldGVJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIFxuICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpdGVtLnRvZ2dsZUNvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKGl0ZW0uZ2V0Q29tcGxldGUoKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBkb21JdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZG9tSXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5wcmVwZW5kKGNvbXBsZXRlQnRuKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUl0ZW0oaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgbGV0IGRvbUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZG9tSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbGlzdE5hbWUpO1xuICAgIGRvbUl0ZW0udGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIC8vbWFrZSBjb21wbGV0ZSBhbmQgcHJpb3JpdHkgaXRlbSBzdHlsaW5nIHBlcnNpc3RlbnRcbiAgICBpZiAoaXRlbS5nZXRDb21wbGV0ZSgpID09PSB0cnVlKXtcbiAgICAgICAgZG9tSXRlbS5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1kZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5nZXRQcmlvcml0eSgpID09PSB0cnVlKXtcbiAgICAgICAgZG9tSXRlbS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0TmFtZStpdGVtQXJyYXkuaW5kZXhPZihpdGVtKSkuYXBwZW5kQ2hpbGQoZG9tSXRlbSk7XG5cbiAgICByZXR1cm4gZG9tSXRlbTtcbn1cblxuZnVuY3Rpb24gcHJpb3JpdHlJdGVtKGl0ZW0sIGRvbUl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGxldCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gJyEnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5wcmVwZW5kKHByaW9yaXR5QnRuKTtcbiAgICBcbiAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS50b2dnbGVQcmlvcml0eSgpO1xuICAgICAgICBpZiAoaXRlbS5nZXRQcmlvcml0eSgpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGRvbUl0ZW0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb21JdGVtLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsSXRlbShpdGVtLCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGV0YWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGV0YWlsQnRuLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE5hbWUraXRlbUFycmF5LmluZGV4T2YoaXRlbSkpLmFwcGVuZENoaWxkKGRldGFpbEJ0bik7XG4gICAgXG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuXG4gICAgICAgIGxldCBzaG93VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBzaG93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBzaG93VGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6ICcgKyBpdGVtLnRpdGxlO1xuICAgICAgICBzaG93RGF0ZS50ZXh0Q29udGVudCA9ICcvLyBEdWUgRGF0ZTogJyArIGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpdGVtLmRldGFpbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjbGVhckRldGFpbHMoaXRlbUFycmF5KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XG4gICAgICAgICAgICBlZGl0VGl0bGUoaXRlbSwgaXRlbUFycmF5LCBsaXN0TmFtZSwgZGV0YWlscyk7ICAgIFxuICAgICAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChzaG93RGF0ZSk7XG4gICAgICAgICAgICBpdGVtLmRldGFpbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9jcmVhdGUgRGF0ZSBlZGl0XG4gICAgICAgIC8vIGVkaXREYXRlKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtLCBpdGVtRGl2LCBpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ/Cfl5HvuI8nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3ROYW1lK2l0ZW1BcnJheS5pbmRleE9mKGl0ZW0pKS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0ZW0ubGlzdCA9ICdkZWxldGUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5yZW1vdmVDaGlsZChpdGVtRGl2KTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gcmVzZXRcblxuLy9kZXRhaWxzIGVkaXQgZnVuY3Rpb25zOlxuZnVuY3Rpb24gZWRpdFRpdGxlKGl0ZW0sIGl0ZW1BcnJheSwgbGlzdE5hbWUsIGRldGFpbHMpe1xuICAgIGNvbnN0IGVkaXRUaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRUaXRsZUJ0bi50ZXh0Q29udGVudCA9ICdFZGl0IFRpdGxlJztcbiAgICBlZGl0VGl0bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpdGVtLnRpdGxlID0gcHJvbXB0KCdUaXRsZTogJyk7XG4gICAgICAgIGNsZWFySXRlbXMoaXRlbUFycmF5KTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0RGV0YWlsKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgaXRlbS50b2dnbGVEZXRhaWwoKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJJdGVtcyhpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICAgICAgLy9hZGQgc29tZXRoaW5nIGp1c3QgdG8gcmVsb2FkIGRldGFpbHMgbWVudVxuICAgICAgICAvL25lZWQgc2VwYXJhdGUgZnVuY3Rpb24gZm9yIHJlbmRlckRldGFpbHMoKVxuICAgIH0pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlQnRuKTtcbn1cblxuLy8gZnVuY3Rpb24gZWRpdERhdGUoaXRlbSl7XG4vLyAgICAgbGV0IGVkaXREYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgZWRpdERhdGUudGV4dENvbnRlbnQgPSAnQ2hhbmdlIERhdGUnO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJykuYXBwZW5kQ2hpbGQoZWRpdERhdGVCdG4pO1xuXG4vLyAgICAgZWRpdERhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBpdGVtLmR1ZURhdGUgPSBwcm9tcHQoJ0R1ZSBEYXRlOiAnKTtcbi8vICAgICB9KVxuXG4vLyAgICAgcmVuZGVyRGV0YWlsKCk7XG4vLyB9XG5cblxuZXhwb3J0IHtpbml0TGlzdFNlbGVjdEJ0biwgaW5pdE5ld0xpc3RCdG4sIGluaXROZXdJdGVtQnRuLCByZW5kZXJJdGVtc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdE5ld0xpc3RCdG4gfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IGxpc3RBcnJheSA9IFtdO1xuY29uc3QgaXRlbUFycmF5ID0gW107XG5pbml0TmV3TGlzdEJ0bihsaXN0QXJyYXksIGl0ZW1BcnJheSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9