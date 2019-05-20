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
      type: 'SET_TITLE',
      payload: '123456'
    })
  }
}
</script>

<style></style>
