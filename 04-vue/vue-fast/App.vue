<template>
  <div>
    <p>name: {{ person.name }}</p>
    <p>name: {{ person.age }}</p>
    <p>sex: {{ person.sex }}</p>
    <p>arr: {{ person.arr[0] }}</p>
    <button @click="handle">test</button>
  </div>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      person: {
        name: 'lxq',
        age: 500,
        arr: ['arr1', 'arr2']
      }
    }
  },
  methods: {
    handle() {
    }
  },
}
</script>

<style lang='scss' scoped>

</style>
