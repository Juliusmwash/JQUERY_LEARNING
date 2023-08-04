//var language = ["HTML", "Css" , "JavaScript", "PHP", "Java", "Python","C", "C++", "C#", "Perl", "Ruby", , "Scala", "COBOL", "Basic","Fortran", "Lisp", "TypeScript"]

$("document").ready(function(){
	$("#input").autocomplete ({
		source: ["HTML","Css","JavaScript","PHP","Java","Python","C","C++","C#","Perl","Ruby","Scala","COBOL","Basic","Fortran","Lisp","TypeScript"]
}, {
	delay: 1000,
	minLength: 3,
	autoFocus: true
})
});

