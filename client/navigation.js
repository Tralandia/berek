Template.navigation.rendered = function() {
}

Template.navigation.helpers({
	isActive: function (view) {
		var t = Session.get('currentPage');
		return (t.template == view) ? 'current-menu-item current_page_item' : '';
	},
});


Template.navigation.events({
    'click .logout' : function(e, t){
        e.preventDefault();
        Meteor.logout(function() {
            Router.go('/');
        });
    },	
})