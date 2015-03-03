News = new Meteor.Collection("News");

News.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
});

News.after.insert(function(userId, doc) {
	findUniqueSlug('News', doc._id);
});

// News.before.update(function(userId, doc, fieldNames, modifier, options) {
//     modifier.$set = modifier.$set || {};
//     if (fieldNames.indexOf('vatCode') > -1) {
//         var t = _.findWhere(vatCodes, {code: modifier.$set.vatCode});
//         modifier.$set.vatRate = t.defaultVatRate;        
//     }
// });

News.after.update(function(userId, doc, fieldNames, modifier, options) {
    if (fieldNames.indexOf('name') > -1) {
        findUniqueSlug('News', doc._id);
    }
});