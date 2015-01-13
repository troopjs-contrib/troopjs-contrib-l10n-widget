require.config({
	"baseUrl": "bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery/dist",
		"main": "jquery"
	}, {
		"name": "troopjs-l10n-widget",
		"location": ".."
	}],
	"deps": [ "jquery", "require", "troopjs/main", "troopjs-widget/main" ],
	"callback": function (jQuery, localRequire) {
		localRequire([
			"troopjs-widget/application",
			"troopjs-l10n/service"
		], function (Application, L10NService) {
			jQuery(function ($) {
				Application($("html"), "application", L10NService.extend({
					"hub/l10n/fetch": function (key, value) {
						return [ key, [ key, "TEST" ].join(":") ];
					}
				})()).start();
			});
		});
	}
});
