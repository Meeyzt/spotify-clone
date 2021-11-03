<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"/>
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
