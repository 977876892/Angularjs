var app=angular.module("myapp",[]);
app.controller("democtrl",function($scope){
	$scope.orders=["Milk", "Bread", "Cheese"];
	$scope.ser="";
	$scope.addit=function(){
   if(!$scope.add){
		return;
	}
	$scope.errortext="";
	if($scope.orders.indexOf($scope.add) == -1){
		$scope.orders.push($scope.add);
	}
	else{
     $scope.errortext="The item is already in your shopping list.";
	}
	}
	$scope.rem=function(x){
		$scope.errortext="";
		$scope.orders.splice(x,1);
	}
});