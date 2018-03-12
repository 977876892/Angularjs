var obj=angular.module("myApp",["ngRoute"]);
obj.config(function($routeProvider){
	$routeProvider
	.when("/Home",{
		templateUrl:"home.html",
		controller:""
	})
	.when("/Course",{
		templateUrl:"course.html",
         controller:"CourseCtrl"
	})
	.when("/Detail",{
		templateUrl:"student.html",
		controller:"TempCtrl"
	});
	
});
obj.controller("CourseCtrl",
	function($scope){
       $scope.course=["ajs","html","css","java"];
});
obj.controller("TempCtrl",
	function($scope){
       $scope.s1={sid:1025,sname:"sai",course:"java"};
});
