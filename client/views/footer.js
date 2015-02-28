Template.footer.rendered = function() {
}

Template.footer.helpers({
	news: function () {
		return News.find({}, {sort: {date: -1}});
	},
	mainPhoto: function () {
		var t = News.findOne(this._id);
		if (t) return t.photo;
	},
	date: function () {
		return moment(this.date).format('D. MMMM YYYY');
	},
});

Template.footer.events({
	'submit form' : function(e, t){
	    e.preventDefault();
	    var email = $('#newsletterEmail').val();
	    var name = $('#newsletterName').val();

	    if (isEmail(email) && _.isString(name) && name.length > 2) {
		    HTTP.get(
		    	'http://slobodaucenia.us3.list-manage.com/subscribe/post',
		    	{params: {u: '80b2e7cae74ee3050de2f518d', id: 'd6cf8bc628', EMAIL: email, FNAME: name}},
		    	function(error, result) {
		    		alert('Ďakujeme. Na váš email bol poslaný potvrdzovací odkaz.');
		    	}
		    );
	    	
	    } else {
	    	alert('Nesprávna emailová adresa alebo meno.');
	    }
	    
	},
})