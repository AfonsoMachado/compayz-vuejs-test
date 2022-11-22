<table align="center"><tr><td align="center" width="9999">

<h2>Landing Page para uma página de assinatura de planos</h2>

<p align="center">
  <a href="#descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-observações-sobre-o-projeto ">Observações sobre o projeto </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-executando-o-projeto">Executando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#up-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

## Descrição do Projeto

Este projeto trata-se da construção de uma *landing page* para assinatura de planos, onde é realizada a coleta de dados de um cliente que quer assinar um determinado plano. Desenvolvido no processo seletivo de contratação da empresa [CompayZ](https://compayz.com/). Foi completamente construído utilizando o framework [NuxtJS](https://nuxtjs.org/) e seus módulos para auxílio no desenvolvimento.

## :computer: Tecnologias

Tecnologias utilizadas para o desenvolvimento:

- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [BootstrapVue](https://bootstrap-vue.org/)
- [NuxtJS](https://nuxtjs.org/)
- [nuxt/axios](https://axios.nuxtjs.org/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Vue.js 2](https://v2.vuejs.org/)
- [Vue-Sweetalert2](https://avil13.github.io/vue-sweetalert2/)
- [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/)
- [Vue Toastification](https://vue-toastification.maronato.dev/)

## :bookmark: Observações sobre o projeto

### Arquivos JSON

Para auxiliar no desenvolvimento, foram utilizados três arquivos *json* que são consumidos ao longo do projeto, contendo os planos ativos atualmente e dados pertinentes aos planos ativos

### Plugins

Foram configurados dois *plugins* nuxt para o projeto, o primeiro deles é referente à configuração do [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/), utilizado para afetuar mascaras de *inputs* para melhor utlização dos formulários para o usuário. Um segundo plugin usado, foi a criação de uma instância do *axios* exclusiva para o uso da api [ViaCEP](https://viacep.com.br/), usada para consulta de CEPs do Brasil.

### Validações

Neste projeto foram incluidas algumas validações simples de formulários, cujas funções podem ser encontradas dentro da pasta *common*.

### Demais observações

Foi seguido todo padrão utilizado pelo Nuxt e Vue, mantendo os componentes usados na pasta *components* bem como as páginas nas pasta *pages*. Sempre que possível realizando a criação de novos componentes para a simplificação do código.

## :fire: Executando o projeto

### Requisitos Necessários

- [Node.js](https://nodejs.org/en/) (Foi utilizada a versão 16.17.0 durante o desenvolvimento)
- [npm](https://www.npmjs.com/) (Foi utilizada a versão 8.15.0 durante o desenvolvimento)

**Instalação e execução**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor de desenvolvimento do Nuxt:
$ npm run dev
```

- Após isso, o projeto pode ser acessado a partir da URL http://localhost:3000.

## :up: Deploy

Com a finalidade de realizar testes, foi realizado o deploy deste projeto usando o <a target="_blank" href="https://vercel.com/">Vercel</a>. O mesmo pode ser acessado através da URL: https://compayz-vuejs-test.vercel.app/.

---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
