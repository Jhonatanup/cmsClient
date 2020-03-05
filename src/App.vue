<template>
  <div id="app">
    <nav>
      <router-link to="/articles">Articles</router-link> |
      <router-link to="/users">Users</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
