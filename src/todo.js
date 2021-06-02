import { html, render } from "lit-html";

export class Model {
  constructor(node) {
    this._node = node;
    this._render();
  }

  _render() {
    console.log(this);
    render(this.view(), this._node);
  }

  _items = [];
  _inputString = "stringa iniziale";

  // Functionality
  setInputString(value) {
    this._inputString = value;
    this._render();
  }

  addItem(todo) {
    this._items.push({ todo: todo, completed: false });
    this._render();
  }

  toggleItem(index) {
    this._items[index].completed = !this._items[index].completed;
    this._render();
  }

  deleteItem(index) {
    this._items.splice(index, 1);
    this._render();
  }

  // View
  view() {
    return html`
      <div class="container">
        <header>
          <h1>App Todo List</h1>
          <h3>
            Testo dell'input in maiuscolo: ${this._inputString.toUpperCase()}
          </h3>
          <input
            .value=${this._inputString}
            @input=${(evt) => this.setInputString(evt.target.value)}
            type="text"
            name="todo-elemnt"
            id="todo-elemnt"
            placeholder="Inserire Todo!"
            autofocus
          />
          <button @click=${() => this.addItem(this._inputString)}>
            Aggiungi
          </button>
        </header>
        <main>
          <div class="list-todo">
            <ul>
              ${this._items.length === 0
                ? html`<h5>INSERIRE UN TODO!</h5>`
                : this._items.map(
                    (obj, index) =>
                      html`<li>
                        ${index + 1}: Comprare ${obj.todo} ${obj.completed}
                        <button @click=${() => this.deleteItem(index)}>
                          Rimuovi
                        </button>
                        <button @click=${() => this.toggleItem(index)}>
                          Toggle
                        </button>
                      </li>`
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
