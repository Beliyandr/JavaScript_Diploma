window.addEventListener('DOMContentLoaded', function () {
  let decoration = document.querySelector('.decoration'),
      decorSlider = decoration.querySelector('.decoration_slider'),
      sliderItems = decorSlider.querySelectorAll('.decoration_item'),
      decorContent = decoration.querySelectorAll('.decoration_content .row'),
      decroElem = decorContent[0].children;

   

      sliderItems.forEach(function(item,i) {
        sliderItems[i].addEventListener('click', function() {
          for (let j = 0; j < sliderItems.length; j++){
              let a = sliderItems[j].querySelector('div');
                  a.classList.remove('after_click');
                  decorContent[0].children[j].style.display = 'none';
          }
             let b = sliderItems[i].querySelector('div');
                 b.classList.add('after_click');
                 decorContent[0].children[i].style.display = 'block';
        });
      });


});