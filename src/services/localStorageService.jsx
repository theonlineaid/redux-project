export const getFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};

export const setToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
