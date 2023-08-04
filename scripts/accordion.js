$("document").ready(function(){
	$("#div1").accordion({
		collapsible: true,
		icons: {
			header:"ui-icon-caret-1-s", activeHeader:"ui-icon-caret-1-n"
		},
		animate: 2000,
		event: "mouseover"
	});
});
