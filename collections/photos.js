Photos = new Meteor.Collection("Photos");

Photos.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
});
