describe('All calculator tests',function()
{
    var $controller;
    beforeEach(module('products.json'));
    beforeEach(module('calcApp'));

    beforeEach(inject(function(_$controller_)
    {
        $controller=_$controller_;

    }));
    it('should not fail', function() {
        var testFixture;
        inject(function (products) {
            testFixture = products;
        });

        expect(testFixture.description).toEqual(
            'Plans available within specific counties'
        );
    });
    /*var $controller;
    it('test sum of x and y',function()
    {
        var $scope={};
        //jasmine.getFixtures().fixturesPath = './tests/';
        //var staticData= JSON.parse(jasmine.getFixtures().read("products.json"));
        var controller = $controller('CalcController',{$scope:$scope});
        $scope.x=10;
        $scope.y=12;
        $scope.sum();
        var prettier=angular.mock.dump($scope);
        console.log(prettier);
        expect($scope.z).toBe(22);

    });*/

});