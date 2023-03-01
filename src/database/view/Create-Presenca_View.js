import moment from "moment/moment.js";
import { prisma } from "../../prisma/client.js";

export class CreatePresencaView {
  async execute(presenca) {
    return await prisma.Presencas.create({
      data: presenca,
    });
  }
}
