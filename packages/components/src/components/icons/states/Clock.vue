<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 20">
    <circle fill="none" :stroke="color" stroke-width="1.1" cx="10" cy="10" r="9"></circle>
    <rect x="9" y="4" width="1" height="7"></rect>
    <path fill="none" :stroke="color" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"></path>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
