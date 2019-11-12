// Your code here
function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(str="*"){
  return function(param="special"){
    return `You are ${str}${param}${str}!`;
  }
  return wrapAdjective;
}
let  encouragingPromptFunction =wrapAdjective("%");

let Calculator={
  add:function(num1=1,num2=3){
    return num1+num2;
  },
  subtract:function(num1=1,num2=3){
    return num1-num2;
  },
  multiply:function(num1=1,num2=3){
    return num1*num2;
  },
  divide:function(num1=10,num2=5){
    return num1/num2;
  }
}
function actionApplyer(arr=[],startingPoint=0){
  if (arr.length<1)
  {
    return startingPoint;
  }
else{

arr=[function(a){ return a * 2 },function(a){ return a + 1000},function(a){ return a % 7 }]
          return arr;
}
  
}
let arry=[]
console.log(actionApplyer(arry));
