<template>
  <article class="flex max-w-3xl border-gray-300 border-b py-8">
    <div class="mr-4 mt-4">
      <!-- <router-link  -->
      <a
        class="block cover"
        href="https://changelog.com/news/5Ddr/visit"
        title="The state of CSS in 2019"
      >
        <img class="rounded shadow-md" alt="The Changelog" :src="cover" data-loaded="true" />
      </a>
    </div>
    <div class="max-w-full">
      <header class="mb-4">
        <p class="font-mono text-xs">
          <a href="/podcast/349" :title="podcast">{{ podcast }}</a>
        </p>
        <h2 class="text-xl font-extrabold">
          <a href="https://changelog.com/news/5Ddr/visit">{{ title }}</a>
        </h2>
      </header>

      <a
        class="block w-full text-sm leading-snug mb-4"
        href="https://changelog.com/podcast/349"
      >{{ description }}</a>

      <div class="flex">
        <div v-if="contributors" class="flex leading-loose mr-2">
          <a
            v-for="contributor in contributors"
            :key="contributor.id"
            :href="contributor.url"
            :title="contributor.name"
            class="w-8 mr-2"
          >
            <img alt="Featuring Sacha Greif" :src="contributor.image" />
          </a>
        </div>
        <div class="leading-loose font-mono text-sm">
          <a href="https://changelog.com/news/o298/visit" :title="published">
            {{ publishedDistance }}
          </a>
          ∘
          <a href="https://changelog.com/news/o298/visit" :title="duration">
            {{ duration }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'
import { selectors } from '../store/reducers/episodes'

export default {
  props: {
    episode: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    cover() {
      return selectors.cover(this.episode)
    },
    title() {
      return selectors.title(this.episode)
    },
    podcast() {
      return selectors.podcastTitle(this.episode)
    },
    description() {
      return selectors.description(this.episode)
    },
    contributors() {
      return selectors.contributors(this.episode)
    },
    publishedDistance() {
      return distanceInWordsToNow(new Date(selectors.published(this.episode)))
    },
    published() {
      return new Date(selectors.published(this.episode)).toDateString()
    },
    duration() {
      return selectors.duration(this.episode)
    }
  }
}
</script>

<style lang="postcss" scoped>
.cover {
  width: 50px;
}
</style>
