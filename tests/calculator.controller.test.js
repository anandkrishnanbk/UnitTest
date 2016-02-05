describe('All calculator tests',function()
{
    var $controller;
    beforeEach(module('calcApp'));
    beforeEach($inject(function(_$controller_)
    {
        $controller=_$controller_;
    }));

    var $controller;
    it('test sum of x and y',function()
    {
        var controller = $controller('calcController',{$scope:$scope})
        $scope.x=10;
        $scope.y=12;
        $scope.sum();
        except($scope.z).toBe(3);

    });

});