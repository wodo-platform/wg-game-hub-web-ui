<template>
  <div>
    <input v-model="content" type="checkbox" @input="handleInput" class="h-5 w-5 rounded">
  </div>
</template>

<script>
export default {
  name: 'input-checkbox',
  props: ['value'],
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', !this.content)
    }
  }
}
</script>

<style scoped>

</style>
