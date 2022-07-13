// Cooldown en mensajes
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 2000);// 2sec es el cooldown para el siguiente comando;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};
