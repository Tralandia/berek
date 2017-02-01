moment.locale('sk');

FlowRouter.subscriptions = function() {
	this.register('Galleries', Meteor.subscribe('Galleries'));
	this.register('Images', Meteor.subscribe('Images'));
	this.register('News', Meteor.subscribe('News'));
};

FlowRouter.triggers.enter([function(context, redirect) {
    GAnalytics.pageview();
    Session.set('Language', context.params.language || 'sk');
    Meteor.setTimeout(function() {
        document.title = $('h1').html() + ' - Lesná detská škôlka - Nové Zámky'
    }, 0)
}]);

FlowRouter.route('/', {
    action: function(params, queryParams) {     
        BlazeLayout.render('layout', {mainContent: 'home'});
    }
});

FlowRouter.route('/hu', {
    action: function(params, queryParams) {		
    	BlazeLayout.render('layout', {mainContent: 'home-hu'});
    }
});

FlowRouter.route('/:language/fotografie', {
    action: function(params, queryParams) {     
        BlazeLayout.render('layout', {mainContent: 'gallery'});
    }
});

FlowRouter.route('/:language/fotografie/:galleryId', {
    action: function(params, queryParams) {     
        BlazeLayout.render('layout', {mainContent: 'galleryDetail'});
    }
});

FlowRouter.route('/:language/aktuality', {
    action: function(params, queryParams) {     
        BlazeLayout.render('layout', {mainContent: 'news'});
    }
});

FlowRouter.route('/:language/aktuality/:newsId', {
    action: function(params, queryParams) {     
        BlazeLayout.render('layout', {mainContent: 'newsDetail'});
    }
});

FlowRouter.route('/:language/:textPage', {
    action: function(params, queryParams) {		
    	BlazeLayout.render('layout', {mainContent: 'TextPage'});
    }
});

