<template>
  <form class="second-form">
    <div class="form-input">
      <label for="zipCode">CEP <span class="required">*</span></label>
      <input
        id="zipCode"
        v-model="address.zipCode"
        v-mask="'#####-###'"
        class="rounded"
        type="text"
        placeholder="CEP"
        @blur="getAddress"
      />
    </div>

    <div class="form-line-wrapper-1 d-flex w-100">
      <div class="form-input">
        <label for="street"> Rua <span class="required">*</span></label>
        <input
          id="street"
          v-model="address.street"
          class="rounded mr-2"
          type="text"
          placeholder="Rua"
        />
      </div>
      <div class="form-input">
        <label for="number"> Número <span class="required">*</span></label>
        <input
          id="number"
          v-model="address.number"
          class="rounded"
          type="text"
          placeholder="Nº"
        />
      </div>
    </div>

    <div class="form-line-wrapper-2 d-flex w-100">
      <div class="form-input">
        <label for="district"> Bairro <span class="required">*</span></label>
        <input
          id="district"
          v-model="address.district"
          class="rounded mr-2"
          type="text"
          placeholder="Bairro"
        />
      </div>
      <div class="form-input">
        <label for="city"> Cidade <span class="required">*</span></label>
        <input
          id="city"
          v-model="address.city"
          class="rounded mr-2"
          type="text"
          placeholder="Cidade"
        />
      </div>
      <div class="form-input">
        <label for="state"> Estado <span class="required">*</span></label>
        <input
          id="state"
          v-model="address.state"
          class="rounded"
          type="text"
          placeholder="Estado"
        />
      </div>
    </div>

    <div class="form-input">
      <label for="complement"
        >Complemento <span class="required">*</span></label
      >
      <input
        id="complement"
        v-model="address.complement"
        class="rounded"
        type="text"
        placeholder="Coloque um complemento (opcional)"
      />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formOrder: 'first',
      address: {
        zipCode: '',
        street: '',
        number: '',
        district: '',
        city: '',
        state: '',
        complement: '',
      },
    }
  },

  methods: {
    async getAddress() {
      try {
        const rawZipCode = this.address.zipCode.replace('-', '')
        const address = await this.$viacep.get(`ws/${rawZipCode}/json/`)

        this.address.street = address.data.logradouro
        this.address.district = address.data.bairro
        this.address.city = address.data.localidade
        this.address.complement = address.data.complemento
        this.address.state = address.data.uf
      } catch (error) {
        console.error(error)
      }
    },

    isFormValid() {
      return !Object.values(this.address).includes('')
    },
  },
}
</script>

<style>
</style>
