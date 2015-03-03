UI.registerHelper("isAdmin", function () {
	return (Meteor.userId() && Meteor.user().profile.isAdmin == true);
});
