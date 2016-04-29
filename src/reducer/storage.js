var STORAGE = require('../jsons/elf.json')

export default (storage = STORAGE, action) => {
    const { type, data } = action
    
    return storage
}