<template>
  <div>
    <hero :episode="episode"></hero>
    <div class="mx-auto max-w-4xl container px-4 pt-4">
      <div class="container py-8 text font-light leading-relaxed text-lg">
        {{ episode.description }}
      </div>
      <info :episode="episode" class=""></info>
      <hr class=" border-b border-gray-300" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'redux-vuex'
import * as select from '~/store/selectors'

import { Hero, Info } from '~/components/episode'

export default {
  components: { Hero, Info },
  data: mapState({
    episode: select.currentEpisode
  })
}
</script>

<style></style>
