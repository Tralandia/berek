Meteor.publish("Galleries", function() {
	return Galleries.find({});
});

Meteor.publish("Photos", function() {
	return Photos.find({});
});

Meteor.publish("News", function() {
	return News.find({}, {limit: 100, sort: {date: -1}});
});