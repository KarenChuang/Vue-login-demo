<template>
  <div class="card">
    <h4>Registrations</h4>
    <h5>total: {{total}}</h5>
    <hr>
    <ul>
      <li v-for="registration in registrations">
        {{registration.name}} <button @click="deleteRegister(registration)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        registrations: 'registrations',
        total: 'totalRegistrations'
      }),

    },
    methods: {
      deleteRegister(registration) {
        this.$store.commit({
          type: 'unregister',
          id: registration.id
        })
      }
    }
  }
</script>
