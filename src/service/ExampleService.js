module.exports = {
    exampleServiceGet(req, res) {
        res.send('Resposta GET OK!');
    },

    exampleServicePost(req, res) {
        res.send('Resposta POST OK!');
    },

    exampleServiceComId(req, res) {
        res.send(`Seu id é ${req.params.id}`);
    }
}