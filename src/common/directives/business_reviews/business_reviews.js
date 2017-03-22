function BusinessReviewsCtrl($scope){
    var vm = this;

    $scope.$watch('reviews', function(){
        vm.reviews = $scope.reviews;
    });
}

function businessReviews(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            reviews: '='
        },
        templateUrl: 'common/directives/business_reviews/business_reviews.html',
        controller: 'BusinessReviewsCtrl as vm'
    }

}

angular.module('sbucks.common.directives.business_reviews', [])
    .controller('BusinessReviewsCtrl', BusinessReviewsCtrl)
    .directive('businessReviews', businessReviews)
;