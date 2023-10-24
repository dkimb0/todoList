/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    let dueDate;
    let priority = false;
    let list = _list;
    let complete = false;

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

    return{
        title,
        list,
        toggleComplete,
        getComplete

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
/* harmony export */   completeItem: () => (/* binding */ completeItem),
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
        
        //checking if name exists already
        if ((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.checkListName)(listName, listArray)){
            //list added to array
            listArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createList)(listName, listArray.length + 1));
            //generate list selector button
            initListSelectBtn(listName, itemArray);
            //just clear items, as new list has no renderable items
            clearItems();

        }else{
            console.log('list name already taken');
        }
    });
    document.getElementById('listSelect').appendChild(initNewListBtn);
}


//this needs to be re-rendered each time list view is loaded
function initNewItemBtn(itemArray){
    const initNewItemBtn = document.createElement('button');
    initNewItemBtn.textContent = 'New Item';

    initNewItemBtn.addEventListener('click', () => {
        let itemName = prompt('Item title: ');
        let listName = prompt('List: ');

        itemArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createItem)(itemName, listName));
        clearItems();
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName), listName);
    })
    document.getElementById('listSelect').appendChild(initNewItemBtn);
}






//creates new list div and selector button
//NEEDS: list render, 
function initListSelectBtn(listName, itemArray){
    //initialize list select button
    const listSelectBtn = document.createElement('button');
    listSelectBtn.textContent = listName;

    listSelectBtn.addEventListener('click', () => {
        //how to know which list is selected? Need one for creation too
        clearItems();
        console.log(listName);
        console.log(itemArray);
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName),listName);
    });
    document.getElementById('listDisplay').appendChild(listSelectBtn);
}

//function to select list



function clearItems(){
    const listDisplay = document.getElementById('items');
    while (listDisplay.firstElementChild) {
        listDisplay.removeChild(listDisplay.firstElementChild);
    }
}

function renderItems(itemArray, listName){
    for (let i in itemArray){
        let listItem = document.createElement('ul');
        console.log(listName);
        listItem.setAttribute('class', listName);
        listItem.textContent = itemArray[i].title;
        if (itemArray[i].getComplete() === true){
            listItem.style.setProperty('text-decoration', 'line-through');
        }
        document.getElementById('items').appendChild(listItem);
    }
    completeItem(itemArray);
    
    //load up list items
}

function completeItem(itemArray){
    const allItems = document.querySelectorAll('ul');

    
    for (let i = 0; i < allItems.length; i++){

        allItems[i].addEventListener('click', () => {
            if (allItems[i].style.getPropertyValue('text-decoration') === 'line-through'){
                allItems[i].style.setProperty('text-decoration', 'none');                
            }else{
                allItems[i].style.setProperty('text-decoration', 'line-through');
            }
            let item = itemArray.filter((item) => {return item.title === allItems[i].textContent});
            item[0].toggleComplete();

        })
    }        
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _appLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic.js */ "./src/appLogic.js");




//init
const listArray = [];
//create item array. all items in one array, can filter by project
const itemArray = [];
//flag for selected list. Probably don't want to leave


(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewListBtn)(listArray, itemArray);
(0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.initNewItemBtn)(itemArray);



//SANDBOX
//create a default list
// listArray.push(createList('default', listArray.length + 1));
// initListSelectBtn('default', itemArray);
// listArray.push(createList('untitled', listArray.length + 1));
// initListSelectBtn('untitled', itemArray);



// create an item for default list
// itemArray.push(createItem('grocery','default'));
// itemArray.push(createItem('bake cake','default'));
// itemArray.push(createItem('gym','default'));
// itemArray.push(createItem('grow','untitled'));
// itemArray.push(createItem('grocery', 'default'));
// renderItems(filterByList(itemArray, 'default'), 'default');

// renderItems(filterByList(itemArray, 'default'));


// //filter by list name
// console.log(listArray.filter((list) => {return list.name === 'defaultList'}));
// console.log(itemArray.filter((item) => {return item.list === 'defaultList'}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLDhCQUE4QjtBQUM3RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWlGOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekI7QUFDQSwyQkFBMkIscURBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixxREFBVTtBQUNqQztBQUNBLG9CQUFvQix1REFBWTtBQUNoQyxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFZO0FBQ2hDLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtREFBbUQsOENBQThDO0FBQ2pHOztBQUVBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7OztVQzlHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zRztBQUNqQzs7O0FBR3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHNEQUFjO0FBQ2Qsc0RBQWM7Ozs7QUFJZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSwyQ0FBMkMsbUNBQW1DO0FBQzlFLDJDQUEyQyxtQ0FBbUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL21ldGhvZHMgbmVlZGVkOiBvcmRlciBzZXR0aW5nXG5mdW5jdGlvbiBjcmVhdGVMaXN0KF9uYW1lLCBfb3JkZXIpe1xuICAgIGxldCBuYW1lID0gX25hbWU7XG4gICAgbGV0IHZpc2libGUgPSB0cnVlO1xuICAgIGxldCBvcmRlciA9IF9vcmRlcjtcblxuICAgIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh2aXNpYmxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VmlzaWJsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHZpc2libGU7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICAgICAgbmFtZSxcbiAgICAgICAgb3JkZXIsXG4gICAgICAgIHRvZ2dsZVZpc2libGUsXG4gICAgICAgIGdldFZpc2libGVcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKF90aXRsZSwgX2xpc3Qpe1xuICAgIC8vYWRkIGZvcm0gbGF0ZXIgaW4gVUkgd2hpY2ggd2lsbCBwb3B1bGF0ZSB0aGVzZVxuICAgIGxldCB0aXRsZSA9IF90aXRsZTtcbiAgICBsZXQgZHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmYWxzZTtcbiAgICBsZXQgbGlzdCA9IF9saXN0O1xuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wbGV0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgICAgIGdldENvbXBsZXRlXG5cbiAgICB9O1xufVxuXG4vL3JldHVybnMgdHJ1ZSBpZiBuYW1lIGlzIHVuaXF1ZSwgZmFsc2UgaWYgbmFtZSB0YWtlblxuZnVuY3Rpb24gY2hlY2tMaXN0TmFtZShsaXN0TmFtZSwgbGlzdEFycmF5KXtcbiAgICBsZXQgbmFtZVVuaXF1ZSA9IChsaXN0QXJyYXkuZmlsdGVyKChsaXN0KSA9PiB7cmV0dXJuIGxpc3QubmFtZSA9PT0gbGlzdE5hbWV9KSkubGVuZ3RoO1xuICAgIGlmIChuYW1lVW5pcXVlID09PSAwKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCByZXN1bHQgPSBpdGVtQXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7cmV0dXJuIGl0ZW0ubGlzdCA9PT0gbGlzdE5hbWV9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QgfTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBjaGVja0xpc3ROYW1lLCBmaWx0ZXJCeUxpc3QgfSBmcm9tIFwiLi9hcHBMb2dpY1wiO1xuXG4vL2luaXRcbmZ1bmN0aW9uIGluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5KXtcbiAgICAvL2NyZWF0aW5nIGJ1dHRvbiBpbiBET01cbiAgICBjb25zdCBpbml0TmV3TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdMaXN0QnRuLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcbiAgICBcbiAgICBpbml0TmV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGxpc3ROYW1lID0gcHJvbXB0KCdMaXN0IE5hbWU6ICcsICd1bnRpdGxlZCcpO1xuICAgICAgICBcbiAgICAgICAgLy9jaGVja2luZyBpZiBuYW1lIGV4aXN0cyBhbHJlYWR5XG4gICAgICAgIGlmIChjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpKXtcbiAgICAgICAgICAgIC8vbGlzdCBhZGRlZCB0byBhcnJheVxuICAgICAgICAgICAgbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdChsaXN0TmFtZSwgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgbGlzdCBzZWxlY3RvciBidXR0b25cbiAgICAgICAgICAgIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpO1xuICAgICAgICAgICAgLy9qdXN0IGNsZWFyIGl0ZW1zLCBhcyBuZXcgbGlzdCBoYXMgbm8gcmVuZGVyYWJsZSBpdGVtc1xuICAgICAgICAgICAgY2xlYXJJdGVtcygpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgbmFtZSBhbHJlYWR5IHRha2VuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFNlbGVjdCcpLmFwcGVuZENoaWxkKGluaXROZXdMaXN0QnRuKTtcbn1cblxuXG4vL3RoaXMgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQgZWFjaCB0aW1lIGxpc3QgdmlldyBpcyBsb2FkZWRcbmZ1bmN0aW9uIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSl7XG4gICAgY29uc3QgaW5pdE5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbml0TmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9ICdOZXcgSXRlbSc7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcbiAgICAgICAgbGV0IGxpc3ROYW1lID0gcHJvbXB0KCdMaXN0OiAnKTtcblxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSkpO1xuICAgICAgICBjbGVhckl0ZW1zKCk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RTZWxlY3QnKS5hcHBlbmRDaGlsZChpbml0TmV3SXRlbUJ0bik7XG59XG5cblxuXG5cblxuXG4vL2NyZWF0ZXMgbmV3IGxpc3QgZGl2IGFuZCBzZWxlY3RvciBidXR0b25cbi8vTkVFRFM6IGxpc3QgcmVuZGVyLCBcbmZ1bmN0aW9uIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpe1xuICAgIC8vaW5pdGlhbGl6ZSBsaXN0IHNlbGVjdCBidXR0b25cbiAgICBjb25zdCBsaXN0U2VsZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdFNlbGVjdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuXG4gICAgbGlzdFNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9ob3cgdG8ga25vdyB3aGljaCBsaXN0IGlzIHNlbGVjdGVkPyBOZWVkIG9uZSBmb3IgY3JlYXRpb24gdG9vXG4gICAgICAgIGNsZWFySXRlbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXkpO1xuICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksbGlzdE5hbWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGlzcGxheScpLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RCdG4pO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHNlbGVjdCBsaXN0XG5cblxuXG5mdW5jdGlvbiBjbGVhckl0ZW1zKCl7XG4gICAgY29uc3QgbGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICB3aGlsZSAobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbGlzdERpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdERpc3BsYXkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSl7XG4gICAgZm9yIChsZXQgaSBpbiBpdGVtQXJyYXkpe1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0TmFtZSk7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBsaXN0TmFtZSk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbUFycmF5W2ldLnRpdGxlO1xuICAgICAgICBpZiAoaXRlbUFycmF5W2ldLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgbGlzdEl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIGNvbXBsZXRlSXRlbShpdGVtQXJyYXkpO1xuICAgIFxuICAgIC8vbG9hZCB1cCBsaXN0IGl0ZW1zXG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpdGVtQXJyYXkpe1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwnKTtcblxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSXRlbXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIGFsbEl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFsbEl0ZW1zW2ldLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RleHQtZGVjb3JhdGlvbicpID09PSAnbGluZS10aHJvdWdoJyl7XG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge3JldHVybiBpdGVtLnRpdGxlID09PSBhbGxJdGVtc1tpXS50ZXh0Q29udGVudH0pO1xuICAgICAgICAgICAgaXRlbVswXS50b2dnbGVDb21wbGV0ZSgpO1xuXG4gICAgICAgIH0pXG4gICAgfSAgICAgICAgXG59XG5cblxuXG5cbmV4cG9ydCB7aW5pdExpc3RTZWxlY3RCdG4sIGluaXROZXdMaXN0QnRuLCBpbml0TmV3SXRlbUJ0biwgcmVuZGVySXRlbXMsIGNvbXBsZXRlSXRlbX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0TGlzdFNlbGVjdEJ0biwgaW5pdE5ld0xpc3RCdG4sIGluaXROZXdJdGVtQnRuLCByZW5kZXJJdGVtcywgY29tcGxldGVJdGVtfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGZpbHRlckJ5TGlzdCB9IGZyb20gJy4vYXBwTG9naWMuanMnO1xuXG5cbi8vaW5pdFxuY29uc3QgbGlzdEFycmF5ID0gW107XG4vL2NyZWF0ZSBpdGVtIGFycmF5LiBhbGwgaXRlbXMgaW4gb25lIGFycmF5LCBjYW4gZmlsdGVyIGJ5IHByb2plY3RcbmNvbnN0IGl0ZW1BcnJheSA9IFtdO1xuLy9mbGFnIGZvciBzZWxlY3RlZCBsaXN0LiBQcm9iYWJseSBkb24ndCB3YW50IHRvIGxlYXZlXG5cblxuaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXkpO1xuaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5KTtcblxuXG5cbi8vU0FOREJPWFxuLy9jcmVhdGUgYSBkZWZhdWx0IGxpc3Rcbi8vIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QoJ2RlZmF1bHQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuLy8gaW5pdExpc3RTZWxlY3RCdG4oJ2RlZmF1bHQnLCBpdGVtQXJyYXkpO1xuLy8gbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdCgndW50aXRsZWQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuLy8gaW5pdExpc3RTZWxlY3RCdG4oJ3VudGl0bGVkJywgaXRlbUFycmF5KTtcblxuXG5cbi8vIGNyZWF0ZSBhbiBpdGVtIGZvciBkZWZhdWx0IGxpc3Rcbi8vIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oJ2dyb2NlcnknLCdkZWZhdWx0JykpO1xuLy8gaXRlbUFycmF5LnB1c2goY3JlYXRlSXRlbSgnYmFrZSBjYWtlJywnZGVmYXVsdCcpKTtcbi8vIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oJ2d5bScsJ2RlZmF1bHQnKSk7XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdncm93JywndW50aXRsZWQnKSk7XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdncm9jZXJ5JywgJ2RlZmF1bHQnKSk7XG4vLyByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCAnZGVmYXVsdCcpLCAnZGVmYXVsdCcpO1xuXG4vLyByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCAnZGVmYXVsdCcpKTtcblxuXG4vLyAvL2ZpbHRlciBieSBsaXN0IG5hbWVcbi8vIGNvbnNvbGUubG9nKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSAnZGVmYXVsdExpc3QnfSkpO1xuLy8gY29uc29sZS5sb2coaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge3JldHVybiBpdGVtLmxpc3QgPT09ICdkZWZhdWx0TGlzdCd9KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9