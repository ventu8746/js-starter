import { html, render } from "lit-html";

const app = html`
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="styles.css" />

			<title>App todo</title>
		</head>
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
		<script src="todo.js"></script>
	</html>
`;

render(app, document.getElementById("root"));
