<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>vuex demo </h1>
    <users :users="unregisteredUsers" @add="add"></users>
    <hr>
    <registrations :registrations="registrationsList" @deleteRegister="deleteRegister"></registrations>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import Registrations from './components/Registrations.vue'

export default {
  name: 'app',
  data () {
    return {
      usersList: [
        {
          name: 'Max', age: 11, id: 1, registered: false
        },
        {
          name: 'Mary', age: 15, id: 2, registered: false
        },
        {
          name: 'Karen', age: 21, id: 3, registered: false
        },
        {
          name: 'Davies', age: 21, id: 4, registered: false
        },

      ],
      registrationsList: []
    }
  },
  computed: {
    unregisteredUsers() {
      return this.usersList.filter((user) => {
        return !user.registered
      })
    }
  },
  methods: {
    add(user) {
      this.registrationsList.push(user)
    },
    deleteRegister(registration) {
      const user = this.usersList.find((item) => {
        return item.id === registration.id
      })
      user.registered = false
      this.registrationsList.splice(this.registrationsList.indexOf(registration), 1)
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
  margin-top: 60px;
}

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
