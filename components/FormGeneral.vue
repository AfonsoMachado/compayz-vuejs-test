<template>
  <form class="fist-form">
    <div class="form-input">
      <label for="name">Nome <span class="required">*</span></label>
      <input id="name" class="rounded" type="text" placeholder="Nome" />
    </div>

    <div class="form-input">
      <label for="email">E-mail <span class="required">*</span></label>
      <input id="email" class="rounded" type="text" placeholder="E-mail" />
    </div>

    <div class="form-input">
      <label for="cpf">CPF/CNPJ <span class="required">*</span></label>
      <input
        id="cpf"
        v-mask="['###.###.###-##', '##.###.###/####-##']"
        class="rounded"
        type="text"
        placeholder="CPF/CNPJ"
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
        placeholder="Telefone"
      />
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style>
</style>
