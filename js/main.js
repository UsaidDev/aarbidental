(function() {

    'use strict';


    // preloader
    $.fakeLoader({
        spinner: "spinner5",
        bgColor: "#fff"
    });

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });


    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if (onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        } else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });

    // hide navbar on click
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // counter
    $('.number-counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})();
document.addEventListener("DOMContentLoaded", function () {
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = Math.random() * 8 + 5 + "s";
        document.getElementById("particles").appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    setInterval(createParticle, 500);
});
