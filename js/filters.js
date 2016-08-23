angular.module('weatherFilters', []).filter('raining', function(){
  return function(input){
    return input ? '\u2602' : '\u2600';
  };
});
