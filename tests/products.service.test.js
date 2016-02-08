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
        expect(service.getCategoryService).not.toBe(null);
    });

});