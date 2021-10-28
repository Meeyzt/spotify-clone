<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 16 16"
  >
    <path
    fill="currentColor"
      d="M2 6.5a1.5 1.5 0 1 0-.001 2.999A1.5 1.5 0 0 0 2 6.5zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0-.001 2.999A1.5 1.5 0 0 0 14 6.5z"
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
