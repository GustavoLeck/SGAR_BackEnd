import { CreatePresencaView } from "../database/view/Create-Presenca_View.js";

export class CreatePresencaUseCase {
  async execute(presenca) {
    return await new CreatePresencaView().execute(presenca);
  }
}
