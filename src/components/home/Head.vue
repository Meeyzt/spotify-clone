<template>
  <div class="text-[2rem] float-left font-extrabold text-white mb-3 tracking-tighter">
    {{ welcomeMessage }}
  </div>
</template>

<script>
export default {
  computed: {
    welcomeMessage() {
      const d = new Date();
      const hours = d.getHours();

      switch (true) {
        case hours >= 6 && hours < 10:
          return 'Günaydın';

        case hours >= 10 && hours < 13:
          return 'Tünaydın';

        case hours >= 13 && hours < 17:
          return 'İyi Günler';

        case hours >= 17 && hours <= 24:
          return 'İyi Akşamlar';

        default:
          return 'İyi Geceler';
      }
    },
  },
};
</script>
