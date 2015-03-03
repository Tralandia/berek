moment.locale('sk');

if (Meteor.isClient) {
	if (/PhantomJS/.test(navigator.userAgent)) {
		Router.configure({
			loadingTemplate: 'loading',
		});
	} else {
		Router.configure({
			waitOn: function() {
				return [
					Meteor.subscribe('Galleries'),
					Meteor.subscribe('Images'),
					Meteor.subscribe('News'),
				];
			},
			loadingTemplate: 'loading',
		});
	}
}

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


Router.route('/fotografie/:slug', {
	layoutTemplate: 'layout',
	template: 'galleryDetail',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'galleryDetail',
			galleryId: Galleries.findOne({slug: this.params.slug})._id,
		});
		this.next();
	},
});

Router.route('/aktuality', {
	layoutTemplate: 'layout',
	template: 'news',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'news',
		});
		this.next();
	},
});

Router.route('/aktuality/:_id', {
	layoutTemplate: 'layout',
	template: 'newsDetail',
	onBeforeAction: function () {
		Session.set('currentPage', {
			template: 'newsDetail',
			newsId: this.params._id,
		});
		this.next();
	},
});
