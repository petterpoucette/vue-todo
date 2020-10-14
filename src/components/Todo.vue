<template>
  <div class="todo">
    <h1>This is the list</h1>
    <TodoTask
      class="task"
      v-for="task in task.tasks"
      :key="task.id"
      :task="task"
      @edit="editTask"
      @delete="deleteTask"
    />
    <div class="task">
      <input @keyup.enter="addTask" v-model="newTask" class="new-task" />
      <BaseButton @click="addTask" type="add">Add</BaseButton>
    </div>
  </div>
</template>

<script>
import TodoTask from '@/components/TodoTask'
import { mapState } from 'vuex'
import store from '@/store/index'

export default {
  components: {
    TodoTask
  },
  data() {
    return {
      newTask: ''
    }
  },
  computed: mapState(['task']),
  created() {
    store.dispatch('task/fetchTasks')
  },
  methods: {
    editTask(task) {
      store.dispatch('task/editTaskTitle', task)
    },
    deleteTask(id) {
      store.dispatch('task/deleteTask', id)
    },
    addTask() {
      store.dispatch('task/setNewTask', this.newTask).then(() => {
        this.newTask = ''
      })
    }
  }
}
</script>

<style scoped>
.todo {
  margin: 0 auto;
  height: auto;
  width: fit-content;
}
.task {
  width: 350px;
  height: 50px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.new-task {
  padding-left: 20px;
  width: 100%;
}
</style>
