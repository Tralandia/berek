Template.newsDetail.rendered = function() {
}

Template.newsDetail.helpers({
	news: function () {
		return News.findOne({slug: FlowRouter.getParam('newsId')});
	},
});

Template.newsDetail.events({
	// 'click .gallery-item div' : function(e, t){
	//     var t = prompt('Zadaj popis:', this.description);
	//     if (_.isString(t)) {

	//     	Photos.update(this._id, {$set: {description: t}});
	//     }
	// },
});