<template lang="pug">
main
  //- base-folder
  p You have no folders at the moment.
</template>

<script>
import BaseFolder from "./BaseFolder.vue";

export default {
  components: {
    BaseFolder,
  },
};
</script>

<style scoped>
main {
  padding: calc(40px + 1vw) calc(30px + 1vw);
}
p {
  margin: 24px 0;
  font-size: 24px;
  text-align: center;
}
</style>
