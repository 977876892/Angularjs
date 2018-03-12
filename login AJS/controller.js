var app=angular.module("my",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'login.html'
	})
	.when('/one',{
		resolve: {
           "check":function($location,$rootScope){
              if($rootScope.name == $rootScope.pass){
              	$location.path('/');
              }
           }
		},
		templateUrl:'one.html'
	})
	.otherwise({
		redirectTo:"/"
	})
});
app.controller("demo",function($scope,$location,$rootScope){
	$scope.sub=function(){
		 $rootScope.name=$scope.name;
		 $rootScope.pass=$scope.password;
		 if($scope.name == 'sai' && $scope.password=='123'){
		 	
		    $location.path('/one');
		 }
     };
});