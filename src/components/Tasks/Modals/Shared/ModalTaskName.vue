<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task name"
      class="col"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      clearable
    />
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
