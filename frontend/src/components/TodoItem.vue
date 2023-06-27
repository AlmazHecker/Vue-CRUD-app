<template>
  <li>
    <BaseCard class="todo-item">
      <h2>{{ title }}</h2>

      <div class="actions">
        <base-button @click="deleteTodo">Delete</base-button>
        <BaseCheckbox :checked="done" @change="finishTodo" />
      </div>
    </BaseCard>
  </li>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCheckbox from "@/components/UI/BaseCheckbox.vue";

export default {
  components: { BaseCheckbox, BaseButton },
  props: {
    title: String,
    id: Number,
    done: Boolean,
  },

  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.id);
    },

    finishTodo() {
      this.$store.dispatch("finishTodo", this.id);
    },
  },
};
</script>

<style>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
