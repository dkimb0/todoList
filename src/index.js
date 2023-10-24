import { initListSelectBtn, initNewListBtn, initNewItemBtn, renderItems, completeItem} from './ui.js';
import { createList, createItem, filterByList } from './appLogic.js';


//init
const listArray = [];
//create item array. all items in one array, can filter by project
const itemArray = [];
//flag for selected list. Probably don't want to leave


initNewListBtn(listArray, itemArray);
initNewItemBtn(itemArray);



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