Galleries = new Meteor.Collection("Galleries");

Galleries.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
});


Galleries.after.insert(function(userId, doc) {
	findUniqueSlug('Galleries', doc._id);
});

// Galleries.before.update(function(userId, doc, fieldNames, modifier, options) {
//     modifier.$set = modifier.$set || {};
//     if (fieldNames.indexOf('vatCode') > -1) {
//         var t = _.findWhere(vatCodes, {code: modifier.$set.vatCode});
//         modifier.$set.vatRate = t.defaultVatRate;        
//     }
// });

Galleries.after.update(function(userId, doc, fieldNames, modifier, options) {
    if (fieldNames.indexOf('name') > -1) {
        findUniqueSlug('Galleries', doc._id);
    }
});
