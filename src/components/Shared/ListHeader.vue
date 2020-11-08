<template>
  <q-banner inline-actions :class="bgColor" class="listHeader text-white text-center">
    <span class="text-bold text-subtitle2"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style>
.listHeader {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
