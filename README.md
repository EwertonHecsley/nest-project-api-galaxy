# API da Galáxia Inspirada em Star Wars

## Descrição

Esta API backend foi desenvolvida para criar e gerenciar uma galáxia inspirada no universo de Star Wars. Ela permite a criação, gerenciamento e visualização de planetas, sistemas estelares, personagens e naves espaciais.

## Tecnologias Utilizadas

- Node.js
- NestJS/Express
- TypeScript

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/EwertonHecsley/nest-project-api-galaxy.git
   cd nest-project-api-galaxy
   ```

2. Instale as dependências:
  ```bash
    npm install
  ```

3. Configure o arquivo de ambiente .env com as configurações específicas no .env.example.

4. Inicie o servidor:
  ```bash
    npm run start
  ```

5. Acesse sua API em:
   ```bash
     http://localhost:3000
   ```

## Endpoints

### Planetas

- **POST `/planets`**: Criar um novo planeta.
  - **Body**:
    ```json
    {
      "nome": "Tatooine",
      "clima": "árido",
      "terreno": "deserto",
      "população": 200000
    }
    ```
  
- **GET `/planets`**: Listar todos os planetas.

- **GET `/planets/:id`**: Obter detalhes de um planeta específico.

- **PUT `/planets/:id`**: Atualizar informações de um planeta.
  - **Body**:
    ```json
    {
      "nome": "Tatooine",
      "clima": "árido",
      "terreno": "deserto",
      "população": 200000
    }
    ```

- **DELETE `/planets/:id`**: Deletar um planeta.

### Sistemas Estelares

- **POST `/star-systems`**: Criar um novo sistema estelar.
  - **Body**:
    ```json
    {
      "nome": "Sistema Alderaan",
      "descricao": "Sistema conhecido por seu planeta de mesmo nome.",
      "listaDePlanetas": ["Alderaan"]
    }
    ```

- **GET `/star-systems`**: Listar todos os sistemas estelares.

- **GET `/star-systems/:id`**: Obter detalhes de um sistema estelar específico.

- **PUT `/star-systems/:id`**: Atualizar informações de um sistema estelar.
  - **Body**:
    ```json
    {
      "nome": "Sistema Alderaan",
      "descricao": "Sistema conhecido por seu planeta de mesmo nome.",
      "listaDePlanetas": ["Alderaan"]
    }
    ```

- **DELETE `/star-systems/:id`**: Deletar um sistema estelar.

### Personagens

- **POST `/characters`**: Criar um novo personagem.
  - **Body**:
    ```json
    {
      "nome": "Luke Skywalker",
      "raca": "Humano",
      "afiliacao": "Jedi",
      "planetaNatal": "Tatooine"
    }
    ```

- **GET `/characters`**: Listar todos os personagens.

- **GET `/characters/:id`**: Obter detalhes de um personagem específico.

- **PUT `/characters/:id`**: Atualizar informações de um personagem.
  - **Body**:
    ```json
    {
      "nome": "Luke Skywalker",
      "raca": "Humano",
      "afiliacao": "Jedi",
      "planetaNatal": "Tatooine"
    }
    ```

- **DELETE `/characters/:id`**: Deletar um personagem.

### Naves Espaciais

- **POST `/spaceships`**: Criar uma nova nave espacial.
  - **Body**:
    ```json
    {
      "nome": "Millennium Falcon",
      "modelo": "YT-1300",
      "fabricante": "Corellian Engineering Corporation",
      "capacidadeDePassageiros": 6
    }
    ```

- **GET `/spaceships`**: Listar todas as naves espaciais.

- **GET `/spaceships/:id`**: Obter detalhes de uma nave espacial específica.

- **PUT `/spaceships/:id`**: Atualizar informações de uma nave espacial.
  - **Body**:
    ```json
    {
      "nome": "Millennium Falcon",
      "modelo": "YT-1300",
      "fabricante": "Corellian Engineering Corporation",
      "capacidadeDePassageiros": 6
    }
    ```

- **DELETE `/spaceships/:id`**: Deletar uma nave espacial.


## Uso

A API já está disponível para uso em https://nest-project-api-galaxy.onrender.com. Você pode fazer requisições diretamente para os endpoints mencionados acima.

## Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou enviar pull requests.


   

