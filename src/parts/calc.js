window.addEventListener('DOMContentLoaded', function () {

let btnsCalc = document.querySelectorAll('.popup_calc_btn'),
    formCalc = document.querySelectorAll('.popup_calc, .popup_calc_profile_content, .popup_calc_end'),
    closeForms = document.querySelectorAll('.popup_calc_close , .popup_calc_profile_close, .popup_calc_end_close'),
    balconIconsImg = document.querySelectorAll('.balcon_icons img'),
    BalconBigImg = document.querySelectorAll('.big_img img'),
    formControl = document.querySelectorAll('#width, #height');

  
function validFormControl() {
  formControl.forEach(function (item, i) {
    formControl[i].addEventListener('keypress', function (e) {
      if (e.charCode < 47 || e.charCode > 57) {
        e.preventDefault();
      }
    })
  })
}

function closeForm(){
  closeForms.forEach(function(item, i) {
    closeForms[i].addEventListener('click', function() {
      formCalc[i].style.display = 'none';
    })
  })
};

calc();


function calc() {

balconIconsImg.forEach(function(item, i){
  balconIconsImg[i].addEventListener('click', function() {
    for (let j = 0; j < balconIconsImg.length; j++){
      BalconBigImg[j].style.display = 'none';
    }
    BalconBigImg[i].style.display = 'block';
  })
})


btnsCalc.forEach(function(item, i){
  btnsCalc[i].addEventListener('click', function() {
    event.preventDefault();
    formCalc[i].style.display = 'block';
  })
});

validFormControl();
closeForm();

}

});