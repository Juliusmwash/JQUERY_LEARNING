$("document").ready(function(){
	$("#btn1").click(function(){
		$("#dialog").dialog("open");
	});
	$("#dialog").dialog({
		title:"This is title using property",
		draggable: false,
		resizeable: false,
		closeOnEscape: false,
		modal: true,
		autoOpen: false
	});
});
