<template>
  <div>
    <listHeader bgColor="bg-orange-4">TO DO</listHeader>

    <q-list bordered separator>

      <task
        v-for="(task, key) in tasksTodo"
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
  props: ['tasksTodo'],
  components: {
    task,
    listHeader
  }
}
</script>
