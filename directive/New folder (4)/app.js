var app=angular.module("myapp",[]);
app.directive("demodir",function(){
	return{
		restrict:"E",
		template:"my name is ☻ ►"
	};
	
});
app.directive("demodir1",function(){
	return{
		restrict:"A",
		templateUrl:"one.html",
		controller:"onectrl"
	};
});