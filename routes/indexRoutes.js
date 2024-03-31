const express = require('express');
const router = express.Router();

const { Aluno, Professor } = require('../models/indexModels.js');


// consultar todos registros - {Aluno}
router.get('/aluno', async (req, res) => {
    try {
        const aluno = await Aluno.getAllUser();
        res.json(aluno);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id - {Aluno}
router.get('/aluno/:id', async (req, res) => {
    try {
        const aluno = await Aluno.getUserById(req.params.id);
        res.json(aluno);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar - {Aluno}
router.put('/aluno/:id', async (req, res) => {
    try {
        const {name, sex, date} = req.body;
        const aluno = await Aluno.updateUser(req.params.id, name, sex, date);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar - {Aluno}
router.post('/aluno', async (req, res) => {
    try { 
        const {name, sex, date} = req.body;
        const aluno = await Aluno.createUser(name, sex, date);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar - {Aluno}
router.delete('/aluno/:id', async (req, res) => {
    try {
        const aluno = await Aluno.deleteUser(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});

// consultar todos registros - {Professor}
router.get('/professor', async (req, res) => {
    try {
        const professor = await Professor.getAllUser();
        res.json(professor);
    } catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// consultar registros por id - {Professor}
router.get('/professor/:id', async (req, res) => {
    try {
        const professor = await Professor.getUserById(req.params.id);
        res.json(professor);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// atualizar - {Professor}
router.put('/professor/:id', async (req, res) => {
    try {
        const {id_titulo, name, sex, civil_status, date} = req.body;
        const professor = await Professor.updateUser(req.params.id, id_titulo, name, sex, civil_status, date);
        res.status(201).json({message: 'Task Completed Successfully'})
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// criar - {Professor}
router.post('/professor', async (req, res) => {
    try { 
        const {id, id_titulo, name, sex, civil_status, date} = req.body;
        const professor = await Professor.createUser(id, id_titulo, name, sex, civil_status, date);
        res.status(201).json({message: 'Task Completed Sucessfully'});
    } catch(err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

// deletar - {Professor}
router.delete('/professor/:id', async (req, res) => {
    try {
        const professor = await Professor.deleteUser(req.params.id);
    } catch (err){
        console.log(`Error:${err}`);
        res.status(500).json({message: 'Internal Server Error'})
    }
});


module.exports = router;
