<template>
  <div class="articles">
      <h1>Artigos</h1>
      <a href="#">Fazer um novo artigo </a>
      <table>
    <tr>
        <th>Título</th>
        <th>Criado</th>
    </tr>
    <tr>
        <td>
            Blablablabla
        </td>
        <td>
            20/02/2020
        </td>
        <td>
            <a href="#">Editar </a>
            <a href="#">Deletar </a>
        </td>
    </tr>
    <tr>
        <td>
            Blablablabla
        </td>
        <td>
            20/02/2020
        </td>
        <td>
            <a href="#">Editar </a>
            <a href="#">Deletar </a>
        </td>
    </tr>
    <tr>
        <td>
            Blablablabla
        </td>
        <td>
            20/02/2020
        </td>
        <td>
            <a href="#">Editar </a>
            <a href="#">Deletar </a>
        </td>
    </tr>
  </table>
  </div>

</template>

<script>
export default {
  name: 'articles',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>

</style>
