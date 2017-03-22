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
    app.photos;
    app.reviews;

    function getGoogleData(){
        var service = new google.maps.places.PlacesService(map);
        var place = { placeId: 'ChIJr4vVw8-kwoAR0iEipIyAZWw' };

        service.getDetails(place, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if(place) {
                        app.data = place;
                        app.photos = app.data.photos;
                        app.reviews = app.data.reviews;
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
