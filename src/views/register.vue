<template>
    <form @submit.prevent="submitForm">
      <label>Username:</label>
      <input type="text" id="name" v-model="username">
      <label>Email:</label>
      <input type="email" id="email" v-model="email">
      <label>Password:</label>
      <input type="password" id="password" v-model="password">
      <button type="submit"> Submit</button>
    </form>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
        email: '',
        username: '',
        password: '',
    }
  },
  methods:{
  submitForm () { 
  console.log('form sumbitted')
  console.log(this.username, this.email, this.password)
  this.email = null;
  this.username = null;
  this.password = null;
  }

}
}
</script>
