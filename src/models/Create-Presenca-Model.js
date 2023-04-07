import moment from "moment/moment.js";
export class CreatePresencaModel {
  constructor(presenca) {
    this.TempoAtivo = presenca.TempoAtivo;
    this.Data = moment().locale("pt-br").format("DD-mm-YYYY");
    this.Usuario = presenca.Usuario;
    this.Organizacao = presenca.Organizacao;
    this.QuantidadeDeMovimentos = presenca.QuantidadeDeMovimentos;
  }
}
