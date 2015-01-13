define([
	"troopjs-widget/component",
	"troopjs-core/pubsub/hub"
], function (Widget, hub) {
	var UNDEFINED;
	var $ELEMENT = "$element";

	return Widget.extend({
		"displayName": "l10n-widget/text",

		"sig/start": function () {
			var me = this;
			var translationKey = me[$ELEMENT].data("translationKey");

			return translationKey === UNDEFINED
				? UNDEFINED
				: hub.publish("l10n/get", translationKey)
					.spread(function (key, value) {
						return value === UNDEFINED
							? UNDEFINED
							: me.text(value);
					});
		}
	});
});