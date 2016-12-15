(function () {

    function init() {
        var slides = document.getElementsByClassName('slide');
        if(slides.length > 0 ){
            var inactiveSlides =Array.prototype.slice.call(slides).filter(function (elem) {
                return elem !== document.getElementsByClassName('slide active')[0];
            });
            TweenLite.set(inactiveSlides, {autoAlpha: 0});
        }
    }

    function nextSlide() {
        var slideOut = document.getElementsByClassName('slide active')[0];
        var slideIn = slideOut.nextElementSibling;
        changeSlide(slideOut, slideIn, 'up');
    }

    function prevSlide() {
        var slideOut = document.getElementsByClassName('slide active')[0];
        var slideIn = slideOut.previousElementSibling;
        changeSlide(slideOut, slideIn, 'down');
    }

    function changeSlide(slideOut, slideIn, direction) {
        var slideInY = '';
        var slideOutY = '';
        var slideInDiff = '';
        if(direction ==='up'){
             slideInY = '100%';
            slideOutY = '-100%';
            slideInDiff = '-=100%'
        } else {
             slideInY = '-100%';
            slideOutY = '100%';
            slideInDiff = '+=100%';
        }
        var tl = new TimelineLite();
        tl
        // move the new slide (the one about to enter viewport) out of the viewport and add class active
            .set(slideIn, {y: slideInY, autoAlpha: 1, className: '+=active'})
            // remove class active from the currently active slide (slideOut)
            .set(slideOut, {className: '-=active'})
            // animate active slide up (out of the viewport)
            .to(slideOut, 1, {y: slideOutY, ease: Power3.easeInOut}, 0)
            // animate new slide up (from out of the viewport)
            .to(slideIn, 1, {y: slideInDiff, ease: Power3.easeInOut}, 0)
        ;
    }

    document.addEventListener('DOMContentLoaded', function () {
        hljs.initHighlightingOnLoad();
        init();
        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 37) {
                prevSlide();
            }
            else if (event.keyCode == 39) {
                nextSlide();
            }
        });
    });
})();