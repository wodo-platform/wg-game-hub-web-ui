<template>
  <textarea v-model="internalValue" class="bg-white rounded col-span-2 border border-blacks-40 p-2"></textarea>
</template>

<script>
export default {
  name: 'input-textarea',
  props: ['value'],
  data () {
    return {}
  },
  methods: {},
  computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue )
      }
    }
  }
}
</script>

<style scoped>

</style>
