import moment from "moment";

export class LogModel {
  constructor(log) {
    this.status = log.status;
    this.operation = log.operation;
    this.message = JSON.stringify(log.message);
    this.data = moment().format();
  }
}
