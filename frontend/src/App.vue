<template>
  <TodoForm />
  <TodoList />
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "App",
  components: { TodoForm, TodoList },
  mounted() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
