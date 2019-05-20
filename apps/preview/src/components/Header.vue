<template>
  <header class="header">
    <nav class="navigation">
      <router-link to="/" exact class="navigation-link">Home</router-link>
      <router-link to="/episodes" exact class="navigation-link">Episodes</router-link>
      <router-link to="/subscribe" exact class="navigation-link">Subscribe</router-link>
      <router-link to="/about" exact class="navigation-link">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: center;
}

.navigation {
  padding: 10px;
  font-size: 1.1em;
  color: #878b8f;

  .navigation-link {
    margin: 0 10px;
    padding: 6px 0 4px;
  }
}
</style>
