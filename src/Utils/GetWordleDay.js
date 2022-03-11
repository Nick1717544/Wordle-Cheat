import moment from "moment";

function getNumberOfDays() {
    this.startDate = moment("2021-06-18", "YYYY-MM-DD")
    this.endDate = moment().startOf('day')

    return Math.trunc(moment.duration(this.endDate.diff(this.startDate)).asDays())
}

export { getNumberOfDays }