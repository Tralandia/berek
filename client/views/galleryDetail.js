Template.galleryDetail.rendered = function() {
}

Template.galleryDetail.helpers({
	gallery: function () {
		return Galleries.findOne({slug: FlowRouter.getParam('galleryId')});
	},
	photos: function () {
		return Images.find({'metadata.gallery': this._id});
	},
});

Template.galleryDetail.events({
    'dropped h1': function(e, t) {
    	if (Session.get('isAdmin') != true) return false;
    	
    	var galleryId = Galleries.findOne({slug: FlowRouter.getParam('galleryId')})._id;
        FS.Utility.eachFile(e, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (!err) {
                    Images.update(fileObj._id, {$set: {'metadata.gallery': galleryId, 'metadata.description': '----', 'metadata.order': (Images.find({'metadata.gallery': galleryId}).count()+1)}});
                }
            });
        });
    },
	'click .gallery-photo div' : function(e, t){
    	if (Session.get('isAdmin') != true) return false;
	    var t = prompt('Zadaj popis:', this.metadata.description);
	    if (_.isString(t)) {
	    	Images.update(this._id, {$set: {'metadata.description': t}});
	    }
	},
	'click h1' : function(e, t){
    	if (Session.get('isAdmin') != true) return false;
	    var t = prompt('Zadaj nadpis:', this.name);
	    if (_.isString(t)) {
	    	Galleries.update(this._id, {$set: {name: t}});
	    }
	},
	'click #galleryDescription' : function(e, t){
    	if (Session.get('isAdmin') != true) return false;
	    var t = prompt('Popis:', this.description);
	    if (_.isString(t)) {
	    	Galleries.update(this._id, {$set: {description: t}});
	    }
	},
});