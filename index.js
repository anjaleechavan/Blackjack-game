

let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
 let message=" "

 let messageEl=document.getElementById("message-el")
 let sumEl=document.getElementById("sum-el")
 let cardsEL=document.getElementById("cards-el")

 let player ={
    name : "Anjali",
    chips : 145
 }

 let playerEl=document.getElementById("player-el")
 playerEl.textContent=player.name + ": $ " + player.chips

function getRandomCard()
{
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum===1)
    {
        return 11
    }
    else if(randomNum> 10 )
    {
        return 10
    }
    else{
        return randomNum
    }
}

 function startGame()
 {
     isAlive=true
     let firstCard=getRandomCard()
     let secondCard=getRandomCard()
     cards=[firstCard,secondCard]
     sum=firstCard+secondCard
     renderGame()
 }

function renderGame()
{
    cardsEL.textContent="Cards : "
    for(let count=0;count<cards.length;count++)
    {
        cardsEL.textContent+=cards[count]+ " "
    }
    sumEl.textContent="SUM:" + sum
     if (sum<=20)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
         message="You're out of the game:<"
        isAlive=false
    }
    messageEl.textContent=message
 
 
}


function newCard()
{
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}