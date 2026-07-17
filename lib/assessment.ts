export function calculateScore(

answers:number[]

){

const total=

answers.reduce(

(a,b)=>a+b,

0

);

const average=

total/answers.length;

return{

total,

average

};

}