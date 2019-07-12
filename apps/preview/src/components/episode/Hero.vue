<template>
  <div class="w-full bg-gray-100 justify-center flex items-center py-10">
    <div class="container flex items-center flex-col">
      <img :src="episode.cover" class="w-48 rounded shadow-md mb-2" />
      <h3 class="font-mono text-sm text-gray-500 mb-4">
        {{ episode.podcast.title }}
      </h3>
      <h1 class="text-2xl">
        {{ episode.title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      default: () => ({
        cover: null,
        title: null,
        podcast: {}
      })
    }
  }
}
</script>
