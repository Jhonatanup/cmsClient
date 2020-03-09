<template>
  <div class="jumbotron">
      <h1 class="display-3">{{article.title}}</h1>
      <p class="lead">{{article.body}}</p>
  </div>

</template>

<script>
import axios from 'axios'
// import router from '../router'

export default {
  name: 'view',
  data () {
    return {
      viewId: 0,
      url: '',
      article: {}
    }
  },
  created () {
    this.viewId = this.$route.params.viewId
    this.url = 'http://localhost:8765/articles/view/' + this.viewId.toString()
  },
  mounted () {
    axios.get('http://localhost:8765/articles/view/' + this.viewId.toString(), {
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
