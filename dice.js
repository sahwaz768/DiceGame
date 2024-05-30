const score0 = document.querySelector('#score0');
const current0 = document.querySelector('#current0');

const score1 = document.querySelector('#score1');
const current1 = document.querySelector('#current1');
const dice = document.querySelector('.dice');

const newgame = document.querySelector('#new');
const rolldice = document.querySelector('#roll');
const hold = document.querySelector('#hold');



dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;

const score = [0,0]
let currentscore = 0;
let activeplayer = 0;
rolldice.addEventListener('click',function(){
    const dicevalue = Math.trunc(Math.random() * 6) + 1 ;
    dice.classList.remove('hidden');
    dice.src = `d${dicevalue}.png`;
    if(dicevalue !== 1){
        currentscore = currentscore + dicevalue;
        document.getElementById(`current${activeplayer}`).textContent = currentscore;
    }else {
        document.getElementById(`current${activeplayer}`).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0 ;
    }

})
hold.addEventListener('click',function(){
    score[activeplayer] += currentscore;
    document.getElementById(`score${activeplayer}`).textContent = score[activeplayer];

    if(score[activeplayer] >= 20){
        document.querySelector(`.player${activeplayer}`).classList.add('player--winner');

    }else{
    document.getElementById(`current${activeplayer}`).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0 ;
    }
})