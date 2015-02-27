Template.gallery.rendered = function() {
}

Template.gallery.helpers({
	galleries: function () {
		return Galleries.find({}, {sort: {date: -1}});
	},
	mainPhoto: function () {
		return Photos.findOne({gallery: this._id}, {sort: {order: 1}}).url;
	},
});

Template.gallery.events({
	// 'click .addItem' : function(e, t){
	//     e.preventDefault();
	// },
})