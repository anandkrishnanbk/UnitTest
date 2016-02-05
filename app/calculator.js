 angular.module('calcApp',['prodApp']).controller('CalcController',CalcController);
 CalcController.$inject=['$scope'];
 function CalcController($scope)
 {
     $scope.sum=function()
     {
         $scope.z=$scope.x+$scope.y;
     };
 }
 angular.element(document).ready(function()
 {
    angular.bootstrap(document,['calcApp']);
 });
