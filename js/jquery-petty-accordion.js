

$(document).ready(function () {
    // custom accordion
    $(function () {
        if ($('.accordion-list').length) {
            $('.accordion-list').on('click', '.accordion-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
                $(this).closest('.accordion-list-item').siblings().find('fa-solid').addClass('fa-plus').removeClass('fa-minus');

                // add slideToggle into this
                $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
                $(this).find('.fa-solid').toggleClass('fa-plus fa-minus');
            });
        }
    });

});
