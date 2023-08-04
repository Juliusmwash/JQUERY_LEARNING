$("document").ready(function(){
	$("#date").datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		minDate: new Date(2016,1,5),
		maxDate: new Date(2024,1,5)
	});
})
