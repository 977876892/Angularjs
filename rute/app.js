var obj=angular.module("myApp",["ngRoute"]);
obj.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("/home",{
		templateUrl :"home.html",
	})
	.when("/courses",{
		templateUrl:"courses.html",
		controller:"coursesctrl"
	})
	.when("/details",{
		templateUrl :"stu.html",
		controller:"studentctrl"
	})
	.otherwise({
		redirectTo:"/Home"
	});
	obj.controller("coursesctrl",function($scope){
       $scope.course=["html","css","java","php"];
	});
	obj.controller("studentctrl",function($scope){
		$scope.stu={sid:1025,sname:"sai",course:"java"};
	});
	$locationProvider.html5Mode(true);
});