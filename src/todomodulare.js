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
  let newArr = arr.map((obj) => obj);
  try {
    if (string == "") throw "the todo that you have insert is empty ";
    if (typeof string === "number")
      throw "the todo that you have insert is not a string";
  } catch (err) {
    console.log(err);
  } finally {
    if (string === "") {
      return newArr;
    } else {
      const arrConc = newArr.concat([
        {
          todo: string,
          completed: false,
        },
      ]);
      return arrConc;
    }
  }
}

const emptyTodos = [];

const arrFull = addItem(
  addItem(addItem(addItem(emptyTodos, "first"), "second"), "third"),
  "fourth"
);
//console.log(addItem(arr, "ciao"));
//console.log(addItem(arr, "miao"));
// creare un array con più todo in questo modo
//console.log(arrFull);

//console.log(arr);
//console.log(emptyTodos);

//toggleItem prende come parametro un array e un indice e cambia il parametro completed dell'oggetto(all'interno dell'array) con l'indice selezionato cambiandolo in true e viceversa;
//toggleItem([{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }],1) dovrebbe tornare [{ todo: 'pane', completed: false },{ todo: 'dfs', completed: true }]
//toggleItem([{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }],'') dovrebbe tornare [{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }]
//addItem([{todo:'pane',completed:false}],12213) dovrebbe tornare un errore 'the index that you have insert is inexistent!'

function toggleItem(arr, index) {
  const newArr = [...arr];
  if (index > arr.length - 1) {
    throw new Error("the index that you have insert is inexistent");
  } else if (index === "") {
    return newArr;
  }

  newArr[index].completed = !newArr[index].completed;
  return newArr;
}

//console.log(toggleItem(arr, ""));

// console.log("----------------");
// console.log(toggleItem(arrFull, 3));

//deleteItem prende come parametro un array e un indice e elimina l'elemento a cui fa riferimento l'oggetto dentro l'array;
//deleteItem([{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }],1) dovrebbe tornare [{ todo: 'pane', completed: false }]
//deleteItem([{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }],'') dovrebbe tornare [{ todo: 'pane', completed: false },{ todo: 'dfs', completed: false }]
//deleteItem([{todo:'pane',completed:false}],12213) dovrebbe tornare un errore ''the index that you have insert is inexistent!''

function deleteItems(arr, index) {
  const newArr = [...arr];
  if (index > arr.length - 1) {
    throw new Error("the index that you have insert is inexistent");
  } else if (index === "") {
    return newArr;
  }

  newArr.splice(index, 1);
  return newArr;
}

console.log(deleteItems(arrFull, 3));
console.log(deleteItems(arrFull, 1));

console.log(arrFull);
