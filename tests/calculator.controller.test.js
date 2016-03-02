describe('All calculator tests',function()
{
    var $controller;
    beforeEach(module('calcApp'));
    beforeEach(inject(function(_$controller_)
    {
        $controller=_$controller_;
    }));

    var $controller;
    it('test sum of x and y',function()
    {
        var $scope={};
        var controller = $controller('CalcController',{$scope:$scope});
        $scope.x=10;
        $scope.y=12;
        $scope.sum();
        var prettier=angular.mock.dump($scope);
        console.log(prettier);
        expect($scope.z).toBe(22);

    });

});