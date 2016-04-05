export default class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item)
        this.__store = store
    }

    //for example article.getRelation('comments')
    getRelation(relation) {
        const relStore = this.__store.getStore(relation)
        if (!relStore || !this[relation]) return []

        return this[relation].map(relStore.getById)
    }
}

