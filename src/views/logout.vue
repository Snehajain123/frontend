<template>
  <div class="log">
    <form @submit.prevent="logout">
      <p>Are you sure you want to logout</p>
      <input class="button" type="submit" value="logout"></form>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
    let token = localStorage.clear("accessToken");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization:  "token " + token},
      body: JSON.stringify({
        title: this.title,
        body: this.body,
      }) 
    };
    const response = await fetch("http://127.0.0.1:8000/logout/", requestOptions);
    if (response["status"] == 401){
      this.$router.push("/login")
      }
    }
  }
}
</script>