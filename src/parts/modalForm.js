function modalForm() {


  let forms = document.querySelectorAll('.form'),
    formInput = document.querySelectorAll('.form_input '), // все инпуты
    inputPhone = document.getElementsByName('user_phone'), // все инпуты телефонов
    message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: "Что-то пошло не так..."
    },
    statusMessage = document.createElement('div');
    statusMessage.style.color = 'red';

    function clearInput() {
      for (let j = 0; j < formInput.length; j++) {
        formInput[j].value = '';
          // очистка всех инпутов
      }
  }

function validInputPhone() {
    inputPhone.forEach(function (item, i) {
      inputPhone[i].addEventListener('keypress', function (e) {
        if (e.charCode < 47 || e.charCode > 57) {
          e.preventDefault();
        }
      })
    })
  }


forms.forEach(function(item, i) {
  if (i != 8){
  forms[i].addEventListener('submit', function (event) {
    event.preventDefault();
    forms[i].appendChild(statusMessage);
    
    let formData = new FormData(forms[i]);


    function postData(data) {

      return new Promise(function (resolve, reject) {
          
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.addEventListener('readystatechange', function () {

              if (request.readyState < 4) {
                  resolve()
              } else if (request.readyState === 4 && request.status == 200) {
                  resolve()
              } else {
                  reject()
              }
          });
          let obj = {};
          data.forEach(function (value, key) {
              obj[key] = value;
          });
          let json = JSON.stringify(obj);
          request.send(json);
      })


  }
  
  postData(formData)

  .then(() => statusMessage.innerHTML = message.loading)
  .then(() => {
      statusMessage.innerHTML = message.success;
  })
  .catch(() => statusMessage.innerHTML = message.failure)
  .then(clearInput)



})
}
validInputPhone();

})


};

module.exports = modalForm;