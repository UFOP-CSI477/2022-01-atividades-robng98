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
 
---


### 4. Principais desafios e dificuldades

Dentre eles, os principais foram aprender a lidar melhor com arrays de objetos e suas iterações no Typescript (fui aprendendo só com o desenvolvimento do projeto), portar parte de código que estava feita inicialmente pensando em HTML/CSS nativo, para react (em especial, falando das diferenças nos atributos das tags, como a mudança de "class" para "className", diferença de sintaxe do atributo "styles", etc)


### 5. Instruções para instalação e execução

 É necessário ter um banco de dados PostegreSQL instalado em sua máquina e em funcionamento. Para uma versão expressa do banco preenchido, pasta rodar as seguintes linhas de script, no terminal do SGBD do PGAdmin: 
 
[Povoamento.txt](https://github.com/UFOP-CSI477/2022-01-atividades-robng98/files/9884627/Povoamento.txt)



Com o banco povoado, basta executar o comando "npm install" (caso esteja usando o NPM) para ambos o Server e Web, fazer uma migração do banco existente para um schema no Prisma (ORM utilizado na aplicação), e executar o comando "npm start" na seção Server e Web, respectivamente.

