window.addEventListener('DOMContentLoaded', function () {

let section = document.querySelector('.works'),
    originImg = section.querySelectorAll('.originImg'),
    div = document.createElement('div'),
    img = document.createElement('img'),
    bigImg = section.querySelectorAll('.bigImg');

function modalImg(i) {
    section.appendChild(div);
    div.appendChild(img);
    div.className = "modalImg";
    div.style.display = 'block';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.zIndex = '9';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    img.src = `img/our_works/big_img/${i+1}.png`;
    img.style.position = 'absolute';
    img.style.top = '10%';
    img.style.left = '50%';
    img.style.maxHeight = "650px";
    img.style.transform = 'translateX(-50%)';
    document.body.style.overflow = 'hidden';

    // div.styleText = ??  не работает почему то ???

}


function closeModalImg() {
    div.style.display = 'none';
    document.body.style.overflow = '';
  }


  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains("modalImg")) {
        closeModalImg();
    }
  })

    originImg.forEach(function(oitem,i) {
        originImg[i].addEventListener('click', function(e) {
            event.preventDefault();
                   modalImg(i);
            });
        });

});