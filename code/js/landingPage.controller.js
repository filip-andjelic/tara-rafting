angular.module('archApp')
    .controller('LandingPage', ['TextualContentService', '$scope',
        function(TextualContentService, $scope) {
            var text = TextualContentService.getLandingPageText();

            $scope.whyContent = text.why;
            $scope.whoContent = text.who;
            $scope.whereContent = text.where;

        }]);