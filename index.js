function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
function increaseRankBy(n){
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  
  
}