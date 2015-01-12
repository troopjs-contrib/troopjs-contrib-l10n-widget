require.config({
	"baseUrl": "bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery/dist",
		"main": "jquery"
	}, {
		"name": "troopjs-i18n-widget",
		"location": ".."
	}],
	"deps": [ "jquery", "require", "troopjs/main", "troopjs-widget/main" ],
	"callback": function (jQuery, localRequire) {
		localRequire([
			"troopjs-widget/application",
			"troopjs-i18n/service"
		], function (Application, I18NService) {
			jQuery(function ($) {
				Application($("html"), "application", I18NService.extend({
					"hub/i18n/fetch": function (key, value) {
						return [ key, [ key, "TEST" ].join(":") ];
					}
				})()).start();
			});
		});
	}
});
