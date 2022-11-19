<template>
  <div class="plan-options-wrapper border rounded pt-2">
    <div class="title font-weight-bold small mb-3 mx-2">
      O {{ plansInfo[planId].name }} irá incluir
    </div>

    <div
      v-for="(item, index) in plansInfo[planId].contents"
      :key="index"
      class="
        plan-opt
        font-weight-light
        border-bottom
        px-2
        d-flex
        justify-content-between
      "
    >
      <div class="plan-opt-text d-flex align-items-center">
        {{ item.service }}
      </div>
      <div
        class="
          plan-qtd
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        {{ item.baseQuantity }}
        <input
          v-if="item.addOnId"
          v-model="addOnQuantity"
          type="range"
          min="0"
          :max="item.maxAddOnQuantity"
          class="slider"
          @input="$emit('qtd-change', $event.target.value)"
        />
        <div
          v-if="item.addOnId && addOnQuantity != 0"
          class="include"
          style="font-size: 8px"
        >
          + {{ addOnQuantity }} inclusos
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import plansInfo from '@/json/plansInfo.json'

export default {
  props: {
    planId: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      plansInfo: plansInfo.data.plansInfo,
      addOnQuantity: 0,
    }
  },
}
</script>

<style scoped>
* {
  color: white;
}
.plan-options-wrapper {
  border-color: rgba(255, 255, 255, 0.5) !important;
  height: max-content;
}

.slider {
  height: 2px;
  width: 50px;
  border-radius: 9999px;
  outline: none;
  background: #5c72e9;
  -webkit-appearance: none;
  margin: 5px 0;
}

.slider::-webkit-slider-thumb {
  width: 8px;
  height: 8px;
  cursor: pointer;
  appearance: none;
  background: #5c72e9;
  border-radius: 50%;
  -webkit-appearance: none;
}

.slider::-moz-range-thumb {
  width: 8px;
  height: 8px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: #5c72e9;
}

.plan-opt {
  font-size: 12px;
}

.plan-qtd {
  width: 52px;
}
</style>
