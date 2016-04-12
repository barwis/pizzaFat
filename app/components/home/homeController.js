'use strict';

angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeCtrl'
  });
}])

.controller('CartCtrl', ['$scope','CommonProp',function($scope,CommonProp) {

}]);