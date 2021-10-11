<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path fill="none" d="M0 0h16v16H0z"/>
    <path
      fill="currentColor"
      d="M13.797 2.727a4.057 4.057 0 0 0-5.488-.253.558.558 0 0 1-.31.112.531.531
       0 0 1-.311-.112 4.054 4.054 0 0 0-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424
        2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 0 0 2.726 0l4.435-5.195a4.052 4.052
         0 0 0 1.195-2.883 4.057 4.057 0 0 0-1.196-2.883z"
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
