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
        clearNewItemBtn()
        initNewItemBtn(itemArray, listName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLDhCQUE4QjtBQUM3RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWlGOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekI7QUFDQSwyQkFBMkIscURBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVk7O0FBRXBDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVOztBQUVoRDtBQUNBOztBQUVBLHVCQUF1QixxREFBVTtBQUNqQztBQUNBLG9CQUFvQix1REFBWTtBQUNoQyxLQUFLOztBQUVMO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVk7QUFDaEM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsbURBQW1ELDhDQUE4QztBQUNqRzs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7VUN2SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0c7QUFDakM7OztBQUdyRTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLHNEQUFjO0FBQ2Q7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDJDQUEyQyxtQ0FBbUM7QUFDOUUsMkNBQTJDLG1DQUFtQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vbWV0aG9kcyBuZWVkZWQ6IG9yZGVyIHNldHRpbmdcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoX25hbWUsIF9vcmRlcil7XG4gICAgbGV0IG5hbWUgPSBfbmFtZTtcbiAgICBsZXQgdmlzaWJsZSA9IHRydWU7XG4gICAgbGV0IG9yZGVyID0gX29yZGVyO1xuXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUgPT09IHRydWUpe1xuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2aXNpYmxlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lLFxuICAgICAgICBvcmRlcixcbiAgICAgICAgdG9nZ2xlVmlzaWJsZSxcbiAgICAgICAgZ2V0VmlzaWJsZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oX3RpdGxlLCBfbGlzdCl7XG4gICAgLy9hZGQgZm9ybSBsYXRlciBpbiBVSSB3aGljaCB3aWxsIHBvcHVsYXRlIHRoZXNlXG4gICAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICAgIGxldCBkdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IGZhbHNlO1xuICAgIGxldCBsaXN0ID0gX2xpc3Q7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICB0b2dnbGVDb21wbGV0ZSxcbiAgICAgICAgZ2V0Q29tcGxldGVcblxuICAgIH07XG59XG5cbi8vcmV0dXJucyB0cnVlIGlmIG5hbWUgaXMgdW5pcXVlLCBmYWxzZSBpZiBuYW1lIHRha2VuXG5mdW5jdGlvbiBjaGVja0xpc3ROYW1lKGxpc3ROYW1lLCBsaXN0QXJyYXkpe1xuICAgIGxldCBuYW1lVW5pcXVlID0gKGxpc3RBcnJheS5maWx0ZXIoKGxpc3QpID0+IHtyZXR1cm4gbGlzdC5uYW1lID09PSBsaXN0TmFtZX0pKS5sZW5ndGg7XG4gICAgaWYgKG5hbWVVbmlxdWUgPT09IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5saXN0ID09PSBsaXN0TmFtZX0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCB9OyIsImltcG9ydCB7IGNyZWF0ZUxpc3QsIGNyZWF0ZUl0ZW0sIGNoZWNrTGlzdE5hbWUsIGZpbHRlckJ5TGlzdCB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbi8vaW5pdFxuZnVuY3Rpb24gaW5pdE5ld0xpc3RCdG4obGlzdEFycmF5LCBpdGVtQXJyYXkpe1xuICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIERPTVxuICAgIGNvbnN0IGluaXROZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5pdE5ld0xpc3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICAgIFxuICAgIGluaXROZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPSBwcm9tcHQoJ0xpc3QgTmFtZTogJywgJ3VudGl0bGVkJyk7XG4gICAgICAgIFxuICAgICAgICAvL2NoZWNraW5nIGlmIG5hbWUgZXhpc3RzIGFscmVhZHlcbiAgICAgICAgaWYgKGNoZWNrTGlzdE5hbWUobGlzdE5hbWUsIGxpc3RBcnJheSkpe1xuICAgICAgICAgICAgLy9saXN0IGFkZGVkIHRvIGFycmF5XG4gICAgICAgICAgICBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KGxpc3ROYW1lLCBsaXN0QXJyYXkubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgLy9nZW5lcmF0ZSBsaXN0IHNlbGVjdG9yIGJ1dHRvblxuICAgICAgICAgICAgaW5pdExpc3RTZWxlY3RCdG4obGlzdE5hbWUsIGl0ZW1BcnJheSk7XG4gICAgICAgICAgICAvL2p1c3QgY2xlYXIgaXRlbXMsIGFzIG5ldyBsaXN0IGhhcyBubyByZW5kZXJhYmxlIGl0ZW1zXG4gICAgICAgICAgICBjbGVhckl0ZW1zKCk7XG4gICAgICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksIGxpc3ROYW1lKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IG5hbWUgYWxyZWFkeSB0YWtlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3RCdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3TGlzdEJ0bik7XG59XG5cblxuLy90aGlzIG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIGVhY2ggdGltZSBsaXN0IHZpZXcgaXMgbG9hZGVkXG5mdW5jdGlvbiBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKXtcbiAgICBjb25zdCBpbml0TmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluaXROZXdJdGVtQnRuLnRleHRDb250ZW50ID0gYCsgJHtsaXN0TmFtZX0gSXRlbWA7XG5cbiAgICBpbml0TmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gcHJvbXB0KCdJdGVtIHRpdGxlOiAnKTtcblxuICAgICAgICBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKGl0ZW1OYW1lLCBsaXN0TmFtZSkpO1xuICAgICAgICBjbGVhckl0ZW1zKCk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGZpbHRlckJ5TGlzdChpdGVtQXJyYXksIGxpc3ROYW1lKSwgbGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKS5hcHBlbmRDaGlsZChpbml0TmV3SXRlbUJ0bik7XG59XG5cblxuXG5cbi8vY3JlYXRlcyBuZXcgbGlzdCBzZWxlY3RvciBidXR0b25cbmZ1bmN0aW9uIGluaXRMaXN0U2VsZWN0QnRuKGxpc3ROYW1lLCBpdGVtQXJyYXkpe1xuICAgIC8vaW5pdGlhbGl6ZSBsaXN0IHNlbGVjdCBidXR0b25cbiAgICBjb25zdCBsaXN0U2VsZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdFNlbGVjdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIFxuXG4gICAgbGlzdFNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJJdGVtcygpO1xuICAgICAgICByZW5kZXJJdGVtcyhmaWx0ZXJCeUxpc3QoaXRlbUFycmF5LCBsaXN0TmFtZSksbGlzdE5hbWUpO1xuICAgICAgICBjbGVhck5ld0l0ZW1CdG4oKVxuICAgICAgICBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksIGxpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0RGlzcGxheScpLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RCdG4pO1xuICAgIGNsZWFyTmV3SXRlbUJ0bigpXG4gICAgaW5pdE5ld0l0ZW1CdG4oaXRlbUFycmF5LCBsaXN0TmFtZSk7XG4gICAgXG59XG5cbi8vZnVuY3Rpb24gdG8gc2VsZWN0IGxpc3RcblxuXG5cbmZ1bmN0aW9uIGNsZWFySXRlbXMoKXtcbiAgICBjb25zdCBsaXN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpO1xuICAgIHdoaWxlIChsaXN0RGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBsaXN0RGlzcGxheS5yZW1vdmVDaGlsZChsaXN0RGlzcGxheS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck5ld0l0ZW1CdG4oKXtcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1CdG4nKTtcbiAgICBpZihuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgbmV3SXRlbUJ0bi5yZW1vdmVDaGlsZChuZXdJdGVtQnRuLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1zKGl0ZW1BcnJheSwgbGlzdE5hbWUpe1xuXG4gICAgZm9yIChsZXQgaSBpbiBpdGVtQXJyYXkpe1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbGlzdE5hbWUpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW1BcnJheVtpXS50aXRsZTtcbiAgICAgICAgaWYgKGl0ZW1BcnJheVtpXS5nZXRDb21wbGV0ZSgpID09PSB0cnVlKXtcbiAgICAgICAgICAgIGxpc3RJdGVtLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zJykuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cbiAgICBjb21wbGV0ZUl0ZW0oaXRlbUFycmF5KTtcbiAgICBcbiAgICAvL2xvYWQgdXAgbGlzdCBpdGVtc1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaXRlbUFycmF5KXtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XG5cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEl0ZW1zLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICBhbGxJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhbGxJdGVtc1tpXS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0ZXh0LWRlY29yYXRpb24nKSA9PT0gJ2xpbmUtdGhyb3VnaCcpe1xuICAgICAgICAgICAgICAgIGFsbEl0ZW1zW2ldLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbm9uZScpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsbEl0ZW1zW2ldLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS50aXRsZSA9PT0gYWxsSXRlbXNbaV0udGV4dENvbnRlbnR9KTtcbiAgICAgICAgICAgIGl0ZW1bMF0udG9nZ2xlQ29tcGxldGUoKTtcblxuICAgICAgICB9KVxuICAgIH0gICAgICAgIFxufVxuXG5cblxuXG5leHBvcnQge2luaXRMaXN0U2VsZWN0QnRuLCBpbml0TmV3TGlzdEJ0biwgaW5pdE5ld0l0ZW1CdG4sIHJlbmRlckl0ZW1zLCBjb21wbGV0ZUl0ZW19OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdExpc3RTZWxlY3RCdG4sIGluaXROZXdMaXN0QnRuLCBpbml0TmV3SXRlbUJ0biwgcmVuZGVySXRlbXMsIGNvbXBsZXRlSXRlbX0gZnJvbSAnLi91aS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVMaXN0LCBjcmVhdGVJdGVtLCBmaWx0ZXJCeUxpc3QgfSBmcm9tICcuL2FwcExvZ2ljLmpzJztcblxuXG4vL2luaXRcbmNvbnN0IGxpc3RBcnJheSA9IFtdO1xuLy9jcmVhdGUgaXRlbSBhcnJheS4gYWxsIGl0ZW1zIGluIG9uZSBhcnJheSwgY2FuIGZpbHRlciBieSBwcm9qZWN0XG5jb25zdCBpdGVtQXJyYXkgPSBbXTtcblxuXG5cbmluaXROZXdMaXN0QnRuKGxpc3RBcnJheSwgaXRlbUFycmF5KTtcbi8vIC8vIGluaXROZXdJdGVtQnRuKGl0ZW1BcnJheSk7XG4vLyBpbml0TmV3SXRlbUJ0bihpdGVtQXJyYXksICdkZWZhdWx0Jyk7XG5cblxuXG4vL1NBTkRCT1hcbi8vY3JlYXRlIGEgZGVmYXVsdCBsaXN0XG4vLyBsaXN0QXJyYXkucHVzaChjcmVhdGVMaXN0KCdkZWZhdWx0JywgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbi8vIGluaXRMaXN0U2VsZWN0QnRuKCdkZWZhdWx0JywgaXRlbUFycmF5KTtcbi8vIGxpc3RBcnJheS5wdXNoKGNyZWF0ZUxpc3QoJ3VudGl0bGVkJywgbGlzdEFycmF5Lmxlbmd0aCArIDEpKTtcbi8vIGluaXRMaXN0U2VsZWN0QnRuKCd1bnRpdGxlZCcsIGl0ZW1BcnJheSk7XG5cblxuXG4vLyBjcmVhdGUgYW4gaXRlbSBmb3IgZGVmYXVsdCBsaXN0XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdncm9jZXJ5JywnZGVmYXVsdCcpKTtcbi8vIGl0ZW1BcnJheS5wdXNoKGNyZWF0ZUl0ZW0oJ2Jha2UgY2FrZScsJ2RlZmF1bHQnKSk7XG4vLyBpdGVtQXJyYXkucHVzaChjcmVhdGVJdGVtKCdneW0nLCdkZWZhdWx0JykpO1xuLy8gaXRlbUFycmF5LnB1c2goY3JlYXRlSXRlbSgnZ3JvdycsJ3VudGl0bGVkJykpO1xuLy8gaXRlbUFycmF5LnB1c2goY3JlYXRlSXRlbSgnZ3JvY2VyeScsICdkZWZhdWx0JykpO1xuLy8gcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgJ2RlZmF1bHQnKSwgJ2RlZmF1bHQnKTtcblxuLy8gcmVuZGVySXRlbXMoZmlsdGVyQnlMaXN0KGl0ZW1BcnJheSwgJ2RlZmF1bHQnKSk7XG5cblxuLy8gLy9maWx0ZXIgYnkgbGlzdCBuYW1lXG4vLyBjb25zb2xlLmxvZyhsaXN0QXJyYXkuZmlsdGVyKChsaXN0KSA9PiB7cmV0dXJuIGxpc3QubmFtZSA9PT0gJ2RlZmF1bHRMaXN0J30pKTtcbi8vIGNvbnNvbGUubG9nKGl0ZW1BcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5saXN0ID09PSAnZGVmYXVsdExpc3QnfSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==