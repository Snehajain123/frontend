<template>
  <div class="status">
    <h1>{{ status.title }}</h1>
    <article class="card">
      <h2>{{ status.body }}</h2>
      <h2>Auther:{{ status.owner }}</h2>
      <router-link :to="`/updateStatus/${status.id}`" class="button">update</router-link>
      <router-link :to="`/deleteStatus/${status.id}`" class="button">Delete</router-link>
    </article>
  </div>
</template>
<script>
export default {
name: 'Status',
  data () {
    return {
      status: {},
    }
  },
  async mounted() {
    let token = localStorage.getItem("accessToken");
    const requestOptionsget = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization:  "token " + token},
    }
    const id = this.$route.params.id
    const url = 'http://127.0.0.1:8000/status/'+ id + '/'
    const response1 = await fetch(url, requestOptionsget);  
    const data = await response1.json();
    this.status = data
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
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>