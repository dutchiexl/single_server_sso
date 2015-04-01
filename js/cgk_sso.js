(function ($) {
    Drupal.behaviors.cgk_sso = {
        attach: function (context, settings) {
            $.each(Drupal.settings.cgk_sso.callback_urls, function (key, callback_url) {
                $.ajax({
                    url: callback_url + "/" + Drupal.settings.cgk_sso.uid + "/4",
                    type: "GET",
                    dataType: 'jsonp'
                });
            });
        }
    };
})(jQuery);
