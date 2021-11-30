# API Guia de Receitas - Restaurante Coco Bambu

Este projeto é uma API para ser consumida em uma aplicação de receitas disponíveis no cardápio do Restaurante Coco Bambu. Esta API fornece um banco de dados para registro de usuários, registro de receitas e geração de token para autenticação e acesso para rotas protegidas. O projeto foi desenvolvido em Node.js utilizando Express, Mongoose e MongoDB.

Frontend da aplicação
![Login](https://github.com/joaoribas35/tagme_client/blob/master/src/assets/img/readme.jpg?style=centerme)

# Tabela de Conteúdos

- [Instalação](#instalação)
  - [Frontend](<#frontend(opcional)>)
  - [Backend](#backend)
- [Como Usar](#como-usar)
  - [User](#tela-de-login)
    - [Register](#register)
    - [Login](#login)
  - [Recipes](#recipes)
    - [Criar receita](#criar-receita)
    - [Listar receitas](#listar-receitas)
    - [Mostrar uma receita](#mostrar-uma-receita)
- [Tecnologias](#tecnologias)

# Instalação

Esta API foi desenvolvid para ser consumida por uma aplicação frontend desenvolvida em React.js. Ela também poderá ser consumida através de um API Client como [Insomnia](https://insomnia.rest/products/insomnia) ou [Postman](https://www.postman.com/product/rest-client/).

- [Voltar](#tabela-de-conteúdos)

## Frontend(opcional)

Caso deseje consumir esta API através da aplicação frontend, acesse este [repositório](https://github.com/joaoribas35/tagme_client) e siga as instruções.

- [Voltar](#tabela-de-conteúdos)

## Backend

Faça o download da aplicação, acesse a pasta com os arquivos, instale as dependencias e inicialize o projeto:

```
git clone https://github.com/joaoribas35/tagme_server
cd tagme_server
yarn install
yarn start
```

- [Voltar](#tabela-de-conteúdos)

# Como usar

A aplicação segue o padrão MVC. Exitem duas Models: User e Recipe. A model User possui uma rota para registro de usuário e outra para login. A model Recipe possui uma rota para cadastro, uma para retornar todas as receitas e uma para buscar uma receita pelo seu <id> no banco de dados.

- [Voltar](#tabela-de-conteúdos)

## User

Este endpoint possui duas rotas: uma rota para cadastro de usuários e uma rota para o login de usuários. O cadastro só poderá ser realizado com a permissão de ADMIN no banco de dados. O registro de usuários utiliza criptografia para as senhas e o login utiliza um token JWT para acesso a rotas protegidas.

- [Voltar](#tabela-de-conteúdos)

### Register

Rota para cadastro de um novo usuário.

```markdown
POST http://127.0.0.1:8000/api/register
```

### JSON Content

```json
{
  "username": "<nome_do_usuario>",
  "password": "<senha>"
}
```

### Response Format

```json
{
  "username": "<nome_do_usuario>"
}
```

- [Voltar](#tabela-de-conteúdos)

### Login

Rota para login de um usuário.

```markdown
POST http://127.0.0.1:8000/api/login
```

### JSON Content

```json
{
  "username": "<nome_do_usuario>",
  "password": "<senha>"
}
```

### Response Format

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ91gj0YTHEYOunuJdkwlzaScL-XyuZcFy8aaqgSNXpUrk"
}
```

- [Voltar](#tabela-de-conteúdos)

## Recipes

Este endpoint possui uma rota para cadastro de receitas, que só pode ser realizado com a permissão ADMIN no banco de dados. Possui também uma rota para listagem das receitas e uma para listagem de apenas uma receita através do <id> gerado pelo banco de dados. Essas rotas exigem token de autenticação para serem acessadas.

- [Voltar](#tabela-de-conteúdos)

### Criar receita

Rota para cadastro de uma nova receita. A requisição é feita no formato Multipart. A lista de ingredientes deve ser informada no formato de texto, separando os ingredientes com uma "," (vírgula). O modo de preparo deve ser informado no formato de texto, separando as etapas deve ser utilizando um "&" (e comercial).

```markdown
POST http://127.0.0.1:8000/api/recipes/create
```

### Multipart Content

```markdown
- Request (multipart/form-data)

  - Part (name="title", value="título da receita")
  - Part (name="description", value="descrição da receita")
  - Part (name="prepTime", value=20)
  - Part (name="ingredients", value='1 alho, 2 tomantes, ...')
  - Part (name="directions", value='Descasque o alho.&Corte o alho.&, ...')
  - Part (name="image", filename="filename.jpg")
  - Part (name="thumbnail", filename="filename.jpg")
```

### Response Format

```json
{
  "recipe": {
    "ingredients": ["1 alho", "2 tomates"],
    "directions": ["Descasque o alho.", "Corte o alho."],
    "_id": "61a51c7d03e005cc21b",
    "title": "título da receita",
    "description": "descrição da receita",
    "prepTime": 20,
    "image": "images/1638210685291.jpg",
    "thumbnail": "images/1638210685293.jpg",
    "createdAt": "2021-11-29T18:31:25.302Z",
    "updatedAt": "2021-11-29T18:31:25.302Z",
    "__v": 0
  }
}
```

- [Voltar](#tabela-de-conteúdos)

### Listar receitas

Rota para listagem de todas as receitas.

```markdown
GET http://127.0.0.1:8000/api/recipes/
```

### Response Format

```json
[
  {
    "recipe": {
      "ingredients": ["1 alho", "2 tomates"],
      "directions": ["Descasque o alho.", "Corte o alho."],
      "_id": "61a51c7d03e005cc21b",
      "title": "título da receita",
      "description": "descrição da receita",
      "prepTime": 20,
      "image": "images/1638210685291.jpg",
      "thumbnail": "images/1638210685293.jpg",
      "createdAt": "2021-11-29T18:31:25.302Z",
      "updatedAt": "2021-11-29T18:31:25.302Z",
      "__v": 0
    }
  }
]
```

- [Voltar](#tabela-de-conteúdos)

### Mostrar uma receita

Rota para listagem de uma receita utilizando o seu <id>.

```markdown
GET http://127.0.0.1:8000/api/recipes/<id>
```

### Response Format

```json
{
  "recipe": {
    "ingredients": ["1 alho", "2 tomates"],
    "directions": ["Descasque o alho.", "Corte o alho."],
    "_id": "61a51c7d03e005cc21b",
    "title": "título da receita",
    "description": "descrição da receita",
    "prepTime": 20,
    "image": "images/1638210685291.jpg",
    "thumbnail": "images/1638210685293.jpg",
    "createdAt": "2021-11-29T18:31:25.302Z",
    "updatedAt": "2021-11-29T18:31:25.302Z",
    "__v": 0
  }
}
```

- [Voltar](#tabela-de-conteúdos)

# Tecnologias

Principais ferramentas utilizadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F6192b0eed320b71c4828db18&nextHash=%23clusters)

[Voltar](#tabela-de-conteúdos)
