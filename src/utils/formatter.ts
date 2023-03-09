export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pb-BR', {
  style: 'currency',
  currency: 'BRL',
})
