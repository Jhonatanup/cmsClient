<template>
  <div class="jumbotron">
      <h1 class="display-3">{{article.title}}</h1>
      <p class="lead">{{article.body}}</p>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'view',
  id: {

  },
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    axios.get('http://localhost:8765/articles/view/Lorem-Ipsum', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data)
        this.article = res.data.article
      })
      .catch(res => {
        console.log(res)
      })
  }
}
</script>
<style scoped>

</style>
