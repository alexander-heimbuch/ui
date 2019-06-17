<!-- borrowed from Nuxt! -->
<template>
  <transition name="progress">
    <div
      v-if="visible"
      class="progress"
      :style="{
        width: percent + '%',
        'background-color': failed ? '#ff0000' : '#ffca2b'
      }"
    ></div>
  </transition>
</template>

<script>
import { mapState } from 'redux-vuex'
import * as select from '../store/selectors'

export default {
  data: mapState({
    percent: select.progressbarProgress,
    visible: select.progressbarVisible,
    failed: select.progressbarFailed
  })
}
</script>

<style lang="scss" scoped>
.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
}

.progress-enter-active, .progress-leave-active {
  transition: opacity 0.5s;
}
.progress-enter, .progress-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
