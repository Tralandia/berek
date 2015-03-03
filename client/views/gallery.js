Template.gallery.rendered = function() {
}

Template.gallery.helpers({
	galleries: function () {
		return Galleries.find({}, {sort: {date: -1}});
	},
	photos: function () {
		return Images.find({'metadata.gallery': this._id}, {sort: {order: 1}, limit: 2});
	},
});

Template.gallery.events({
	'click #addGallery' : function(e, t){
	    var t = prompt('Zadaj nadpis:');
	    if (_.isString(t)) {
	    	Galleries.insert({name: t, date: new Date(), description: t});
	    }
	},
})