<template>
  <div>
    <form  @submit.prevent="submit">
      <label for="username">Username:</label>
      <input  type="text" name="username" v-model="username" />
      <label for="password">Password:</label>
      <input  type="password" name="password" v-model="password" />
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {    
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      }
    },
  methods: {
    async submit() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        username: this.username,
        password: this.password
        }) 
      };
      const response = await fetch("http://127.0.0.1:8000/login/", requestOptions);
      const data = await response.json();
      localStorage.setItem("accessToken", data["token"])
      console.log(data["token"])
      console.log(response)
      if (response["status"] == 200){
        this.$router.push("/statusupload")
      }
    }
  }
}
</script>
<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>