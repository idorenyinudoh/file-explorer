<template lang="pug">
button
  slot
</template>

<style scoped>
button {
  box-sizing: content-box;
  width: 50px;
  height: 50px;
  margin: 0;
  border: none;
  padding: 10px;
  background: inherit;
  font-family: inherit;
  font-size: 24px;
  letter-spacing: inherit;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  outline: none;
}
button:hover {
  background: #80808033;
}
button:focus-visible {
  outline: 2px solid;
}
button:active {
  background: #80808066;
}
</style>
