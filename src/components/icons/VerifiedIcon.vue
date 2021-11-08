<template>
<svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
>
    <path
    d="M12 21.66l-3.38 1.854-1.842-3.388-3.847-.268.282-3.845-3.09-2.305 2.316-3.083-1.355-3.61L4.7 5.675l.812-3.77 3.767.827L12 0l2.721 2.732 3.767-.827.812 3.77 3.616 1.34-1.355 3.61 2.317 3.083-3.091 2.305.282 3.845-3.847.268-1.841 3.388L12 21.66z"
    fill="#2E77D0"
    />
    <path
    d="M16.864 7.412l-6.644 7.779-2.804-3.285-.494.578 3.298 3.862 7.214-8.447-.57-.487z"
    fill="#fff"
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
