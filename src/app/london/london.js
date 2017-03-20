function config($stateProvider){
    $stateProvider
        .state('sbucks.london', {
            url: 'london',
            templateUrl: 'london/london.html',
            controller: 'LondonCtrl as vm'
        });
}

function LondonCtrl(){

    var vm = this;

}

angular.module('sbucks.london', [
])

    .controller('LondonCtrl', LondonCtrl)

;
