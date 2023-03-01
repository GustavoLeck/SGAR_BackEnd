import { CreatePresencaUseCase } from "../useCases/Create-Presenca-UseCase.js";

export class CreatePresencaController {
  async handle(req, res) {
    const criarPresenca = await new CreatePresencaUseCase().execute(req.body);
    res.status(200).send({ message: "Sucess" });
  }
}
