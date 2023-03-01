import moment from "moment/moment.js";
import { prisma } from "../../prisma/client.js";

export class CreatePresencaView {
  async execute(presenca) {
    return await prisma.Presencas.create({
      data: {
        TempoAtivo: presenca.TempoAtivo,
        Data: moment().toDate(),
        Usuario: presenca.Usuario,
        Organizacao: presenca.Organizacao,
        QuantidadeDeMovimentos: presenca.QuantidadeDeMovimentos,
      },
    });
  }
}
