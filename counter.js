
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');

let countValue = 0;


decreaseBtn.onclick = function(){
    countValue--;
    countLabel.textContent = countValue;
}

resetBtn.onclick = function(){
    countValue = 0;
    countLabel.textContent = countValue;
}

increaseBtn.onclick = function(){
    countValue++;
    countLabel.textContent = countValue;
}


