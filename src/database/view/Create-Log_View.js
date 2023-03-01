import moment from "moment/moment.js";
import { prisma } from "../../prisma/client.js";

export class CreatePresencaView {
  async execute(log) {
    return await prisma.Logs.create({
      data: log,
    });
  }
}
