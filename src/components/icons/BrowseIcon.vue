<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
      clip-rule="evenodd"
    />
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
