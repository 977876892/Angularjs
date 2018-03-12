var obj=angular.module("myApp",[]);
obj.controller("DemoController",
	function($scope,mathService){
         $scope.a;
         $scope.b;
         $scope.result=0;

         $scope.getsumresult=function()
         {
         	var n=mathService.sum(
                   parseInt($scope.a),parseInt($scope.b)    
         		);
         	$scope.result=n;
         };
         $scope.getmultiplyresult=function(){
         	var n=mathService.multiply(
                  parseInt($scope.a),parseInt($scope.b)
         		);
				$scope.result=n;
         };
});