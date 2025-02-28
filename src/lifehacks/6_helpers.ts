// interface User {
//   id: string;
//   name?: string;
//   age: number;
//   birthday: {
//     year: number;
//     day: number;
//     month: number;
//   }
// }

// just remind
// type NewUser = Omit<User, "id">;
// type UserId = Pick<User, "id">;

// const obj: UserId = {
// }

// type CarBrand = 'bwm' | 'audi' | 'honda';
//
// type GermanyCars = Exclude<CarBrand, 'honda'>;
// type JapanCars = Extract<CarBrand, 'honda'>;


// inner type
// type ValueOf<T> = T[keyof T];
// type Birthday = Pick<User, 'birthday'>;
// type Birthday = ValueOf<Pick<User, 'birthday'>>;
//
// const date: Birthday = {
//
// }


// deep partial
// type DeepPartial<T> = T extends object ? {
//   [P in keyof T]?: DeepPartial<T[P]>;
// } : T;
//
// const optionalUsers: DeepPartial<User> = {
//   birthday: {
//
//   }
// };
