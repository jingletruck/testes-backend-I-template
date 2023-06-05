import { pratica3 } from "../src/pratica3";

describe("o funcionamento da função 3", () => {
    test("Lógica funcionando com números inteiros", () => {
        const inputA = 4
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({sum:6, multiplication: 8 })
    })
    test("Lógica funcionando com números não inteiros", () => {
        const inputA = 2.5
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({sum:4.5, multiplication: 5 })
    })
    test("Lógica funcionando com 1 valor zero", () => {
        const inputA = 0
        const inputB = 2
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({sum:2, multiplication: 0 })
    })
    test("Lógica funcionando com 2 valor zero", () => {
        const inputA = 0
        const inputB = 0
        const result = pratica3(inputA, inputB)
        expect(result).toEqual({sum:0, multiplication: 0 })
    })


    test("Erro com números com soma incorreta", () => {
        const inputA = 10
        const inputB = 10
        const result = pratica3(inputA, inputB)
        expect(result).not.toEqual({sum:11, multiplication: 100 })
    })
    test("Erro com um valor não sendo numero", () => {
        const inputA = "str" as any
        const inputB = 10
        const result = pratica3(inputA, inputB)
        expect(result).toEqual(null)
    })
    test("Erro com os 2 valores não sendo zero", () => {
        const inputA = "str" as any
        const inputB = "any" as any
        const result = pratica3(inputA, inputB)
        expect(result).toEqual(null)
    })
    test("O resultado é um objeto", () => {
        const inputA = 5
        const inputB = 1
        const result = pratica3(inputA, inputB)
        expect(typeof(result)).toBe("object")
    })
})