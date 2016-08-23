var app15=angular.module('app15',[]);

app15.controller('mainCtrl',function($scope,$http){

  $scope.getData=function(){
    $http.get("crime.json").success(
      function(data){
        $scope.players=data;
      }
    )
  }

  $scope.translate=function(){
    var words=$scope.wordsToTranslate.replace(/ /g,"+");

    var jsonUrl="http://newjustin.com/translateit.php?action=translations&english_words=" + words;

    $http.get(jsonUrl).success(
      function(data){
        $scope.translated=data;
      });
  }
});
