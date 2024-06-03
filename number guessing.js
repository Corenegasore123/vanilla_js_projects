const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let gameRunning = true;

while(gameRunning){

    guess = prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    }else if(guess < minNum || guess > maxNum){
        alert(`Please enter a valid number`);
    }else{
        attempts++;
        if(guess < answer){
            alert(`TOO LOW! TRY AGAIN`);
        }else if(guess > answer){
            alert(`TOO HIGH! TRY AGAIN`);
        }else{
            if(attempts == 1){
                alert(`CONGZ! YOU'VE GUESSED THE CORRECT NUMBER. It took you ${attempts} attempt`);
            }else{
            alert(`CONGZ! YOU'VE GUESSED THE CORRECT NUMBER. It took you ${attempts} attempts`);
            }
            gameRunning = false;
        }
    }

}