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
    percent: select.progressbar.progress,
    visible: select.progressbar.visible,
    failed: select.progressbar.failed
  })
}
</script>
