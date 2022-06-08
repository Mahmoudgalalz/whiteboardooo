const input = document.querySelector('input[type="range"]');

let rangeValue = function(){
    let newValue = input.value;
    let target = document.querySelector('#font_size');
    target.innerHTML = `${newValue} px`;
  }
  
  input.addEventListener("input", rangeValue);