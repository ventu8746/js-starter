import { Model } from "./todo";

const app = new Model(document.getElementById("root"));

app.addItem("a")
app.addItem("b")
app.addItem("c")