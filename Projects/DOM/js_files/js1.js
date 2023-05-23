const obj1 = {name:"himam"}
const obj2 = {
  state:"city",
  __proto__ : obj1
}
console.log(Object.getPrototypeOf(obj2));  // { name: 'himam' }