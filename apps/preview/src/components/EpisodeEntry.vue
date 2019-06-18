<template>
  <article class="episode-entry">
    <header class="header">
      <p class="title">
        <a
          class="cover"
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
      </p>
      <h2 class="news_item-title">
        <a data-news="true" href="https://changelog.com/news/5Ddr/visit">The state of CSS in 2019</a>
      </h2>
    </header>

    <a class="description" href="https://changelog.com/podcast/349">
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
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../theme/variables';

.episode-entry {
  border-bottom: 1px solid $light-grey;
  margin-top: $base-spacing;
  padding: 0 20px $base-spacing;
  position: relative;

  .header {
    a {
      color: $black;

      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  }

  .title {
    align-items: center;
    display: flex;
    font-family: $code;
    font-size: 0.8125em;
    margin: 0 0 10px;
  }

  .cover {
    $size: 24px;
    box-shadow: 0 0 $size rgba($black, 0.2);
    color: $white;
    font-family: $code;
    font-size: 7px;
    font-weight: 700;
    height: $size;
    margin-right: 10px;
    position: relative;
    text-align: center;
    width: $size;
  }
}
</style>
