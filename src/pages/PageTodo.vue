<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>

      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      >
      </task>

    </q-list>

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
      <addTask></addTask>
    </q-dialog>

  </q-page>
</template>

<script>
import task from 'components/Tasks/Task'
import addTask from 'components/Tasks/Modals/AddTask'

import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showAddTask: true
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    task,
    addTask
  }
}
</script>
