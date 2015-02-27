Meteor.subscribe('Galleries'),
Meteor.subscribe('Photos'),

Router.configure({
	// loadingTemplate: 'loading',
});

Router.route('/', {
	layoutTemplate: 'layoutHome',
	template: 'home',
	onBeforeAction: function () {
		this.next();
	},
});

Router.route('/o-skolke', {
	layoutTemplate: 'layout',
	template: 'about',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'about',
		});
		this.next();
	},
});

Router.route('/fotografie', {
	layoutTemplate: 'layout',
	template: 'gallery',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'gallery',
		});
		this.next();
	},
});

Router.route('/fotografie/:_id', {
	layoutTemplate: 'layout',
	template: 'galleryDetail',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'galleryDetail',
			galleryId: this.params._id,
		});
		this.next();
	},
});
