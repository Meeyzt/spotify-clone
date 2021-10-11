<template>
  <svg
    viewBox="0 0 512 512"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    v-on="$listeners"
  >
    <path
      d="M448 463.746H298.667V314.413h-85.334v149.333H64V148.318L256 36.572l192 110.984v316.19z"
      fill="currentColor"
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
