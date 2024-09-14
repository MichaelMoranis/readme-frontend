# React + TypeScript + Vite e testes com Cypress

Clone o projeto abra a pasta raiz e digite no terminal para instalar as dependências: 

```
npm install

``` 

Logo após digite: 

```
npm run dev

```

Para rodar os testes digite: 

```
npm run cy:open 

``` 
Que é um script para facilitar a digitação que se encontra no package.json: 

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "cy:open": "cypress open"
  },


```
## Corrigindo erro de cypress configuration error

Ao adicionar o cypress no projeto e escolher o modo testes &2& (end to end) recebi o erro:

 - `exports is not defined in ES module scope`  onde minha solução em pesquisas no google, cheguei a essa solução onde fazer algumas alterações no arquivo `tsconfig.json`.

 ```js
   "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  },
  ``` 

  antes de instalar o cypress meu arquivo tinha essa conbinação:

  ```js
{

  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```
  Dessa forma consegui resolver o erro e seguir com a configuração inicial do cypress.

## Onde devo criar o primeiro teste.

Ao ser instalado o cypress cria uma estrutura de pastas na raiz do projeto. Dentro dessa primeira pasta temos uma subpasta chamada e2e e é ai onde criamos o codigo do nosso primeiro teste (dentro dessa pasta ja tem um codigo pre-escrito).