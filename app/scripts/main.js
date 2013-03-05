$(window).load(function() {

    setTimeout(function() {
        $('body').addClass('in');

        setTimeout(function() {
            $('.hero-unit .fade').addClass('in');

            setTimeout(function() {
                $('.quick-overview-container').addClass('in');
                $('.getting-started-container').addClass('in');
                $('.footer').addClass('in');
            }, 750);

        }, 750);

    }, 250);

});
