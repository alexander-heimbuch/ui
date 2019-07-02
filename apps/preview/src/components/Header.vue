<template>
  <header class="flex w-full justify-center h-12 border-gray-300 border-b">
    <div class="flex max-w-2xl">
      <div class="flex items-center mr-32">
        <nav class="text-gray-600 font-light">
          <router-link to="/" exact class="text-sm mx-2 py-1">Home</router-link>
          <router-link to="/episodes" exact class="text-sm mx-2 py-1">Episodes</router-link>
          <router-link to="/subscribe" exact class="text-sm mx-2 py-1">Subscribe</router-link>
          <router-link to="/about" exact class="text-sm mx-2 py-1">About</router-link>
        </nav>
      </div>

      <div class="flex items-center">
        <input
          type="text"
          class="text-gray-600 bg-gray-200 font-light border border-gray-300 rounded-sm p-1 text-sm"
          placeholder="Search"
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.router-link-active {
  font-weight: 500;
  border-bottom: 3px solid #e2e8f0;
}
</style>
