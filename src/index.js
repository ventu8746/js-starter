import { html, render } from "lit-html";

function viewTodoItem(elem) {
	return html`<li>Comprare ${elem} <button>Rimuovi</button></li>`;
}

const items = [
	viewTodoItem("ciao"),
	viewTodoItem("cereali"),
	viewTodoItem("calzetti"),
];

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
					${items.map((elem) => elem)}
					<li>Comprare pane <button>Rimuovi</button></li>

					<li>Comprare Latte <button>Rimuovi</button></li>

					<li>Comprare Vino sdadasa<button>Rimuovi</button></li>

					<li>Comprare Uovafdsdssdfds<button>Rimuovi</button></li>
				</ul>
			</div>
		</main>
	</div>
`;

render(app, document.getElementById("root"));
