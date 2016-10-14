(function () {
    var $activeSlide = $(".active"),
        $slides = $(".slide"),
        $hero = $(".hero");

    function init() {
        TweenLite.set($('.slide').not('.active'), {autoAlpha: 0});
        // console.log();
        // TweenLite.set($slides.not($activeSlide), {opacity: 0.5})
    }

    function nextSlide() {
        var slideOut = document.getElementsByClassName('slide active')[0];
        var slideIn = slideOut.nextElementSibling;
        changeSlide(slideOut, slideIn);

    }

    function prevSlide() {
        var slideOut = document.getElementsByClassName('slide active')[0];
        var slideIn = slideOut.previousElementSibling;
        changeSlide(slideOut, slideIn);

    }

    function changeSlide(slideOut, slideIn) {
        var tl = new TimelineLite();
        tl
        // move the new slide (the one about to enter viewport) out of the viewport and add class active
            .set(slideIn, {y: '100%', autoAlpha: 1, className: '+=active'})

            // remove class active from the currently active slide (slideOut)
            .set(slideOut, {className: '-=active'})

            // animate H1 and p of the active slide up and fade them out
            // .to([slideOutH1,slideOutP], 0.3, {y: '-=15px', autoAlpha: 0, ease:Power3.easeInOut}, 0)

            // animate active slide up (out of the viewport)
            .to(slideOut, 1, {y: '-100%', ease: Power3.easeInOut}, 0)

            // animate new slide up (from out of the viewport)
            .to(slideIn, 1, {y: '-=100%', ease: Power3.easeInOut}, 0);

        // animate H1 and P of the new slide up and fade them in
        // .fromTo([slideInH1,slideInP], 0.3, {y: '+=20px', autoAlpha: 0}, {autoAlpha: 1, y: 0, ease:Power1.easeInOut}, 0.3);

    }

    document.addEventListener('DOMContentLoaded', function () {
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