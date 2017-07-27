angular.module('archApp')
    .controller('ArchController', ['$scope',
        function($scope) {
            function animateRotation(xName, xValue, yName, yValue) {
                var openedPage = angular.element(".open-window-wrapper");
                openedPage.css({xName: xValue, yName: yValue});
            }
            $scope.switchPage = function (pageName) {
                switch (pageName) {
                    case 'gallery':
                        animateRotation("right", 0, "top", 0);
                        break;
                }
            };
        }]);