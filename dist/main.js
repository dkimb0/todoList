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

        itemArray.push((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.createItem)(itemName, listName));
        clearItems();
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
        clearItems();
        renderItems((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.filterByList)(itemArray, listName),listName);
    });
    document.getElementById('listDisplay').appendChild(listSelectBtn);

    clearNewItemBtn()
    initNewItemBtn(itemArray, listName);
    
}

//function to select list



function clearItems(){
    const listDisplay = document.getElementById('items');
    while (listDisplay.firstElementChild) {
        listDisplay.removeChild(listDisplay.firstElementChild);
    }
}

function clearNewItemBtn(){
    const newItemBtn = document.getElementById('newItemBtn');
    if(newItemBtn.firstElementChild){
        newItemBtn.removeChild(newItemBtn.firstElementChild);
    }
}

function renderItems(itemArray, listName){

    for (let i in itemArray){
        let listItem = document.createElement('ul');
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
// // initNewItemBtn(itemArray);
// initNewItemBtn(itemArray, 'default');



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLDhCQUE4QjtBQUM3RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWlGOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekI7QUFDQSwyQkFBMkIscURBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVk7O0FBRXBDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVOztBQUVoRDtBQUNBOztBQUVBLHVCQUF1QixxREFBVTtBQUNqQztBQUNBLG9CQUFvQix1REFBWTtBQUNoQyxLQUFLOztBQUVMO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVk7QUFDaEMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtREFBbUQsOENBQThDO0FBQ2pHOztBQUVBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7OztVQ3JIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zRztBQUNqQzs7O0FBR3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHNEQUFjO0FBQ2Q7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDJDQUEyQyxtQ0FBbUM7QUFDOUUsMkNBQTJDLG1DQUFtQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vbWV0aG9kcyBuZWVkZWQ6IG9yZGVyIHNldHRpbmdcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoX25hbWUsIF9vcmRlcil7XG4gICAgbGV0IG5hbWUgPSBfbmFtZTtcbiAgICBsZXQgdmlzaWJsZSA9IHRydWU7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IHRydWUpe1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2aXNpYmxlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBvcmRlcixcbiAgICAgICAgdG9nZ2xlVmlzaWJsZSxcbiAgICAgICAgZ2V0VmlzaWJsZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oX3RpdGxlLCBfbGlzdCl7XG4gICAgLy9hZGQgZm9ybSBsYXRlciBpbiBVSSB3aGljaCB3aWxsIHBvcHVsYXRlIHRoZXNlXG4gICAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICAgIGxldCBkdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IGZhbHNlO1xuICAgIGxldCBsaXN0ID0gX2xpc3Q7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICB0b2dnbGVDb21wbGV0ZSxcbiAgICAgICAgZ2V0Q29tcGxldGVcblxuICAgIH07XG59XG5cbi8vcmV0dXJucyB0cnVlIGlmIG5hbWUgaXMgdW5pcXVlLCBmYWxzZSBpZiBuYW1lIHRha2VuXG5mdW5jdGlvbiBjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpe1xuICAgIGxldCBuYW1lVW5pcXVlID0gKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSBsaXN0TmFtZX0pKS5sZW5ndGg7XG4gICAgaWYgKG5hbWVVbmlxdWUgPT09IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5saXN0ID09PSBsaXN0TmFtZX0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCB9OyIsImltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbi8vaW5pdFxuZnVuY3Rpb24gaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXkpe1xuICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIERPTVxuICAgIGNvbnN0IGluaXROZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0xpc3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICAgIFxuICAgIGluaXROZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoJ0xpc3QgTmFtZTogJywgJ3VudGl0bGVkJyk7XG4gICAgICAgIFxuICAgICAgICAvL2NoZWNraW5nIGlmIG5hbWUgZXhpc3RzIGFscmVhZHlcbiAgICAgICAgaWYgKGNoZWNrTGlzdE5hbWUobGlzdE5hbWUsIGxpc3RBcnJheSkpe1xuICAgICAgICAgICAgLy9saXN0IGFkZGVkIHRvIGFycmF5XG4gICAgICAgICAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KGxpc3ROYW1lLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgLy9nZW5lcmF0ZSBsaXN0IHNlbGVjdG9yIGJ1dHRvblxuICAgICAgICAgICAgaW5pdExpc3RTZWxlY3RCdG4obGlzdE5hbWUsIGl0ZW1BcnJheSk7XG4gICAgICAgICAgICAvL2p1c3QgY2xlYXIgaXRlbXMsIGFzIG5ldyBsaXN0IGhhcyBubyByZW5kZXJhYmxlIGl0ZW1zXG4gICAgICAgICAgICBjbGVhckl0ZW1zKCk7XG4gICAgICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksIGxpc3ROYW1lKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IG5hbWUgYWxyZWFkeSB0YWtlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3RCdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3TGlzdEJ0bik7XG59XG5cblxuLy90aGlzIG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGVhY2ggdGltZSBsaXN0IHZpZXcgaXMgbG9hZGVkXG5mdW5jdGlvbiBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBpbml0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdJdGVtQnRuLnRleHRDb250ZW50ID0gYCsgJHtsaXN0TmFtZX0gSXRlbWA7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcblxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSkpO1xuICAgICAgICBjbGVhckl0ZW1zKCk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3SXRlbUJ0bik7XG59XG5cblxuXG5cbi8vY3JlYXRlcyBuZXcgbGlzdCBzZWxlY3RvciBidXR0b25cbmZ1bmN0aW9uIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpe1xuICAgIC8vaW5pdGlhbGl6ZSBsaXN0IHNlbGVjdCBidXR0b25cbiAgICBjb25zdCBsaXN0U2VsZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdFNlbGVjdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIFxuXG4gICAgbGlzdFNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJdGVtcygpO1xuICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksbGlzdE5hbWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGlzcGxheScpLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RCdG4pO1xuXG4gICAgY2xlYXJOZXdJdGVtQnRuKClcbiAgICBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICBcbn1cblxuLy9mdW5jdGlvbiB0byBzZWxlY3QgbGlzdFxuXG5cblxuZnVuY3Rpb24gY2xlYXJJdGVtcygpe1xuICAgIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJyk7XG4gICAgd2hpbGUgKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGxpc3REaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3REaXNwbGF5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3SXRlbUJ0bigpe1xuICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SXRlbUJ0bicpO1xuICAgIGlmKG5ld0l0ZW1CdG4uZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgICBuZXdJdGVtQnRuLnJlbW92ZUNoaWxkKG5ld0l0ZW1CdG4uZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySXRlbXMoaXRlbUFycmF5LCBsaXN0TmFtZSl7XG5cbiAgICBmb3IgKGxldCBpIGluIGl0ZW1BcnJheSl7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBsaXN0TmFtZSk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbUFycmF5W2ldLnRpdGxlO1xuICAgICAgICBpZiAoaXRlbUFycmF5W2ldLmdldENvbXBsZXRlKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgbGlzdEl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIGNvbXBsZXRlSXRlbShpdGVtQXJyYXkpO1xuICAgIFxuICAgIC8vbG9hZCB1cCBsaXN0IGl0ZW1zXG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpdGVtQXJyYXkpe1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwnKTtcblxuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSXRlbXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIGFsbEl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFsbEl0ZW1zW2ldLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RleHQtZGVjb3JhdGlvbicpID09PSAnbGluZS10aHJvdWdoJyl7XG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdub25lJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxsSXRlbXNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge3JldHVybiBpdGVtLnRpdGxlID09PSBhbGxJdGVtc1tpXS50ZXh0Q29udGVudH0pO1xuICAgICAgICAgICAgaXRlbVswXS50b2dnbGVDb21wbGV0ZSgpO1xuXG4gICAgICAgIH0pXG4gICAgfSAgICAgICAgXG59XG5cblxuXG5cbmV4cG9ydCB7aW5pdExpc3RTZWxlY3RCdG4sIGluaXROZXdMaXN0QnRuLCBpbml0TmV3SXRlbUJ0biwgcmVuZGVySXRlbXMsIGNvbXBsZXRlSXRlbX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0TGlzdFNlbGVjdEJ0biwgaW5pdE5ld0xpc3RCdG4sIGluaXROZXdJdGVtQnRuLCByZW5kZXJJdGVtcywgY29tcGxldGVJdGVtfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGZpbHRlckJ5TGlzdCB9IGZyb20gJy4vYXBwTG9naWMuanMnO1xuXG5cbi8vaW5pdFxuY29uc3QgbGlzdEFycmF5ID0gW107XG4vL2NyZWF0ZSBpdGVtIGFycmF5LiBhbGwgaXRlbXMgaW4gb25lIGFycmF5LCBjYW4gZmlsdGVyIGJ5IHByb2plY3RcbmNvbnN0IGl0ZW1BcnJheSA9IFtdO1xuLy9mbGFnIGZvciBzZWxlY3RlZCBsaXN0LiBQcm9iYWJseSBkb24ndCB3YW50IHRvIGxlYXZlXG5cblxuaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXkpO1xuLy8gLy8gaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5KTtcbi8vIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSwgJ2RlZmF1bHQnKTtcblxuXG5cbi8vU0FOREJPWFxuLy9jcmVhdGUgYSBkZWZhdWx0IGxpc3Rcbi8vIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QoJ2RlZmF1bHQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuLy8gaW5pdExpc3RTZWxlY3RCdG4oJ2RlZmF1bHQnLCBpdGVtQXJyYXkpO1xuLy8gbGlzdEFycmF5LnB1c2goY3JlYXRlTGlzdCgndW50aXRsZWQnLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuLy8gaW5pdExpc3RTZWxlY3RCdG4oJ3VudGl0bGVkJywgaXRlbUFycmF5KTtcblxuXG5cbi8vIGNyZWF0ZSBhbiBpdGVtIGZvciBkZWZhdWx0IGxpc3Rcbi8vIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oJ2dyb2NlcnknLCdkZWZhdWx0JykpO1xuLy8gaXRlbUFycmF5LnB1c2goY3JlYXRlSXRlbSgnYmFrZSBjYWtlJywnZGVmYXVsdCcpKTtcbi8vIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oJ2d5bScsJ2RlZmF1bHQnKSk7XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdncm93JywndW50aXRsZWQnKSk7XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdncm9jZXJ5JywgJ2RlZmF1bHQnKSk7XG4vLyByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCAnZGVmYXVsdCcpLCAnZGVmYXVsdCcpO1xuXG4vLyByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCAnZGVmYXVsdCcpKTtcblxuXG4vLyAvL2ZpbHRlciBieSBsaXN0IG5hbWVcbi8vIGNvbnNvbGUubG9nKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSAnZGVmYXVsdExpc3QnfSkpO1xuLy8gY29uc29sZS5sb2coaXRlbUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge3JldHVybiBpdGVtLmxpc3QgPT09ICdkZWZhdWx0TGlzdCd9KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9