window.addEventListener('DOMContentLoaded', function () {

let modalPopup = document.querySelector('.popup'),
    modalEngineer = document.querySelector('.popup_engineer'),
    btnEngineer = document.querySelector('.popup_engineer_btn'),
    phoneLink = document.querySelector('.phone_link'),
    closeForm = document.querySelectorAll('.popup_close'),
    timerPopup = setInterval(openModalPopup, 60000);

    function openModalPopup(popup = modalPopup) {
      popup.style.display = 'block';
    }

phoneLink.addEventListener('click', function () {
  openModalPopup(modalPopup);
});

btnEngineer.addEventListener('click', function () {
  openModalPopup(modalEngineer);
});


/// CLOSE FORM //////
function closeForms() {
  modalPopup.style.display = '';
  modalEngineer.style.display = '';
}

closeForm.forEach(function (item,i) { 
  closeForm[i].addEventListener('click', function() { 
    closeForms();
});
})

modalPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup")){
    closeForms();
  }
}) 

modalEngineer.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_engineer")){
    closeForms();
  }
}) 
///// END CLOSE FORM //////

});