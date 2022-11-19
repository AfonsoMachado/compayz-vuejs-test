<template>
  <div class="plan-price-wrapper rounded py-2">
    <div class="title font-weight-bold small border-bottom px-1">
      Sua escolha
    </div>
    <div class="choices border-bottom p-1">
      <div class="d-flex justify-content-between">
        <span>
          {{ plansInfo[planId].name }}
        </span>
        <span>
          {{ formatCurrency(plansInfo[planId].planBaseAmt) }}
        </span>
      </div>
      <div v-if="addOnQuantity" class="d-flex justify-content-between">
        <span> + {{ addOnQuantity }} Domínio(s) </span>
        <span>
          {{ formatCurrency(totalDomain) }}
        </span>
      </div>
    </div>
    <div class="amount rounded d-flex justify-content-between py-1 mx-1 my-2">
      <span class="ml-1"> TOTAL </span>
      <span class="mr-1"> {{ totalValue }} </span>
    </div>
    <div class="button-wrapper mx-1">
      <button class="btn btn-primary p-0 w-100 py-1">Assinar Plano</button>
    </div>
  </div>
</template>

<script lang="ts">
import plansInfo from '@/json/plansInfo.json'
import addOnPriceAmt from '@/json/addOnPriceAmt.json'

export default {
  props: {
    planId: {
      type: Number,
      default: -1,
    },
    addOnQuantity: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      plansInfo: plansInfo.data.plansInfo,
      addOnPriceAmt: addOnPriceAmt.data.addOnPriceAmt,
    }
  },

  computed: {
    totalValue: function (): string {
      return this.formatCurrency(
        this.addOnQuantity * this.addOnPriceAmt +
          this.plansInfo[this.planId].planBaseAmt
      )
    },
    totalDomain: function (): number {
      return this.addOnQuantity * this.addOnPriceAmt
    },
  },

  methods: {
    formatCurrency(value: number): string {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    },
  },
}
</script>

<style scoped>
* {
  color: white;
}

.plan-price-wrapper {
  background-color: #343647;
  height: max-content;
}

.amount,
.choices {
  font-size: 12px;
}

.amount {
  background-color: #44475c;
}

.btn {
  background-color: #5c72e8 !important;
  font-size: 12px;
}
</style>
