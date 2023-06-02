let score= JSON.parse(localStorage.getItem('score'));

if(!score) {
    score = {
        wins:0,
        loses:0,
        ties:0
    };
}
updateScore();

function playgame(playerMove){ 
    const computerNo = GenerateNo();
    
 let result='';
if(playerMove==='Paper'){
   if(computerNo=='rock'){
  result = 'YOU WIN';
}
else if(computerNo=='Paper'){
   result = 'TIE';
}
else if(computerNo=='Scissor'){
     result = 'YOU LOSE';
}


}else if(playerMove==='rock'){
if(computerNo=='rock'){
        result = 'TIE';
}
else if(computerNo=='Paper'){
        result= 'YOU LOSE';
}
else if(computerNo=='Scissor'){
        result = 'YOU WIN';
}


} else if(playerMove==='Scissor'){
     if(computerNo=='rock'){
        result= 'YOU LOSE';
}
      else if(computerNo=='Paper'){
       result= 'YOU WIN';
}
else if(computerNo=='Scissor'){
       result= 'TIE';
}

}

if(result==='YOU WIN'){
score.wins += 1;
}
else if(result==='YOU LOSE'){
score.loses += 1;
} else if(result==='TIE'){
score.ties+= 1;
}

localStorage.setItem('score', JSON.stringify(score));//will store my score into a string format
updateScore();

document.querySelector('.Info').innerHTML= `
 Your Move: ${playerMove}  PC Move: ${computerNo} `;

 document.querySelector('.final').innerHTML= `
 ${result}`;
}

function updateScore(){
   document.querySelector('.Result').innerHTML=  `
   Wins :  ${score.wins}  Loses: ${score.loses}  Ties: ${score.ties}`;
}

    function GenerateNo(){
        const math = Math.random();
        let computerNo='';
        if(math>0 && math<1/3){
            computerNo = 'rock'
        }  else if (math>1/3 && math<2/3){
            computerNo = 'Paper'
        } else if(math>2/3 && math<1){
            computerNo = 'Scissor'
        }
        return computerNo;
    }