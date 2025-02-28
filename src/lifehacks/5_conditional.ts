// type Conditional<T> = T extends string ? number : boolean;
//
// const data: Conditional<string> = 1;
//
// type Data = { value: string };
// type Car = { model: string };
// type DataOrCar<T> = T extends string ? Data : Car;
// type test = Data | Car;
//
// function fn<T>(args: T): DataOrCar<T> {
//   throw Error();
// }
//
// const value = fn(123123);
// value.
