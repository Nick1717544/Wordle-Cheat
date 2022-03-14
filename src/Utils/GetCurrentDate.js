import Experience from "../Experience";
import moment from "moment";

function getCurrentDate() {
    this.experience = new Experience();
    this.days = this.experience.days;
    return moment().add(this.days, "days").format("LL");
}

export { getCurrentDate }