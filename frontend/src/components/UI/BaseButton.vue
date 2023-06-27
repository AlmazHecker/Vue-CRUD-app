<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 0.2rem 1rem;
  font-family: inherit;
  background-color: darkblue;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  font-size: 18px;
}

button:hover,
button:disabled {
  opacity: 0.7;
}
</style>
