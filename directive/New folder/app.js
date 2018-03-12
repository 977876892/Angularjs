var obj=angular.module("myapp",[]);
obj.directive("demodir",function(){
	var obj={};
	obj.restrict="EA";
	obj.replace=false;
	obj.template="well come sai";
	return obj;
});
obj.directive("onedir",function(){
	var obj={};
	obj.restrict="E";
	obj.replace=true;
	obj.templateUrl="link.html";
	return obj;
});
obj.directive("twodir",function(){
	var two={};
	two.restrict="A";
	two.replace=true;
	two.templateUrl="link.html";
	return two;
});
obj.controller("onectrl",function($scope){
	$scope.items=["sai","ram","jai","om","pass"];
	$scope.item=
	[
       {name:"sairam",classs:"10th",img:"1.jpg"},
       {name:"jairam",classs:"8th",img:"2.jpg"},
       {name:"om",classs:"7th",img:"3.jpg"},
       {name:"pink",classs:"9th",img:"2.jpg"},
       {name:"hari",classs:"5th",img:"1.jpg"},
       {name:"om",classs:"6th",img:"3.jpg"},
       {name:"om",classs:"1th",img:"2.jpg"},
       {name:"sai",classs:"2th",img:"1.jpg"},
       {name:"om",classs:"4th",img:"3.jpg"},
       {name:"jai",classs:"5th",img:"1.jpg"}
	];
	$scope.s1={name:"",classs:"",img:""};
});