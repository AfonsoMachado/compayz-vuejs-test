<template>
  <b-modal
    id="my-modal"
    class="form-modal"
    centered
    title="Informe seus dados pessoais"
  >
    <form>
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
        <input id="cpf" class="rounded" type="text" />
      </div>

      <div class="form-input">
        <label for="phone"
          >Número de telefone <span class="required">*</span></label
        >
        <input id="phone" class="rounded" type="text" />
      </div>
    </form>

    <template #modal-footer="{}">
      <button class="btn btn-primary p-0 w-100 py-1">Próximo</button>
    </template>
  </b-modal>
</template>

<script>
export default {}
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
