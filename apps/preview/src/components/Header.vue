<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="navigation-wrapper">
        <nav class="navigation">
          <router-link to="/" exact class="navigation-link">
            Home
          </router-link>
          <router-link to="/episodes" exact class="navigation-link">
            Episodes
          </router-link>
          <router-link to="/subscribe" exact class="navigation-link">
            Subscribe
          </router-link>
          <router-link to="/about" exact class="navigation-link">
            About
          </router-link>
        </nav>
      </div>

      <div class="search-wrapper">
        <input type="text" class="search-input" placeholder="Search" />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../theme/mixins';
@import '../theme/variables';

.header {
  display: flex;
  width: 100%;
  border-bottom: 1px solid v(border);
  height: $header-height;
  padding: 13px 35px;
}

.header-wrapper {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1217px;
}

.navigation-wrapper {
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  width: 80%;
}

.search-wrapper {
  width: 20%;

  .search-input {
    background: rgba(16, 24, 32, 0.05);
    border: none;
    color: #101820;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    line-height: 1;
    min-width: 160px;
    padding: 10px;
  }
}

.navigation {
  padding: 10px;
  font-size: 1.1em;
  flex: 1 0 auto;
  flex-wrap: wrap;

  .navigation-link {
    margin: 0 10px;
    padding: 4px 4px;
    color: v(nav-color);
    position: relative;
  }

  .navigation-link:hover,
  .router-link-active {
    color: v(color);

    &:before {
      position: absolute;
      right: 0;
      bottom: -2px;
      left: 0;
      content: '';
      background: #e6e5e6;
      height: 3px;
      width: 100%;
    }
  }
}
</style>
