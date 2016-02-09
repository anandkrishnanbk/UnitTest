describe('All products tests',function()
{
    var alias='prodApp';
    var obj={"customerService":{getcustIds:function()
    {
        return [23,34,56,76];
    }}
    };
    var func = function($provide)
    {
        $provide.constant('discountPercent',0.10);
    };
    beforeEach(module(alias,obj,func))
});