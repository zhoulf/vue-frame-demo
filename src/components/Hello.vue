<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      基于Vue的项目实践
    </p>
    
    <h3>demos</h3>
    <ul>
      <li><router-link to="/grid">表格组件</router-link></li>
      <li><router-link to="/chart">图形组件</router-link></li>
      <li><router-link to="/ui">UI组件</router-link></li>
      <li><router-link to="/monitor">实时监控</router-link></li>
      <li><router-link to="/tree">树形控件</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
