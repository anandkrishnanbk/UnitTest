describe('Products service',function()
{
    beforeEach(module('prodApp'));
    it('getCategoryService should not be null',function()
    {
        var service;
        inject(function getDependencies(prodService)
        {
            service=prodService;
        });
        expect(service.getCategoryService()).not.toBe(null);
    });
    it('getCategories value comparison',function()
    {
        var service;
        inject(function getDependencies(prodService){
            service=prodService;
        });
        expect(service.getCategoryService()).toEqual({1:'Coffee',2:'sugar juice'});
    });

});