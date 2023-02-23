import moment from "moment";

export class LogModel{
    constructor(erro){
        this.message = erro.message;
        this.data = moment().format(); 
    }
}