import { createStore } from "vuex";

export default createStore({
  state: {
    files: [],
    folders: {},
  },
  mutations: {
    addFile(state, payload) {
      state.files.push(payload.fileName);
    },
    addFolder(state, payload) {
      state.folders[payload.url] = {
        name: payload.name,
        url: payload.url,
        folders: payload.folders,
        files: payload.files,
      };
    },
  },
});
