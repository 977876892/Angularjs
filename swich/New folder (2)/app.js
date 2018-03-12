var app=angular.module("myapp",[]);
app.controller("onectrl",function($scope){
	$scope.item1=['1.jpg','2.jpg','3.jpg'];
});
app.controller("twoctrl",function($scope){
	$scope.del =[{name:"sai",phone:9861260535,city:"bbsr"},{name:"ram",phone:87636514585,city:"Bam"}];
	$scope.ser={name:"",phone:"",city:""};
	$scope.save=function(){
		$scope.del.push($scope.newdel);
		$scope.newdel={}
	}
	$scope.delet=function(item){
		$scope.del.splice($scope.del.indexOf(item),1);
	}
	$scope.edit=function(item){
		$scope.newdel=angular.copy(item);
	}
});
