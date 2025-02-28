// type Brands = 'bwm' | 'audi';
//
// interface Base {
//   year: number;
//   brand: Brands;
// }
//
// interface BMWBase extends Base {
//   year: 2020;
//   brand: 'bwm';
//   model: 'x5' | 'x7';
// }
//
// interface BMWx5 extends BMWBase {
//   color: string;
//   model: 'x5';
// }
//
// interface BMWx7 extends BMWBase {
//   color: string;
//   model: 'x7';
// }
//
// type BMWCars = BMWx5 | BMWx7;
//
// interface AudiBase extends Base {
//   year: 2020;
//   brand: 'bwm';
//   model: 'a5' | 'a7';
// }
//
// interface AudiA5 extends AudiBase {
//   color: string;
//   model: 'a5';
// }
//
// interface AudiA7 extends AudiBase {
//   color: string;
//   model: 'a7';
// }
//
// type AudiCars = AudiA5 | AudiA7;
//
// type Cars = BMWCars | AudiCars;
//
//
// function isBmwX5(car: Cars): car is BMWx5 {
//   return car.brand === 'bwm' && car.model === 'x5';
// }
//
// function fn(car: Cars) {
//   if (isBmwX5(car)) {
//     car
//   }
// }
