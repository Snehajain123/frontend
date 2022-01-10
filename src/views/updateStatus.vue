<template>
  <div>
    <h3>Update your status</h3>
    <form @submit.prevent="submitStatus">
      <label>Title</label><br>
        <input id="title" v-model="title" maxlength="100"><br>
        <label>Description</label><br>
        <textarea id="description" v-model="body"></textarea><br>
        <input class="button" type="submit" value="Submit">
    </form>
  </div>
</template>
<script>
export default {
name: 'Status',
  data() {
    return {
      status: {},
      title: {},
      body: {},
     }
   },  
  methods: {
    async submitStatus() {
    let token = localStorage.getItem("accessToken");
    const requestOptionsget = {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization:  "token " + token},
      body: JSON.stringify({
        title: this.title,
        body: this.body,
      }) 
    }
    const id = this.$route.params.id
    const url = 'http://127.0.0.1:8000/status/'+ id + '/'
    const response1 = await fetch(url, requestOptionsget);  
    const data = await response1.json();
    this.status = data
    if(response1["status"] == 200){
      this.$router.push("/statusupload")
    }
    }
  }
}
</script>

<style>
.card {
   background-color: white;
   padding: 50px;
   margin-top: 50px;
   margin-left:200px;
   margin-right:200px;
   text-align: left;
   text-deccoration: none;
}
.card a {
  text-decoration: none;
}
</style>