export class StatusController{
    async handle(req, res){
        res.status(200).send("Servidor OK")
    }
}