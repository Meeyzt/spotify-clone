<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M3 6l5 5.794L13 6z"/>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },

    height: {
      type: Number,
      default: 24,
    },
  },
};
</script>
