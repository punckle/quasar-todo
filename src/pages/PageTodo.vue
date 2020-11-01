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
  </q-page>
</template>

<script>
import task from 'components/Tasks/Task'

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    task
  }
}
</script>
