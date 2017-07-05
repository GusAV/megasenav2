// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


angular.module('megaApp', ['ionic', 'megaApp.controllers'])


.config(function($stateProvider, $urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
    "use strict";
    
    $urlRouterProvider.otherwise("/menu/mega");
    
    $stateProvider
                
                .state("menu",{
                       url:"/menu",
                       templateUrl:"templates/menu.html",
                       abstract:true,
                       controller:"megaCtrl"                    
                })
                
                .state("menu.mega",{
                    url:"/mega",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/mega.html"
                        }
                        
                    }
                    
                })
    
                .state("menu.quina",{
                    url:"/quina",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/quina.html"
                        }

                    }

                })
    
    
                .state("menu.lotof",{
                    url:"/lotof",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/lotof.html"
                        }

                    }

                })
    
                .state("menu.fed",{
                    url:"/fed",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/fed.html"
                        }

                    }

                })
    
                .state("menu.lotom",{
                    url:"/lotom",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/lotom.html"
                        }

                    }

                })
    
                .state("menu.dupla",{
                    url:"/dupla",
                    views:{
                        'menuContent':{
                            templateUrl:"templates/dupla.html"
                        }

                    }

                });
  
});
