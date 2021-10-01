<template lang="pug">
base-button
  img(src="../assets/file.png" alt="file icon")
  span {{ text }}
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
span {
  display: block;
  font-size: 18px;
}
</style>
