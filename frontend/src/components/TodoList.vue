<template>
  <h1>Todos!</h1>

  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :done="todo.done"
      :id="todo.id"
      :title="todo.title"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: { TodoItem },

  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
}
</style>
