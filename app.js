let min = 1,
max = 10,
winningNum = getRandomNum(min,max),
guessesLeft = 3;


// UI values
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message')

// 
minNum.textContent = min
maxNum.textContent = max

// GAME EVENT LISTENER and play again
game.addEventListener('mousedown',function (e) {
    // console.log(e.target.className)
    if(e.target.className === "game-over"){
    
    window.location.reload()}
})

// GUESS BTN EVENT LISTENER
guessBtn.addEventListener('click',function (e) {
    guess = parseInt(guessInput.value)
    if (guess > max || guess <min || isNaN(guess)) {
        setMessage(`Please enter a number between ${min} and ${max}`,'red')
    } else {
        // GAME OVER -WIN
        if (guess===winningNum) {
            gameOver(true,`${guess} is the right number. YOU WIN!`)
            
        } else {
            guessesLeft-=1
            // game OVER - LOST
            if (guessesLeft ===0) {
               gameOver(false,`GAME OVER! You Lost.The Correct number was ${winningNum}`)
                
            } else {
                // WRONG ANSWER - GAME CONTINUE
                guessInput.value = ''

                setMessage(`Wrong Number! You have ${guessesLeft} guesses Left`,'red')      


                
            }


        }
        
    }

   
})


function gameOver(won,msg) {
    let color;
    won === true ? color = 'green':color ="red";

    guessInput.disabled =true
    guessInput.style.borderColor = color
    guessInput.value = ""
            
    setMessage(msg,color)

    // PLay again

    guessBtn.value = "Play Again"
    guessBtn.className+= "game-over"


    
}


function setMessage(msg,color) {
    message.textContent = msg
    message.style.color = color
    // guessInput.style.borderColor = color


   

}


function getRandomNum(min,max) {
    return Math.floor(Math.random()*((max-min + 1) + min) )
}
