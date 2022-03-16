<template>
  <div class="flex relative group justify-center items-center">
    <input v-model="content" :placeholder="placeholder"
           class="flex w-full px-3 py-3 placeholder-gray-500 text-gray-600 flex-none border border-transparent rounded focus:border-gray-400 outline-none"
           :class="(icon!=='')?'pr-10':'pr-0'"
    />
    <span v-if="icon!==''" class="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2">
      <MailIcon v-if="icon==='mail'"/>
      <LockIcon v-if="icon==='lock'"/>
      <SearchIcon v-if="icon==='search'"/>
    </span>
  </div>
</template>

<script>
import MailIcon from "@/components/images/MailIcon.vue";
import LockIcon from "@/components/images/LockIcon.vue";
import SearchIcon from "@/components/images/SearchIcon.vue";

export default {
  name: 'input-text',
  components: {SearchIcon, LockIcon, MailIcon},
  props: {
    value: {
      require: true
    },
    placeholder: {},
    icon: {
      default: '',
      // available values: [mail, lock, search]
    },
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    content: {
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
