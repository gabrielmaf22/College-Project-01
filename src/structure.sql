CREATE TABLE IF NOT EXISTS titulo(
	id_titulo SERIAL NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	
	CONSTRAINT pk_id_titutlo PRIMARY KEY(id_titulo),
	CONSTRAINT uq_tx_descricao_titulo UNIQUE(tx_descricao)
);

CREATE TABLE IF NOT EXISTS professor(
	id_professor SERIAL NOT NULL,
	id_titulo INTEGER NOT NULL,
	tx_nome	VARCHAR(50) NOT NULL,
	tx_sexo CHAR(1) NOT NULL DEFAULT 'm',
	tx_estado_civil CHAR(1) NOT NULL DEFAULT 's', 
	dt_nascimento DATE NOT NULL,
	
	CONSTRAINT pk_id_professor PRIMARY KEY(id_professor),
	CONSTRAINT fk_id_titulo FOREIGN KEY(id_titulo) REFERENCES titulo(id_titulo) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT ck_tx_sexo CHECK(tx_sexo in ('m','f')),
	CONSTRAINT ck_tx_estado_civil CHECK(tx_estado_civil in ('s','c','d'))
);

CREATE TABLE IF NOT EXISTS instituicao(
	id_instituicao SERIAL NOT NULL,
	tx_sigla VARCHAR(15) NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	
	CONSTRAINT pk_id_instituicao PRIMARY KEY(id_instituicao),
	CONSTRAINT uq_tx_sigla_instituicao UNIQUE(tx_sigla),
	CONSTRAINT uq_tx_descricao_instituicao UNIQUE(tx_descricao)
);

CREATE TABLE IF NOT EXISTS tipo_curso(
	id_tipo_curso SERIAL NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	
	CONSTRAINT pk_id_tipo_curso PRIMARY KEY(id_tipo_curso),
	CONSTRAINT uq_tx_descricao_curso UNIQUE(tx_descricao)
);

CREATE TABLE IF NOT EXISTS curso(
	id_curso SERIAL NOT NULL,
	id_instituicao INTEGER	NOT NULL,
	id_tipo_curso INTEGER	NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	
	CONSTRAINT pk_id_curso PRIMARY KEY(id_curso),
	CONSTRAINT fk_id_instituicao FOREIGN KEY(id_instituicao) REFERENCES instituicao(id_instituicao) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_id_tipo_curso FOREIGN KEY(id_tipo_curso) REFERENCES tipo_curso(id_tipo_curso) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT uq_curso_group UNIQUE(id_instituicao, id_tipo_curso, tx_descricao)
);

CREATE TABLE IF NOT EXISTS tipo_disciplina(
	id_tipo_disciplina SERIAL NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	
	CONSTRAINT pk_id_tipo_disciplina PRIMARY KEY (id_tipo_disciplina),
	CONSTRAINT uq_tx_descricao UNIQUE (tx_descricao)
);

CREATE TABLE IF NOT EXISTS disciplina(
	id_disciplina SERIAL NOT NULL,
	id_curso INTEGER,
	id_tipo_disciplina INTEGER NOT NULL,
	tx_sigla VARCHAR(10) NOT NULL,
	tx_descricao VARCHAR(150) NOT NULL,
	in_periodo INTEGER NOT NULL,
	in_carga_horaria INTEGER NOT NULL,
	
	CONSTRAINT pk_id_disciplina PRIMARY KEY(id_disciplina),
	CONSTRAINT fk_id_curso FOREIGN KEY(id_curso) REFERENCES curso(id_curso) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_id_tipo_disciplina FOREIGN KEY(id_tipo_disciplina) REFERENCES tipo_disciplina(id_tipo_disciplina) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT uq_tx_sigla_disciplina UNIQUE(tx_sigla),
	CONSTRAINT uq_tx_descricao_disciplina UNIQUE(tx_descricao),
	CONSTRAINT ck_in_periodo CHECK(in_periodo>=1),
	CONSTRAINT ck_in_carga_horaria CHECK(in_carga_horaria>=40)
);

CREATE TABLE IF NOT EXISTS leciona(
	id_professor INTEGER NOT NULL,
	id_disciplina INTEGER NOT NULL,

	CONSTRAINT pk_leciona_group PRIMARY KEY(id_professor, id_disciplina),
	CONSTRAINT fk_id_professor FOREIGN KEY(id_professor) REFERENCES professor(id_professor) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_id_disciplina FOREIGN KEY(id_disciplina) REFERENCES disciplina(id_disciplina) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS aluno(
	id_aluno	SERIAL		NOT NULL,
	tx_nome		VARCHAR(100)	NOT NULL,
	tx_sexo		CHAR(1)		NOT NULL,
	dt_nascimento	DATE 		NOT NULL,
	
	CONSTRAINT pk_id_aluno	PRIMARY KEY(id_aluno),
	CONSTRAINT ck_tx_sexo	CHECK(tx_sexo in ('m','f'))
);


CREATE TABLE IF NOT EXISTS cursa(
	id_aluno INTEGER NOT NULL,
	id_disciplina INTEGER NOT NULL,
	in_ano INTEGER NOT NULL,
	in_semestre INTEGER NOT NULL,
	in_faltas INTEGER NOT NULL DEFAULT 0, 
	nm_nota1 NUMERIC(4,2),
	nm_nota2 NUMERIC(4,2), 
	nm_nota3 NUMERIC(4,2), 
	bl_aprovado BOOLEAN NOT NULL DEFAULT false,
	
	CONSTRAINT pk_cursa_group 	PRIMARY KEY(id_aluno, id_disciplina, in_ano, in_semestre),
	CONSTRAINT fk_id_aluno		FOREIGN KEY(id_aluno) 		REFERENCES aluno(id_aluno) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_id_disciplina 	FOREIGN KEY(id_disciplina)	REFERENCES disciplina(id_disciplina) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT ck_in_faltas 	CHECK(in_faltas>=0),
	CONSTRAINT ck_nm_notas	 	CHECK(nm_nota1>=0 AND nm_nota2>=0 AND nm_nota3>=0)
);
