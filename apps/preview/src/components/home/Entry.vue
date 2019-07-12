<template>
  <article class="flex max-w-3xl border-gray-300 border-b py-8">
    <div class="mr-4 mt-4">
      <!-- <router-link  -->
      <a
        class="block cover"
        href="https://changelog.com/news/5Ddr/visit"
        title="The state of CSS in 2019"
      >
        <img
          class="rounded shadow-md"
          alt="The Changelog"
          :src="episode.cover"
          data-loaded="true"
        />
      </a>
    </div>
    <div class="max-w-full">
      <header class="mb-4">
        <p class="font-mono text-xs">
          <a href="/podcast/349" :title="episode.podcast.title">{{ episode.podcast.title }}</a>
        </p>
        <h2 class="text-xl font-extrabold">
          <router-link :to="{ name: 'episode', params: { id: episode.id } }">
            {{ episode.title }}
          </router-link>
        </h2>
      </header>

      <a class="block w-full text-sm leading-snug mb-4" href="https://changelog.com/podcast/349">{{
        episode.description
      }}</a>

      <div class="flex">
        <div v-if="episode.contributors" class="flex leading-loose mr-2">
          <a
            v-for="contributor in episode.contributors"
            :key="contributor.id"
            :href="contributor.url"
            :title="contributor.name"
            class="w-8 mr-2"
          >
            <img alt="Featuring Sacha Greif" :src="contributor.image" />
          </a>
        </div>
        <div class="leading-loose font-mono text-sm">
          <a href="https://changelog.com/news/o298/visit" :title="episode.published">
            {{ publishedDistance }}
          </a>
          ∘
          <a href="https://changelog.com/news/o298/visit" :title="episode.duration">
            {{ episode.duration }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'

export default {
  props: {
    episode: {
      type: Object,
      default: () => ({
        cover: null,
        title: null,
        podcast: {},
        description: null,
        contributos: null,
        duration: null
      })
    }
  },
  computed: {
    publishedDistance() {
      return distanceInWordsToNow(new Date(this.episode.published))
    }
  }
}
</script>

<style lang="postcss" scoped>
.cover {
  width: 50px;
}
</style>
