import moment from "moment";
import Experience from "../Experience";

function getNumberOfDays() {
    this.experience = new Experience()
    this.startDate = moment("2021-06-18", "YYYY-MM-DD")
    this.endDate = moment().startOf('day')

    return Math.trunc(moment.duration(this.endDate.diff(this.startDate)).asDays()) + this.experience.days
}

export { getNumberOfDays }