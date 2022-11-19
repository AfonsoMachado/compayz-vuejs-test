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
          <input
            :id="index"
            v-model="selectedPlan"
            :value="index"
            type="radio"
            name="teste"
            class="d-none"
          />
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
            @click="changePlanId(item.id)"
          >
            {{ item.name }}
          </label>
        </div>
      </div>
      <div v-if="[0, 1].includes(planId)" class="plans-feedback d-flex">
        <PlanOptions
          ref="planOpt"
          :plan-id="planId"
          class="plan-options mr-2"
          @qtd-change="changeAddOnQuantity"
        />
        <PlanPrice
          class="plan-price"
          :plan-id="planId"
          :add-on-quantity="addOnQuantity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import activePlans from '@/json/activePlans.json'
import PlanOptions from '@/components/PlanOptions.vue'
import PlanPrice from '@/components/PlanPrice.vue'

export default {
  name: 'PlansComponent',
  components: {
    PlanOptions,
    PlanPrice,
  },
  data() {
    return {
      activePlans,
      planId: 0,
      selectedPlan: 0,
      showPlan: true,
      addOnQuantity: 0,
    }
  },

  methods: {
    changePlanId(id) {
      this.addOnQuantity = 0
      id > 2 && this.$toast.warning('Plano indisponível')
      this.planId = id - 1
      this.$refs.planOpt.addOnQuantity = 0
    },
    changeAddOnQuantity(qtd) {
      this.addOnQuantity = +qtd
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

.plan-options {
  width: 65%;
}

.plan-price {
  width: 35%;
}

.plans-feedback {
  height: 400px;
}
</style>
