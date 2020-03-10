<template>
  <div class="jumbotron">
      <p class="lead">Id: {{user.id}}</p>
      <p class="lead">Email: {{user.email}}</p>
      <p class="lead">Created: {{user.created}}</p>
      <p class="lead">Modified: {{user.modified}}</p>
  </div>

</template>

<script>
import axios from 'axios'
// import router from '../router'

export default {
  name: 'viewUsers',
  data () {
    return {
      viewId: 0,
      url: '',
      user: {}
    }
  },
  created () {
    this.viewId = this.$route.params.viewId
  },
  mounted () {
    // 'http://localhost:8765/users/view/' + this.viewId.toString(),
    axios.get('http://localhost:8765/users/view/2', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {
        console.log(res)
        this.user = res.data.user
      })
      .catch(res => {
        console.log(res)
      })
  }
}
</script>
<style scoped>

</style>
