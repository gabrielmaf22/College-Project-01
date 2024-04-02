const express = require('express');
const router = express.Router();

const { 
        Aluno, 
        Professor,
        Disciplina,
        Titulo,
        Instituicao,
        Tipo_Curso,
        Tipo_Disciplina,
        Leciona,
        Curso,
        Cursa
    } = require('../models/indexModels.js');


// consultar todos registros        : aluno
router.get('/aluno', async (req, res) => {
    try {
        const aluno = await Aluno.getAllRow();
        res.json(aluno);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : aluno
router.get('/aluno/:id', async (req, res) => {
    try {
        const aluno = await Aluno.getRowById(req.params.id);
        res.json(aluno);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : aluno
router.put('/aluno/:id', async (req, res) => {
    try {
        const {name, sex, date} = req.body;
        const aluno = await Aluno.updateRow(req.params.id, name, sex, date);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : aluno
router.post('/aluno', async (req, res) => {
    try { 
        const {name, sex, date} = req.body;
        const aluno = await Aluno.createRow(name, sex, date);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : aluno
router.delete('/aluno/:id', async (req, res) => {
    try {
        const aluno = await Aluno.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : professor
router.get('/professor', async (req, res) => {
    try {
        const professor = await Professor.getAllRow();
        res.json(professor);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : professor
router.get('/professor/:id', async (req, res) => {
    try {
        const professor = await Professor.getRowById(req.params.id);
        res.json(professor);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : professor
router.put('/professor/:id', async (req, res) => {
    try {
        const {id_titulo, name, sex, civil_status, date} = req.body;
        const professor = await Professor.updateRow(req.params.id, id_titulo, name, sex, civil_status, date);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : professor
router.post('/professor', async (req, res) => {
    try { 
        const {id_titulo, name, sex, civil_status, date} = req.body;
        const professor = await Professor.createRow(id_titulo, name, sex, civil_status, date);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : professor
router.delete('/professor/:id', async (req, res) => {
    try {
        const professor = await Professor.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : disciplina
router.get('/disciplina', async (req, res) => {
    try {
        const disciplina = await Disciplina.getAllRow();
        res.json(disciplina);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : disciplina
router.get('/disciplina/:id', async (req, res) => {
    try {
        const disciplina = await Disciplina.getRowById(req.params.id);
        res.json(disciplina);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : disciplina
router.put('/disciplina/:id', async (req, res) => {
    try {
        const {id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga} = req.body;
        const disciplina = await Disciplina.updateRow(req.params.id, id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : disciplina
router.post('/disciplina', async (req, res) => {
    try { 
        const {id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga} = req.body;
        const disciplina = await Disciplina.createRow(id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : disciplina
router.delete('/disciplina/:id', async (req, res) => {
    try {
        const disciplina = await Disciplina.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : titulo
router.get('/titulo', async (req, res) => {
    try {
        const titulo = await Titulo.getAllRow();
        res.json(titulo);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : titulo
router.get('/titulo/:id', async (req, res) => {
    try {
        const titulo = await Titulo.getRowById(req.params.id);
        res.json(titulo);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : titulo
router.put('/titulo/:id', async (req, res) => {
    try {
        const {tx_descricao} = req.body;
        const titulo = await Titulo.updateRow(req.params.id, tx_descricao);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : titulo
router.post('/titulo', async (req, res) => {
    try { 
        const {tx_descricao} = req.body;
        const titulo = await Titulo.createRow(tx_descricao);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : titulo
router.delete('/titulo/:id', async (req, res) => {
    try {
        const titulo = await Titulo.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : instituicao
router.get('/instituicao', async (req, res) => {
    try {
        const instituicao = await Instituicao.getAllRow();
        res.json(instituicao);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : instituicao
router.get('/instituicao/:id', async (req, res) => {
    try {
        const instituicao = await Instituicao.getRowById(req.params.id);
        res.json(instituicao);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : titulo
router.put('/instituicao/:id', async (req, res) => {
    try {
        const {tx_sigla, tx_descricao} = req.body;
        const instituicao = await Instituicao.updateRow(req.params.id, tx_sigla, tx_descricao);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : titulo
router.post('/instituicao', async (req, res) => {
    try { 
        const {tx_sigla, tx_descricao} = req.body;
        const instituicao = await Instituicao.createRow(tx_sigla, tx_descricao);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : titulo
router.delete('/instituicao/:id', async (req, res) => {
    try {
        const instituicao = await Instituicao.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : tipo_curso
router.get('/tipo_curso', async (req, res) => {
    try {
        const tipo_curso = await Tipo_Curso.getAllRow();
        res.json(tipo_curso);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : tipo_curso
router.get('/tipo_curso/:id', async (req, res) => {
    try {
        const tipo_curso = await Tipo_Curso.getRowById(req.params.id);
        res.json(tipo_curso);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : tipo_curso
router.put('/tipo_curso/:id', async (req, res) => {
    try {
        const {tx_descricao} = req.body;
        const tipo_curso = await Tipo_Curso.updateRow(req.params.id, tx_descricao);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : tipo_curso
router.post('/tipo_curso', async (req, res) => {
    try { 
        const {tx_descricao} = req.body;
        const tipo_curso = await Tipo_Curso.createRow( tx_descricao);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : tipo_curso
router.delete('/tipo_curso/:id', async (req, res) => {
    try {
        const tipo_curso = await Tipo_Curso.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : tipo_disciplina
router.get('/tipo_disciplina', async (req, res) => {
    try {
        const tipo_disciplina = await Tipo_Disciplina.getAllRow();
        res.json(tipo_disciplina);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : tipo_disciplina
router.get('/tipo_disciplina/:id', async (req, res) => {
    try {
        const tipo_disciplina = await Tipo_Disciplina.getRowById(req.params.id);
        res.json(tipo_disciplina);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : tipo_disciplina
router.put('/tipo_disciplina/:id', async (req, res) => {
    try {
        const {tx_descricao} = req.body;
        const tipo_disciplina = await Tipo_Disciplina.updateRow(req.params.id, tx_descricao);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : tipo_disciplina
router.post('/tipo_disciplina', async (req, res) => {
    try { 
        const {tx_descricao} = req.body;
        const tipo_disciplina = await Tipo_Disciplina.createRow( tx_descricao);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : tipo_disciplina
router.delete('/tipo_disciplina/:id', async (req, res) => {
    try {
        const tipo_disciplina = await Tipo_Disciplina.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : leciona
router.get('/leciona', async (req, res) => {
    try {
        const leciona = await Leciona.getAllRow();
        res.json(leciona);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : leciona
router.get('/leciona/:id', async (req, res) => {
    try {
        const leciona = await Leciona.getRowById(req.params.id);
        res.json(leciona);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : leciona
router.put('/leciona/:id', async (req, res) => {
    try {
        const {id_disciplina} = req.body;
        const leciona = await Leciona.updateRow(req.params.id, id_disciplina);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : leciona
router.post('/leciona', async (req, res) => {
    try { 
        const {id_professor, id_disciplina} = req.body;
        const leciona = await Leciona.createRow(id_professor, id_disciplina);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : leciona
router.delete('/leciona/:id', async (req, res) => {
    try {
        const leciona = await Leciona.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : curso
router.get('/curso', async (req, res) => {
    try {
        const curso = await Curso.getAllRow();
        res.json(curso);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : curso
router.get('/curso/:id', async (req, res) => {
    try {
        const curso = await Curso.getRowById(req.params.id);
        res.json(curso);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : curso
router.put('/curso/:id', async (req, res) => {
    try {
        const {id_instituicao, id_tipo_curso, tx_descricao} = req.body;
        const curso = await Curso.updateRow(req.params.id, id_instituicao, id_tipo_curso, tx_descricao);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : curso
router.post('/curso', async (req, res) => {
    try { 
        const {id_instituicao, id_tipo_curso, tx_descricao} = req.body;
        const curso = await Curso.createRow(id_instituicao, id_tipo_curso, tx_descricao);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : curso
router.delete('/curso/:id', async (req, res) => {
    try {
        const curso = await Curso.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


// consultar todos registros        : cursa
router.get('/cursa', async (req, res) => {
    try {
        const cursa = await Cursa.getAllRow();
        res.json(cursa);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id       : cursa
router.get('/cursa/:id', async (req, res) => {
    try {
        const cursa = await Cursa.getRowById(req.params.id);
        res.json(cursa);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar                        : cursa
router.put('/cursa/:id', async (req, res) => {
    try {
        const {id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado} = req.body;
        const cursa = await Cursa.updateRow(req.params.id, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar                            : cursa
router.post('/cursa', async (req, res) => {
    try { 
        const {id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado} = req.body;
        const cursa = await Cursa.createRow(id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar                          : cursa
router.delete('/cursa/:id', async (req, res) => {
    try {
        const cursa = await Cursa.deleteRow(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


module.exports = router;
