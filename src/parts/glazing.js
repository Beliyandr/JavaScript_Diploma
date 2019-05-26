window.addEventListener('DOMContentLoaded', function () {
let glazing = document.querySelector('.glazing_slider'),
    elemGlaz = glazing.querySelectorAll('.glazing_block'),
    linkGlaz = document.querySelectorAll('.glazing_block a');
    
    elemGlaz.forEach(function(item, i) {
    elemGlaz[i].addEventListener('click', function() {
        for (let j = 0 ; j < elemGlaz.length; j++) {
            linkGlaz[j].classList.remove('active');
        }
        linkGlaz[i].classList.add('active');
    });
});


});