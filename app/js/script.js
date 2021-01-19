const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(elem) {
            elem.classList.remove('fade-in');
            elem.classList.add('fade-out');
        })
        
    } else {
        header.classList.add('open');
        body.classList.add('noscroll')
        fadeElems.forEach(function(elem) {
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in');
        })
        
       
    }
})
