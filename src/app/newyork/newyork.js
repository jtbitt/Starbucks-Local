function config($stateProvider){
    $stateProvider
        .state('sbucks.newyork', {
            url: 'newyork',
            templateUrl: 'newyork/newyork.html',
            controller: 'NewYorkCtrl as vm'
        });
}

function NewYorkCtrl(){

    var vm = this;

}

angular.module('sbucks.newyork', [
])

    .controller('NewYorkCtrl', NewYorkCtrl)

;
