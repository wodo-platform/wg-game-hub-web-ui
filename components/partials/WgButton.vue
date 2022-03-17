<template>
  <div>
    <div
         @mouseover="mouseover"
         @mouseleave="mouseleave"
         @mousedown="borderB = 'border-b-0 mt-[6px]'"
         @mouseup="borderB = 'border-b-[6px]'"
         class="rounded-lg" :class="[borderB,containerBackgroundColor,containerBorderColor]">
      <div class="rounded-lg border-[3px] pt-[5px] px-[16px] pb-[6px]" :class="[slot_class,padding,childBackgroundColor,childBorderColor]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wg-button',
  props: {
    bg_color: {
      default: 'white'
    },
    border_color: {
      default: 'wd-gray-3'
    },
    hover_border_color: {
      default: 'wd-gray-6'
    },
    padding: '',
    slot_class: ''
  },
  data: function () {
    return {
      defaultBgColor: Object.assign(this.bg_color),
      defaultBorderColor: Object.assign(this.border_color),
      defaultHoverBorderColor: Object.assign(this.hover_border_color),
      borderColor: this.border_color,
      hoverBorderColor: this.hover_border_color,
      borderB: 'border-b-[6px]',
      containerBackgroundColor: 'bg-'+this.border_color,
      containerBorderColor: 'border-'+this.border_color,
      childBackgroundColor: 'bg-'+this.bg_color,
      childBorderColor: 'border-'+this.border_color,
    }
  },
  methods: {
    mouseover() {
      this.containerBackgroundColor = 'bg-'+this.defaultHoverBorderColor
      this.containerBorderColor = 'border-'+this.defaultHoverBorderColor
      this.childBorderColor = 'border-'+this.defaultHoverBorderColor
    },
    mouseleave() {
      this.containerBackgroundColor = 'bg-'+this.defaultBorderColor
      this.containerBorderColor = 'border-'+this.defaultBorderColor
      this.childBorderColor = 'border-'+this.defaultBorderColor
      this.borderB = 'border-b-[6px]'
    }
  }
}
</script>