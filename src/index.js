import { initDefaultList, initNewListBtn, initListSelectBtn } from './ui.js';
import { createList} from './appLogic.js';
import './style.css';


const listArray = [];
const itemArray = [];

let storageListCounter = 0;
let storageListNameHolder;
// localStorage.clear();

//new or load storageListCounter
if (!localStorage.getItem('listCounter')){
    storageListCounter = 0;
}else{
    storageListCounter = Number(localStorage.getItem('listCounter'));
}
console.log(storageListCounter);





initNewListBtn(listArray, itemArray, storageListCounter);
initDefaultList(listArray, itemArray);

//reload listArray from last session
if (storageListCounter !== 0){
    for (let i = 1; i <= storageListCounter; i++){
        storageListNameHolder = localStorage.getItem(`listArray${i}`);
        listArray.push(createList(storageListNameHolder, i));
        console.log(localStorage.getItem(`listArray${i}`));
        initListSelectBtn(storageListNameHolder, itemArray);
    }
}




