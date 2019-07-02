<template>
  <div id="app">
    <header-component />
    <progressbar-component />
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import { Header as HeaderComponent } from './components'
import { ProgressBar as ProgressbarComponent } from './components'

export default {
  components: {
    HeaderComponent,
    ProgressbarComponent
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
