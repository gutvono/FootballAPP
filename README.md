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

  1. **criar os containers**

  ```bash
  $ npm run docker-compose:up:dev
  ```

  2. **no terminal do container do backend, rodar o comando build**

  ```bash
  $ npm run build
  ```

  3. **rodar o nodemon e popular o banco pelo script dev**

  ```bash
  $ npm run dev
  ```

As dependencias serão instaladas dentro dos respectivos containers, pois ao criá-los é rodado o comando _npm install_ em cada **Dockerfile**.
</details>

# Observações
Como sempre, um projeto nunca termina de fato. Sempre haverão **melhorias** para serem aplicadas.

<details>
    <summary><strong>Futuro potencial</strong></summary>
    <li> Melhorias estruturais seguindo alguns design de software como SOLID, POO, DDD, etc;</li>
</details>