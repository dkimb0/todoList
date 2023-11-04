//methods needed: order setting
function createList(_name, _order){
    let name = _name;
    let order = _order;

    return{
        name,
        order
    };
}

function createItem(_title, _list){
    //add form later in UI which will populate these
    let title = _title;
    let list = _list;
    let dueDate = 'N/A';
    let description = 'N/A';

    let complete = false;
    let priority = false;
    let detail = false;

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

    let storageItemString = '::TITLE::' + title + '::LIST::' + list + '::DUEDATE::' + dueDate + '::DESCRIPTION::' + description
    + "::COMPLETE::" + complete + '::PRIORITY::' + priority;

    return{
        title,
        list,
        dueDate,
        description,
        detail,
        storageItemString,

        toggleComplete,
        getComplete,
        togglePriority,
        getPriority
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