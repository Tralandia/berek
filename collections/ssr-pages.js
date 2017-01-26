SsrPages = new Meteor.Collection("SsrPages");

SsrPages.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
});

// SsrPages.after.insert(function(userId, doc) {
// 	findUniqueSlug('SsrPages', doc._id);
// });

// SsrPages.before.update(function(userId, doc, fieldNames, modifier, options) {
//     modifier.$set = modifier.$set || {};
//     if (fieldNames.indexOf('vatCode') > -1) {
//         var t = _.findWhere(vatCodes, {code: modifier.$set.vatCode});
//         modifier.$set.vatRate = t.defaultVatRate;        
//     }
// });

// SsrPages.after.update(function(userId, doc, fieldNames, modifier, options) {
//     if (fieldNames.indexOf('name') > -1) {
//         findUniqueSlug('News', doc._id);
//     }
// });