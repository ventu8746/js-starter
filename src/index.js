import { html, render } from "lit-html";
import { Model } from "./todo";

function viewTodoItem(elem) {
  return html`<li>Comprare ${elem} <button>Rimuovi</button></li>`;
}

const todos = ["ciao", "cereali", "calzetti"];

const items = todos.map((elem) => viewTodoItem(elem));

const app = html`
  <div class="container">
    <header>
      <h1>App Todo List</h1>
      <input type="text" name="todo-elemnt" id="todo-elemnt" />
      <button>Aggiungi</button>
    </header>
    <main>
      <div class="list-todo">
        <ul>
          ${items}
        </ul>
      </div>
    </main>
  </div>
`;

const app = new Model(document.getElementById("root"));
