/**
 * GUESS NUMBER GAME
*/

const buttonAgain = document.getElementById('again')
const buttonCheck = document.getElementById('check')
const myNumber = document.getElementsByTagName('input')
const score = document.getElementsByClassName('score')
let scoreNumber = 0
const randomNumber = document.getElementsByClassName('number_content')
buttonCheck.addEventListener('click', async () => {
    if(myNumber[0].valueAsNumber < 21) {
        randomNumber[0].innerHTML = Math.trunc((Math.random() * 5) + 1) 
        if(+randomNumber[0].textContent === myNumber[0].valueAsNumber) {
            scoreNumber += 5
            score[0].innerHTML = `Score: ${scoreNumber}`           
            await alert('You Win 😎😎😎') 
        } else {
            scoreNumber -= 2
            score[0].innerHTML = `Score: ${scoreNumber}`
            await alert('You Lose 🤣🤣🤣') 
        }
    } else {
        alert('Your number should be between 1 and 20')
    }
})
buttonAgain.addEventListener('click', () => {
    score[0].innerHTML = `Score: `
    scoreNumber = 0
    myNumber[0].innerHTML = ''
})


