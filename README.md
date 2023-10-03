# SpaceX API

Nesse projeto não foi necessário o uso de muitas libs pelo tamanho do projeto. As libs usadas foram:
  - Express para a contrução da API que consome a API da spaceX
  - Axios para fazer requisições para a API da spaceX
  - Express async errors para o tratamento de erros
  - Jest utilizado para testes
  - Eslint para padronizção
  
  Foi mantido uma estrutura simples devido o tamanho do projeto, apenas a implementaçãod e um service, um controller e as rotas.

## Rodar o projeto
  Para rodar o projeto basta instalar as dependênncias usando o yarn ou npm, criar um arquivo .env e copiar exatamente o que tem no .env.example

### Rotas
  - /upcoming -> Retorna um array de objetos com as informações do lançamentos
  - /past -> Retorna um array de objetos com as informações dos lançamentos passados
  - /latest -> Retorna um objeto com as informações do ultimo lançamento feito
  - /next -> retorna um objeto com as informações do próximo lançamento que será feito
