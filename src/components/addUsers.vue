<template>
  <div class="form-group">
    <h3>Adicionar novo User</h3>
    <form method="post" accept-charset="utf-8">
        <fieldset>
            <div class="input email required">
            <label for="email">Email</label>
            <input type="email" name="email" required="required" data-validity-message="Esse campo não pode estar vazio" oninvalid="this.setCustomValidity(''); if (!this.value) this.setCustomValidity(this.dataset.validityMessage)" oninput="this.setCustomValidity('')" id="email" maxlength="255"></div>
            <div class="input password required">
            <label for="password">Password</label>
            <input type="password" name="password" required="required" data-validity-message="Esse campo não pode estar vazio" oninvalid="this.setCustomValidity(''); if (!this.value) this.setCustomValidity(this.dataset.validityMessage)" oninput="this.setCustomValidity('')" id="password"></div>
        </fieldset>
        <button type="submit" v-on:click="add">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addUsers',
  id: {

  },
  data () {
    return {
      articles: {}
    }
  },
  methods: {
    add (event) {
      event.preventDefault()
      const qs = require('querystring')
      const requestBody = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.post('http://localhost:8765/users/add', qs.stringify(requestBody), config)
        .then((result) => {
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
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
.form-group{
  margin-left: auto;
  margin-right: auto;
}
</style>
