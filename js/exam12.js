var app12=angular.module('app12',[]);

app12.directive('exDir',function(){
  return {
    transclude:true,
    template:"<div><h4>{{moreLorem}}</h4></div><div ng-transclude></div>"
  }
});

app12.controller("mainCtrl",function($scope){
  $scope.moreLorem="The Amazing Lorem story";
});
