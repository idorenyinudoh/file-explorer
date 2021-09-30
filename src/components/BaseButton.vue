<template lang="pug">
button
  slot
</template>

<style scoped>
button {
  width: 70px;
  margin: 0;
  border: none;
  border-radius: 10%;
  padding: 10px;
  background: inherit;
  font-family: inherit;
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
