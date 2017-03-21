function grabGoogleInfo($http){
    // return $http.get("https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=vSQEWdJoxXj1FBy2k5V5KQ&client_secret=3zl3pryBWLUyZNRzmHI3rfzslvp1bJVyeDntO4H0rUHH3IvDuizXKEHQ6CEUIduu").
    //     then(function(data){
    //         return data;
    //     });

    return $http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyDhG0sibDpt2fHINsCJwur8ZlJou5CDa6I').
      then(function(data){
        console.log(data);
        return data;
      }).error(function(err, status){
        console.log(err)
        console.log(status)
      })   
}

function config($stateProvider, $locationProvider){
    $stateProvider
        .state('sbucks', {
            url: '/',
            templateUrl: 'app/app.html',
            controller: 'AppCtrl as app',
            resolve: {
              // cool: grabGoogleInfo
            }  
        });

    $locationProvider.html5Mode(true);

}

function AppCtrl($http){

    var app = this;

    // $http({
    //   method: 'GET', 
    //   url:  'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyDhG0sibDpt2fHINsCJwur8ZlJou5CDa6I'
    //  }).then(function(data){
    //     console.log(data);
    //   })

    console.log('init app')
    app.fetch = function(){
      console.log('oy')
      fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyDhG0sibDpt2fHINsCJwur8ZlJou5CDa6I', {
        method: 'GET'
      }).then(function(resp){
        console.log(resp.status)
        return resp.json()
      }).then(function(data){
        console.log(data)
      })
    }

      


    // console.log(cool);


}

angular.module('sbucks', [
    'ui.router'
])

    .config(config)
    .controller('AppCtrl', AppCtrl)

;   
