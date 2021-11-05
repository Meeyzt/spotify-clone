<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M21.57 12L5.98 3v18l15.59-9z"/>
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
