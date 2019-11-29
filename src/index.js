const express = require('express');

const utilsRoutes = require('./routes/UtilsRoutes');

const port = process.env.NODE_PORT || '3002';

const app = express();
 
app.use(utilsRoutes);

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta ${port}`)
})

module.exports = app;