let randomNumber = getRandomNumber(1,100);
const sentButton = document.getElementById("sentButton");
const resetButton = document.getElementById("resetButton");
resetButton.disable


function getRandomNumber(min,max){
    let getRandomNumber = Math.floor( Math.random() * (max-min) + min);
    console.log(getRandomNumber);
    return getRandomNumber;
}

function checkAnswer(answer,correctAnswer){ 
    if(answer == correctAnswer)
        alert("Correct Answer");
    else if(answer < correctAnswer)
        alert("The number is less than the correct answer")
    else
        alert("The number is greater than the correct answer")
}

sentButton.addEventListener('click',function(event){
    event.preventDefault();
    let answer = document.getElementById("guess");
    let guess = answer.value;
     answer.value = " ";
    checkAnswer(guess,randomNumber);

})

resetButton.addEventListener('click',function(){
    randomNumber = getRandomNumber(1,100);
    let answer = document.getElementById("guess");
    answer.value = " ";  
})


