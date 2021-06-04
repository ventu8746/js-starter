## 1

Creare una classe `.completed` in `styles.css` da applicare ai todo che sono stati completati, che li mostri un po' più chiari e sbarrati (`text-decoration: line-through`) e applicarla ai todo che sono completati

## 2

Realizzare un two-way bindings per un checkbox:

1. Creare da qualche parte dell'interfaccia un input con type="checkbox"
2. Creare proprietà booleana nella classe `Model`, inizialmente settata a `true`
3. Fare in modo che il valore dell'input nell'interfaccia sia quello della proprietà definita nel punto 2. NB: in lit-html le proprietà booleane hanno questa sintassi: `<input ?checked=${booleanValue} />`. Qui un elenco completo: [link](https://lit-html.polymer-project.org/guide/template-reference#binding-types)
4. Fare in modo che, quando il checkbox viene (de)selezionato, la proprietà nella classe venga modificata (diventando quindi il suo opposto). Usare l'evento "`input`".
5. Controllare se funziona vedendo nella console, le proprietà della classe Model (ci dovrebbe essere un console.log dentro il metodo \_render())
6. Nell'interfaccia, mostrare anche una scritta che dica se il valore è true o false

## 3

Usando il checkbox realizzato nel punto 2), realizzare la seguente funzionalità:

- Se il checkbox ha valore false, mostrare il testo dell'input del form, sopra il form (come è implementato attualmente)
- Se il checkbox ha valore true, mostrare quella scritta con tutte le lettere maiuscole (c'è un metodo che lo fa)

## 4

Attualmente premere il tasto invio non aggiunge todos. Correggere questo comportamento usando un `<form>` , e invece di usare l'evento `click` sul bottone, usare l'evento `submit` sul `<form>`.
Serve chiamare il metodo event.preventDefault() sull'evento submit.

## 5
Estrarre [questo pezzo di codice](https://github.com/ventu8746/js-starter/blob/5e5001ff4a19a658ca6e4580bd2843f065fb40d8/src/todo.js#L73)

```js
<label for="check">
   ${this._check ? "Maiuscolo" : "Minuscolo"}
    <input
      @input="${(evt) => this.setCheckBox(evt.target.value)}"
      type="checkbox"
      checked="${this._check}"
      name="check"
    />
  </label>
```

In modo da avere una funzione riusabile. (non metodo)

Suggerimento:
```js
// checked : boolean
// onInput : string => void
function viewCheckBox(checked, onInput) {
  return html` ... `
}
```
