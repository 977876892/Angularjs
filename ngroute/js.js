
     	var obj=angular.module("myApp",['ngRoute']);
     	obj.config(['$routeProvider',
     		function($routeProvider){
     		$routeProvider
     		.when("/home",{
     			templateUrl:"home.html",
     			controller:"HomeCtrl"
     		})
     		.when("/about",{
     			templateUrl:"about.html",
     			controller:"AboutCtrl"
     		})
     		.when("/client",{
     			templateUrl:"client.html",
     			controller:"ClientCtrl"
     		})

     		}]);
     	obj.controller("HomeCtrl",
     		function($scope){
                  $scope.pic=['1.jpg','2.jpg','3.jpg'];
     	});
       obj.controller("AboutCtrl",
     		function($scope){
                 $scope.detail=
                 [
                   {name:"sai",roll:20,course:"html"},
                   {name:"ram",roll:30,course:"css"},
                   {name:"jai",roll:60,course:"ajs"}
                 ];
     	});
       obj.controller("ClientCtrl",
     		function($scope){
               $scope.a="";
     	});
     	
     