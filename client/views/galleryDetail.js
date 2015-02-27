Template.galleryDetail.rendered = function() {
}

Template.galleryDetail.helpers({
	gallery: function () {
		return Galleries.findOne(Session.get('currentPage').galleryId);
	},
	photos: function () {
		return Photos.find({gallery: Session.get('currentPage').galleryId});
	},
});

Template.galleryDetail.events({
	'click .gallery-item div' : function(e, t){
	    var t = prompt('Zadaj popis:', this.description);
	    if (_.isString(t)) {

	    	Photos.update(this._id, {$set: {description: t}});
	    }
	},
});