const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']; // 1

names.forEach((elem) => console.log(`Привет, ${elem}`));

const array = [1, 2, 3, 4, 5];

const arr = (array.map((x) => x * 10));
console.log(arr);

const array1 = [5, 12, 8, 130, 44];

const arr1 = (array1.filter((x) => x > 10));
console.log(arr1)

const mas = [
  { name: 'Иван', age: 23 }, 
  { name: 'Мария', age: 18 }, 
  { name: 'Алексей', age: 32 }, 
  { name: 'Ольга', age: 24 }, 
  { name: 'Сергей', age: 17 }, 
  { name: 'Анна', age: 21 },
];
const ages = mas.filter(person => person.age > 18);
const filt = ages.map(person => `${person.name} (${person.age} лет)`).join(", ");
console.log(filt);

//Дан массив продаж в виде объектов: [{product: 'Телефон', price: 50000, quantity: 1}, 
//{product: 'Чехол', price: 1500, quantity: 2}, 
//{product: 'Зарядное устройство', price: 2500, quantity: 1}
//]. 
//Используя метод reduce, рассчитайте общую стоимость проданных товаров.
//Пример результата:
//Общая стоимость продаж: 55500
const smartphone = [
  {product: 'Телефон', price: 50000, quantity: 1}, 
{product: 'Чехол', price: 1500, quantity: 2}, 
{product: 'Зарядное устройство', price: 2500, quantity: 1},
];

const price = smartphone.reduce((acc, product) => {
  acc += product.price * product.quantity;
  return acc;
}, 0);
console.log(price);