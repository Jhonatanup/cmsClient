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
    <tr v-for="r in articles" :key="r">
        <td>
            {{r.title}}
        </td>
        <td>
            {{r.created}}
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
import axios from 'axios'

export default {
  name: 'articles',
  id: {

  },
  data () {
    return {
      articles: {}
    }
  },
  mounted () {
    axios.get('http://localhost:8765/articles', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        this.articles = res.data.articles
      })
  }
}
</script>
<style scoped>

</style>
