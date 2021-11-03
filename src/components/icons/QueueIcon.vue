<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 16 16"
    class="prefix__Svg-sc-1bi12j5-0 prefix__gSLhUO"
    v-on="$listeners"
  >
    <path
    fill="currentColor"
      d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"
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
