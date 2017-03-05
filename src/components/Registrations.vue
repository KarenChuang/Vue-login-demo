<template>
  <div>
    <h5>total: {{total}}</h5>
    <ul>
      <li v-for="registration in registrations">
        {{registration.name}} <button @click="deleteRegister(registration)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    // props: {
    //   registrations: Array
    // },
    computed: {
      registrations() {
        return this.$store.getters.registrations
      },
      total() {
        return this.$store.getters.totalRegistrations
      }
    },
    methods: {
      deleteRegister(registration) {
        // this.$emit('deleteRegister', registration)
      const user = this.$store.state.usersList.find((item) => {
        return item.id === registration.id
      })
      user.registered = false
      this.$store.state.registrationsList.splice(this.$store.state.registrationsList.indexOf(registration), 1)

      }
    }
  }
</script>
