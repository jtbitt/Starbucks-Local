function config($stateProvider, $locationProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app/app.html',
            redirectTo: 'info',
            controller: 'AppCtrl as app'
        })
        .state('sbucks.store_info', {
            url: 'info',
            templateUrl: 'app/store_info/store_info.html',
            controller: 'StoreInfoCtrl as vm'
        });   

    $locationProvider.html5Mode(true);

}

function AppCtrl($state){

    var app = this;

    // If this was a bigger app, I would set up Global variables and config here

}

angular.module('sbucks', [
    'ui.router',
    'sbucks.store_info'
])

    .config(config)
    .controller('AppCtrl', AppCtrl)

;   
