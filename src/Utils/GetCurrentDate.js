import Experience from "../Experience";
import moment from "moment";

function getCurrentDate() {
    return moment().format('LL')
}

export { getCurrentDate }