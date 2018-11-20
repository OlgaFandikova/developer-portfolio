(function($) {

    const $formSuccessMessage = $('.form-success-message');
    const $btnCloseSuccessMessage = $('.btn-close-success-message');

    $('#form').submit(function(e) {
        e.preventDefault();

        const formData = $(this).serialize();
        const url = $(this).attr('action');

        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            success: function() {
                // $formSuccessMessage.fadeIn(300);
            }
        });
    });

    $btnCloseSuccessMessage.click(function () {
        $formSuccessMessage.fadeOut(300);
    });

})(jQuery);