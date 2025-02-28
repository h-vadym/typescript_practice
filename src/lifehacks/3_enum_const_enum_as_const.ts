// 1. result of enum
// 2. enum in fn
// 3. const enum
// 4. types in fn
// 5. enum to obj
// 6. readonly

// 1,2,3
// const enum UserRole {
//   USER = 'user',
//   ADMIN = 'admin',
// }

// enum UserRoles {
//   USER = 'user',
//   ADMIN = 'admin',
// }

// function fn(role: UserRole) {
//   console.log('role', role);
// }
//
// fn(UserRole.USER);


// for (let key in UserRoles) {
//   console.log('key', key);
// }

// 4
// type First = {
//   name: string;
//   age: number;
// }
//
// type Second = {
//   name: string;
//   age: number;
// }
//
// const first: First = {
//   name: 'Kate',
//   age: 5,
// };
//
// const second: Second = {
//   name: 'Bob',
//   age: 10,
// };
//
// function some(data: First) {
//   console.log('data', data);
// }
//
// some(second);

// 5
// const UserRole = {
//   USER: 'user',
//   ADMIN: 'admin',
// } as const;

// type UserRole = typeof UserRole[keyof typeof UserRole];
// type ValueOf<T> = T[keyof T];
// type UserRole = ValueOf<typeof UserRole>;

// UserRole.USER = '123123';

// function fn(role: UserRole) {
//   console.log(role);
// }


// 6
// interface Post {
//   title: string;
// }
//
// const post: Post = {
//   title: "Hi",
// };
//
// post.title = "1123123";
//
// function fn(data: Readonly<Post>) {
//   data.title = "Hello World";
// }
//
// fn(post);
