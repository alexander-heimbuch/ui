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
    store.dispatch({
      type: 'FETCH_EPISODES'
    })
  }
}
</script>

<style></style>
