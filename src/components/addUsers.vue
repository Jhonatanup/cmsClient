<template>
  <div class="form-group">
    <h1>Adicionar novo User</h1>
    <form method="post" accept-charset="utf-8" action="/users/add">
        <fieldset>
            <div class="input email required">
            <label for="email">Email</label>
            <input type="email" name="email" required="required" data-validity-message="This field cannot be left empty" oninvalid="this.setCustomValidity(''); if (!this.value) this.setCustomValidity(this.dataset.validityMessage)" oninput="this.setCustomValidity('')" id="email" maxlength="255"></div>
            <div class="input password required">
            <label for="password">Password</label>
            <input type="password" name="password" required="required" data-validity-message="This field cannot be left empty" oninvalid="this.setCustomValidity(''); if (!this.value) this.setCustomValidity(this.dataset.validityMessage)" oninput="this.setCustomValidity('')" id="password"></div>
        </fieldset>
        <button type="submit">Submit</button>
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
