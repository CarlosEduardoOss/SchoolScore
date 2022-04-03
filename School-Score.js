//Change the Score value to a value <=100
let Score = -5
let ScoreFinal;
if(Score >=90 && Score <=100) {
    ScoreFinal = 'A',
    console.log(ScoreFinal)
} 
else if(Score >100){
  console.log('Invalid Value')
}
else if (Score <90 && Score >= 80) {
ScoreFinal='B',
console.log(ScoreFinal)
} 

else if(Score <=79 && Score >=70) {
    ScoreFinal='C',
    console.log(ScoreFinal)
}

else if(Score <70 && Score >=60) {
    ScoreFinal='D',
    console.log(ScoreFinal)
}
else if(Score <60) {
    ScoreFinal='F',
    console.log(ScoreFinal)
}



