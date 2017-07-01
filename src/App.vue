<template>
  <div id="app">
    <users></users>
    <registrations></registrations>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import Registrations from './components/Registrations.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    unregisteredUsers() {
      return this.usersList.filter((user) => {
        return !user.registered
      })
    }
  },
  components: {
    Users,
    Registrations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card {
  text-align: left;
  width: 300px;
  height: 400px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #999;
  margin-right: 20px;
  padding: 10px;
}
</style>
