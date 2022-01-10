<template>
  <div id="app">
    <div id="nav">
      <router-link to="/statusupload">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/logout">Logout</router-link>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
  @import url('<https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css>');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    background-color: black;
    color: #555555;
  }

  #nav a {
    color: blue;
    text-decoration: none;
    display: inline-block;
    padding: .5rem;
  }

  #nav a:hover {
    text-decoration: underline;
  }

  .content-wrapper {
    max-width: 840px;
    margin: 42px auto;
    padding: 21px;
  }

  a {
    text-decoration: none;
  }
</style>