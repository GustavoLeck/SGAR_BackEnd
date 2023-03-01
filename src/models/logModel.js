import moment from "moment";

export class LogModel {
  constructor(log) {
    this.status = log.status;
    this.operation = log.operation;
    this.message = log.message;
    this.data = moment().format();
  }
}
