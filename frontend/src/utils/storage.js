const saveData = (key, data) => {
   localStorage.setItem(key, JSON.stringify(data));
};

const getData = (key) => {
   return JSON.parse(localStorage.getItem(key));
};

const deleteData = (key) => {
   localStorage.removeItem(key);
};

export { deleteData, getData, saveData };
