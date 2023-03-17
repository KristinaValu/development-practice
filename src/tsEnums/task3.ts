enum Currency {
  Euros = 0.82,
  BritishPound = 0.73,
  JapaneseYen = 108.75,
}

function conversion(amount: number, currency: Currency): number {
  return amount / currency;
}
console.log(conversion(15, Currency.BritishPound));
