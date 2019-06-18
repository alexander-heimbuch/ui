<template>
  <div class="home">
    <subscribe></subscribe>
    <feed>
      <episode-entry></episode-entry>
    </feed>
  </div>
</template>

<script>
import { Subscribe, Feed, EpisodeEntry } from '../components'

export default {
  components: {
    Subscribe,
    Feed,
    EpisodeEntry
  }
}
</script>
