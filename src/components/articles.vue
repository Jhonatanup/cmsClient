<template>
  <div class="articles">
      <h1>Artigos</h1>
      <button type="button" class="btn btn-primary btn-lg">Fazer um novo artigo </button>
      <p></p>
      <table class="table table-hover">
    <tr>
        <th>Título</th>
        <th>Criado</th>
        <th></th>
        <th></th>
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
