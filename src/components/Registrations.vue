<template>
  <div>
    <h5>{{registrations.length}}</h5>
    <ul>
      <li v-for="registration in registrations">
        {{registration.name}} <button @click="deleteRegister(registration)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      registrations: Array
    },
    methods: {
      deleteRegister(registration) {
        this.$emit('deleteRegister', registration);
      }
    }
  }
</script>
