# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluno: Roberto Nicácio Guimarães (19.1.8013)*

--------------

### Resumo

  Collectpedia é uma plataforma catálogo, com informações gerais sobre edições de histórias em quadrinhos, tipificada para comics (quadrinhos americanos) e mangas (japoneses), algo que não é usual, dentre as opções mais populares. Caso o usuário esteja cadastrado, pode criar sub-coleções, utilizando o acervo do site, na plataforma, tendo, também, acesso a estatísticas personalizadas sobre suas coleções.

### 1. Funcionalidades implementadas

 Todas as funcionalidades citadas na proposta foram implementadas.
  
  
### 2. Funcionalidades previstas e não implementadas

 Havia vontade de exibir um gráfico, dentre as opções de estatísticas de uma sub-coleção, dentro da tela do usuário, contendo o progresso do número de exemplares da determinada coleção. Por falta de tempo e implementação relativamente mais complexa do que me é habitual, para Typescript/Javascript, a função foi deixada de lado.
 Pelo mesmo motivo, não há a possibilidade de adicionar mais de um exemplar de uma mesma série ao mesmo tempo, na tela principal da dada série.


### 3. Outras funcionalidades implementadas
 

### 4. Principais desafios e dificuldades

Dentre eles, os principais foram aprender a lidar melhor com arrays de objetos e suas iterações no Typescript (fui aprendendo só com o desenvolvimento do projeto), portar parte de código que estava feita inicialmente pensando em HTML/CSS nativo, para react (em especial, falando das diferenças nos atributos das tags, como a mudança de "class" para "className", diferença de sintaxe do atributo "styles", etc)


### 5. Instruções para instalação e execução

 É necessário ter um banco de dados PostegreSQL instalado em sua máquina e em funcionamento. Para uma versão expressa do banco preenchido, pasta rodar as seguintes linhas de script, no terminal do SGBD do PGAdmin: 
 
 INSERT INTO Editora
VALUES
(NULL,'DC Comics', '1934-09-01'),
(NULL,'Marvel Comics', '1939-10-01'),
(NULL, 'Shueisha', '1949-03-31');
INSERT INTO Serie
VALUES
('FINALIZADA', 'The Dark Knight Returns', 1),
('EM ANDAMENTO', 'Moon Knight', 9),
('FINALIZADA', 'Dragon Ball', 1),
('FINALIZADA', 'Punisher Kill Krew', 1),
('EM ANDAMENTO','One Punch-Man',1);
INSERT INTO Manga
VALUES
('ドラゴンボール', 'Shounen', 'Dragon Ball',1),
('ワンパンマン', 'Seinen', 'One Punch-Man', 1);
INSERT INTO Publica
VALUES
('DC Comics', '1934-09-01', 'The Dark Knight Returns', 1),
('Marvel Comics', '1939-10-01','Punisher Kill Krew', 1),
('Marvel Comics', '1939-10-01','Moon Knight', 9),
('Shueisha', '1949-03-31', 'Dragon Ball', 1),
('Shueisha', '1949-03-31', 'One Punch-Man', 1);
INSERT INTO Contribuidor
VALUES
('M', 'Frank Miller', '1957-01-27'),
('M', 'Akira Toriyama', '1955-04-05'),
('M', 'Gerry Duggan', '1973-11-29'),
('M', 'Jed Mackay', '1983-01-01'),
('M', 'Yusuke Murata', '1986-10-29'),
('M', 'Juan Ferreyra', '1978-03-08');
INSERT INTO Contribui
VALUES
('Frank Miller', '1957-01-27', 'The Dark Knight Returns', 1, 'Roteirista/Desenhista'),
('Akira Toriyama', '1955-04-05', 'Dragon Ball', 1, 'Mangaka'),
('Gerry Duggan', '1973-11-29', 'Punisher Kill Krew', 1, 'Roteirista'),
('Jed Mackay','1983-01-01', 'Moon Knight', 9, 'Roteirista'),
('Yusuke Murata', '1986-10-29', 'One Punch-Man', 1, 'Mangaka'),
('Juan Ferreyra', '1978-03-08', 'Punisher Kill Krew', 1, 'Desenhista');
INSERT INTO Edicao
VALUES
('/static/imgs_png/tdkr1.png', '1A', 'USD', 2.95, '1986-03-01', 'The Dark Knight Returns', 1),
('/static/imgs_png/tdkr2.png', '2A', 'USD', 2.95, '1986-04-01', 'The Dark Knight Returns', 1),
('/static/imgs_png/tdkr3.png', '3A', 'USD', 2.95, '1986-05-01', 'The Dark Knight Returns', 1),
('/static/imgs_png/tdkr4.png', '4A', 'USD', 2.95, '1986-06-01', 'The Dark Knight Returns', 1),
('/static/imgs_png/pkk1.png', '1A', 'USD', 3.99, '2019-10-15', 'Punisher Kill Krew', 1),
('/static/imgs_png/pkk2.png', '2A', 'USD', 3.99, '2019-11-01', 'Punisher Kill Krew', 1),
('/static/imgs_png/pkk3.png', '3A', 'USD', 3.99, '2019-11-15', 'Punisher Kill Krew', 1),
('/static/imgs_png/pkk4.png', '4A', 'USD', 3.99, '2019-12-01', 'Punisher Kill Krew', 1),
('/static/imgs_png/pkk5.png', '5A', 'USD', 3.99, '2020-01-01', 'Punisher Kill Krew', 1),
('/static/imgs_png/DBJ1.png', '1', 'JPY', 484, '1985-09-10', 'Dragon Ball', 1),
('/static/imgs_png/DBJ2.png', '2', 'JPY', 484, '1986-01-10', 'Dragon Ball', 1),
('/static/imgs_png/DBJ3.png', '3', 'JPY', 484, '1986-06-10', 'Dragon Ball', 1),
('/static/imgs_png/DBJ4.png', '4', 'JPY', 484, '1986-10-09', 'Dragon Ball', 1),
('/static/imgs_png/mk1.png', '1A', 'USD', 4.99, '2021-07-21', 'Moon Knight', 9),
('/static/imgs_png/mk2.png', '2A', 'USD', 3.99, '2021-08-18', 'Moon Knight', 9),
('/static/imgs_png/mk3.png', '3A', 'USD', 3.99, '2021-09-22', 'Moon Knight', 9),
('/static/imgs_png/mk4.png', '4A', 'USD', 3.99, '2021-10-27', 'Moon Knight', 9),
('/static/imgs_png/mk5.png', '5A', 'USD', 3.99, '2021-11-17', 'Moon Knight', 9),
('/static/imgs_png/mk6.png', '6A', 'USD', 3.99, '2021-12-22', 'Moon Knight', 9),
('/static/imgs_png/OPM1.png', '1', 'JPY', 440, '2012-12-04', 'One Punch-Man', 1),
('/static/imgs_png/OPM2.png', '2', 'JPY', 440, '2012-12-04', 'One Punch-Man', 1),
('/static/imgs_png/OPM3.png', '3', 'JPY', 440, '2013-04-04', 'One Punch-Man', 1),
('/static/imgs_png/OPM4.png', '4', 'JPY', 440, '2013-08-02', 'One Punch-Man', 1);

INSERT INTO Tankobon
VALUES
('1', '1985-09-10', 'Dragon Ball', 1),
('2', '1986-01-10', 'Dragon Ball', 1),
('3', '1986-06-10', 'Dragon Ball', 1),
('4', '1986-10-09', 'Dragon Ball', 1),
('1', '2012-12-04', 'One Punch-Man', 1),
('2', '2012-12-04', 'One Punch-Man', 1),
('3', '2013-04-04', 'One Punch-Man', 1),
('4', '2013-08-02', 'One Punch-Man', 1);
INSERT INTO Genero
VALUES
('The Dark Knight Returns', 1, 'Futuro Distópico'),
('Punisher Kill Krew', 1, 'Ação'),
('Moon Knight', 9, 'Mistério'),
('Dragon Ball', 1, 'Aventura'),
('One Punch-Man', 1, 'Comédia');
INSERT INTO Capitulo
VALUES
('1', '1985-09-10', 'Dragon Ball', 1, 11),
('2', '1986-01-10', 'Dragon Ball', 1, 13),
('3', '1986-06-10', 'Dragon Ball', 1, 12),
('4', '1986-10-09', 'Dragon Ball', 1, 12),
('1', '2012-12-04', 'One Punch-Man', 1, 8),
('2', '2012-12-04', 'One Punch-Man', 1, 7),
('3', '2013-04-04', 'One Punch-Man', 1, 5),
('4', '2013-08-02', 'One Punch-Man', 1, 4);
INSERT INTO Colecionador
VALUES
('weebjao', 'weebjao32@gmail.com', 'animeftw');
INSERT INTO Colecao
VALUES
('Colecao_Marvel', 'weebjao32@gmail.com'),
('Colecao_Weeb', 'weebjao32@gmail.com');
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('VF+ (8.5)', '1', '2021-03-24', '2012-12-04', 'One Punch-Man', 1),
('VF (8.0)', '2', '2021-03-24', '2012-12-04', 'One Punch-Man', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('VF+ (8.5)', '2', '2021-04-08', '2012-12-04', 'One Punch-Man', 1),
('VF (8.0)', '3', '2021-04-08', '2013-04-04', 'One Punch-Man', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM (9.4)', '2A', '2021-06-26', '2019-11-01', 'Punisher Kill Krew', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM (9.4)', '3A', '2021-08-18', '2019-11-15', 'Punisher Kill Krew', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM (9.4)', '4A', '2021-09-23', '2019-12-01', 'Punisher Kill Krew', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
( 'NM (9.4)', '5A', '2022-01-14', '2020-01-01', 'Punisher Kill Krew', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM (9.4)', '2A', '2021-06-26', '2019-11-01', 'Punisher Kill Krew', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM (9.4)', '2', '2022-02-28', '1986-01-10', 'Dragon Ball', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('VF (8.0)', '3', '2022-02-28', '1986-06-10', 'Dragon Ball', 1);
INSERT INTO Exemplar ( estado_conserv, fk_edicao_numero,
data_aquis,fk_edicao_data_lanc, fk_edicao_nome_intern, fk_edicao_ciclo_de_num)
VALUES
('NM- (9.2)', '2A', '2022-05-09', '2021-08-18', 'Moon Knight', 9),
('VF+ (8.5)', '5A', '2022-05-09', '2021-11-17', 'Moon Knight', 9),
('VF+ (8.5)', '5A', '2022-05-09', '2021-11-17', 'Moon Knight', 9),
('VF (8.0)', '3', '2022-05-09', '2013-04-04', 'One Punch-Man', 1);
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '1');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '2');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '3');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '4');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '5');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '6');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '7');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '8');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '9');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '10');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '11');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '12');
INSERT INTO Agrega
VALUES
('Colecao_Marvel', 'weebjao32@gmail.com', '13');
INSERT INTO Agrega
VALUES
('Colecao_Marvel', 'weebjao32@gmail.com', '14');
INSERT INTO Agrega
VALUES
('Colecao_Weeb', 'weebjao32@gmail.com', '15');


Com o banco povoado, basta executar o comando "npm install" (caso esteja usando o NPM) para ambos o Server e Web, fazer uma migração do banco existente para um schema no Prisma (ORM utilizado na aplicação), e executar o comando "npm start" na seção Server e Web, respectivamente.

