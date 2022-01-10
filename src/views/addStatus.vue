<template>
  <div>
    <h3>Upload your status</h3>
    <form @submit.prevent="submitStatus">
      <label>Title</label><br>
      <input id="title" v-model="title" maxlength="100"><br>
      <label>Description</label><br>
      <textarea id="description" v-model="body"></textarea><br>
      <input class="button" type="submit" value="Submit">
    </form>
  <div v-if="showError">error 400 user already exists</div>
  </div>
</template>
<script>
export default {
  name: "addStatus",
  data() {
    return {
      title: '',
      body: '',
      showError: false,
    }
  },  
  methods: {
    async submitStatus() {
      let token = localStorage.getItem("accessToken");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization:  "token " + token},
        body: JSON.stringify({
          title: this.title,
          body: this.body,
        }) 
      };
      const response = await fetch("http://127.0.0.1:8000/status/", requestOptions);
      if (response["status"] == 201){
        this.$router.push("/statusupload")
      }
      console.log(token)
      console.log(response)
    }
  }
}
</script>