window.addEventListener('DOMContentLoaded', function () {

let btnsCalc = document.querySelectorAll('.popup_calc_btn'),
    formCalc = document.querySelectorAll('.popup_calc, .popup_calc_profile, .popup_calc_end'),
    closeForms = document.querySelectorAll('.popup_calc_close , .popup_calc_profile_close, .popup_calc_end_close'),
    balconIconsImg = document.querySelectorAll('.balcon_icons img'),
    BalconBigImg = document.querySelectorAll('.big_img img'),
    formControl = document.querySelectorAll('#width, #height'),
    nextFormBtns = document.querySelectorAll('.popup_calc_button, .popup_calc_profile_button'),
    checkbox = document.getElementsByName('checkbox-test'),
    labelCheckBox = document.querySelectorAll('.label'),
    allFormData = {
      width: '2',
      height: '2',
      viewType: '2'
    };

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
    event.preventDefault();
  })
})

function clearFormCalc () {
  for (let j = 0; j < formCalc.length; j++ ){
    formCalc[j].style.display = 'none';
  }
}
let k = 1;
btnsCalc.forEach(function(item, i){
  btnsCalc[i].addEventListener('click', function() {
    event.preventDefault();
    formCalc[0].style.display = 'block';
    k = 1;
    nextFormBtns.forEach(function(item, d) {
    nextFormBtns[d].addEventListener('click', function() {
      clearFormCalc ();
    formCalc[d+1].style.display = 'block';
  })
  })
})
})

  
checkbox.forEach(function(item , j) {
  checkbox[j].addEventListener('click',function() {
    if( j == 0){
      checkbox[0].checked;
      checkbox[1].checked = false;
     allFormData.viewType = labelCheckBox[0].textContent; 
     console.log(allFormData);
     return(allFormData);
    }else if(j = 1){
      checkbox[0].checked = false;
      checkbox[1].checked;
      allFormData.viewType = labelCheckBox[1].textContent; 
      return(allFormData);
      console.log(allFormData);
    }
    
})
})

  formControl.forEach(function(item, i){
    formControl[i].addEventListener('input', function() {
      allFormData.width = formControl[0].value;
      allFormData.height = formControl[1].value;
      return(allFormData);
    })
  })  


validFormControl();
closeForm();

return(allFormData);
}

let forms = document.querySelectorAll('.form'),
message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: "Что-то пошло не так..."
},
statuMessage = document.createElement('div');
statuMessage.style.color = 'red';



forms.forEach(function(item, i) {
  forms[i].addEventListener('submit', function (event) {
    event.preventDefault();
    forms[i].appendChild(statuMessage);
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
          
          data.forEach(function (value, key) {
            allFormData[key] = value;
          });
          let json = JSON.stringify(allFormData);
          request.send(json);
      })


  }
  
  postData(formData)
  })
  })


});