import { ref, useSlots } = Vue

export const Tab = {
  template: `<div class="tab">
    <slot/>
  </div>`
}

export const Tabs {
  template: `<div class="tabs">
    <div class="tabs-btns">
      <div v-for="(t, i) in slots.default()" :key="i" :class="['tab-btn',{active: active == i}]" @click="active = i">
        {{ t.props.name }}
      </div>
    </div>
    <div class="tab-cont">
      <component :is="slots.default()[active]"/>
    </div>
  </div>`,
  setup() {
    const slots = useSlots()
    const active = ref(0)
    return { active, slots }
  }
}

export default { Tabs, Tab }
