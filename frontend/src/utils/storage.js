const saveData = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data))
}

const getData = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
};

const deleteData = (key) => {
    sessionStorage.removeItem(key);
}

export {saveData, getData, deleteData};