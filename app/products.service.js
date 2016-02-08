 angular.module('prodApp',[]).service('prodService',prodService);
 function prodService()
 {
     return{
       getCategoryService:function() {
            return {1:'Coffee',2:'sugar juice'};
       }
     };
 }
