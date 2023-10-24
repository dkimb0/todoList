
//methods needed: order setting
function createList(_name, _order){
    let name = _name;
    let visible = true;
    let order = _order;

    const toggleVisible = () => {
        if (visible === true){
            visible = false;
        }else{
            visible = true;
        }
        return visible;
    };

    const getVisible = () => {
        return visible;
    };

    return{
        name,
        order,
        toggleVisible,
        getVisible
    };
}

function createItem(_title, _list){
    //add form later in UI which will populate these
    let title = _title;
    let dueDate;
    let priority = false;
    let list = _list;
    let complete = false;

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

    return{
        title,
        list,
        toggleComplete,
        getComplete

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

export { createList, createItem, checkListName, filterByList };