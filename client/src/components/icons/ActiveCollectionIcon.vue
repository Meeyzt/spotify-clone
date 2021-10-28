<template>
  <svg
    viewBox="0 0 512 512"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M311.873 77.46l166.349 373.587-39.111 17.27L272.762 94.73zM64 463.746v-384h42.666v384H64zm106.667 0v-384h42.667v384h-42.666z"
      fill="currentColor"
    ></path>
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
