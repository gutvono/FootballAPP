--- _Portugues_ ---

# Boas-vindas ao repositório do projeto `Football APP`!

🌱 O projeto é um site informativo sobre partidas e classificações de futebol. O objetivo principal é _aprimorar habilidades_ voltadas para o **backend**, utilizando _docker_ e modelagem de dados através do _Sequelize_.

<img alt="ball" src="https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-bolas-de-futebol-0.gif" width="100px">

# Contexto geral:

<details>
    <summary>🗃️ <strong>Arquivos e pastas feitas por mim</strong></summary><br />
    Tudo que está dentro de 📁 <strong>/backend/src</strong>. Os demais arquivos foram feitos pela escola que elaborou o projeto.
</details>

<details>
    <summary>🧰 <strong>Ferramentas</strong>, <strong>linguagens</strong> e respectivas <strong>funções</strong> utilizadas:</summary>
    <li> <i>TypeScript</i> (linguagem);</li>
    <li> <i>MySQL</i> (banco de dados);</li>
    <li> <i>Sequelize</i> (comunicação banco - backend);</li>
    <li> <i>Node.js</i> (compilação);</li>
    <li> <i>Express</i> (gerenciar requisições);</li>
    <li> <i>Express async errors</i> (capturar erros da aplicação);</li>
    <li> <i>JWT, bcryptjs</i> (validação de token e criptografia de senha);</li>
    <li> <i>Jest, mocha, chai, sinon</i> (testes unitários);</li>
</details>

<details>
    <summary>🚀 <strong>Como rodar o projeto</strong></summary>
    Neste projeto foi utilizado o <i>Docker</i>, para que não haja problemas com os softwares locais da máquina, além de ter um <i>ambiente isolado</i> para cada área (frontend, backend e banco de dados).
    <br>

  1. **Criar os containers**

  ```bash
  $ npm run docker-compose:up:dev
  ```

  2. **No terminal do container do backend, rodar o comando build**

  ```bash
  $ npm run build
  ```

  3. **Rodar o nodemon e popular o banco pelo script dev**

  ```bash
  $ npm run dev
  ```

    As dependencias serão instaladas dentro dos respectivos containers, pois ao criá-los é rodado o comando _npm install_ em cada **Dockerfile**.
</details>

# Observações
Como sempre, um projeto nunca termina de fato. Sempre haverão **melhorias** para serem aplicadas.

<details>
    <summary><strong>Futuro potencial/melhorias</strong></summary>
    <li>Melhorias estruturais seguindo alguns design de software como SOLID, POO, DDD, etc;</li>
    <li>Testes unitários mais específicos, expressivos e funcionais;</li>
    <li>Expandir alguns trechos de codigos para uma melhor manutenção e entendimento;</li>
    <li>Adicionar comentários explicativos;</li>
    <li>Correções de bugs;</li>
    <li>Criar tela de cadastro;</li>
    <li>A partir do que temos aqui, é possível fazer um APP informativo para futebol com todos os campeonatos, notícias e jogos, tudo em tempo real.</li>

    Essas são apenas algumas ideias de melhorias e adição de novas features!
</details>

--- _English_ ---

# Welcome to the `Football APP` project repository!

🌱 The project is an informative website about football matches and standings. The main goal is to improve **backend** skills using _docker_ and data modeling through _Sequelize_.

<img alt="ball" src="https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-bolas-de-futebol-0.gif" width="100px">

# General context:

<details>
    <summary>🗃️ <strong>Files and folders made by me</strong></summary><br />
    Everything inside 📁 <strong>/backend/src</strong>. The other files were made by the school that created the project.
</details>

<details>
    <summary>🧰 <strong>Tools</strong>, <strong>languages</strong> and respective <strong>functions</strong> used:</summary>
    <li> <i>TypeScript</i> (language);</li>
    <li> <i>MySQL</i> (database);</li>
    <li> <i>Sequelize</i> (communication between database and backend);</li>
    <li> <i>Node.js</i> (compilation);</li>
    <li> <i>Express</i> (manage requests);</li>
    <li> <i>Express async errors</i> (capture application errors);</li>
    <li> <i>JWT, bcryptjs</i> (token validation and password encryption);</li>
    <li> <i>Jest, mocha, chai, sinon</i> (unit tests);</li>
</details>

<details>
    <summary>🚀 <strong>How to run the project</strong></summary>
    In this project was used <i>Docker</i>, to avoid problems with local machine software and to have an <i>isolated environment</i> for each area (frontend, backend, and database).
    <br>

  1. **Creating containers**

  ```bash
  $ npm run docker-compose:up:dev
  ```

  2. **In the backend container terminal, run the build command**

  ```bash
  $ npm run build
  ```

  3. **Run nodemon and populate the database with the dev script**

  ```bash
  $ npm run dev
  ```

    The dependencies will be installed inside their respective containers because when they are created, the command _npm install_ was executed in each **Dockerfile**.
</details>

# Observações
As always, a project never really ends. There will always be **improvements** to be made.

<details>
    <summary><strong>Potential future/improvements</strong></summary>
    <li>Structural improvements following some software design principles like SOLID, OOP, DDD, etc;</li>
    <li>More specific, expressive, and functional unit tests;</li>
    <li>Expand some code sections for better maintenance and understanding;</li>
    <li>Add explanatory comments;</li>
    <li>Create a registration page;</li>
    <li>From what we have here, it is possible to create an informative football app with all championships, news, and games, all in real-time.</li>

    These are just some ideas for improvements and new features!
</details>