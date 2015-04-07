(function ($) {
    Drupal.behaviors.cgk_sso = {
        attach: function (context, settings) {
            $.each(Drupal.settings.cgk_sso.callback_urls, function (key, callback_url) {
                $('body').append('<iframe src="' + callback_url + '" style="display: none"></iframe>');

            });
        }
    };
})(jQuery);
