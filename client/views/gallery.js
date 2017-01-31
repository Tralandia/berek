Template.gallery.rendered = function() {
}

Template.gallery.helpers({
	galleries: function () {
		return Galleries.find({}, {sort: {date: -1}});
	},
	photos: function () {
		return Images.find({'metadata.gallery': this._id}, {sort: {order: 1}, limit: 1});
	},
	count: function () {
		return Images.find({'metadata.gallery': this._id}).count();
	},
});

Template.gallery.events({
	'click #addGallery' : function(e, t){
    	if (Session.get('isAdmin') != true) return false;

	    var t = prompt('Zadaj nadpis:');
	    if (_.isString(t)) {
	    	Galleries.insert({name: t, date: new Date(), description: t});
	    }
	},
})