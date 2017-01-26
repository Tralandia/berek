readSsrPages = function() {
	var allUrls = [
		'/',
		'/sk/2-percenta',
		'/sk/zapis',
		'/sk/caste-otazky',
		'/sk/dakujeme',
		'/sk/kontakty',
		'/sk/kto-sme',
		'/sk/my-v-mediach',
		'/sk/my',
		'/sk/myslienka',
		'/sk/nasa-kuchyna',
		'/sk/odporucame',
		'/sk/priestory',
		'/sk/referencie',
		'/sk/rytmus-tyzdna',
		'/sk/aktuality',
		'/sk/fotografie',
	]
	_.each(allUrls, function(url) {
		FlowRouter.go(url);
        document.title = $('h1').html() + ' - Lesná materská škôlka - Nové Zámky'
		console.log('Idem na url:', url);
		var html = $('html').html();

		html = html.replace(/<.*?script.*?>.*?<\/.*?script.*?>/igm, '');
		html = html.replace(/<script.*?>.*?<\/script>/igm, '');
		html = html.replace('<meta name="fragment" content="!">', '');
		// console.log('Html length:', html.length);
		// console.log(document.title);
		Meteor.call('saveSsrPage', url, html, function(error, result) {
			console.log(error, result);
		})
	})
}