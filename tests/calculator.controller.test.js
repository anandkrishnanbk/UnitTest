describe('All calculator tests',function()
{
    var $controller;
    beforeEach(module('CalcApp'));
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
        expect($scope.z).toBe(22);

    });

});