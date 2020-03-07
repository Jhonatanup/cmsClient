<template>
  <div class="users">
      <h1>Usuários</h1>
      <button type="button" class="btn btn-primary btn-lg">Adicionar novo usuário </button>
      <p></p>
      <table class="table table-hover">
    <tr>
        <th>id</th>
        <th>e-mail</th>
        <th>senha</th>
        <th>criado</th>
        <th>modificado</th>
        <th>ações</th>
    </tr>
    <tr v-for="r in users" :key="r">
        <td>
            {{r.id}}
        </td>
        <td>
            {{r.email}}
        </td>
        <td>
            **********
        </td>
        <td>
            {{r.created}}
        </td>
        <td>
            {{r.modified}}
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
import axios from 'axios'

export default {
  name: 'users',
  id: {

  },
  data () {
    return {
      users: {}
    }
  },
  mounted () {
    axios.get('http://localhost:8765/users', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        // this.users = res.data.articles
        this.users = res.data.users
      })
  }
}
</script>
<style scoped>

</style>
