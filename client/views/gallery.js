Template.gallery.rendered = function() {
}

Template.gallery.helpers({
	galleries: function () {
		return Galleries.find({}, {sort: {date: -1}});
	},
	photos: function () {
		return Photos.find({gallery: this._id}, {sort: {order: 1}, limit: 2});
	},
});

Template.gallery.events({
	// 'click .addItem' : function(e, t){
	//     e.preventDefault();
	// },
})