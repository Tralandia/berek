Meteor.publish("Galleries", function() {
	return Galleries.find({});
});

Meteor.publish("Images", function() {
	return Images.find({});
});

Meteor.publish("News", function() {
	return News.find({}, {limit: 100, sort: {date: -1}});
});