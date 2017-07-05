(function(){
    
        "use strict";
    
        angular.module("megaApp").config(function($stateProvider, $urlRouterProvider){
            
           $urlRouterProvider.otherwise("/menu/home"); 
                
                $stateProvider
                
                .state("menu",{
                       url:"/menu",
                       templateUrl:"../templates/menu.html",
                       abstract:true,
                       controller:"megaCtrl"                       
                })
                
                .state("menu.home",{
                    url:"/home",
                    views:{
                        'menuContent':{
                            templateUrl:"../templates/home.html"
                        }
                        
                    }
                    
                });
        
        });
})();