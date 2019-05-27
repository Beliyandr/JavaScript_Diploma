window.addEventListener('DOMContentLoaded', function () {
let glazing = document.querySelector('.glazing_slider'),
    elemGlaz = glazing.querySelectorAll('.glazing_block'),
    linkGlaz = document.querySelectorAll('.glazing_block a'),
    row = document.querySelectorAll('.glazing .row');
    
    elemGlaz.forEach(function(item, i) {
    elemGlaz[i].addEventListener('click', function() {
        for (let j = 0 ; j < elemGlaz.length; j++) {
            linkGlaz[j].classList.remove('active');
            row[j].style.display = 'none';
        }
        linkGlaz[i].classList.add('active');
        row[i].style.display = 'block';
    });
});
});