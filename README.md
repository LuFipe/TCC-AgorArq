# TCC-AgorArq
 Site para projeto de TCC de Arquietura focado em Marketing Digital para propagação da área

# Prefacio
Por questões de privacidade, diversas pastas do front-end usadas no funcionamento do código não estão disponibilizadas. São elas:

AgorArq/front/artigos/
AgorArq/front/images/
AgorArq/front/HTML/
AgorArq/DataBase/
AgorArq/front/projetos/
AgorArq/front/trabalhos/
AgorArq/front/autores/
AgorArq/front/tcc/

Por ser um site dedicado ao marketing de arquitetura, foca-se no visual em detrimento do textual. Os tipos de conteúdo são:
-Projetos
    3D vinculado ao SketchFab
-Curtas de Obras (vinculado ao YouTube)
-Artigos
-Blog

# Indexação
Cada um dos conteúdos precisa de um conjunto de metadados que auxiliaram o aplicativo na busca. Deverão ser guardados em algum tipo de banco de dados. Cada tipo de conteudo terá seus proprios dados:
-Projeto:
    -ID (Automatico)
    -Nome
    -Escritório
    -Responsável
    -Desenhista
    -Metro quadrado
    -Data
-Curtas:
    -ID (Automatico)
    -Nome
    -Data
-Artigo:
    -ID (Automatico)
    -Nome
    -Escritor
    -Assunto
    -Data
-Blog:
    -ID (Automatico)
    -Nome
    -Escritor
    -Assunto
    -Data

Também são indexados os membros da equipe.
-Membro:
    -ID (Automatico)
    -Nome completo
    -Formação
    -Cargo

# Informação
Além dos metadados, cada um dos elementos possuiram um conjunto de informações para ser mostrado em suas respectivas páginas. Essas informações serão guardadas também em um banco de dados que será recuperado com o ID. As informações para cada um dos conteúdos é:
-Apresentação:
    -Path do arquivo a ser apresentado (moodboard, imagem de apresentação, link de video)
    -Texto de descrição (e imagens)

# Banco de Dados
Para esse projeto é utilizado o SQLite com o ORM Sequelize.

# O Upload de Arquivos
Para esse projeto será utilizado o Middleware Multer para upar os arquivos necessários para o conteúdo.

VALOR
MISSAO
VISÃO