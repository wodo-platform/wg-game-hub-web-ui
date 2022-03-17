<template>
  <div>
    <div class="rounded-lg" :class="[borderB, containerBackgroundColor, containerBorderColor]">
      <div class="rounded-lg border-[3px]" :class="[slot_class, padding, childBackgroundColor, childBorderColor]">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wg-block',
  props: {
    bg_color: {
      default: 'white'
    },
    border_color: {
      default: 'wd-gray-6'
    },
    hover_border_color: {
      default: 'wd-gray-6'
    },
    padding: {
      default: 'p-[24px]'
    },
    slot_class: ''
  },
  data: function () {
    return {
      defaultBgColor: Object.assign(this.bg_color),
      defaultBorderColor: Object.assign(this.border_color),
      defaultHoverBorderColor: Object.assign(this.hover_border_color),
      borderB: 'border-b-[6px]',
      containerBackgroundColor: 'bg-'+this.border_color,
      containerBorderColor: 'border-'+this.border_color,
      childBackgroundColor: 'bg-'+this.bg_color,
      childBorderColor: 'border-'+this.border_color,
    }
  }
}
</script>