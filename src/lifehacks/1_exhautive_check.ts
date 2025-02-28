// type CarBrand = 'bwm' | 'audi' | 'honda';
//
// interface CarBase {
//   year: number;
//   brand: CarBrand;
// }
//
// interface BMW extends CarBase {
//   year: 2020;
//   brand: 'bwm';
// }
//
// interface Audi extends CarBase {
//   year: 2020;
//   brand: 'audi';
// }
//
// interface Honda extends CarBase {
//   year: 2020;
//   brand: 'honda';
// }
//
// type Car = BMW | Audi;
//
// // this fn is somewhere in code
// function fn(car: Car) {
//   switch (car.brand) {
//     case 'audi':
//       // todo smth with audi;
//       break;
//     case 'bwm':
//       // todo smth with bmw;
//       break;
//     default:
//       const q: never = car;
//       console.log('q', q);
//       // todo smth;
//       break;
//   }
// }
