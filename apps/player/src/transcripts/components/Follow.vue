<template>
  <button @click="toggleFollow()">
    <svg
      width="85"
      height="25"
      viewBox="0 0 85 25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <rect id="color-path" x="0" y="0" width="85" height="25" rx="12.5"></rect>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g>
          <use :fill="backgroundColor" fill-rule="evenodd" xlink:href="#color-path"></use>
          <rect :stroke="borderColor" stroke-width="1" x="0.5" y="0.5" width="84" height="24" rx="12"></rect>
        </g>
        <text font-size="12" font-weight="normal" line-spacing="20" :fill="textColor" class="follow-text">
          <tspan x="23.4375" y="17">{{ $t('TRANSCRIPTS.FOLLOW') }}</tspan>
        </text>
        <polygon :fill="textColor" points="11 8 18 12.0413943 11 16.0827887"></polygon>
      </g>
    </svg>
  </button>
</template>

<script>
import { mapState } from 'redux-vuex'
import { followTranscripts } from '@podlove/player-actions/transcripts'
import store from 'store'

import select from 'store/selectors'

export default {
  data: mapState({
    follow: select.transcripts.follow,
    style: select.styles.button
  }),
  methods: {
    toggleFollow () {
      store.dispatch(followTranscripts(!this.follow))
    }
  },
  computed: {
    textColor () {
      if (this.follow) {
        return this.style.color
      }

      return this.style.background
    },

    borderColor () {
      return this.style.background
    },

    backgroundColor () {
      if (this.follow) {
        return this.style.background
      }

      return 'transparent'
    }
  }
}
</script>

<style lang="scss" scoped>
.follow-text {
  text-transform: uppercase;
}
</style>
