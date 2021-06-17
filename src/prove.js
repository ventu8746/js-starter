// var bool = true;

// function vero(bool) {
//   if (bool) {
//     return "è vero";
//   } else {
//     return "è falso";
//   }
// }

// console.log(vero(bool));

// const obj = {
//   check: true,
//   onCheck(){
//     this.check=!this.check,
//   }
// };

// function viewCheckBox({check,onCheck}) {
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

// console.log(viewCheckBox(obj));

//map([1,2,3], x => x* 10)
//ritorna [10, 20, 30]

// const map = (arr, callback) => {
//   const arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(callback(arr[i]));
//   }
//   return arr2;
// };

// console.log(map([1, 2, 3], (x) => x * 10));

const formatNumber = (number) => {
  newNum = [];

  for (let f = 0; f < number.length; f += 3) {
    newNum.push(number.slice(f, f + 3));
  }

  return newNum.join();
};

console.log(formatNumber("2312452.31"));
