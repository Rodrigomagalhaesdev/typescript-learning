// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "Faz o L",
}

const direction = Direction.Up;

const productName: any = 'Boné';

// let itemId: string;

// itemId = productName as string;

let itemId = <string>productName;