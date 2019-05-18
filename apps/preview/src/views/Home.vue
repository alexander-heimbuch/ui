<template>
  <h1>Hello World</h1>
</template>

<script>
export default {
  asyncData({
    store,
    route: {
      params: { id }
    }
  }) {
    console.log('foooo!')
  }
}
</script>

<style></style>
