import { createList, createItem, checkListName, filterByList } from "./appLogic";

//init
function initNewListBtn(listArray, itemArray){
    //creating button in DOM
    const initNewListBtn = document.createElement('button');
    initNewListBtn.textContent = 'New List';
    
    initNewListBtn.addEventListener('click', () => {
        let listName = prompt('List Name: ', 'untitled');
        
        //checking if name exists already
        if (checkListName(listName, listArray)){
            //list added to array
            listArray.push(createList(listName, listArray.length + 1));
            //generate list selector button
            initListSelectBtn(listName, itemArray);
            //just clear items, as new list has no renderable items
            clearItems();
            renderItems(filterByList(itemArray, listName), listName);

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

        itemArray.push(createItem(itemName, listName));
        clearItems();
        renderItems(filterByList(itemArray, listName), listName);
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
        renderItems(filterByList(itemArray, listName),listName);
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




export {initListSelectBtn, initNewListBtn, initNewItemBtn, renderItems, completeItem};