import { html, render } from "lit-html";

export class Model {
  constructor(node) {
    this.addItem("cereali");
    this.addItem("vino");
    this.addItem("pane");
    render(this.view(), node);
  }

  _items = [];

  // Functionality
  addItem(todo) {
    this._items.push({ todo: todo, completed: false });
  }

  toogleItem(index) {
    this._items[index].completed = !this._items[index].completed;
  }

  // View
  view() {
    return html`
      <div class="container">
        <header>
          <h1>App Todo List</h1>
          <input type="text" name="todo-elemnt" id="todo-elemnt" />
          <button>Aggiungi</button>
        </header>
        <main>
          <div class="list-todo">
            <ul>
              ${this._items.map(
                (obj) =>
                  html`<li>Comprare ${obj.todo} <button>Rimuovi</button></li>`
              )}
            </ul>
          </div>
        </main>
      </div>
    `;
  }

  // Utils
  logItems() {
    let itemsProv = [];
    for (let i = 0; i < this._items.length; i++) {
      if (this._items[i].completed) {
        itemsProv.push(`${i}. ${this._items[i]["todo"]} (fatto)`);
      } else {
        itemsProv.splice(i, 1, `${i}. ${this._items[i]["todo"]} `);
      }
    }
    return itemsProv.join(" \n");
  }
}
