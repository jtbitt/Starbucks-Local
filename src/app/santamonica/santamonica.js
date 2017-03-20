function config($stateProvider){
    $stateProvider
        .state('sbucks.santamonica', {
            url: 'santamonica',
            templateUrl: 'santamonica/santamonica.html',
            controller: 'SantaMonicaCtrl as vm'
        });
}

function SantaMonicaCtrl(){

    var vm = this;

}

angular.module('sbucks.santamonica', [
])

    .controller('SantaMonicaCtrl', SantaMonicaCtrl)

;
