Meteor.methods({
	'saveSsrPage': function(url, html) {
		SsrPages.upsert({url: url}, {$set: {
			url: url,
			html: html
		}});
	},
});

Picker.route('/(.*)', function(params, req, res, next) {
	var found = 0;

	// Google vypnuty, lebo on sem ma vediet ist bez fragmentu
	// found += /Googlebot/i.test(req.headers['user-agent']);
	
	found += /SeznamBot/i.test(req.headers['user-agent']);
	found += /_escaped_fragment_/.test(req.url);
	found += /^facebookexternalhit/i.test(req.headers['user-agent']);
	found += /^linkedinbot/i.test(req.headers['user-agent']);
	found += /^twitterbot/i.test(req.headers['user-agent']);

	// SEO apps should get HTML version, too
	found += /^AhrefsBot/i.test(req.headers['user-agent']);
	found += /^DotBot/i.test(req.headers['user-agent']);

	if (found == 0) {
		next();
	} else {
		var thisUrl = req._parsedUrl.pathname;

		var cachedPage = SsrPages.findOne({url: thisUrl})
		if (!cachedPage) {
			res.writeHead(404, {
				'Location': 'http://www.berek.sk/'
			});
			res.end(); return false;
		} else {
			console.log('SSR request', thisUrl, cachedPage.html.length + ' Bytes')
			res.setHeader("Content-Type", "text/html");
			res.end('<!DOCTYPE html>' + cachedPage.html);
		}
	}
});


// var seoPicker = Picker.filter(function(req, res) {
// 	var found = 0;

// 	// Google vypnuty, lebo on sem ma vediet ist bez fragmentu
// 	// found += /Googlebot/i.test(req.headers['user-agent']);
	
// 	found += /SeznamBot/i.test(req.headers['user-agent']);
// 	found += /_escaped_fragment_/.test(req.url);
// 	found += /^facebookexternalhit/i.test(req.headers['user-agent']);
// 	found += /^linkedinbot/i.test(req.headers['user-agent']);
// 	found += /^twitterbot/i.test(req.headers['user-agent']);

// 	// SEO apps should get HTML version, too
// 	found += /^AhrefsBot/i.test(req.headers['user-agent']);
// 	found += /^DotBot/i.test(req.headers['user-agent']);

// 	if (found) SsrIsCrawler = true;

// 	found += /janko/i.test(req.headers['user-agent']);
// 	return !!found;
// });


