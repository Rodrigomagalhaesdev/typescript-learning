// com generics conseguimos deixar o value dinamico
// e passar ele como parametro

const returnValue = <T>(value: T): T => value;

const message = returnValue<string>('Hello word');


const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(['2', '3']);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);


// Promises
const returnPromise = async (): Promise<number> => {
    return 5;
};

// classes com generics
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T,y: T ) => T;

    constructor(zeroValue: T, sum:  (x: T,y: T ) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new  GenericNumber<number>(0, (x: number, y: number) => {
    return x + y;
});