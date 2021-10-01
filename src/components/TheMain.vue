<template lang="pug">
vue-final-modal(v-model="showModal" classes="modal-container" content-class="modal-content" focus-trap=true)
  h2 Create New {{ newItem }}
  form
    input(type="text" required)
    base-button(aria-label="submit" title="Submit") Submit
main
  header
    base-button(aria-label="create new file" title="Create New File" class="icon" @click="openModal('file')")
      img(src="../assets/add-file.png" alt="create file")
    base-button(aria-label="create new folder" title="Create New Folder" class="icon" @click="openModal('folder')")
      img(src="../assets/add-folder.png" alt="create folder")
  //- base-folder
  p You have no folders at the moment.
    
</template>

<script>
import BaseFolder from "./BaseFolder.vue";
import BaseButton from "./BaseButton.vue";
import { VueFinalModal } from "vue-final-modal";

export default {
  data() {
    return {
      showModal: false,
      newItem: "",
    };
  },
  components: {
    BaseFolder,
    BaseButton,
    VueFinalModal,
  },
  methods: {
    openModal(item) {
      this.showModal = true;
      item === "file" ? (this.newItem = "File") : (this.newItem = "Folder");
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 425px) {
  form {
    margin-top: 20px;
    row-gap: 5px;
  }
}
@media screen and (min-width: 426px) {
  form {
    margin: 20px 0;
    grid-template-columns: 1fr max-content;
  }
}
:deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.modal-content) {
  padding: 30px 20px;
  background: white;
}
h2 {
  margin: 0;
  font-weight: 500;
}
form {
  display: grid;
}
input {
  border: 2px solid;
  padding: 10px 5px;
  font-family: inherit;
  font-size: 20px;
  letter-spacing: inherit;
  outline: none;
}
.icon {
  width: 50px;
  height: 50px;
}
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
