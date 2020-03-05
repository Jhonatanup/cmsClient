<template>
  <div class="users">
      <h1>Usuários</h1>
      <a href="#">Adicionar novo usuário </a>
      <table>
    <tr>
        <th>id</th>
        <th>e-mail</th>
        <th>senha</th>
        <th>criado</th>
        <th>modificado</th>
        <th>ações</th>
    </tr>
    <tr>
        <td>
            1
        </td>
        <td>
            jleandroweb@gmail.com
        </td>
        <td>
            **********
        </td>
        <td>
            3/3/20, 2:04 PM
        </td>
        <td>
            11/3/20, 3:10 PM
        </td>
        <td>
            <a href="#">Visualizar </a>
            <a href="#">Editar </a>
            <a href="#">Deletar </a>
        </td>
    </tr>
    <tr>
        <td>
            2
        </td>
        <td>
            james@gmail.com
        </td>
        <td>
            **********
        </td>
        <td>
            3/3/20, 2:04 PM
        </td>
        <td>
            11/3/20, 3:10 PM
        </td>
        <td>
            <a href="#">Visualizar </a>
            <a href="#">Editar </a>
            <a href="#">Deletar </a>
        </td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>

</style>
