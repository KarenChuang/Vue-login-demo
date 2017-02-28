<template>
  <div class="card">
    <ul>
      <li v-for="user in unregisteredUsers">
        {{user.name}} <button @click="join(user)">join us</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    // props: {
    //   users: Array,
    // },
    computed: {
      users() {
        return this.$store.state.usersList
      },
      unregisteredUsers() {
        return this.users.filter((user) => {
          return !user.registered
        })
      }
    },
    methods: {
      join (user) {
        user.registered = true
        this.$store.state.registrationsList.push(user)
        // this.$emit('add', user)
      }
    },
  };
</script>