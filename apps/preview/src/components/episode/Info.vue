<template>
  <div class="text-sm">
    <span>{{ $t('EPISODE.DURATION', { duration }) }}</span>
    <!-- 51 minutes
Jun 28, 2019
Download (73MB) -->
  </div>
</template>

<script>
import { compose } from 'ramda'
import { toPlayerTime, calcMinutes } from '@podlove/utils/time'

const minutes = compose(
  calcMinutes,
  toPlayerTime
)

export default {
  props: {
    episode: {
      type: Object,
      default: () => ({
        duration: null
      })
    }
  },

  computed: {
    duration() {
      return minutes(this.episode.duration)
    }
  }
}
</script>

<style></style>
