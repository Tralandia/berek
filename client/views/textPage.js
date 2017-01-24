Template.TextPage.rendered = function() {
}

Template.TextPage.helpers({
	thisTemplate: function () {
		var page = FlowRouter.getParam('textPage');
		if (page == 'kontakty') {
			Meteor.setTimeout(function() {
				GoogleMaps.init(
					{
						'key': 'AIzaSyCiKBItRcP8_iSzxbiLB4_iqc6nxTMk3Ms', //optional
						'language': 'sk', //optional
						'libraries': 'places'
					}, 
					function(){
						var center = [47.976557, 18.138159];
						var mapOptions = {
							scrollwheel: false,
							zoom: 18,
							mapTypeId: google.maps.MapTypeId.HYBRID
						};

						var showMarker = true;

						map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
						map.setCenter(new google.maps.LatLng(center[0], center[1]));


						if (showMarker) {
							var marker = new google.maps.Marker({
								position: new google.maps.LatLng(center[0], center[1]),
								map: map
							});

						}
					}
				);
				
			}, 2000)
		}
		return page;
	},
});

Template.TextPage.events({
	// 'submit form' : function(e, t){
	//     e.preventDefault();
	    
	// },
})