console.log("goods")
const resultDiv = document.getElementById("result"),
form = document.querySelector("form"),
input = document.querySelector(".input"),
logo= document.querySelector(".logo"),
show = document.getElementById('show'),
hide = document.getElementById('hide'),
back = document.getElementById('back'),
name = document.getElementById('name'),
rbox = document.getElementById('resultbox'),
btn = document.getElementById('btn');


var count = 5;
var countdownInterval;

btn.addEventListener('click', ()=> {
  if (name.value === '') {
    alert('name is required')
  } else {
    input.style.display = 'none'
    form.style.display = 'block'
    logo.style.display = 'none'
      show.innerHTML = "Hi " + name.value + " are you gay?"
  }
})
back.addEventListener('click', () => {
    name.value = ''
    rbox.style.display = 'none'
    input.style.display = 'block'
    logo.style.display = 'block'
})
form.addEventListener("submit", function(event) {
    hide.style.display = 'block'
    form.style.display = 'none'
    event.preventDefault();
    countdownInterval = setInterval(function() {
      count--
     if (count < 0 && checkedRadioButton) {
        clearInterval(countdownInterval);
        resultDiv.textContent = "Result: " + name.value + checkedRadioButton.value;
        rbox.style.display = 'block'
        hide.style.display = 'none'
      } 
      
    }, 1000);
    const checkedRadioButton = document.querySelector(".radio-option:checked");

})
    
  
 
