const express = require('express');
const port = 3000;

const alunoRoute = require('./routes/alunoRoute');
const professorRoute = require('./routes/professorRoute');

const app = express();

// Use Routes
app.use('/aluno', alunoRoute);
app.use('/professor', professorRoute);

// Configure Server
app.listen(port, () => {
    console.log(`It's running at http://localhost:${port}`);
});
