<template>
  <b-modal
    id="my-modal"
    class="form-modal"
    centered
    title="Informe seus dados pessoais"
  >
    <FormGeneral v-if="formOrder === 'first'" />

    <FormAddress v-if="formOrder === 'second'" />

    <FormCreditCard v-if="formOrder === 'third'" />

    <template #modal-footer="{}">
      <button
        class="btn btn-primary form-btn p-0 w-100 py-1"
        @click="changeForm"
      >
        Próximo
      </button>
    </template>
  </b-modal>
</template>

<script>
import FormAddress from './FormAddress.vue'
import FormCreditCard from './FormCreditCard.vue'
import FormGeneral from './FormGeneral.vue'

export default {
  components: { FormGeneral, FormCreditCard, FormAddress },
  data() {
    return {
      formOrder: 'first',
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
  },
}
</script>

<style >
.modal-content {
  background-color: #2b2d3b;
}

.modal-title {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

button.close {
  color: #717486;
  text-shadow: none;
}

.modal-body {
  font-size: 12px;
  padding: 40px 50px;
}

.modal-footer {
  padding: 12px 50px;
}

.form-line-wrapper-1 .form-input:nth-child(1) {
  width: 66.6%;
}

.form-line-wrapper-1 .form-input:nth-child(2),
.form-line-wrapper-2 .form-input {
  width: 33.3%;
}

.form-line-wrapper-2 {
  max-width: 100%;
}

.form-input .required {
  color: #5c72e8;
}

.form-btn {
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

.form-input label {
  margin-bottom: 6px;
  font-weight: bold;
}

.form-input label,
.form-input input {
  color: #a5a7b6;
}

.form-input input {
  background-color: #2d2f3d;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 38px;
  padding-left: 15px;
}

.form-input input:focus {
  background-color: #323444;
}
</style>
