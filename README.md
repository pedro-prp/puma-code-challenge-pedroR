# puma-code-challenge-pedroR

## 1. Dados Pessoais
nome: Pedro Rodrigues Pereira
<br>
matrícula: 170062686


## 2. O que é?

O projeto se trata de uma POC(Proof of concept) para o projeto de pesquisa Puma. Consistindo em um serviço de backend e frontend.

## 3. Relato de desenvolvimento
1. Em primeiro passo foi construído o backend, seguindo uma arquitetura de MVC(Model-View-Controller). A abstração de interação com o banco de dados é realizada nos repositories. Dessa forma, foi construído a API de forma básica, dando espaço para o ínicio do front.

2. No frontend tive a escolha do Vue como framework, neste momento a página foi construída de forma inícial.

3. Posteriormente foi o momento de integrar os dois serviços e garantir o uso da API local do backend.

4. Por fim, foram aplicadas as respostas no front para as regras de negocio do backend, e a estilização da página.

## 4. Como rodar

&emsp;**Dependências**
* Node
* NPM

### 4.1 Setup do backend

1. Em um terminal, acesse o diretório do backend com o seguinte comando:
```
cd backend
```

2. Após, realize a instalação das dependências da aplicação:
```
npm install
```

3. E por fim, rode com o comando:
```
npm start
```

### 4.2  Setup do frontend

1. Em um terminal, acesse o diretório do frontend com o seguinte comando:
```
cd frontend
```

2. Após, realize a instalação das dependências da aplicação:
```
npm install
```

3. E por fim, rode com o comando:
```
npm run dev
```