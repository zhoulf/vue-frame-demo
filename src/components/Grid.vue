<template>
  <div class="hello">
    <table>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>4</td>
    </table>
  </div>
</template>

<script>
export default {
  name: 'grid',
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
