<template>

<div class="text-header float-left font-extrabold text-white mb-4">
    {{getTime()}}
</div>

</template>

<script>
export default {
  methods: {
    getTime() {
      const today = new Date();
      const time = today.getHours();
      let message = '';

      if (time >= 0 && time < 6) {
        message = 'İyi geceler';
      } else if (time >= 6 && time < 10) {
        message = 'Günaydın';
      } else if (time >= 10 && time < 13) {
        message = 'Tünaydın';
      } else if (time >= 13 && time < 17) {
        message = 'İyi günler';
      } else if (time >= 17 && time <= 24) {
        message = 'İyi akşamlar';
      }
      return message;
    },
  },

};
</script>
