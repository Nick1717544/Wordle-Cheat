import './/style.css'
import Experience from './Experience'

const dateHTML = document.getElementById('date')
const wordDayHTML = document.getElementById('worldDate')
const visibleHTML = document.getElementById('visible?')
const wordHTML = document.getElementById('word')
const fowardHTML = document.getElementById('next')
const backHTML = document.getElementById('back')

const experience = new Experience({
    dateHTML: dateHTML,
    wordDayHTML: wordDayHTML,
    visibleHTML: visibleHTML,
    wordHTML: wordHTML,
    fowardHTML: fowardHTML,
    backHTML: backHTML
})