window.addEventListener('DOMContentLoaded', function () {

  let modalPopup = document.querySelector('.popup'),
      modalEngineer = document.querySelector('.popup_engineer'),
      btnEngineer = document.querySelector('.popup_engineer_btn'),
      phoneLink = document.querySelectorAll('.phone_link'),
      closeForm = document.querySelectorAll('.popup_close'),
      timerPopup = setTimeout(openModalPopup, 60000);

  function openModalPopup(popup = modalPopup) {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  phoneLink.forEach(function(item,i) {
    phoneLink[i].addEventListener('click', function () {
    event.preventDefault();
    openModalPopup(modalPopup);
  })
});

  btnEngineer.addEventListener('click', function (e) {
    openModalPopup(modalEngineer);
  });

  /// CLOSE FORM //////
  function closeForms() {
    modalPopup.style.display = '';
    modalEngineer.style.display = '';
    document.body.style.overflow = '';
  }

  closeForm.forEach(function (item, i) {
    closeForm[i].addEventListener('click', function () {
      closeForms();
    });
  })

  modalPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains("popup")) {
      closeForms();
    }
  })

  modalEngineer.addEventListener('click', (e) => {
    if (e.target.classList.contains("popup_engineer")) {
      closeForms();
    }
  })
  ///// END CLOSE FORM //////
});