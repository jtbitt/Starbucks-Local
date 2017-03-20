function config($stateProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app.html',
            controller: 'AppCtrl as app'
        })
}

function AppCtrl(){

    var vm = this;

}

angular.module('sbucks', [
    'sbucks.santamonica',
    'sbucks.newyork',
    'sbucks.london'
])

    .controller('AppCtrl', AppCtrl)

;   
