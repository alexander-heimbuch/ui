<template>
  <div class="feed-wrapper">
    <div class="feed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../theme/variables';

.feed-wrapper {
  display: flex;
  justify-content: center;
  margin-top: $base-spacing;
  margin-bottom: $base-spacing * 2;
}

.feed {
  width: $desktop;
}
</style>
