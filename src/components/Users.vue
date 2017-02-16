<template>
  <div class="card">
    <ul>
      <li v-for="user in users">
        {{user.name}} <button @click="join(user)">join us</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      users: Array,
    },
    methods: {
      join (user) {
        this.$emit('add', user);
        user.registered = true;
      }
    },
  };
</script>