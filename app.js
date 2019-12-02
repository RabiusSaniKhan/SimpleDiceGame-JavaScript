/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
myNoti = document.querySelectorAll(".noti");
myNoti.forEach(function(e){
    e.style.display="none";
})
var activePlayer,val,current;
document.querySelector(".dice").style.display="none";
activePlayer=0;
var rollBtn = document.querySelector(".btn-roll");
console.log(rollBtn);
rollBtn.addEventListener("click",function(){
    val = Math.ceil(Math.random()*6);
    console.log(val);
    dice = document.querySelector(".dice");
    dice.style.display="initial";
    dice.src="dice-"+val+".png";
    if(val==1)
    {
        document.querySelector("#current-"+activePlayer).textContent="0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        if(activePlayer == 0){
            activePlayer =1;
            
        }
        else{
            activePlayer =0;
        }
        document.querySelector(".dice").style.display="none";
    }
    else
    {
        
        if(activePlayer==0)
        {
            current = parseInt(document.querySelector("#current-0").textContent);
            current = current+val;
            document.querySelector("#current-0").textContent=current;
        }
        else
        {
            current = parseInt(document.querySelector("#current-1").textContent);
            current = current+val;
            document.querySelector("#current-1").textContent=current;
        }
        
    }
    
});
holdBtn = document.querySelector(".btn-hold");
holdBtn.addEventListener("click",function(){
    if(activePlayer == 0){
        
        total = parseInt(document.querySelector("#score-0").textContent);
        current = parseInt(document.querySelector("#current-0").textContent);
        total = total + current;
        document.querySelector("#score-0").textContent=total;
        document.querySelector("#current-0").textContent="0";
        if(total >=100){
            document.getElementsByClassName("noti")[activePlayer].style.display="block";
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            holdBtn.disabled = true;
            rollBtn.disabled = true;
        }
        activePlayer =1;
    }
    else{
        
        total = parseInt(document.querySelector("#score-1").textContent);
        current = parseInt(document.querySelector("#current-1").textContent);
        total = total + current;
        document.querySelector("#score-1").textContent=total;
        document.querySelector("#current-1").textContent="0";
        if(total >=100){
            document.getElementsByClassName("noti")[activePlayer].style.display="block";
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            holdBtn.disabled = true;
            rollBtn.disabled = true;            
        }
        activePlayer =0;
    }
    
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display="none";
    
});
newGame = document.querySelector(".btn-new");
newGame.addEventListener("click",function(){
   location.reload(); 
});
