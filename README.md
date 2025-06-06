🚀 Como Executar a API de Catálogo de Receitas
📋 Pré-requisitos
Node.js v18 ou superior

npm ou yarn instalado

⚙️ Instalação
Instale as dependências:

**npm install
#OU
**yarn install


▶️ Execução Básica
npm run start:dev  # Inicie o servidor
📮 Testando com Postman
1. Criar uma Receita (POST)
Método: POST

URL: http://localhost:3000/recipes

Headers:

Content-Type: application/json

Body (raw JSON):

json
{
  "title": "Bolo de Chocolate",
  "description": "Receita cremosa",
  "ingredients": ["chocolate", "farinha", "ovos"]
}
2. Listar Todas (GET)
Método: GET

URL: http://localhost:3000/recipes

3. Buscar por ID (GET)
Método: GET

URL: http://localhost:3000/recipes/ID_DA_RECEITA
