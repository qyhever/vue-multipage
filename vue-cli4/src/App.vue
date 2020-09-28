<template>
  <div id="app">
    <div v-for="(item, index) in list" :key="index">
      {{item}}
    </div>
    <button @click="onUpdate">update</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [2, 4, 6, 8]
    }
  },
  methods: {
    onUpdate() {
      // this.list[0] = 1
      // this.$forceUpdate()
      // this.$set(this.list, 0, 1)
      // this.list.splice(0, 1, 1)
      this.list = this.list.map((item, index) => {
        if (index === 0) {
          return 1
        }
        return item
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
