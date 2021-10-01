import { createStore } from "vuex";

export default createStore({
  state: {
    files: [],
    folders: [],
  },
  mutations: {
    addFile(state, payload) {
      state.files.push(payload.fileName);
    },
    addFolder(state, payload) {
      state.folders.push({
        name: payload.name,
        url: payload.url,
        folders: [],
        files: [],
      });
    },
  },
});
