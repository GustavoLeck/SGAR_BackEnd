import moment from "moment";
import { CreatePresencaUseCase } from "../useCases/Create-Presenca-UseCase.js";

export class CreatePresencaController {
  async handle(req, res) {
    const criarPresenca = await new CreatePresencaUseCase().execute(req.body);
    if (criarPresenca.status != "Sucesso") {
      res.status(500).send(criarPresenca);
    }
    res.status(200).send(criarPresenca);
  }
}
