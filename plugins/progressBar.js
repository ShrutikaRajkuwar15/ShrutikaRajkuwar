
$('.progress-bar').waypoint({
	handler: function (direction) {
			var el = $(this.element);
			var value = el.data('value');
		
		el.animate({
			width: value + '%'
		}, 500);
				
		if(el.parent().is(':last-child')) {
			//
		}
		
	},
	offset: '80%',
})
