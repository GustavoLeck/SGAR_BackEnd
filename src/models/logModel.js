import moment from "moment";

export class LogModel{
    constructor(erro){
        this.operation = erro.operation;
        this.message = erro.message;
        this.data = moment().format(); 
    }
}