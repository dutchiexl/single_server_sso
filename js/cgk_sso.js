(function ($) {
    Drupal.behaviors.cgk_sso = {
        attach: function (context, settings) {
            console.log(Drupal.settings.cgk_sso.callback_urls);
            $.each(Drupal.settings.cgk_sso.callback_urls, function (key, callback_url) {
                //$.ajax({
                //    url: callback_url,
                //    type: "GET",
                //    dataType: 'jsonp'
                //});
                console.log(callback_url);
                $('body').append('<iframe src="' + callback_url + '" style="display: none"></iframe>');

            });
        }
    };
})(jQuery);
