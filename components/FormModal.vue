<template>
  <b-modal
    id="my-modal"
    class="form-modal"
    centered
    title="Informe seus dados pessoais"
  >
    <form v-if="formOrder === 'first'" class="fist-form">
      <div class="form-input">
        <label for="name">Nome <span class="required">*</span></label>
        <input id="name" class="rounded" type="text" />
      </div>

      <div class="form-input">
        <label for="email">E-mail <span class="required">*</span></label>
        <input id="email" class="rounded" type="text" />
      </div>

      <div class="form-input">
        <label for="cpf">CPF/CNPJ <span class="required">*</span></label>
        <input
          id="cpf"
          v-mask="['###.###.###-##', '##.###.###/####-##']"
          class="rounded"
          type="text"
        />
      </div>

      <div class="form-input">
        <label for="phone"
          >Número de telefone <span class="required">*</span></label
        >
        <input
          id="phone"
          v-mask="['(##) ####-####', '(##) #####-####']"
          class="rounded"
          type="text"
        />
      </div>
    </form>

    <form v-if="formOrder === 'second'" class="second-form">
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

    <template #modal-footer="{}">
      <button class="btn btn-primary p-0 w-100 py-1" @click="changeForm">
        Próximo
      </button>
    </template>
  </b-modal>
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
    changeForm() {
      this.formOrder =
        this.formOrder === 'first'
          ? 'second'
          : this.formOrder === 'second'
          ? 'third'
          : ''
    },

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

<style scoped>
:deep(.modal-content) {
  background-color: #2b2d3b;
}

:deep(.modal-title) {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

:deep(button.close) {
  color: #717486;
  text-shadow: none;
}

:deep(.modal-body) {
  font-size: 12px;
  padding: 40px 50px;
}

:deep(.modal-footer) {
  padding: 12px 50px;
}

.second-form .form-line-wrapper-1 .form-input:nth-child(1) {
  width: 66.6%;
}

.second-form .form-line-wrapper-1 .form-input:nth-child(2),
.second-form .form-line-wrapper-2 .form-input {
  width: 33.3%;
}

.second-form .form-line-wrapper-2 {
  max-width: 100%;
}

.required {
  color: #5c72e8;
}

.btn {
  background-color: #5c72e8 !important;
  font-size: 12px;
  height: 38px;
  font-weight: bold;
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
}

label,
input {
  color: #a5a7b6;
}

input {
  background-color: #2d2f3d;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 38px;
  padding-left: 15px;
}

input:focus {
  background-color: #323444;
}
</style>
