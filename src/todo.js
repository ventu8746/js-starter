function createTodoList(todoList) {
	return {
		_items: [],

		addItem(todo) {
			this._items.push({ todo: todo, completed: false });
		},

		get showItem() {
			let itemsProv = [];
			for (let i = 0; i < this._items.length; i++) {
				if (this._items[i].completed) {
					itemsProv.push(`${i}. ${this._items[i]["todo"]} (fatto)`);
				} else {
					itemsProv.splice(i, 1, `${i}. ${this._items[i]["todo"]} `);
				}
			}
			return itemsProv.join(" \n");
		},

		toogleItem(index) {
			//`${index}. ${this.arrItems[index]} (fatto)`

			if (this._items[index].completed === false) {
				this._items[index].completed = true;
			} else {
				this._items[index].completed = false;
			}
		},
	};
}

const todoList = createTodoList("todoList");

// todoList.addItem("Comprare uova");
// todoList.addItem("Comprare pane");
// todoList.addItem("Comprare vino");
// todoList.addItem("Comprare birra");
// todoList.addItem("Comprare olio");
// todoList.addItem("Comprare sale");

// console.log(todoList.showItem);

// //console.log(todoList._items);
// todoList.completeItem(5);
// todoList.completeItem(2);

// const list2 = createTodoList("list2");

// list2.addItem("comprare patatine");

// console.log(list2.showItem);
todoList.addItem("Comprare uova");
todoList.addItem("Comprare pane");
todoList.addItem("Comprare uova");
todoList.addItem("Comprare pane");
todoList.addItem("Comprare vino");
todoList.addItem("Comprare birra");
todoList.addItem("Comprare olio");
todoList.addItem("Comprare sale");
console.log(todoList._items);

todoList.toogleItem(1);

todoList.toogleItem(2);
todoList.toogleItem(4);

//todoList.toogleItem(1);
//console.log(todoList._items);

//todoList2.toogleItem(1);
console.log(todoList.showItem);
