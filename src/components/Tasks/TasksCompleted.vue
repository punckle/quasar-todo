<template>
  <div class="q-mt-lg">

    <listHeader bgColor="bg-green-4">Completed</listHeader>

    <q-list bordered separator>

      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      >
      </task>

    </q-list>

  </div>
</template>

<script>
import task from 'components/Tasks/Task';
import listHeader from 'components/Shared/ListHeader';

export default {
  props: ['tasksCompleted'],
  components: {
    task,
    listHeader
  }
}
</script>
