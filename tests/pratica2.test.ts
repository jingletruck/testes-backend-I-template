import { pratica2 } from "../src/pratica2"

describe("o funcionamento da função pratica2", () => {
    test("Retorna true para um número par", () => {
        const result = pratica2(4)
        expect(result).toBe(true)

    })
    test("Retorna true para um número impar", () => {
        const result = pratica2(5)
        expect(result).toBe(false)
        
    })
    test("Retorna true para um número não-inteiro", () => {
        const result = pratica2(1.75)
        expect(result).toBe(null)
        
    })
    test("Retorna true para um número não-numero", () => {
        const result = pratica2("sting" as any)
        expect(result).toBe(null)
        
    })
})