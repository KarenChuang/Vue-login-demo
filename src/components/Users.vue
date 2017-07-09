<template>
  <div class="card">
    <h4>Register here</h4>
    <hr>
    <ul>
      <li v-for="user in users">
        {{user.name}} <button @click="join(user)">join us</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      users() {
        return this.$store.getters.unregisteredUsers
      },
    },
    methods: {
      join (user) {
        // mutation payload
        this.$store.commit('register', user.id)
      }
    },
  }
</script>