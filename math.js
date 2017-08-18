export var PI = 3.14159;
export function add(x, y) {
    return x + y;
}
export function multiply(x, y) {
    var result = 0;
    for (var i = 0; i < y; i++)
    {
        result = add(result, x);
    }
    return result;
}
export function divide(x, y) {
    return x / y;
}