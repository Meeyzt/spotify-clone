<template>
  <svg
    :height="height"
    :width="width"
    aria-label="Bir cihaza bağlan"
    viewBox="0 0 16 16"
  >
    <path full="currentColor"
      d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"
    />
    <path fill="currentColor"
      d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"
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
