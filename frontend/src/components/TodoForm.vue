<template>
  <base-card>
    <h1>Create Todo!</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <BaseInput id="title" v-model="title" />
      </div>
      <div class="submit-button">
        <base-button type="submit">Submit</base-button>
      </div>
      <span v-if="error">{{ error }}</span>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        this.isLoading = true;

        const values = { title: this.title, done: false };
        await this.$store.dispatch("createTodo", values);

        this.title = "";
      } catch (e) {
        this.error = "Something went wrong!";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  text-align: start;
  margin: 1rem 0;
}

.submit-button {
  text-align: end;
}
</style>
