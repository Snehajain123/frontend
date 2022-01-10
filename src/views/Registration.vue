<template>
  <div v-if="!uploadPage">
    <form @submit.prevent="submitForm">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="text" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Submit</button>
    </form>
    <div v-if="showError">error 400 user already exists</div>
  </div>
  <div v-else>you are registered successfully<br>
    <router-link :to="`/login`">login</router-link>
  </div>
</template>

<script>
export default {
name: 'Registeration',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      uploadPage: false,
      showError: false,
    }
  },
  methods: {
    async submitForm() {
      const res = await fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
        }) 
      });
      if (res["status"] == 201){
        this.$router.push("/login")
      }
      if(res["status"] == 400){
        this.showError=true
      }
    } 
  }
}
</script>
