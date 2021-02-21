Comandos em sequencia:

npx sequelize db:create
npx sequelize db:migrate
npm run dev

================
criar uma migration(criar tabela)
npx migration:create --name=create-users (sempre crie as tabelas no plural pois o padrão dele e pesquisar no plural)

#Step 1:
Não precisa criar o banco, setei lá no .sequelizerc para ele olhar o database.js dentro do config e assim quando vc digitar "npx sequelize db:create" ele irá ler o "database: 'express_sequelize'," e vai criar o banco. ATENÇÃO: comandos do sequelize se utiliza "npx"

#Step 2:
Para criar a migration para criar a tabela"npx migration:create --name=create-users"

#Step 3:
depois de criadas você precisa rodas as migrations para elas criarem as tabelas no banco, use o comando 
npx sequelize db:migrate


=======================================================================================================

