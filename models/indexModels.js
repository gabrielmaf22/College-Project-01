const db = require('../database');

// Modelando Tabela     : aluno
const Aluno = {

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM aluno;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM aluno WHERE id_aluno=${id}`);
        return rows[0];
    },

    async createRow(name, sex, date){
        const {rows} = await db.query(`INSERT INTO aluno(tx_nome, tx_sexo, dt_nascimento) VALUES ('${name}', '${sex}', '${date}');`);
    },

    async updateRow(id, name, sex, date){
        const {rows} = await db.query(`UPDATE aluno SET tx_nome='${name}', tx_sexo='${sex}', dt_nascimento='${date}' WHERE id_aluno=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM aluno WHERE id_aluno=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : professor
const Professor = {

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM professor;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM professor WHERE id_professor=${id}`);
        return rows[0];
    },

    async createRow(id_titulo, name, sex, civil_status, date){
        const {rows} = await db.query(`INSERT INTO professor(id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento) VALUES (${id_titulo}, '${name}', '${sex}', '${civil_status}}', '${date}');`);
    },

    async updateRow(id, id_titulo, name, sex, civil_status, date){
        const {rows} = await db.query(`UPDATE professor SET id_titulo=${id_titulo}, tx_nome='${name}', tx_sexo='${sex}', tx_estado_civil'${civil_status}', dt_nascimento='${date}' WHERE id_professor=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM professor WHERE id_professor=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : disciplina
const Disciplina = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM disciplina;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM disciplina WHERE id_disciplina=${id}`);
        return rows[0];
    },

    async createRow(id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga){
        const {rows} = await db.query(`INSERT INTO disciplina(id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria) VALUES (${id_curso}, ${id_tipo_disciplina}, '${tx_sigla}', '${tx_descricao}}', ${in_periodo}, ${in_carga});`);
    },

    async updateRow(id, id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga){
        const {rows} = await db.query(`UPDATE disciplina SET id_curso=${id_curso}, id_tipo_disciplina=${id_tipo_disciplina}, tx_sigla='${tx_sigla}', tx_descricao='${tx_descricao}', in_periodo=${in_periodo}, in_carga_horaria=${in_carga} WHERE id_disciplina=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM disciplina WHERE id_disciplina=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : titulo
const Titulo = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM titulo;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM titulo WHERE id_titulo=${id}`);
        return rows[0];
    },

    async createRow(tx_descricao){
        const {rows} = await db.query(`INSERT INTO titulo(tx_descricao) VALUES ('${tx_descricao}');`);
    },

    async updateRow(id, tx_descricao){
        const {rows} = await db.query(`UPDATE titulo SET tx_descricao='${tx_descricao}' WHERE id_titulo=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM titulo WHERE id_titulo=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : instituicao
const Instituicao = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM instituicao;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM instituicao WHERE id_instituicao=${id}`);
        return rows[0];
    },

    async createRow(tx_sigla, tx_descricao){
        const {rows} = await db.query(`INSERT INTO instituicao(tx_sigla, tx_descricao) VALUES ('${tx_sigla}', '${tx_descricao}');`);
    },

    async updateRow(id, tx_sigla, tx_descricao){
        const {rows} = await db.query(`UPDATE instituicao SET tx_sigla='${tx_sigla}', tx_descricao='${tx_descricao}' WHERE id_instituicao=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM instituicao WHERE id_instituicao=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : tipo_curso
const Tipo_Curso = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM tipo_curso;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM tipo_curso WHERE id_tipo_curso=${id}`);
        return rows[0];
    },

    async createRow(tx_descricao){
        const {rows} = await db.query(`INSERT INTO tipo_curso(tx_descricao) VALUES ('${tx_descricao}');`);
    },

    async updateRow(id, tx_descricao){
        const {rows} = await db.query(`UPDATE tipo_curso SET tx_descricao='${tx_descricao}' WHERE id_tipo_curso=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM tipo_curso WHERE id_tipo_curso=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : tipo_disciplina
const Tipo_Disciplina = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM tipo_disciplina;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM tipo_disciplina WHERE id_tipo_disciplina=${id}`);
        return rows[0];
    },

    async createRow(tx_descricao){
        const {rows} = await db.query(`INSERT INTO tipo_disciplina(tx_descricao) VALUES ('${tx_descricao}');`);
    },

    async updateRow(id, tx_descricao){
        const {rows} = await db.query(`UPDATE tipo_disciplina SET tx_descricao='${tx_descricao}' WHERE id_tipo_disciplina=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM tipo_disciplina WHERE id_tipo_disciplina=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : leciona
const Leciona = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM leciona;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM leciona WHERE id_professor=${id}`);
        return rows[0];
    },

    async createRow(id_professor, id_disciplina){
        const {rows} = await db.query(`INSERT INTO leciona(id_professor, id_disciplina) VALUES (${id_professor}, ${id_disciplina});`);
    },

    async updateRow(id_professor, id_disciplina){
        const {rows} = await db.query(`UPDATE leciona SET id_disciplina=${id_disciplina} WHERE id_professor=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM leciona WHERE id_professor=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : curso
const Curso = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM curso;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM curso WHERE id_curso=${id}`);
        return rows[0];
    },

    async createRow(id_instituicao, id_tipo_curso, tx_descricao){
        const {rows} = await db.query(`INSERT INTO curso(id_instituicao, id_tipo_curso, tx_descricao) VALUES (${id_instituicao}, ${id_tipo_curso}, '${tx_descricao}');`);
    },

    async updateRow(id, id_instituicao, id_tipo_curso, tx_descricao){
        const {rows} = await db.query(`UPDATE curso SET id_instituicao=${id_instituicao}, id_tipo_curso=${id_tipo_curso}, tx_descricao='${tx_descricao}' WHERE id_curso=${id};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM curso WHERE id_curso=${id} LIMIT 1;`);
    }
};


// Modelando Tabela     : cursa
const Cursa = { 

    async getAllRow(){
        const {rows} = await db.query('SELECT * FROM cursa;');
        return rows;
    },

    async getRowById(id){
        const {rows} = await db.query(`SELECT * FROM cursa WHERE id_aluno=${id}`);
        return rows[0];
    },

    async createRow(id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado){
        const {rows} = await db.query(`INSERT INTO cursa(id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado) VALUES (${id_aluno}, ${id_disciplina}, ${in_ano}, ${in_semestre}, ${in_faltas}, ${nm_nota1}, ${nm_nota2}, ${nm_nota3}, '${bl_aprovado}');`);
    },

    async updateRow(id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado){
        const {rows} = await db.query(`UPDATE cursa SET id_disciplina=${id_disciplina}, in_ano=${in_ano}, in_semestre=${in_semestre}, in_faltas=${in_faltas}, nm_nota1=${nm_nota1}, nm_nota2=${nm_nota2}, nm_nota3=${nm_nota3}, bl_aprovado='${bl_aprovado}' WHERE id_aluno=${id_aluno};`)
    },

    async deleteRow(id){
        const {rows} = await db.query(`DELETE FROM curso WHERE id_curso=${id} LIMIT 1;`);
    }
};


module.exports = {
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
};
