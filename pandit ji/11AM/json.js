var app=angular.module("jsonapp",[]);
app.controller("jsonController",function($scope){
$scope.empdata=[	{"empid":"101","empname":"anandh","empage":"23","empdesg":"SD","empsal":"25000","empdept":"IT"},
				{"empid":"102","empname":"abhi","empage":"21","empdesg":"SE","empsal":"24000","empdept":"R&D"},
				{"empid":"103","empname":"naveen","empage":"25","empdesg":"PM","empsal":"29000","empdept":"ACC"}
			];
			
		
});	