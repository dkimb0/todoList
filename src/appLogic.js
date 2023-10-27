
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
    let list = _list;
    let dueDate = '';

    let complete = false;
    let priority = false;
    let detail = false;



    const toggleDetail = () => {
        if (detail === true){
            detail = false;
        }else{
            detail = true;
        }
    };

    const getDetail = () => {
        return detail;
    }

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

    const toggleDelete = () => {
        list = 'deleted';
    }

    return{
        title,
        list,
        dueDate,
        detail,

        toggleDetail,
        getDetail,
        toggleComplete,
        getComplete,
        togglePriority,
        getPriority,
        toggleDelete,

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