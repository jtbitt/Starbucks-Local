function config($stateProvider, $locationProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app/app.html',
            controller: 'AppCtrl as app'
        });

    $locationProvider.html5Mode(true);

}

function AppCtrl(){

    var vm = this;

}

angular.module('sbucks', [
    'ui.router',
    'sbucks.santamonica',
    'sbucks.newyork',
    'sbucks.london'
])

    .config(config)
    .controller('AppCtrl', AppCtrl)

;   
