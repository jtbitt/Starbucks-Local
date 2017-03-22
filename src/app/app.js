function config($stateProvider, $locationProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app/app.html',
            controller: 'AppCtrl as app'
        });

    $locationProvider.html5Mode(true);

}

function AppCtrl($scope){

    var app = this;

    app.data;

    function getGoogleData(){
        var service = new google.maps.places.PlacesService(map);
        var place = { placeId: 'ChIJr4vVw8-kwoAR0iEipIyAZWw' };

        service.getDetails(place, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if(place) {
                        console.log(place);
                        app.data = place;
                        $scope.$apply();
                    }
                }
            }
        );
    }
    getGoogleData();

}

angular.module('sbucks', [
    'ui.router'
])

    .config(config)
    .controller('AppCtrl', AppCtrl)

;   
