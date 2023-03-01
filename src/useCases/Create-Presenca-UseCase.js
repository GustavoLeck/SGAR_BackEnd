import { CreatePresencaView } from "../database/view/Create-Presenca_View.js";
import { CreatePresencaModel } from "../models/Create-Presenca-Model.js";
import { LogModel } from "../models/Log-Model.js";
import { CreateLogView } from "../database/view/Create-Log-View.js";

export class CreatePresencaUseCase {
  async execute(presenca) {
    try {
      const presencaModel = new CreatePresencaModel(presenca);
      const createPresenca = await new CreatePresencaView().execute(
        presencaModel
      );

      const logModel = new LogModel({
        status: "Sucesso",
        operation: "Criação de registro de presença",
        message: createPresenca,
      });
      const createlog = await new CreateLogView().execute(logModel);
      return logModel;
    } catch (error) {
      const logModel = new LogModel({
        status: "Erro",
        operation: "Criação de registro de presença",
        message: error,
      });

      const createlog = await new CreateLogView().execute(logModel);
      return logModel;
    }
  }
}
