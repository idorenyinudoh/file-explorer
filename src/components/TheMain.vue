<template lang="pug">
main
  header
    base-button(aria-label="create new file" title="Create New File")
      img(src="../assets/add-file.png" alt="create file")
    base-button(aria-label="create new folder" title="Create New Folder")
      img(src="../assets/add-folder.png" alt="create folder")
  //- base-folder
  p You have no folders at the moment.
</template>

<script>
import BaseFolder from "./BaseFolder.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseFolder,
    BaseButton,
  },
};
</script>

<style scoped>
main {
  padding: calc(40px + 1vw) calc(30px + 1vw);
  display: grid;
  row-gap: calc(50px + 1vw);
}
header {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: calc(10px + 1vw);
  justify-content: flex-end;
}
p {
  margin: 0;
  font-size: 24px;
  text-align: center;
}
</style>
