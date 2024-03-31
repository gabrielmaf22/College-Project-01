const db = require('../database');

// Modelando Consultas para Tabela Aluno
const Aluno = {

    async getAllUser(){
        const {rows} = await db.query('SELECT * FROM aluno;');
        return rows;
    },

    async getUserById(id){
        const {rows} = await db.query(`SELECT * FROM aluno WHERE id_aluno=${id}`);
        return rows[0];
    },

    async createUser(name, sex, date){
        const {rows} = await db.query(`INSERT INTO aluno(tx_nome, tx_sexo, dt_nascimento) VALUES ('${name}', '${sex}', '${date}');`);
    },

    async updateUser(id, name, sex, date){
        const {rows} = await db.query(`UPDATE aluno SET tx_nome='${name}', tx_sexo='${sex}', dt_nascimento='${date}' WHERE id_aluno=${id};`)
    },

    async deleteUser(id){
        const {rows} = await db.query(`DELETE FROM aluno WHERE id_aluno=${id} LIMIT 1;`);
    }
};

// Modelando Consultas para Tabela Professor
const Professor = {

    async getAllUser(){
        const {rows} = await db.query('SELECT * FROM professor;');
        return rows;
    },

    async getUserById(id){
        const {rows} = await db.query(`SELECT * FROM professor WHERE id_professor=${id}`);
        return rows[0];
    },

    async createUser(name, sex, date){
        const {rows} = await db.query(`INSERT INTO professor(id_professor, id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento) VALUES ('${id}', '${id_titulo}', '${name}', '${sex}', '${civil_status}}', '${date}');`);
    },

    async updateUser(id, id_titulo, name, sex, civil_status, date){
        const {rows} = await db.query(`UPDATE professor SET id_titulo='${id_titulo}', tx_nome='${name}', tx_sexo='${sex}', tx_estado_civil'${civil_status}', dt_nascimento='${date}' WHERE id_professor=${id};`)
    },

    async deleteUser(id){
        const {rows} = await db.query(`DELETE FROM professor WHERE id_professor=${id} LIMIT 1;`);
    }
};

module.exports = {
    Aluno,
    Professor
};