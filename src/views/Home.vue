<template>
  <div class="row" v-if="showStatus"> 
    <div class="header">
      <router-link :to="`/addStatus/`">
        <div class="icon" id="plus"></div>
      </router-link>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
          </tr>
        </table>
    </div>
    <div v-for="status in statuss" v-bind:key="status.id">
      <table>
        <router-link :to="`/status/${status.id}`">
          <tr>
            <th>{{ status.id }}</th>
            <th v-if="status.title.length<30">{{ status.title}}</th>
            <th v-else>{{ status.title.substring(0,30)+"..." }}</th>
            <th v-if="status.body.length<120">{{ status.body }}</th>
            <th v-else>{{ status.body.substring(0,120)+"...continue reading" }}</th>
            <th>{{ status.owner}}</th>
          </tr>
        </router-link>
      </table>
    </div>
  </div>    
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      statuss: [],
      status: null,
      showStatus: false,
    }
  },  
  async mounted() {
    let token = localStorage.getItem("accessToken");
    const requestOptionsget = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization:  "token " + token},
    }
    const response1 = await fetch("http://127.0.0.1:8000/status/", requestOptionsget);  
    const data = await response1.json();
    this.statuss = data
    this.showStatus=true
    console.log(data)
  }
}
</script>
<style>
#title {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
#description {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.header {
  padding: 10px;
  font-size: 20px;
  text-align: left;
  background: #f1f1f1;
  margin-left: 10px;
  margin-right: 10px;
}
.icon:before {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
  font-size: 30px;
  color: black;
  background-color: pink;
}
#plus:before {
  content: '+';
}
</style>