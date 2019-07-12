<template>
  <div class="home">
    <subscribe></subscribe>
    <feed>
      <entry v-for="episode in episodes" :key="episode.id" :episode="episode"></entry>
    </feed>
  </div>
</template>

<script>
import { mapState } from 'redux-vuex'

import * as select from '../store/selectors'
import { Subscribe, Feed, Entry } from '../components/home'

export default {
  components: {
    Subscribe,
    Feed,
    Entry
  },
  data: mapState({
    episodes: select.latestEpisodes
  })
}
</script>
