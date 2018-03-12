var app=angular.module("myapp",[]);
app.controller("democtrl",function($scope){
	$scope.orders=["salt","sugar","rice","tea"];
	$scope.add=function(){
		$scope.error="";
		if(!$scope.order){
			return;
		}
		if($scope.orders.indexOf($scope.order)==-1){
			console.log($scope.orders.indexOf($scope.order))
			$scope.orders.push($scope.order);
		}
		else{
			$scope.error="The item is already in your shopping list.☺";
		}
	}
	$scope.remove=function(x){
		$scope.error="";
		$scope.orders.splice(x,1);
	}
});