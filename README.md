# SassCompiler
Compilador de SASS configurável por projeto.

## Instalando:

Primeiramente, verifique se o seu computador tem as dependências necessárias instaladas.

* Dependências:
  * Node
  * NPM
  * Git

Caso você tenha, abra o terminal, navegue até a pasta que deseja instalar o Compilador e rode os seguintes comandos:

```bash
  git clone https://github.com/AtmaIT/SassCompiler.git
  cd SassCompiler/
  npm install
```

## Como configurar: 

Dentro do projeto, você encontrará o seguinte arquivo: settings.json

```json
{
  "minify": true,
  "debugMode": true,
  "cwd": "Your workspace path",
  "Themes": {
    "ThemeName" : {
      "src": "path of source file (sass)",
      "dist": "path of build file"
    }
  }
}
```

* Minify: 
Se true, o arquivo final sera minificado (Aumenta o tempo de compilação, não é indicado em ambiente de dev)

* DebugMode: 
Se true, gera o source maps do arquivo gerado (Não é indicado em ambiente de produção)

* Cwd: 
Caminho original do seu projeto
**Obs**: O compilador vai procurar a pasta Themes dentro desse caminho.

* Themes:
Você poderá passar indeterminados temas onde o compilador vai atuar compilando o sass.

* Themes.ThemeName:
O valor da chave deve ser o nome do tema.
Você deve passar um objeto que tenha o *src* e o *dist* para cada tema (o caminho é relativo a pasta do tema)

## Como usar:

* Watch mode:
Navegue até a pasta do compilador e rode no terminal:

```bash
grunt
```

Ou abra o arquivo Init dentro da pasta do projeto.

* Compile:
Navegue até a pasta do compilador e rode no terminal:

```bash
grunt compile
```

## Flags:

* cwd

Quando passado, você pode setar um cwd dinâmico para o compilador, exemplo:

```bash
grunt compile --cwd="Your new cwd paths here"
```
