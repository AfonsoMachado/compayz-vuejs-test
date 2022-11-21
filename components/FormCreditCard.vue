<template>
  <form class="third-form">
    <SwivelCard
      :cvv="card.cvv"
      :expiration="card.expiration"
      :holder="card.holder"
      :number="card.number"
      :card-position="cardPosition"
    />
    <div class="form-input">
      <label for="credit-card-number"
        >Número do cartão <span class="required">*</span></label
      >
      <input
        id="credit-card-number"
        v-model="card.number"
        v-mask="'#### #### #### ####'"
        class="rounded"
        type="text"
        placeholder="Digite o número do seu cartão (frente do cartão)"
      />
    </div>

    <div class="form-input">
      <label for="credit-card-holder"
        >Titular do cartão <span class="required">*</span></label
      >
      <input
        id="credit-card-holder"
        v-model="card.holder"
        class="rounded"
        type="text"
        placeholder="Nome (igual ao cartão)"
      />
    </div>

    <div class="form-input">
      <label for="credit-card-cpf"
        >CPF/CNPJ do Titular do cartão <span class="required">*</span></label
      >
      <input
        id="credit-card-holder"
        class="rounded"
        type="text"
        placeholder="Digite o CPF ou CNPJ do titular do cartão"
      />
    </div>

    <div class="form-line-wrapper-1 d-flex w-100">
      <div class="form-input">
        <label for="street"> Validade <span class="required">*</span></label>
        <input
          id="street"
          v-model="card.expiration"
          v-mask="'##/##'"
          class="rounded mr-2"
          type="text"
          placeholder="MM/AA"
        />
      </div>
      <div class="form-input">
        <label for="number"> CVV <span class="required">*</span></label>
        <input
          id="number"
          v-model="card.cvv"
          v-mask="'###'"
          class="rounded"
          type="text"
          placeholder="CVV"
          @focus="turnCardBack"
          @blur="turnCardFront"
        />
      </div>
    </div>
  </form>
</template>

<script>
import SwivelCard from './SwivelCard.vue'
export default {
  components: { SwivelCard },
  data() {
    return {
      card: {
        number: '',
        holder: '',
        expiration: '',
        cvv: '',
      },
      cardPosition: 'front',
    }
  },

  methods: {
    turnCardBack() {
      this.cardPosition = 'back'
    },
    turnCardFront() {
      this.cardPosition = 'front'
    },
  },
}
</script>

<style>
</style>
