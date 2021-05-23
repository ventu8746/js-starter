import { html, render } from "lit-html";

const app = html`
	<body>
		<div class="container">
			<header>
				<h1>App Todo List</h1>
				<input type="text" name="todo-elemnt" id="todo-elemnt" />
				<button>Aggiungi</button>
			</header>
			<main>
				<div class="list-todo">
					<ul>
						<li>Comprare Pane <button>Rimuovi</button></li>

						<br />

						<li>Comprare Latte <button>Rimuovi</button></li>

						<br />
						<li>Comprare Vino <button>Rimuovi</button></li>

						<br />
						<li>Comprare Uovafdsdssdfds<button>Rimuovi</button></li>
					</ul>
				</div>
			</main>
		</div>
	</body>
`;

render(app, document.getElementById("root"));
