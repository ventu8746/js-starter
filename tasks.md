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
