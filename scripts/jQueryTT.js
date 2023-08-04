$("document").ready(function(){
	$("#tool").tooltip({
		track: true,
		content: "This is the place for name",
		//show:{effect:"slideDown",duration:2000,delay:250}
		//show:{effect:"highlight",duration:2000,delay:250}
		//show:{effect:"pulsate",duration:2000,delay:250}
		show:{effect:"pulsate",duration:2000},
		hide:{effect:"explode", duration:2000}
	});
})
