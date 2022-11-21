<template>
  <form class="second-form">
    <div class="form-input">
      <label for="zipCode">CEP <span class="required">*</span></label>
      <input
        id="zipCode"
        v-model="formData.address.zipCode"
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
          v-model="formData.address.street"
          class="rounded mr-2"
          type="text"
          placeholder="Rua"
        />
      </div>
      <div class="form-input">
        <label for="number"> Número <span class="required">*</span></label>
        <input
          id="number"
          v-model="formData.address.number"
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
          v-model="formData.address.district"
          class="rounded mr-2"
          type="text"
          placeholder="Bairro"
        />
      </div>
      <div class="form-input">
        <label for="city"> Cidade <span class="required">*</span></label>
        <input
          id="city"
          v-model="formData.address.city"
          class="rounded mr-2"
          type="text"
          placeholder="Cidade"
        />
      </div>
      <div class="form-input">
        <label for="state"> Estado <span class="required">*</span></label>
        <input
          id="state"
          v-model="formData.address.state"
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
        v-model="formData.address.complement"
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
      formData: {
        address: {
          zipCode: '',
          street: '',
          number: '',
          district: '',
          city: '',
          state: '',
          complement: '',
        },
      },
    }
  },

  methods: {
    async getAddress() {
      try {
        const rawZipCode = this.formData.address.zipCode.replace('-', '')
        const address = await this.$viacep.get(`ws/${rawZipCode}/json/`)

        this.formData.address.street = address.data.logradouro
        this.formData.address.district = address.data.bairro
        this.formData.address.city = address.data.localidade
        this.formData.address.complement = address.data.complemento
        this.formData.address.state = address.data.uf
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style>
</style>
