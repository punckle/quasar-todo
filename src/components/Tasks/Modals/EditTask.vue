<template>
  <q-card>

    <modalHeader>Edit Task</modalHeader>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">

        <modalTaskName
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />

        <modalDueDate :dueDate.sync="taskToSubmit.dueDate"/>

        <modalDueTime :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>

      </q-card-section>

      <modalButtons></modalButtons>

    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import modalHeader from 'components/Tasks/Modals/Shared/ModalHeader';
import modalTaskName from 'components/Tasks/Modals/Shared/ModalTaskName';
import modalDueDate from 'components/Tasks/Modals/Shared/ModalDueDate';
import modalDueTime from 'components/Tasks/Modals/Shared/ModalDueTime';
import modalButtons from 'components/Tasks/Modals/Shared/ModalButtons';

export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  components: {
    modalHeader,
    modalTaskName,
    modalDueDate,
    modalDueTime,
    modalButtons
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>
