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
        this.dateHTML.innerText = `Date: ${getCurrentDate()}`
        this.wordDayHTML.innerText = `Wordle: ${this.getNumberOfDays()}`
        this.wordHTML = `${this.getWord(this.getNumberOfDays())}`
    }

    goFoward()
    {
    }

    goBackward()
    {
    }
}

export default Experience