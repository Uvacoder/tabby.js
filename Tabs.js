import { ref, useSlots } = Vue

export default {
	template: `<div class="tabs">
  	<div class="tabs-btns">
    	<div v-for="(t, i) in slots.default()" :key="i" :class="['tab-btn',{active: active == i}]" @click="active = i">
        {{ t.props.name }}
      </div>
    </div>
  	<component class="tab-cont" :is="slots.default()[active]"/>
  </div>`,
  setup() {
  	const slots = useSlots()
  	const active = ref(0)
    return { active, slots }
  }
}
