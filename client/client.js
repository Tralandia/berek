UI.registerHelper("isAdmin", function () {
	return Session.get('isAdmin');
	// return (Meteor.userId() && Meteor.user().profile.isAdmin == true);
});

UI.registerHelper('d', function(date, f){
    if (!date || _.isUndefined(date)) return '';
	if (moment(date).isBefore('2000-01-01')) return '';

    f = _.isString(f) ? f : 'D. MMMM YYYY';
    return moment(date).format(f);
});
