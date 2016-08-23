var app7=angular.module('app7',[]);

app7.controller('mainCtrl',function(){
  this.name="Animal";
  this.sound="Grrr";

  this.animalClick=function(){
    alert(this.name + " says " + this.sound);
  };
});

app7.controller('dogCtrl',function($controller){
  var childCtrl=this;

  childCtrl.child=$controller('mainCtrl',{});

  childCtrl.child.name="Dog";

  childCtrl.child.bark="Wooof";

  childCtrl.child.dogData=function(){
    alert(this.name + " says " + this.sound + " and " + this.bark)
  }
});
