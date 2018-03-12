var app=angular.module("EmpApp",[]);
app.controller("EmpController",function($scope){
$scope.EmpData=[
{"empid":"101","empname":"Namratha",
"empaddr":"HYD","empsal":"10000",
"empdesg":"PA","empdept":"IT"},
{"empid":"103","empname":"Chaithanya"
,"empaddr":"SEC","empsal":"12000",
"empdesg":"SE","empdept":"BFS"},
{"empid":"106","empname":"vasavi",
"empaddr":"AMPT","empsal":"15000",
"empdesg":"PM","empdept":"CONSULTING"},
{"empid":"102","empname":"harsha",
"empaddr":"SR","empsal":"19000","empdesg":"AL",
"empdept":"INFRA"},
{"empid":"104","empname":"prathap",
"empaddr":"KPHB","empsal":"70000",
"empdesg":"SA","empdept":"FINANCE"}

]
});