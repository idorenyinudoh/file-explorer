<template lang="pug">
vue-final-modal(v-model="showModal" classes="modal-container" content-class="modal-content" focus-trap=true @opened="focus")
  h2 Create New {{ newItem }}
  form(@submit.prevent="createItem")
    input(type="text" ref="input" required)
    base-button(aria-label="submit" title="Submit") Submit
main
  header
    base-button(aria-label="create new file" title="Create New File" class="icon" @click="openModal('file')")
      img(src="../assets/add-file.png" alt="create file")
    base-button(aria-label="create new folder" title="Create New Folder" class="icon" @click="openModal('folder')")
      img(src="../assets/add-folder.png" alt="create folder")
  #items(v-if="files.length || Object.keys(folders).length")
    base-folder(v-for="folder in folders" :text="folder.name" :url="folder.url")
    base-file(v-for="file in files" :text="file")
  p(v-else) You have no folders at the moment.
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
import BaseButton from "./BaseButton.vue";
import BaseFolder from "./BaseFolder.vue";
import BaseFile from "./BaseFile.vue";

export default {
  data() {
    return {
      showModal: false,
      newItem: "",
    };
  },
  components: {
    VueFinalModal,
    BaseButton,
    BaseFolder,
    BaseFile,
  },
  methods: {
    openModal(item) {
      this.showModal = true;
      item === "file" ? (this.newItem = "File") : (this.newItem = "Folder");
    },
    focus() {
      this.$refs.input.focus();
    },
    createItem() {
      const inputValue = this.$refs.input.value;

      if (this.newItem === "File") {
        this.$store.commit({
          type: "addFile",
          fileName: inputValue,
        });
      } else {
        this.$store.commit({
          type: "addFolder",
          name: inputValue,
          url: inputValue.trim().toLowerCase().split(" ").join("-"),
          folders: {},
          files: [],
        });
      }

      this.$refs.input.value = "";
      this.showModal = false;
    },
  },
  computed: {
    files() {
      return this.$store.state.files;
    },
    folders() {
      return this.$store.state.folders;
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
  row-gap: calc(30px + 1vw);
}
header {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: calc(10px + 1vw);
  justify-content: flex-end;
}
#items {
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  gap: calc(10px + 1vw);
}
p {
  margin: calc(50px + 1vw) 0 0 0;
  font-size: 24px;
  text-align: center;
}
</style>
