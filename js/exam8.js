var app8=angular.module('app8',['weatherFilters']);

app8.controller('mainCtrl',function($scope){

  $scope.students=[
    {name:"Prasad",gpa:7.78},
    {name:"Mani",gpa:8.2},
    {name:"Ayyappa",gpa:6.8},
    {name:"Sunny",gpa:8.0}
  ];

 $scope.student={
   gpas:[
     {name:"Prasad",gpa:7.78},
     {name:"Mani",gpa:8.2},
     {name:"Ayyappa",gpa:6.8},
     {name:"Sunny",gpa:8.0}
   ]
 };

 $scope.currDate=new Date();

 $scope.randomStr="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

 $scope.randArray=[
   "Tomato","Potato","Bread","Pickels","Raisins"
 ];

$scope.weather=[
  {day:"Monday",rain: false},
  {day:"Tuesday",rain: true}
];

});
