<template>
  <div>
    <p>this is a Ui demo</p>
    
    <a-date-picker @change="onChange" /> <a-button type="primary">Button</a-button>
  </div>
</template>

<script>

export default {
  name: 'Ui',
  props: {
    msg: String
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
}
</script>

<style scoped>

</style>
