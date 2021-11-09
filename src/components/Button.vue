<template>
    <button class="border rounded bg-transparent py-[7px] text-center px-[15px] text-2xs border-opacity-30 hover:border-opacity-100 cursor-default font-bold tracking-widest">
            TAKİP ET
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
