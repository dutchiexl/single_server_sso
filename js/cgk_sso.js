(function ($) {
    Drupal.behaviors.cgk_sso = {
        attach: function (context, settings) {
            console.log(Drupal.settings.cgk_sso);
            $.each(Drupal.settings.cgk_sso.callback_urls, function (key, callback_url) {
                console.log('Key: ' + key + "Value: " + value);
                $.post(callback_url + "/" + Drupal.settings.cgk_sso + "/4", function (data) {

                });
            });
        }
    };
})(jQuery);
