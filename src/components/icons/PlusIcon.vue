<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
    <path fill="none" d="M0 0h16v16H0z"></path>
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
