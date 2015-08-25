var switchApp = angular.module('switchApp', ['simpleSwitch']);

switchApp.controller('switchAppController', ['$scope', function($scope) {
    $scope.data = {
        switchValue: true
    };

    $scope.hi = 'test';
}]);