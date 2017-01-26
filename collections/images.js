if (Meteor.isServer) {
	onProduction = process.env.PRODUCTION == 1 ? 1 : 0;
} else {
	onProduction = document.location.href.indexOf('berek.sk') > -1 ? 1 : 0;
}

Images = new FS.Collection("images", {
	stores: [
		new FS.Store.FileSystem("images", {
			mongoUrl: onProduction ? 'mongodb://localhost:27017/berek/' : 'mongodb://127.0.0.1:3009/meteor/',
			path: onProduction ? '/var/www/berek/uploads' : '/meteor/berek/uploads',
			transformWrite: function(fileObj, readStream, writeStream) {
				gm(readStream).resize(1280, 960, '^').gravity('Center').crop(1280, 960, 0, 0).stream('JPG').pipe(writeStream);
			}
		}),
	],
	filter: {
		allow: {
			contentTypes: ['image/*'] //allow only images in this FS.Collection
		}
	}
});

FS.HTTP.setHeadersForGet([
	['Cache-Control', 'public, max-age=31536000']
]);


Images.allow({
	insert: function() {return true},
	update: function() {return true},
	remove: function() {return true},
	download:function(){
		return true;
	}
});
