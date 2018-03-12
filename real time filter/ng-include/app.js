var app=angular.module("myapp",[]);
app.controller("demo",function($scope){
	$scope.items=
	[
       {name:"sai",date:new Date("march 28 2017"),gender:"male",salary:50000},
       {name:"ram",date:new Date("30 march 2007"),gender:"male",salary:230000},
       {name:"jai",date:new Date("1 june 1965"),gender:"male",salary:10000},
       {name:"om",date:new Date("28 may 1985"),gender:"male",salary:980000},
       {name:"kisan",date:new Date("31 january 1995"),gender:"male",salary:50000},
       {name:"hari",date:new Date("22 february 2015"),gender:"male",salary:70000},
       {name:"jagdish",date:new Date("19 july 2007"),gender:"male",salary:50000},
       {name:"om",date:new Date("15 march 2014"),gender:"male",salary:58000},
       {name:"ramji",date:new Date("30 march 2011"),gender:"male",salary:60000},
       {name:"bikash",date:new Date("02 march 2010"),gender:"male",salary:25500}
	];
       $scope.select="";
	
});