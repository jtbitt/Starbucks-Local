 function config($stateProvider){
     $stateProvider
         .state('sbucks.store_info', {
             url: 'info',
             templateUrl: 'app/store_info/store_info.html',
             controller: 'StoreInfoCtrl as vm'
         });

 }

function StoreInfoCtrl($scope){

    var vm = this;

    // Set variables for view
    vm.data;
    vm.photos;
    vm.reviews;

    function getGoogleData(){
        var service = new google.maps.places.PlacesService(document.createElement('div'));
        var place = { placeId: 'ChIJr4vVw8-kwoAR0iEipIyAZWw' };

        service.getDetails(place, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if(place) {
                        vm.data = place;
                        vm.photos = vm.data.photos;
                        vm.reviews = vm.data.reviews;
                        $scope.$apply();
                    }
                }
            }
        );
    }
    getGoogleData();

}

angular.module('sbucks.store_info', [
    'ui.router',
    'sbucks.common.directives.business_reviews'
])

    .config(config)
    .controller('StoreInfoCtrl', StoreInfoCtrl)

;
