<h1 align="center">
    <img alt="Logo DT Money" title="Logo Ignite" src="src\assets\logo.svg" />
</h1>

<p align="center">
O DT Money é uma plataforma para registro de finanças, com funcionalidade de busca, filtro e visão geral sobre a entrada e saída de capital. Projeto com intuito de aprender a utilizar API's na ambiente React.<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-comorodar">Como Rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="projeto DT Money" src=".github/preview.jpg" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML, CSS e JavaScript
- Git e Github
- Figma
- ReactJS com as biblotecas:

  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Styled Components](https://styled-components.com/docs)
  - [Phosphor Icons](https://phosphoricons.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://github.com/colinhacks/zod)
  - [Radix UI](https://www.radix-ui.com/)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [useContextSelector](https://github.com/dai-shi/use-context-selector)

## 💻 Projeto

O DT Money é uma aplicação para auxiliar o usuário a monitorar a entrada e saída de capital. Tendo funcionalidades como filtro e re-adaptação ao foco da busca interna. Devido à aplicação funcionar com uma API, é preciso que baixe como dependência de desenvolvimento a bibloteca [JSON Server](https://github.com/typicode/json-server).

- [Visite o layout não funcional online](https://dt-money-liart.vercel.app/)

<br>

## 💾 Como rodar

Para fazer a aplicação funcionar, baixe os arquivos e instale as dependências necessárias

```bash
# Clone Repository
$ git clone https://github.com/pedrohenrikle/dt-money.git

# Install all dependencies
$ npm install
```
Após, instale a dependência de desenvolvimento [JSON Server](https://github.com/typicode/json-server).

```bash
# Install JSON Server
$ npm i -D json-server
```
Então, abra dois terminais e execute o servidor para a API e para o App
```bash
# Run JSON Server
$ npx json-server server.json -p 3333 -w -d 500
```

```bash
# Run App localhost
$ npm run dev
```
Agora pode abrir no localhost a aplicação e está pronto! Aproveite !

<br>

## 🔖 Layout

Você pode visualizar o layout do projeto através [deste link 👋](https://www.figma.com/file/P9WVqPUdrexhsz9d45x7iy/DT-Money-(Community)?node-id=1%3A147&t=mzBCG2wPqxFELBSS-0). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## :memo: Licença

Esse projeto está sob a licença MIT.

---

## ✍ Author
<br>

<img alt="Pedro Henrique Klein" title="Pedro Henrique Klein" src="https://github.com/pedrohenrikle.png" width="150">
<p>
    Made with 💜 by Pedro Henrique Klein
</p>
<p align="left">
    <a href="https://www.linkedin.com/in/pedro-klein/" target="_blank">
        <img align="center" src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn: pedro-klein" />
    </a>
    <a href="mailto:pedro.klein.sl@gmail.com" target="_blank">
        <img align="center" src="https://img.shields.io/badge/Gmail-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="pedro.klein.sl@gmail.com" />
    </a>
</p>