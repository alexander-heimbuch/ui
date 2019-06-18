<template>
  <article class="episode_entry">
    <header class="episode_entry-header">
      <p class="episode_entry-source">
        <a
          class="episode_entry-source-image episode_entry-source-image--episode"
          data-news="true"
          href="https://changelog.com/news/5Ddr/visit"
          title="The state of CSS in 2019"
        >
          <img
            alt="The Changelog"
            class="lazy"
            data-src="https://cdn.changelog.com/uploads/covers/the-changelog-small.png?v=63725770322"
            src="https://cdn.changelog.com/uploads/covers/the-changelog-small.png?v=63725770322"
            style="background-color: #121921"
            data-loaded="true"
          >
        </a>
        <a data-news="true" href="/podcast/349" title="The Changelog #349">The Changelog #349</a>
        &nbsp;–&nbsp;Pinned
      </p>
      <h2 class="news_item-title">
        <a data-news="true" href="https://changelog.com/news/5Ddr/visit">The state of CSS in 2019</a>
      </h2>
    </header>

    <a class="news_item-description" data-news="true" href="https://changelog.com/podcast/349">
      <p>We’re talking with Sacha Greif to discuss the State of CSS survey and results. CSS is evolving faster than ever. And, coming off the heels of their annual State of JavaScript survey, they’ve decided to take on the world of styles and selectors to help identify the latests patterns and trends in CSS. We talk through the history and motivations of this survey, the methodology of their data collection, the tooling involved to build and run the survey, and of course we dig deep into the survey results and talk through the insights we found most interesting.</p>
      <p class="news_item-description-continue">
        <span>read more</span>
      </p>
    </a>
    <div class="news_item-toolbar">
      <a
        class="news_item-toolbar-play_button"
        data-play="/podcast/349/play"
        href="https://cdn.changelog.com/uploads/podcast/349/the-changelog-349.mp3"
        role="button"
        title="Play Episode"
      >
        <span>Play</span>
      </a>
      <div class="news_item-toolbar-item news_item-toolbar-meta">
        <span class="news_item-toolbar-meta-item news_item-toolbar-meta-item__featuring">
          <a href="http://sachagreif.com" title="Sacha Greif">
            <img
              alt="Featuring Sacha Greif"
              class="lazy"
              data-src="https://cdn.changelog.com/uploads/avatars/people/YNg/avatar_small.png?v=63727757100"
              src="https://cdn.changelog.com/uploads/avatars/people/YNg/avatar_small.png?v=63727757100"
              data-loaded="true"
            >
          </a>
          <a href="https://adamstacoviak.com/" title="Adam Stacoviak">
            <img
              alt="Featuring Adam Stacoviak"
              class="lazy"
              data-src="https://cdn.changelog.com/uploads/avatars/people/Qo/avatar_small.png?v=63680484054"
              src="https://cdn.changelog.com/uploads/avatars/people/Qo/avatar_small.png?v=63680484054"
              data-loaded="true"
            >
          </a>
          <a href="https://jerodsanto.net" title="Jerod Santo">
            <img
              alt="Featuring Jerod Santo"
              class="lazy"
              data-src="https://secure.gravatar.com/avatar/d63705fb0197936da304756dd7fea127.jpg?s=150&amp;d=mm"
              src="https://secure.gravatar.com/avatar/d63705fb0197936da304756dd7fea127.jpg?s=150&amp;d=mm"
              data-loaded="true"
            >
          </a>
        </span>

        <span class="news_item-toolbar-meta-item">
          <a
            data-news="true"
            href="https://changelog.com/podcast/349"
            title="10:07 PM Central European Summer Time – Friday, June 14"
          >
            <span class data-style="relativeShort">3d</span>
          </a>
        </span>

        <span class="news_item-toolbar-meta-item">
          <a href="/news/the-state-of-css-in-2019-5Ddr">discuss</a>
        </span>

        <span class="news_item-toolbar-meta-item">
          <a href="/topic/oss" title="View Open Source">#oss</a>

          <span class="has-tooltip">+2</span>
          <div
            class="tooltip tooltip--topics"
            x-placement="top"
            style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(417px, 111px, 0px);"
          >
            <div class="tooltip-arrow"></div>
            <div class="tooltip-wrap">
              <ul class="tooltip-list">
                <li>
                  <a href="/topic/css" title="View CSS">#css</a>
                </li>
                <li>
                  <a href="/topic/javascript" title="View JavaScript">#javascript</a>
                </li>
              </ul>
            </div>
          </div>
          <span></span>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../theme/variables';

.episode-entry {
  border-bottom: 1px solid $light-grey;
  margin-top: $base-spacing;
  padding: 0 20px $base-spacing;
  position: relative;
}
</style>
