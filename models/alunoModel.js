const db = require('../database');

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

module.exports = Aluno;