<template>
  <q-page class="q-pa-md">

    <noTasks
      v-if="!Object.keys(tasksTodo).length"
    >
    </noTasks>

    <tasksTodo
      v-else
      :tasksTodo="tasksTodo"
    />

    <tasksCompleted
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        @click="showAddTask = true"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false"></addTask>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import task from 'components/Tasks/Task';
import addTask from 'components/Tasks/Modals/AddTask';
import tasksTodo from 'components/Tasks/TasksTodo';
import tasksCompleted from 'components/Tasks/TasksCompleted';
import noTasks from 'components/Tasks/NoTasks';

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    task,
    addTask,
    tasksTodo,
    tasksCompleted,
    noTasks
  }
}
</script>
