Galleries = new Meteor.Collection("Galleries");

Galleries.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
});
