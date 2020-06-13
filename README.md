# Expressjs - Trabalho final de Tecnologias Web - PUC Minas 2020

## 1 - Tecnologias e frameworks utilizados

- Nodejs
- npm
- Postgres
- expressjs
- Docker

## 2 - Como instalar

#### PARA A INSTALAÇÃO É NECESSÁRIO TER O NODEJS, NPM E DOCKER INSTALADOS

A instalação pode ser realizada rodando o script bash ou copiando os comandos e instalando manualmente

```
# starting database from a docker hub image
docker run --name sorteio_db --publish 5432:5432 -e POSTGRES_PASSWORD=<PASSWORD> -d postgres

# starting express server
npm install
```

## 3 - Iniciando a aplicação

Basta executar o seguinte comando:

```
npm start
```

## 4 - Utilizando os endpoints/rotas da aplicação

Utilizando ferramentas como postman e insomnia, este são os endpoints da aplicação:

- listCandidates
    - lista todos os candidatos cadastrados no banco de dados
    - Não é necessário parâmetros de requisição
    - Retorna uma array dos candidatos cadastrados

- listCandidateById
    - lista o candidato cadastrado corresponde ao id
    - É necessário passar o id como corpo da requisição
    - Retorna uma array com o candidato cadastrado

- insertCandidate
    - insere um novo candidato no banco de dados
    - É necessário passar first_name, last_name e email como corpo da requisição
    - Retorna status 200 e uma mensagem caso o usuário tenha sido inserido com sucesso

- removeCandidate
    - Remove um candidato do banco de dados
    - É necessário passar first_name e last_name como corpo da requisição
    - Retorna status 200 e uma mensagem caso o usuário tenha sido removido com sucesso

- updateCandidate
    - Atualiza o cadastro de um candidato do banco de dados
    - É necessário passar first_name, last_name e email como corpo da requisição
    - Retorna status 200 e uma mensagem caso o usuário tenha sido removido com sucesso

- sortCandidate
    - Sorteia o candidato registrado no banco de dados
    - Não é necessário parâmetros de requisição
    - Retorna um objeto do candidato sorteado

## 5 - Usar programas como pgadmin ou dbeaver (opcional)

Usar os programas para ter acesso ao banco de dados e os registros criados
