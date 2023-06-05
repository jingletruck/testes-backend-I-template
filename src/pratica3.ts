export const pratica3 = (a: number, b: number): any => {
    if(typeof(a) !== "number" || typeof(b) !== "number"){
        return null;
    }

    const result = {
        sum: a + b,
        multiplication: a * b,
    }

    return result;
}