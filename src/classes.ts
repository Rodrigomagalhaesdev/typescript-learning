// É possivel tipar constructor, metodos e o this da classe;
// E possivel utilizar interface nas classes.


interface IPerson {
    id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

// a classe PersonRefact é a mesma classe de Person.
class PersonRefact {
    
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) {}
}


class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoAmI() {
        return this.name;
    }
}


const aline = new Person(2, 'Roline', 30);
