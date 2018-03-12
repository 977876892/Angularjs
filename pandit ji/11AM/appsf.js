 var mainApp = angular.module("mainApp", []);
	  mainApp.value("defval",5);
      mainApp.factory('MathFactory', function() {     
         var factory = {};  
         factory.multiply = function(a, b) {
            return a * b 
         }
         return factory;
      }); 

      mainApp.service('CalcService', function(MathFactory){
            this.square = function(a) { 
            return MathFactory.multiply(a,a); 
         }
      });

      mainApp.controller('CalcController', function($scope,defval, CalcService) {
			$scope.number=defval;
			$scope.result=CalcService.square(defval);
		   $scope.square = function() {
            $scope.result = CalcService.square($scope.number);
         }
      });