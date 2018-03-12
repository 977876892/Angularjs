var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:home.html,
        
    })
    .when("/about",{
       
        templateUrl:about.html,
    })
});