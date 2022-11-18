<template>
  <div class="container">
    <div class="card">
      <div
        class="plans-select-wrapper d-flex w-100 justify-content-between small"
      >
        <div
          v-for="(item, index) in activePlans.data.activePlans"
          :key="index"
          class="select-plan"
        >
          <input :id="index" type="radio" name="teste" class="d-none" />
          <label
            class="
              plan-label
              border border-white
              rounded
              text-white
              d-flex
              align-items-center
              justify-content-center
              w-100
            "
            :for="index"
            @click="changePlanId(item.id, item.name)"
          >
            {{ item.name }}
          </label>
        </div>
      </div>
      <PlanOptions
        v-if="[0, 1].includes(planId)"
        :plan-name="planName"
        :plan-id="planId"
      />
    </div>
  </div>
</template>

<script >
import activePlans from '@/json/activePlans.json'
import PlanOptions from '@/components/PlanOptions.vue'

export default {
  name: 'PlansComponent',
  components: {
    PlanOptions,
  },
  data() {
    return {
      activePlans,
      planId: -1,
      planName: '',
      showPlan: true,
    }
  },

  methods: {
    changePlanId(id, name) {
      id > 2 && this.$toast.warning('Plano indisponível')
      this.planId = id - 1
      this.planName = name
    },
  },
}
</script>

<style scoped>
.card {
  background-color: #2d2e39;
}

.select-plan {
  width: 19.5%;
}

.plan-label {
  cursor: pointer;
  height: 30px;
  transition: all 0.25s ease-in-out;
}

.plan-label:hover,
input[type='radio']:checked ~ .plan-label {
  border-color: #4e4c7c !important;
  color: #4e4c7c !important;
  transition: all 0.25s ease-in-out;
}
</style>
