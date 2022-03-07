<template>
  <select @input="handleInput" :value="internalValue" class="bg-white rounded col-span-2 border border-blacks-40 p-2">
    <option :value="null">– Select a {{selectPlaceholder}} –</option>
    <option v-for="option in options" :value="option.value" :selected="option.value === value">{{ option.key }}</option>
  </select>
</template>

<script>
export default {
  name: 'input-select',
  props: {
    value: {
      required: true
    },
    options: {
      required: true
    },
    selectPlaceholder: {
      default: 'status'
    }
  },
  data () {
    return {
      internalOptions: this.options,
      internalValue: this.value,
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
