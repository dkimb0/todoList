import { initDefaultList, initNewListBtn, initListSelectBtn, renderItems, clearNewItemBtn,initNewItemBtn } from './ui.js';
import { createList, createItem, filterByList, loadLocalStorageCounters} from './appLogic.js';
import './style.css';

// localStorage.clear();

const listArray = [];
const itemArray = [];

let storageListNameHolder;
let storageItemStringHolder;
let splitItemStrings;
let [storageListCounter, storageItemCounter] = loadLocalStorageCounters();

initNewListBtn(listArray, itemArray, storageListCounter);
initDefaultList(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push(createList(storageListNameHolder, i));
        initListSelectBtn(storageListNameHolder, itemArray);
    }
}

//reload itemArray from last session
if (storageItemCounter !== 0){
    for (let i = 1; i<=storageItemCounter; i++){
        storageItemStringHolder = localStorage.getItem(`itemArray${i}`);
        //create Obj for listArray using the parsed title and list
        
        splitItemStrings = storageItemStringHolder.split('::::');
        itemArray.push(createItem(splitItemStrings[0], splitItemStrings[1], splitItemStrings[6],
            splitItemStrings[2], splitItemStrings[3], splitItemStrings[4],
            splitItemStrings[5]));
    }
}

//first load of the lists
renderItems(filterByList(itemArray, 'default'),'default');
clearNewItemBtn()
initNewItemBtn(itemArray, 'default');



