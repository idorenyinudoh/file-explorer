<template lang="pug">
base-button
  img(src="../assets/folder.png" alt="folder icon")
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
  width: 50px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
