const converter = [
    { 
        integer: 1,
        roman: "I"
    },
    {
        integer: 4,
        roman: "IV"
    },
    { 
        integer: 5,
        roman: "V"
    },
    { 
        integer: 9,
        roman: "IX"
    },
    { 
        integer: 10,
        roman: "X",
    },
    { 
        integer: 40,
        roman: "XL"
    },
    { 
        integer: 50,
        roman: "L"
    },
    { 
        integer: 90,
        roman: "XC"
    },
    { 
        integer: 100,
        roman: "C",
    },
    { 
        integer: 400,
        roman: "CD"
    },
    { 
        integer: 500,
        roman: "D"
    },
    { 
        integer: 900,
        roman: "CM"
    },
    { 
        integer: 1000,
        roman: "M",
    },
]
converter.reverse()

const multiply = (s: string, number: number) => {
    let result = ""
    for (let i = 0; i < number; i++) {
        result += s
    }

    return result
}

function intToRoman(num: number): string {
    const result: string[] = []
    for (const converterItem of converter) {
        const { integer, roman } = converterItem
        const count = Math.floor(num / integer)
        result.push(multiply(roman, count))
    }

    return result.join("")
}