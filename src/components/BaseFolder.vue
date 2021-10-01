<template lang="pug">
router-link(:to="url")
  img(src="../assets/folder.png" alt="folder icon")
  span {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  display: block;
  box-sizing: content-box;
  margin: 0;
  border: none;
  padding: 10px;
  background: inherit;
  font-family: inherit;
  font-size: 24px;
  letter-spacing: inherit;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  outline: none;
}
a:hover {
  background: #80808033;
}
a:focus-visible {
  outline: 2px solid;
}
a:active {
  background: #80808066;
}
span {
  display: block;
  width: 50px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
