// Type

type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password: string;
    orders: Order[];
    register(): string;
};

const user: User = {
    firstName: 'Aline',
    age: 20,
    email: 'rolinecontabil@gmail.com',
    password: 'roline123',
    orders: [{ productId: '1', price: 200 }],
    register() {
        return 'Olá.';
    }
}

user.password;

const printLog = (message: string) => {} ;


printLog(user.password!);

// Unions
type Author = {
    books: string[]; 
}

const author: Author & User = {
  age: 2,
  books: ['12'],
  email: 'roline@gmg.com',
  password: 'roline123',
  firstName: 'Rodrigo',
  orders: [],
  register() {
    return "teste";
  }
}

// Interfaces
interface UserInterface  {
    firstName: string;
    email: string;
    login(): string;
}

const  emailUser: UserInterface = {
    email: "roline!oasda.com",
    firstName: 'Rodrigo',
    login() {
        return "oi, teste, teste";
    }
};

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "roline@fkfkf.com",
    firstName: "Selfit",
    books: [],
    login() {
        return "Olá, novamente";
    }
};

type Grade = number | string;

const grade: number | string = 1;

