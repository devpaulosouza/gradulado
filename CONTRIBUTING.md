# Contribuindo para o Gradulado 

Para fins educativos, este repositório é de código aberto, e contribuições são bem vindas! 


### Guia de estilo
Para manter a organização no código, siga os seguintes estilos para fazer seu pull request.

#### JavaScript 

* Use ponto e vírgula;
* ES6
* Prefira `'` a `"`
* Tamanho da linha: 100 caracteres
* Linha em branco no final de cada arquivo
* Use o eslint

#### JSX

* Prefira `"` a `'` ao passar strings às props
* Quando quebrar as props de uma tag de linha, deixar uma prop em cada linha
* Deixe as `{}`  coladas às props. Elas se amam muito para ficarem separadas. (sem espaços)

Para facilitar a formatação, utilize o eslint e o prettier em seu editor/IDE.

Para rodar o prettier na linha de comando:

```sh
$ npm run format
```

### Pull Requests

##### Novas funcionalidades
Apenas tenha certeza de não fazer suas alterações no master. Crie um branch separado para isso e deixe bem claro suas modificações. Além disso, dê um commit para cada issue fechada, indicando #{número da issue} 

### Instalação

O Gradulado precisa de [Node.js](https://nodejs.org/) para rodar.

Instale as dependências antes de rodar.

```sh
$ cd gradulado
$ npm install
$ react-native run-android #ou run-ios
```

Licença
----

GLP-3.0


**Free Software, Hell Yeah!**

[//]: #
   [node.js]: <http://nodejs.org>
