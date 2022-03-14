import { getNumberOfDays } from './Utils/GetWordleDay'
import { getCurrentDate } from './Utils/GetCurrentDate'
import { getWord } from './Utils/GetWord'

class Experience {
    constructor(_options = {})
    {
        // Singleton to stop errors

        if (Experience.instance)
        {
            return Experience.instance
        }
        Experience.instance = this

        // Getting HTML elements

        this.dateHTML = _options.dateHTML
        this.wordDayHTML = _options.wordDayHTML
        this.visibleHTML = _options.visibleHTML
        this.wordHTML = _options.wordHTML
        this.fowardHTML = _options.fowardHTML
        this.backHTML = _options.backHTML

        // Setting up events
        this.visibleHTML.onclick = () => this.revealWord()
        this.fowardHTML.onclick = () => this.goFoward()
        this.backHTML.onclick = () => this.goBackward()

        // Setting up Modules
        this.getNumberOfDays = getNumberOfDays
        this.getCurrentDate = getCurrentDate
        this.getWord = getWord
        this.getWord(this.getNumberOfDays())

        // Variables that help the script run
        this.revealed = 0
        this.days = 0

        // Set Text of the HTML
        this.SetHTMLInnerText()
    }
    
    SetHTMLInnerText()
    {
        // Sets Text
        this.dateHTML.innerText = `Date: ${this.getCurrentDate()}`
        this.wordDayHTML.innerText = `Wordle: ${this.getNumberOfDays()}`
        this.wordHTML.innerText = `${this.getWord(this.getNumberOfDays())}`
    }

    revealWord()
    {
        if (this.revealed == 0) {
            this.visibleHTML.classList.replace('visible', 'hidden')
            this.wordHTML.classList.replace('hidden', 'visible')
            this.revealed++
        }
    }

    goFoward()
    {
        this.revealed = 0
        this.visibleHTML.classList.replace('hidden', 'visible')
        this.wordHTML.classList.replace('visible', 'hidden')
        this.days++
        this.SetHTMLInnerText()
    }

    goBackward()
    {
        this.revealed = 0
        this.visibleHTML.classList.replace('hidden', 'visible')
        this.wordHTML.classList.replace('visible', 'hidden')
        this.days--
        this.SetHTMLInnerText()
    }
}

export default Experience