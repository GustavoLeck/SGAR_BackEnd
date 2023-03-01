export class CreatePresencaMiddleware {
  async handle(req, res, next) {
    const presenca = req.body;
    if (!presenca.TempoAtivo) {
      return res.status(401).send("Organização não encontrada!");
    }
    if (!presenca.Usuario) {
      return res.status(401).send("Organização não encontrada!");
    }
    if (!presenca.Organizacao) {
      return res.status(401).send("Organização não encontrada!");
    }
    if (!presenca.QuantidadeDeMovimentos) {
      return res.status(401).send("Organização não encontrada!");
    }
    next();
  }
}
