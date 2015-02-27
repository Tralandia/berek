Meteor.publish("Galleries", function() {
	return Galleries.find({});
});

Meteor.publish("Photos", function() {
	return Photos.find({});
});