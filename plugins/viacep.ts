export default function ({ $axios }: any, inject: any) {
  const viacep = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        'Access-Control-Allow-Origin': '*',
      },
    },
  })

  // Set baseURL to something different
  viacep.setBaseURL('https://viacep.com.br')

  // Inject to context as $viacep
  inject('viacep', viacep)
}
