/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */
var myapp = angular.module('App1', ["ui.router", 'App2'])
myapp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("state");
    $stateProvider
        .state('state', {
            views: {
                'X': { template: '<div>hi im static</div>' },
                '': {
                    templateUrl: 'test.html',
                    controller: function($scope, $state) {
                        $state.go('state');
                        $scope.contacts = [{ id: 0, name: "Alice" }, { id: 1, name: "Bob" }];
                    },
                    onEnter: function() {
                        console.log("enter state");
                    }
                }
            },
            url: '/state'
        })
       

});

var App1 = angular.module('App2', ["ui.router"])
App1.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("contacts");
    $stateProvider
        .state('contacts', {
            abstract: false,
            url: '/contacts',
            templateUrl: 'test2.html',
            controller: function($scope) {
                $scope.contacts = [{ id: 0, name: "Alice" }, { id: 1, name: "Bob" }];
            },
            onEnter: function() {
                console.log("enter contacts");
            }
        })

    .state('contacts.list', {
            url: '/list',
            views: {
                'X': {
                    template: '<div>hi im static</div>'
                },
                '': {
                    templateUrl: 'test3.html',
                    onEnter: function() {
                        console.log("enter contacts.list");
                    }
                }
            }

        })
        .state('contacts.detail', {
           url: '/detail',
            views: {
                'X': {
                    template: '<div>hi im static</div>'
                },
                '': {
                    templateUrl: 'test4.html',
                    onEnter: function() {
                        console.log("enter contacts.list");
                    }
                }
            }

        })
});
