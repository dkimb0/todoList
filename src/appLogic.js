//methods needed: order setting
function createList(_name, _order){
    let name = _name;
    let order = _order;

    return{
        name,
        order
    };
}

function createItem(_title, _list, _order, _dueDate = 'N/A', _description = 'N/A', _complete = false, _priority = false){
    //add form later in UI which will populate these
    let title = _title;
    let list = _list;
    let dueDate = _dueDate;
    let description = _description;

    let complete = _complete === 'true';
    let priority = _priority === 'true';
    let detail = false;
    let order = _order;
    let storageItemString;

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

    const togglePriority = () => {
        if (priority === true) {
            priority = false;
        }else{
            priority = true;
        }
    };

    const getPriority = () => {
        return priority;
    }

    const getStorageItemString = () =>{
        return title + '::::' + list + '::::' + dueDate + '::::' + description
    + "::::" + complete + '::::' + priority + '::::' + order;
    }

    const setDelete = () => {
        list = 'delete';
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDate = (newDate) => {
        dueDate = newDate;
    }

    const setDesc = (newDesc) => {
        description = newDesc;
    }

    return{
        title,
        list,
        dueDate,
        description,
        detail,
        storageItemString,
        order,
        priority,

        toggleComplete,
        getComplete,
        togglePriority,
        getPriority,
        getStorageItemString,
        setDelete,
        setTitle,
        setDate,
        setDesc
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

function toggleDetail(item){
    if (item.detail === true){
        item.detail = false;
    }else{
        item.detail = true;
    }
}

function loadLocalStorageCounters(){
    let storageListCounter;
    let storageItemCounter;
    

    //new or load storageListCounter
    if (!localStorage.getItem('listCounter')){
        storageListCounter = 0;
    }else{
        storageListCounter = Number(localStorage.getItem('listCounter'));
    }

    //new or load storageItemCounter
    if (!localStorage.getItem('itemCounter')){
        storageItemCounter = 0;
    }else{
        storageItemCounter = Number(localStorage.getItem('itemCounter'));
    }

    return [storageListCounter, storageItemCounter];
}

// function loadLocalStorageListArray(storageListCounter){
//     let storageListNameHolder;

//     if (storageListCounter !== 0){
//         for (let i = 1; i <= storageListCounter; i++){
//             storageListNameHolder = localStorage.getItem(`listArray${i}`);
//             listArray.push(createList(storageListNameHolder, i));
//             initListSelectBtn(storageListNameHolder, itemArray);
//         }
//     }
// }

export { createList, createItem, checkListName, filterByList, toggleDetail, loadLocalStorageCounters};