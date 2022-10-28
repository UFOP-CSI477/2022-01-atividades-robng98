# **CSI606-2021-02 - Remoto - Proposta de Trabalho Final**

## *Aluna(o): Roberto Nicácio Guimarães*

--------------

<!-- Descrever um resumo sobre o trabalho. -->

### Resumo

  A aplicação desenvolvida é uma plataforma de consulta de informações sobre histórias e quadrinhos, e sua catalogação em coleções, caso usuário cadastrado da plataforma.

<!-- Apresentar o tema. -->
### 1. Tema

  Collectpedia é uma plataforma catálogo, com informações gerais sobre edições de histórias em quadrinhos, tipificada para comics (quadrinhos americanos) e mangas (japoneses), algo que não é usual, dentre as opções mais populares. Caso o usuário esteja cadastrado, pode criar sub-coleções, utilizando o acervo do site, na plataforma, tendo, também, acesso a estatísticas personalizadas sobre suas coleções.

<!-- Descrever e limitar o escopo da aplicação. -->
### 2. Escopo

  As funcionalidades do projeto incluem:
  - Ter acesso a todo o catálogo de quadrinhos da plataforma, sem necessidade de cadastro
  - Busca por quadrinhos comics ou mangas de forma tipificada e com uso de termos específicos de cada nicho
  - Acesso a informações principais de edições, como imagem de capa, preço, número da edição, status de publicação da série, artistas envolvidos...
  - Caso cadastrado, os usuários tem acesso à funcionalidade de criar/deletar/renomear sub-coleções dentro da plataforma, adicionar exemplares de edições/tankos nela, remove-los, com sua devida data de compra e nota de conservação, e ter acesso a estatísticas personalizadas interessantes sobre suas coleções, como: 
    - Número de exemplares totais
    - Roteirista/Desenhista mais recorrente da coleção
    - Demografia e Mangaka principais da coleção (caso possua um manga cadastrado)
    - Status de publicação das séries presentes na coleção
    - Número de edições faltantes, para completar uma determinada série...

<!-- Apresentar restrições de funcionalidades e de escopo. -->
### 3. Restrições

  Toda parte de manutenção do catálogo do site, adicionar/remover/editar entradas, fica fora do escopo apresentado na plataforma. O administrador deve fazé-lo via SGBD ou ferramentas similares.

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->
### 4. Protótipo

  Páginas construídas:
  - Página Inicial
  - Página de resultados de busca (uma para manga, outra para comics)
  - Página geral da série de quadrinhos pesquisada (uma para manga, outra para comics)
  - Página de inclusão de um exemplar de uma série a uma coleção
  - Página principal do usuário
  - Página principal de uma coleção do usuário
  - Página de administração de coleções do usuário (onde é possível criar, remover ou renomear coleções)
  - Página de Login
  - Página de Cadastro

