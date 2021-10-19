<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 14A6.508 6.508 0 0 1 1 7.5C1 3.916 3.916 1 7.5 1S14 3.916 14 7.5 11.084 14 7.5 14z"
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
