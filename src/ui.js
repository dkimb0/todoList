import { add } from "date-fns";
import { createList, createItem, checkListName, filterByList, toggleDetail } from "./appLogic";

//init

function initDefaultList(listArray, itemArray){
    listArray.push(createList('default', listArray.length + 1));
    initListSelectBtn('default', itemArray);
}

function initNewListBtn(listArray, itemArray){
    //creating button in DOM
    const initNewListBtn = document.createElement('button');
    initNewListBtn.textContent = 'NEW LIST';
    
    initNewListBtn.addEventListener('click', () => {
        let listName = prompt('List Name: ', 'untitled');
        if (listName === null){
            return;
        }
        
        //checking if name exists already
        if (checkListName(listName, listArray)){
            //list added to array
            listArray.push(createList(listName, listArray.length + 1));
            //generate list selector button
            initListSelectBtn(listName, itemArray);
            //just clear items, as new list has no renderable items
            clearItems(itemArray);
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
        if (itemName === null){
            return;
        }
        itemArray.push(createItem(itemName, listName));
        clearItems(itemArray);
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
        clearItems(itemArray);
        renderItems(filterByList(itemArray, listName),listName);
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

        let itemFrontBtn = document.createElement('div');
        itemFrontBtn.setAttribute('class', 'itemFrontBtn');
        document.getElementById(listName+itemArray.indexOf(item)).prepend(itemFrontBtn);


        //generate item display
        let domItem = displayItem(item, itemArray, listName);

        //generate priority toggle button (order based on prepend)
        priorityItem(item, domItem, itemArray, listName);

        //generate completing item button
        completeItem(item, domItem, itemArray, listName);

        let itemBackBtn = document.createElement('div');
        itemBackBtn.setAttribute('class', 'itemBackBtn');
        document.getElementById(listName+itemArray.indexOf(item)).appendChild(itemBackBtn);

        //generate details button
        detailItem(item, itemArray, listName);

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

        if (item.getComplete() === true){
            domItem.style.setProperty('text-decoration', 'line-through');
        }else{
            domItem.style.setProperty('text-decoration', 'none');
        };
    });

    // document.getElementById(listName+itemArray.indexOf(item)).prepend(completeBtn);
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemFrontBtn').prepend(completeBtn);
}

function displayItem(item, itemArray, listName){
    let domItem = document.createElement('p');
    domItem.setAttribute('class', listName);
    domItem.textContent = item.title + ' [Due: ' + item.dueDate + ']';
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
    priorityBtn.setAttribute('class', 'priorityBtn');
    priorityBtn.textContent = '!';
    // document.getElementById(listName+itemArray.indexOf(item)).prepend(priorityBtn);
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemFrontBtn').prepend(priorityBtn);
    
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
    // let detailBtn = document.createElement('button');
    let detailBtn = document.getElementById(listName+itemArray.indexOf(item)).querySelector('p');
    let detailToggleHolder;
    // detailBtn.setAttribute('class', 'detailBtn');
    // detailBtn.textContent = 'Details';
    // document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemBackBtn').prepend(detailBtn);
    
    detailBtn.addEventListener('click', function(){
        
        detailToggleHolder = item.detail;
        clearDetails(itemArray);
        item.detail = detailToggleHolder;
        displayDetail(item, itemArray, listName);
        toggleDetail(item);
        
    });
}

function displayDetail(item, itemArray, listName){
    let details = document.getElementById('details');

    let showTitle = document.createElement('span');
    let showDate = document.createElement('span');
    let showDesc = document.createElement('span');

    showTitle.textContent = 'Title: ' + item.title;
    showDate.textContent = 'Due Date: ' + item.dueDate;
    showDesc.textContent = 'Description: ' + item.description;
    if (item.detail === false){
        details.appendChild(showTitle);
        editTitle(item, itemArray, listName, details);
    
        details.appendChild(showDate);
        editDate(item, itemArray, listName, details);
        
        details.appendChild(showDesc);
        editDesc(item, itemArray, listName, details);
    }
}

function deleteItem(item, itemDiv, itemArray, listName){
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    // deleteBtn.setAttribute('class', 'itemBoxEnd');
    deleteBtn.textContent = 'X';
    document.getElementById(listName+itemArray.indexOf(item)).querySelector('.itemBackBtn').appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        item.list = 'delete';
        document.getElementById('items').removeChild(itemDiv);
        clearDetails(itemArray);
    });
}

//details edit functions:
function editTitle(item, itemArray, listName, details){
    const editTitleBtn = document.createElement('button');
    editTitleBtn.textContent = 'Edit Title';
    editTitleBtn.addEventListener('click', function(){
        item.title = prompt('Title: ');
        if (item.title === null){
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
    });
    details.appendChild(editTitleBtn);
}

function editDate(item, itemArray, listName, details){
    let editDateBtn = document.createElement('button');
    editDateBtn.textContent = 'Change Due Date';

    editDateBtn.addEventListener('click', function(){
        item.dueDate = prompt('Due Date: ');
        if (item.dueDate === null){
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);      
    })
    details.appendChild(editDateBtn);
}

function editDesc(item, itemArray, listName, details){
    let editDescBtn = document.createElement('button');
    editDescBtn.textContent = 'Edit Description';
    
    editDescBtn.addEventListener('click', function(){
        item.description = prompt('Edit Description: ');
        if (item.description === null){
            return;
        }
        clearItems(itemArray);
        renderItems(itemArray, listName);
        displayDetail(item, itemArray, listName);
    });
    details.appendChild(editDescBtn);
}


export {initListSelectBtn, initNewListBtn, initNewItemBtn, renderItems, initDefaultList};