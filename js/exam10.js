angular.module('app10',[])
 .directive("bbPlayerList",function(){

 return function(scope,element,attrs){
   var data=scope[attrs["bbPlayerList"]];

   if(angular.isArray(data)){
     var arrayItem=attrs["arrayItem"];

     var listElem = angular.element("<ul>");

      element.append(listElem);

      for(var i=0;i<data.length;i++){

        listElem.append(angular.element('<li>').text(scope.$eval(arrayItem,data[i])));
      }

      listElem.after(angular.element("<span id='mays'>").text("Willy Mays"));

      listElem.prepend(angular.element("<span id='cobb'>").text("Ty CObb"));

      angular.element(document.querySelector('#mays')).remove();

      var gehrigHTML='<span id="gehrig">Lou Gehrig</span>';

      var replacement= angular.element(gehrigHTML);

      angular.element(document.querySelector('#cobb')).replaceWith(replacement);

   }
 }

 })

  .controller("mainCtrl",function($scope){
     $scope.bbPlayers=[
       {name:"Barry Bonds",avg:0.298,hr:762,obp:0.444},
       {name:"Hank Aaron",avg:0.305,hr:755,obp:0.374},
       {name:"Babe Ruth",avg:0.342,hr:714,obp:0.482},
       {name:"Ted Williams",avg:0.344,hr:521,obp:0.482}
     ];
  });
