Meteor.subscribe('Galleries'),
Meteor.subscribe('Photos'),
Meteor.subscribe('News'),

Router.configure({
	// loadingTemplate: 'loading',
});

Router.route('/', {
	layoutTemplate: 'layout',
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

Router.route('/aktuality', {
	layoutTemplate: 'layout',
	template: 'blog',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'blog',
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
