// 3. Запросіть у користувача суму покупки та виведіть суму до сплати зі знижкою: 
// від 200 до 300 — знижка 3%, від 300 до 500 — 5%, від 500 і вище — 7%.
const price = prompt("Сума покупки:");
if (price >= 200 && price<= 300) {
  const priceWithDiscount = price / 100 * 97;
  alert(priceWithDiscount);
}
else if (price >= 300 && price <= 500) {
  const priceWithDiscount = price / 100 * 95;
  alert(priceWithDiscount);
}
else if (price >= 500) {
  const priceWithDiscount = price / 100 * 93;
  alert(priceWithDiscount);
}
