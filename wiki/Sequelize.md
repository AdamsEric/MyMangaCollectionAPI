# Migrations

## Criação do banco de dados
`npx sequelize db:create`

## Criação de migration do banco de dados
`npx sequelize migration:create --name=<nome_da_migration>`

## Execução das migrations
`npx sequelize db:migrate`

## Reversão de migrations

#### Reverte a última migration
`npx sequelize-cli db:migrate:undo`

#### Reverte todas as migrations
`npx sequelize-cli db:migrate:undo:all`