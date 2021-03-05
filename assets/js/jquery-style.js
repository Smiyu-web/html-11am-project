$(function() {

    // slide for portfolio
    $('.arrow').click(function() {
        var $displaySlide = $('.active');
    
        $displaySlide.removeClass('active');
    
        if($(this).hasClass('arrow-next')) {
            $displaySlide.next().addClass('active');
        } else {
            $displaySlide.prev().addClass('active');
        }

        var slideIndex = $('.portfolio_card').index($('.active'));
        $('.arrow').show();
    
        if (slideIndex == 0) {
            $('.arrow-prev').hide();
        } else if (slideIndex == 5) {
            $('.arrow-next').hide();
        }

    });
})

$(function() {

    //modal for designers
    $('.modal_view_all').click(function() {
        $('#page_modal').fadeIn();
    })

    $('.close_modal').click(function() {
        $('#page_modal').fadeOut();
    })
})
