<template>
  <div class="task-item">
    <input
      :value="task.title"
      @keyup.enter="editTask"
      @blur="editTask"
      class="title"
    />
    <BaseButton @click="deleteTask" type="delete">Delete</BaseButton>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTask() {
      console.log('deleted the task ' + this.task.id)
      this.$emit('delete', this.task.id)
    },
    editTask(event) {
      if (event.target.value !== this.task.title) {
        this.task.title = event.target.value
        this.$emit('edit', this.task)
      }
      event.target.blur()
    }
  }
}
</script>

<style scoped>
.task-item {
  background-color: rgb(177, 217, 230);
}

.title {
  padding-left: 20px;
  width: 100%;
}
</style>
