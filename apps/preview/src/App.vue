<template>
  <div id="app">
    <header-component />
    <main>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import './theme/globals';
</style>
