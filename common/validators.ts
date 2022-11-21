export const emailValidator = {
  isValid: (email: string): boolean => {
    const regexEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    return regexEmail.test(email)
  },
}

export const phoneValidator = {
  isValid: (phone: string): boolean => {
    return phone.length === 15
  },
}

/** As validações de CPF e CNPJ foram feitas somente considerando a quantidade de caracteres,
 * para facilitar os testes.
 * Para sistemas reais pode ser possível fazer uma validação completa
 * que verifica se a sequencia de números é valida */
export const CPForCNPJValidator = {
  isValid: (cpfcnpj: string): boolean => {
    return cpfcnpj.length === 14 || cpfcnpj.length === 18
  },
}
