var app4=angular.module('app4',[]);

app4.controller('eventCtrl',function($scope){

  $scope.blur=0;
  $scope.click=0;
  $scope.dblclick=0;
  $scope.copy=0;
  $scope.cut=0;
  $scope.paste=0;
  $scope.focus=0;
  $scope.change=0;
  $scope.mouseenter=0;
  $scope.mouseleave=0;

  $scope.keydown=function(e){
    $scope.kdkey=String.fromCharCode(e.keyCode);
  };

  $scope.disableButton=true;

  $scope.dayTimeButton=true;

  $scope.capitals=[
    {"City":"Vijayawada",
     "State":"Andhra Pradesh"},
     {"City":"Jalandhar",
      "State":"Punjab"},
      {"City":"Chennai",
       "State":"Tamil Nadu"},
      {"City":"Bangalore",
       "State":"Karnataka"
      }
  ];

});
