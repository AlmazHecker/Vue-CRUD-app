import { createStore } from "vuex";
import { api } from "@/config/api";

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },

  actions: {
    async getTodos(ctx) {
      const { data } = await api.get("/");
      ctx.commit("setTodos", data);
    },

    async createTodo(ctx, payload) {
      await api.post(`/`, payload);

      ctx.dispatch("getTodos");
    },

    async deleteTodo(ctx, payload) {
      await api.delete(`/${payload}`);

      ctx.dispatch("getTodos");
    },
    async finishTodo(ctx, payload) {
      await api.put(`/${payload}`);

      ctx.dispatch("getTodos");
    },
  },

  mutations: {
    addTodo(state) {
      state.todos.push({});
    },

    setTodos(state, payload) {
      state.todos = payload;
    },
  },

  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
