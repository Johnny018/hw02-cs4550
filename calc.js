const buttons = document.querySelectorAll(".calc");
const result = document.getElementById("resultCalc");
const calc = document.getElementById("displayCalc");

function total(num){
  let resultx = eval(num)
  result.innerHTML = resultx?resultx:''
}
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    const NumAdd = event.target.innerHTML
    const result = calc.innerHTML+NumAdd
    calc.innerHTML = result
    total(result)
  })
}

function remove(){
    const reCalc = calc.innerHTML
    editedReCalc = reCalc.slice(0, -1)
    calc.innerHTML = editedReCalc
    total(editedReCalc)
}
