import Experience from "../Experience";
import { word } from "./Word";

function getWord(day) {
    this.word = word
    this.experience = new Experience()
    this.day = day
    return this.word[day]
}

export { getWord }