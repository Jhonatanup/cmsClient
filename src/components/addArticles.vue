<template>
  <div class="addArticles">
      <h1>Adicionar novo post</h1>
        <form action="" method="post">
            <label for="title">Título</label>
            <input type="text" placeholder="título do post">
            <label for="text">Texto do post</label>
            <input type="text" placeholder="texto do post">
            <label for="tags">Deseja adicionar alguma dessas tags?</label>
            <input type="text" name="" id="">
            <label for="tagstring">Deseja criar uma nova tag? Digite-a</label>
            <input type="text" name="tagstring" id="">
            <button type="submit">Adicionar</button>
        </form>
  </div>
</template>

<script>
/*
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
    axios.post('http://localhost:8765/articles', {
      headers: {
        'Accept': 'application/json'
      },
      data: {
        email: 'geilson@gmail.com ',
        password: '123456'
      }
    })
      .then(res => {
        console.log(res)
      })
  }
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
