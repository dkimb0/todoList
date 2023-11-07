import { initDefaultList, initNewListBtn, initListSelectBtn, renderItems, clearNewItemBtn,initNewItemBtn } from './ui.js';
import { createList, createItem, filterByList} from './appLogic.js';
import './style.css';


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




initNewListBtn(listArray, itemArray, storageListCounter);
initDefaultList(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push(createList(storageListNameHolder, i));
        // console.log(localStorage.getItem(`listArray${i}`));
        initListSelectBtn(storageListNameHolder, itemArray);
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
        itemArray.push(createItem(splitItemStrings[0], splitItemStrings[1], splitItemStrings[6],
            splitItemStrings[2], splitItemStrings[3], splitItemStrings[4],
            splitItemStrings[5]));

        // console.log(itemArray[itemArray.length - 1]);

        
    }
}
// console.log(itemArray);
// console.log(itemArray[0].getPriority());
// console.log(itemArray[0].priority);

renderItems(filterByList(itemArray, 'default'),'default');
clearNewItemBtn()
initNewItemBtn(itemArray, 'default');



