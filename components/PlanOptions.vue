<template>
  <div class="plan-options-wrapper border rounded pt-2">
    <div class="title font-weight-bold small mb-3 mx-2">
      O plano 4D iá incluir
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
      <div class="plan-opt-text">{{ item.service }}</div>
      <div class="plan-qtd">{{ item.baseQuantity }}</div>
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
}

.plan-opt {
  font-size: 12px;
}
</style>
