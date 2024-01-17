"use strict";
// Type
const user = {
    firstName: 'Aline',
    age: 20,
    email: 'rolinecontabil@gmail.com',
    password: 'roline123',
    orders: [{ productId: '1', price: 200 }],
    register() {
        return 'Olá.';
    }
};
user.password;
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 2,
    books: ['12'],
    email: 'roline@gmg.com',
    password: 'roline123',
    firstName: 'Rodrigo',
    orders: [],
    register() {
        return "teste";
    }
};
const emailUser = {
    email: "roline!oasda.com",
    firstName: 'Rodrigo',
    login() {
        return "oi, teste, teste";
    }
};
const newAuthor = {
    email: "roline@fkfkf.com",
    firstName: "Selfit",
    books: [],
    login() {
        return "Olá, novamente";
    }
};
const grade = 1;
