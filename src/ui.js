import { add } from "date-fns";
import { createList, createItem, checkListName, filterByList } from "./appLogic";

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


export {initListSelectBtn, initNewListBtn, initNewItemBtn, renderItems};