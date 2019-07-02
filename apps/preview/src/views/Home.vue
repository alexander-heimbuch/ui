<template>
  <div class="home">
    <subscribe></subscribe>
    <feed>
      <episode-entry v-for="episode in episodes" :key="episode.id" :episode="episode"></episode-entry>
    </feed>
  </div>
</template>

<script>
import { mapState } from 'redux-vuex'

import * as select from '../store/selectors'
import { Subscribe, Feed, EpisodeEntry } from '../components'

export default {
  components: {
    Subscribe,
    Feed,
    EpisodeEntry
  },
  data: mapState({
    episodes: select.episodes.latestEpisodes
  })
}
</script>
