import from './item-level-2.js';

class inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    updateItem(id, newItem) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index] = newItem;
        }
    }

    listItems() {
        return this.items;
    }
}

export default inventory;