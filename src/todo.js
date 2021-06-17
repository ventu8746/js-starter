import { html, render } from "lit-html";

export class Model {
  constructor(node) {
    this._node = node;
    this._check = true;
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

  setCheckBox(evt) {
    this._check = !this._check;
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
            Testo dell'input :
            ${this._check ? this._inputString.toUpperCase() : this._inputString}
          </h3>
          <form
            id="form"
            @submit=${(evt) => {
              this.addItem(this._inputString);
              evt.preventDefault();
            }}
          >
            <input
              .value=${this._inputString}
              @input=${(evt) => this.setInputString(evt.target.value)}
              type="text"
              name="todo-elemnt"
              id="todo-elemnt"
              placeholder="Inserire Todo!"
              maxlength="15"
              autofocus
            />
            <button type="submit">Aggiungi</button>
            <!-- <label for="check"
              >${this._check ? "Maiuscolo" : "Minuscolo"}
              <input
                @input="${(evt) => this.setCheckBox(evt.target.value)}"
                type="checkbox"
                checked="${this._check}"
                name="check"
              />
            </label> -->
            <!-- ${viewCheckBox(this._check, this.setCheckBox.bind(this))} -->
          </form>
        </header>
        <main>
          <div class="list-todo">
            <ul>
              ${this._items.length === 0
                ? html`<h5>INSERIRE UN TODO!</h5>`
                : this._items.map(
                    (obj, index) =>
                      html`<li class=${obj.completed ? "completed" : ""}>
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
/**
 * @param check {boolean}
 * @param onCheck {() => undefined}
 */
// function viewCheckBox(check, onCheck) {
//   return html`<label for="check"
//     >${check ? "Maiuscolo" : "Minuscolo"}

//     <input
//       @input="${(evt) => onCheck(evt.target.value)}"
//       type="checkbox"
//       ?checked="${check}"
//       name="check"
//     />
//   </label>`;
// }

//addItem prende come parametro un array e una stringa e inserisce la stringa in un oggetto successivamente aggiunge l'oggetto all'array
//addItem([{todo:'pane',completed:false}],'latte') dovrebbe tornare [{todo:'pane',completed:false},{todo:'latte',completed:false}]
//addItem([{todo:'pane',completed:false}],'') dovrebbe tornare [{todo:'pane',completed:false}]
//addItem([{todo:'pane',completed:false}],12213) dovrebbe tornare 'il programma accetta solo testo per i todo!'

const arr = [
  {
    todo: "pane",
    completed: false,
  },
];

function addItem(arr, string) {
  const newArr = arr.map((obj) => obj);

  if (string.typeOf === "number") {
    return "il programma accetta solo testo per i todo!";
  } else {
    newArr.push({
      todo: string,
      completed: false,
    });
  }
  return newArr;
}

console.log(newArr(arr, "ciaone"));
