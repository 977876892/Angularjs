var app=angular.module("myapp",[]);
app.controller("demo",function($scope){
	$scope.items=["salt","sugar","rice","oil"];
	$scope.add=function(){
	   $scope.error="";
	   if(!$scope.items){
		   return;
	   }
	   if($scope.items.indexOf($scope.order) == -1){
		   $scope.items.push($scope.order);
	   }
	   else{
		   $scope.error="The item is already in your shopping list.";
	   }
	}
	$scope.rem=function(x){
		$scope.items.splice(x,1);
	}
});