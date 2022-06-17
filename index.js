// code your solution here
function saturdayFun(activity='roller-skate')
{
    let sat=`This Saturday, I want to ${activity}!`
    return sat;
}



function mondayWork(work='go to the office')
{
    let mon=`This Monday, I will ${work}.`;
    return mon;
}


function wrapAdjective( ast='*')
{

      return function one(job="hard worker") 
      {
          return `You are ${ast}${job}${ast}!`;
      } 

}