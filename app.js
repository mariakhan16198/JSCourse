
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;
/*

dice = Math.floor(Math.random()*6)+1;
console.log(dice);

//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-0').textContent = dice;
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';
var x = document.querySelector('#score-0').textContent;
console.log;*/
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*
function btn(){
    //do something here
}
btn();*/
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. display th result

    var diceDOM  = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src =  'dice-' + dice + '.png';
    //3.update the round score IF th rolled number was NOT a 1
});