Template.news.rendered = function() {
}

Template.news.helpers({
	news: function () {
		return News.find({}, {sort: {date: -1}});
	},
	mainPhoto: function () {
		var t = News.findOne(this._id);
		if (t) return t.photo;
	},
	date: function () {
		return moment(this.date).format('D. MMMM YYYY');
	},
});

Template.news.events({
	// 'click .addItem' : function(e, t){
	//     e.preventDefault();
	// },
})