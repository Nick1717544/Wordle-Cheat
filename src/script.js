import './/style.css'
import word from './Word.js'
const JSJoda = require('js-joda');
const LocalDate = JSJoda.LocalDate;
const dateHTML = document.getElementById('date')
const wordDayHTML = document.getElementById('worldDate')
const visibleHTML = document.getElementById('visible?')
const wordHTML = document.getElementById('word')
const fowardHTML = document.getElementById('next')
const backHTML = document.getElementById('back')

function date() {
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    if(today.getMonth() + 1 == 1 || today.getMonth() + 1 == 2 || today.getMonth() + 1 == 3 || today.getMonth() + 1 == 4 || today.getMonth() + 1 == 5 || today.getMonth() + 1 == 6 || today.getMonth() + 1 == 7 || today.getMonth() + 1 == 8 || today.getMonth() + 1 == 9)
    {
        date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
        if (today.getDate() == 1 || today.getDate() == 2 || today.getDate() == 3 || today.getDate() == 4 || today.getDate() == 5 || today.getDate() == 6 || today.getDate() == 7 || today.getDate() == 8 || today.getDate() == 9) {
            date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();
        }
    } else {
        if (today.getDate() == 1 || today.getDate() == 2 || today.getDate() == 3 || today.getDate() == 4 || today.getDate() == 5 || today.getDate() == 6 || today.getDate() == 7 || today.getDate() == 8 || today.getDate() == 9) {
            date = today.getFullYear()+'-'+(today.getMonth()+1)+'-0'+today.getDate();
    }
    }
    return date
}

console.log(date());

let revealed = 0
let days = 0

function getNumberOfDays() {
    const start_date = new LocalDate.parse("2021-06-19");
    const end_date = new LocalDate.parse(date());

    wordDayHTML.innerText = `Wordle: ${JSJoda.ChronoUnit.DAYS.between(start_date, end_date) + days}`
    getWord(JSJoda.ChronoUnit.DAYS.between(start_date, end_date) + days)
}

getNumberOfDays()

function getWord(dayOf) {
    const day = dayOf
    wordHTML.innerText = word.word[day]
}

visibleHTML.onclick = function() {revealWord()}
fowardHTML.onclick = function() {goFoward()}
backHTML.onclick = function() {goBack()}

function revealWord() {
    if (revealed == 0) {
        visibleHTML.classList.replace('visible', 'hidden')
        wordHTML.classList.replace('hidden', 'visible')
    }
}

function goBack() {
    revealed = 0
    visibleHTML.classList.replace('hidden', 'visible')
    wordHTML.classList.replace('visible', 'hidden')
    days -= 1
    getNumberOfDays()
}

function goFoward() {
    revealed = 0
    visibleHTML.classList.replace('hidden', 'visible')
    wordHTML.classList.replace('visible', 'hidden')
    days += 1
    getNumberOfDays()
}

dateHTML.innerText = `Today's Date: ${date()}`