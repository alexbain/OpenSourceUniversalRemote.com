$(window).load(function() {

    setTimeout(function() {
        $('body').addClass('in');

        setTimeout(function() {
            $('.hero-unit .fade').addClass('in');

            setTimeout(function() {
                $('.getting-started-container').addClass('in');
                $('.footer').addClass('in');
            }, 750);

        }, 750);

    }, 250);

});
