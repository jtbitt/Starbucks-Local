function config($stateProvider, $locationProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app/app.html',
            redirectTo: 'sbucks.store_info',
            controller: 'AppCtrl as app'
        });

    $locationProvider.html5Mode(true);

}

function AppCtrl($scope){

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
