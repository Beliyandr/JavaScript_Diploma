function calc() {

  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      calcInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total =0;
  
  totalValue.innerHTML = 0;
  
  function validInp() {
      for (let i = 0; i < calcInput.length; i++) {
          calcInput[i].addEventListener('keypress', (e) => {
              if (e.charCode < 47 || e.charCode > 57) {
                  e.preventDefault(); 
              }
          });
      }
  }
  
  persons.addEventListener('input', function() {
    this.value = persons.value.replace(/^0/, '');
      personsSum = +this.value;
      total = (daysSum + personsSum) *4000;
      
      if (daysSum == 0 || personsSum == 0 || persons.value == '' || restDays.value == 0){
          totalValue.innerHTML = 0;
      }
      else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value; // выбранное поле options с его значением value 
      }
  
  });
  
  restDays.addEventListener('input', function() {
    this.value = restDays.value.replace(/^0/, '');
      daysSum = +this.value;
      total = (daysSum + personsSum) *4000;
  
      if (daysSum == 0 || personsSum == 0 || persons.value == '' || restDays.value == 0){
          totalValue.innerHTML = 0;
      }else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
      }
  
  });
  
  place.addEventListener('input', function() {
      if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
          totalValue.innerHTML = 0;
  
      }else{
          let a = total;
          totalValue.innerHTML = a *this.options[this.selectedIndex].value;
      }
  })
  validInp();
  }
 
module.exports = calc;