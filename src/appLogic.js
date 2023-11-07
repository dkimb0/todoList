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
        storageItemString = title + '::::' + list + '::::' + dueDate + '::::' + description
    + "::::" + complete + '::::' + priority + '::::' + order;

        return storageItemString;
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
        getStorageItemString
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

export { createList, createItem, checkListName, filterByList, toggleDetail };