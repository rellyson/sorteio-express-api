#!/bin/sh

##################################################################################
# API REST para sorteio utilizando expressjs + postgres                          #
# Desenvolvido por Pedro Paim e Rellyson Silva                                   #
# API desenvolvida para trabalho final da disciplina de TecWeb - PUC Minas 2020  #
##################################################################################

# starting database from a docker hub image
docker run --name sorteio_db --publish 5432:5432 -e POSTGRES_PASSWORD=ZTJmMzhlYmFhOWJjZjQ0 -d postgres

# installing dependecies

npm install

# starting express server
npm start