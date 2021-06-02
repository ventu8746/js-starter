import { Model } from "./todo";

const node = document.getElementById("root");

const app = new Model(node);

app.addItem("a");
app.addItem("b");
app.addItem("c");
