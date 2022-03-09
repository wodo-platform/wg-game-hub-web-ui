<template>
  <p v-if="errors && errors.hasOwnProperty(field)" class="mt-2 text-sm text-red-600">{{ errors[field][0] }}</p>
</template>

<script>
export default {
  name: 'input-error',
  props: ['errors', 'field']
}
</script>

<style scoped>

</style>
