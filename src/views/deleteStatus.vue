<template>
  <div>
    <form @submit.prevent="deleteStatus">
      <p>Are you sure you want to delete</p>
      <input class="button" type="submit" value="delete">
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    async deleteStatus() {
      let token = localStorage.getItem("accessToken");
      const requestOptionsget = {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization:  "token " + token},
      }
      const id = this.$route.params.id
      const url = 'http://127.0.0.1:8000/status/'+ id + '/'
      const response1 = await fetch(url, requestOptionsget);  
      const data = await response1.json();
      this.status = data
      if(response1["status"] == 404){
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